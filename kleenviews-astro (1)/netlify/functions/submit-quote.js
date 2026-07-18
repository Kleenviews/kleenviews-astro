// Netlify Function: receives the quote form submission and sends two
// emails via Resend — one to KleenViews (the inquiry, so Steve can call
// the lead), one to the client (a confirmation that the request landed).
//
// FROM_ADDRESS uses Resend's sandbox sender for now (no DNS needed).
// Once kleenviews.co.uk is verified in Resend (planned for next week),
// swap FROM_ADDRESS to something like "KleenViews <hello@kleenviews.co.uk>".
//
// IMPORTANT — sandbox limitation: until the domain is verified, Resend
// only allows sending to the email address on your Resend account, not
// to arbitrary client addresses. That means today the "notify Steve"
// email will work end-to-end, but the "confirm to client" email will
// only actually deliver if the client's email happens to match the
// Resend account email. Both calls are wired up correctly; the client
// email will start working for real addresses once domain verification
// is done.

const RESEND_API_URL = "https://api.resend.com/emails";
const FROM_ADDRESS = "KleenViews <onboarding@resend.dev>";
const OWNER_EMAIL = "kleenviewswestsussex@gmail.com";
const OWNER_PHONE = "07721 721168";

async function sendEmail(apiKey, payload) {
  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend error (${res.status}): ${errText}`);
  }

  return res.json();
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set in environment variables");
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: "Server email config missing" }),
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: "Invalid JSON" }) };
  }

  const { name, email, phone, service, postcode, message } = data;

  if (!name || !email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ ok: false, error: "Name and email are required" }),
    };
  }

  try {
    // 1. Notify KleenViews of the new inquiry
    await sendEmail(apiKey, {
      from: FROM_ADDRESS,
      to: [OWNER_EMAIL],
      reply_to: email,
      subject: `New quote request — ${name}`,
      text: [
        `New quote request from the website:`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        `Service: ${service || "-"}`,
        `Postcode: ${postcode || "-"}`,
        `Message: ${message || "-"}`,
      ].join("\n"),
    });

    // 2. Confirm to the client (see sandbox limitation note above)
    await sendEmail(apiKey, {
      from: FROM_ADDRESS,
      to: [email],
      subject: "Thanks for your enquiry — KleenViews",
      text: [
        `Hi ${name},`,
        ``,
        `Thanks for getting in touch with KleenViews. We've received your request and will be back to you within 24 hours with a no-obligation quote.`,
        ``,
        `If anything's urgent, call us on ${OWNER_PHONE}.`,
        ``,
        `Thanks,`,
        `KleenViews`,
      ].join("\n"),
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: "Failed to send email" }),
    };
  }
};
