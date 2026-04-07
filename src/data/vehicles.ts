import pickupSmallImg from "@/assets/pickup-small.jpg";
import pickupImg from "@/assets/pickup-truck.jpg";
import truck709Img from "@/assets/truck-709.jpg";
import mediumImg from "@/assets/medium-truck.jpg";
import containerImg from "@/assets/container-truck.jpg";
import jcbImg from "@/assets/jcb-vehicle.jpg";
import trailerImg from "@/assets/trailer-truck.jpg";

export type VehicleItem = {
  slug: string;
  name: string;
  shortName: string;
  desc: string;
  image: string;
  capacity: string;
  grossRange: string;
  routeSuitability: string;
  bestFor: string[];
  highlights: string[];
};

export const vehicles: VehicleItem[] = [
  {
    slug: "pick-up",
    name: "Pick Up Truck",
    shortName: "Pick Up",
    desc: "Compact pickup for small loads and quick local deliveries within city limits.",
    image: pickupSmallImg,
    capacity: "0.5-1 Ton",
    grossRange: "Light commercial loads",
    routeSuitability: "City and short local routes",
    bestFor: ["Small packages", "Retail movement", "Quick city dispatch"],
    highlights: ["Fast turnaround", "Easy city access", "Cost-effective for lighter cargo"],
  },
  {
    slug: "tata-407",
    name: "Tata 407 Truck",
    shortName: "Tata 407",
    desc: "Ideal for small to medium loads and local MIDC area movements.",
    image: pickupImg,
    capacity: "2-3 Ton",
    grossRange: "Small-medium commercial loads",
    routeSuitability: "City + nearby intercity",
    bestFor: ["Warehouse transfers", "Industrial dispatch", "Business route deliveries"],
    highlights: ["Reliable city performance", "Flexible load handling", "Widely used for business logistics"],
  },
  {
    slug: "709",
    name: "709 Truck",
    shortName: "709",
    desc: "Medium duty truck for intercity transportation and regular scheduled routes.",
    image: truck709Img,
    capacity: "4-6 Ton",
    grossRange: "Medium duty cargo",
    routeSuitability: "Intercity routes",
    bestFor: ["Scheduled dispatches", "Factory-to-depot movement", "Commercial freight"],
    highlights: ["Balanced payload", "Steady route performance", "Efficient intercity usage"],
  },
  {
    slug: "909",
    name: "909 Truck",
    shortName: "909",
    desc: "Reliable medium-heavy truck for consistent route cargo movement across cities.",
    image: truck709Img,
    capacity: "6-7 Ton",
    grossRange: "Medium-heavy cargo",
    routeSuitability: "Intercity + selected interstate",
    bestFor: ["Heavier business loads", "Regular route movements", "Bulk commercial cargo"],
    highlights: ["Higher load support", "Stable long-route suitability", "Business freight friendly"],
  },
  {
    slug: "1109",
    name: "1109 Truck",
    shortName: "1109",
    desc: "Heavy medium truck for larger intercity cargo across Maharashtra.",
    image: mediumImg,
    capacity: "7-9 Ton",
    grossRange: "Heavy medium loads",
    routeSuitability: "Intercity + interstate",
    bestFor: ["Industrial cargo", "Larger business shipments", "Longer route movement"],
    highlights: ["Strong carrying capacity", "Reliable long-distance movement", "Ideal for higher volume loads"],
  },
  {
    slug: "20ft-container",
    name: "20ft Container Truck",
    shortName: "20ft Container",
    desc: "Containerized cargo transport for secure and weather-protected shipments.",
    image: containerImg,
    capacity: "7-10 Ton",
    grossRange: "Secure enclosed cargo",
    routeSuitability: "Interstate and long routes",
    bestFor: ["Packaged goods", "Sensitive cargo", "Weather-safe movement"],
    highlights: ["Closed body protection", "Better safety for goods", "Suitable for longer transport routes"],
  },
  {
    slug: "jcb-heavy-equipment",
    name: "JCB & Heavy Equipment",
    shortName: "JCB & Heavy Equipment",
    desc: "Construction and heavy equipment on rent for industrial and infrastructure projects.",
    image: jcbImg,
    capacity: "Heavy Duty",
    grossRange: "Machinery and equipment movement",
    routeSuitability: "Project-based route planning",
    bestFor: ["Construction machinery", "Project equipment movement", "Industrial site support"],
    highlights: ["Heavy-duty logistics support", "Project-focused deployment", "Built for specialized transport needs"],
  },
  {
    slug: "40ft-trailer",
    name: "40ft Trailer Truck",
    shortName: "40ft Trailer",
    desc: "Large capacity trailers for bulk cargo and oversized shipments across states.",
    image: trailerImg,
    capacity: "20-25 Ton",
    grossRange: "Bulk and oversized cargo",
    routeSuitability: "Interstate long-haul routes",
    bestFor: ["Bulk freight", "High volume cargo", "Oversized transport requirements"],
    highlights: ["Maximum carrying capacity", "Best for long-haul bulk movement", "Preferred for large dispatch planning"],
  },
];

