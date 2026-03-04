export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "Activity",
    title: "Teeth Alignment (Braces)",
    description: "Correct misaligned teeth with modern braces and clear aligner solutions for a perfect smile.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    icon: "Syringe",
    title: "Root Canal Treatment",
    description: "Painless endodontic procedures to save and restore severely damaged or infected teeth.",
    color: "bg-red-50 text-red-600",
  },
  {
    id: 3,
    icon: "Shield",
    title: "Tooth Filling",
    description: "Durable tooth-coloured fillings to restore cavities and protect teeth from further decay.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    id: 4,
    icon: "Sparkles",
    title: "Teeth Cleaning",
    description: "Professional scaling and polishing to remove plaque, tartar, and surface stains effectively.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: 5,
    icon: "Stethoscope",
    title: "Artificial Teeth (Dentures)",
    description: "Custom-fitted dentures and prosthetics for a natural look and comfortable, confident smile.",
    color: "bg-green-50 text-green-600",
  },
  {
    id: 6,
    icon: "Zap",
    title: "Teeth Whitening",
    description: "Advanced bleaching treatments to brighten your smile and remove deep-set stains.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    id: 7,
    icon: "Heart",
    title: "Gum Disease Treatment",
    description: "Comprehensive periodontal care to treat gum infections and restore healthy gum tissue.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    id: 8,
    icon: "Baby",
    title: "Children's Dental Care",
    description: "Gentle, child-friendly dental care to build healthy oral habits from an early age.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: 9,
    icon: "Cpu",
    title: "Dental Implants",
    description: "Permanent titanium implants for a natural-looking and long-lasting tooth replacement.",
    color: "bg-indigo-50 text-indigo-600",
  },
];
