export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  fromPrice?: string;
}

export const services: Service[] = [
  {
    id: "window-cleaning",
    icon: "🪟",
    title: "Window Cleaning",
    description:
      "Pure water fed pole system delivers a chemical-free, streak-free finish on all exterior glass — frames, sills and sashes included. Safe, thorough and contactless.",
    fromPrice: "£12",
  },
  {
    id: "fascia-soffit-cleaning",
    icon: "🏠",
    title: "Fascia & Soffit Cleaning",
    description:
      "Restore your roofline to its original white. We remove algae, mould and years of grime from UPVC fascias and soffits, protecting them and improving your home's kerb appeal.",
    fromPrice: "£20",
  },
  {
    id: "conservatory-cleaning",
    icon: "🏡",
    title: "Conservatory Cleaning",
    description:
      "Roof, frames and glazing bars cleaned to let the light back in. We remove algae, moss and grime that build up on conservatory roofs, restoring brightness and kerb appeal.",
  },
  {
    id: "solar-panel-cleaning",
    icon: "☀️",
    title: "Solar Panel Cleaning",
    description:
      "Dirty panels lose efficiency. Pure water cleaning removes dust, grime and bird mess to help keep your system performing as it should, with no chemicals near the panels.",
  },
];
