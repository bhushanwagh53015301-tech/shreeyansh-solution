import defBucketImg from "@/assets/products/DEF-bucket.png";
import axePaintImg from "@/assets/products/AXE-paint.png";
import paintBagImg from "@/assets/products/paint-bag.png";

export type ProductItem = {
  slug: string;
  name: string;
  shortName: string;
  desc: string;
  image: string;
  overview: string;
  applications: string[];
  highlights: string[];
};

export const products: ProductItem[] = [
  {
    slug: "tata-def-materials",
    name: "TATA DEF Materials",
    shortName: "DEF Materials",
    desc: "All Maharashtra and Goa line transportation specialist.",
    image: defBucketImg,
    overview:
      "We support reliable transportation planning for TATA DEF materials with route-focused handling and delivery coordination.",
    applications: [
      "Automotive and service network supply",
      "Regular distributor-to-warehouse movements",
      "Line transportation across Maharashtra and Goa",
    ],
    highlights: ["Stable handling support", "Planned route dispatch", "Suitable for repeat industrial movements"],
  },
  {
    slug: "color-buckets",
    name: "Color Buckets",
    shortName: "Color Buckets",
    desc: "Color buckets transportation specialist.",
    image: axePaintImg,
    overview:
      "Dedicated logistics support for color bucket consignments with practical loading guidance and timely route execution.",
    applications: [
      "Paint and coating material movements",
      "Factory-to-depot transfers",
      "Distributor and project supply dispatches",
    ],
    highlights: ["Organized dispatch flow", "Route-wise delivery planning", "Commercial material movement support"],
  },
  {
    slug: "paint-bags",
    name: "Paint Bags",
    shortName: "Paint Bags",
    desc: "Paint bag transportation specialist.",
    image: paintBagImg,
    overview:
      "Focused transport support for paint bag consignments with dependable truck availability and movement coordination.",
    applications: [
      "Bulk paint bag supply movements",
      "Warehouse and dealer transfers",
      "Industrial and project-site dispatches",
    ],
    highlights: ["Consistent vehicle availability", "Transit-friendly handling", "Reliable route coordination"],
  },
];

