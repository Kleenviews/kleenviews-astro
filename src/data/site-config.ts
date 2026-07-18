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

// Real palette read from the original kleenviews.co.uk site.
export const theme = {
  primary: "#2f9e6f", // teal-green — buttons, checkmarks, logo accent
  primaryDark: "#237a56",
  accent: "#4ecdc4", // bright teal — stat numbers, highlights on dark sections
  navy: "#1e2d3d", // dark section background
  navyCard: "#26384a", // card background on dark sections
  text: "#1a2733",
  textMuted: "#5a6b78",
  textOnDark: "#e7eef2",
  textMutedOnDark: "#9fb0bd",
  background: "#e9f2f8",
  backgroundAlt: "#f4f8fa",
  border: "#e2e8ee",
};
