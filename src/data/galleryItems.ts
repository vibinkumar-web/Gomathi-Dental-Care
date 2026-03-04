export interface GalleryItem {
  id: number;
  label: string;
  gradient: string;
  span?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    label: "Reception Area",
    gradient: "from-blue-100 to-cyan-100",
    span: "row-span-2",
  },
  {
    id: 2,
    label: "Treatment Room",
    gradient: "from-teal-100 to-green-100",
  },
  {
    id: 3,
    label: "Waiting Lounge",
    gradient: "from-purple-100 to-pink-100",
  },
  {
    id: 4,
    label: "Digital X-Ray Lab",
    gradient: "from-sky-100 to-blue-100",
  },
  {
    id: 5,
    label: "Sterilization Unit",
    gradient: "from-emerald-100 to-teal-100",
    span: "row-span-2",
  },
  {
    id: 6,
    label: "Consultation Room",
    gradient: "from-amber-100 to-orange-100",
  },
  {
    id: 7,
    label: "Panoramic Imaging",
    gradient: "from-rose-100 to-pink-100",
  },
  {
    id: 8,
    label: "Kids Dental Corner",
    gradient: "from-yellow-100 to-lime-100",
  },
];
