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
    id: "gutter-clearance",
    icon: "🍃",
    title: "Gutter Clearance & Repair",
    description:
      "Blocked gutters cause damp and structural damage. We clear leaves, debris and blockages and carry out minor repairs to keep water flowing freely — and your property protected.",
    fromPrice: "£50",
  },
  {
    id: "dog-waste-clearance",
    icon: "🐾",
    title: "Dog Waste Clearance",
    description:
      "A discreet, hygienic and regular dog waste clearance service for your garden. Perfect for busy households — set a frequency that works for you and leave the rest to us.",
    fromPrice: "£10",
  },
];
