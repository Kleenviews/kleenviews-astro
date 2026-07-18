export interface Review {
  quote: string;
  name: string;
  location: string;
  rating: number; // 1-5
}

// Intentionally empty for now — add real testimonials here once you have
// them (e.g. copied from Google Business Profile reviews). The
// ReviewsSection component hides itself automatically when this is empty.
export const reviews: Review[] = [];
