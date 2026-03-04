export interface Testimonial {
  id: number;
  name: string;
  initials: string;
  rating: number;
  text: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    initials: "PS",
    rating: 5,
    text: "Absolutely wonderful experience! The team was gentle, professional, and made me feel completely at ease. My smile has never looked better. I highly recommend Pearl Smile to everyone!",
    color: "bg-pink-500",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    initials: "RK",
    rating: 5,
    text: "Best dental clinic I've visited. The facilities are top-notch and the doctors truly care about their patients. Got my full checkup done and felt zero anxiety. Highly recommended!",
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "Ananya Reddy",
    initials: "AR",
    rating: 5,
    text: "Got my dental implants done here and the results are amazing. Pain-free procedure and excellent aftercare. The staff guided me every step of the way. Thank you, Pearl Smile!",
    color: "bg-emerald-500",
  },
];
