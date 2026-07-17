// Central config so this whole site can be reskinned for future client builds
// by editing this one file (plus services/areas/reviews data).

export const site = {
  name: "KleenViews",
  tagline: "Spotless results, every time.",
  metaTitle: "KleenViews | Exterior Cleaning Services in West Sussex",
  metaDescription:
    "Professional exterior cleaning in Littlehampton, Rustington, East Preston, Felpham, Middleton, Climping and Wick. Window cleaning, gutter clearance, fascia & soffit cleaning and more.",
  phone: "07721 721168",
  phoneHref: "tel:07721721168",
  email: "kleenviewswestsussex@gmail.com",
  areaLabel: "Arun District, West Sussex",
  region: "West Sussex",
  regionTagline: "West Sussex · Locally trusted",
  privacyPolicyUrl: "/privacy",
  year: new Date().getFullYear(),
};

// Placeholder brand colours — swap for the exact hex values from the
// KleenViews Canva brand kit when you have them to hand.
export const theme = {
  primary: "#1d6fae", // blue
  primaryDark: "#12507f",
  secondary: "#2f9e6f", // green
  secondaryLight: "#e7f5ee",
  text: "#1a2733",
  textMuted: "#5a6b78",
  background: "#ffffff",
  backgroundAlt: "#f4f8fa",
  border: "#e2e8ee",
};
