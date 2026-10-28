import logo from "@/assets/logo.jpeg.asset.json";
import technician from "@/assets/lab-technician.jpeg.asset.json";
import lab from "@/assets/laboratory.jpeg.asset.json";
import progressive from "@/assets/progressive.jpeg.asset.json";
import fitting from "@/assets/fitting.jpeg.asset.json";
import lens from "@/assets/lens.jpeg.asset.json";
import tints from "@/assets/tints.jpeg.asset.json";
import craft from "@/assets/craft.jpeg.asset.json";
import digitalMeter from "@/assets/lab-02.jpg.asset.json";
import polisher from "@/assets/lab-03.jpg.asset.json";
import drills from "@/assets/lab-04.jpg.asset.json";
import edgeUnit from "@/assets/lab-05.jpg.asset.json";
import manualMeter from "@/assets/lab-06.jpg.asset.json";
import bifocalStock from "@/assets/lab-07.jpg.asset.json";
import svStock from "@/assets/lab-08.jpg.asset.json";

export const images = {
  logo: logo.url,
  technician: technician.url,
  lab: lab.url,
  progressive: progressive.url,
  fitting: fitting.url,
  lens: lens.url,
  tints: tints.url,
  craft: craft.url,
  digitalMeter: digitalMeter.url,
  polisher: polisher.url,
  drills: drills.url,
  edgeUnit: edgeUnit.url,
  manualMeter: manualMeter.url,
  bifocalStock: bifocalStock.url,
  svStock: svStock.url,
};

export type Photo = { image: string; caption: string; alt: string };

export const labPhotos: Photo[] = [
  {
    image: images.technician,
    caption: "Lens preparation, in focus",
    alt: "Rathnayaka Fittres technician working with lens-fitting equipment",
  },
  {
    image: images.lab,
    caption: "Inside our optical workspace",
    alt: "Rathnayaka Fittres laboratory workbench and equipment",
  },
  {
    image: images.digitalMeter,
    caption: "Digital lensmeter",
    alt: "Digital lensmeter with an on-screen alignment display in our laboratory",
  },
  {
    image: images.manualMeter,
    caption: "NJC-4 lensmeter",
    alt: "NJC-4 manual lensmeter in our laboratory",
  },
  {
    image: images.polisher,
    caption: "NH-900 auto polisher",
    alt: "NH-900 auto polisher with its lid open",
  },
  {
    image: images.edgeUnit,
    caption: "NCE-180 lens finishing unit",
    alt: "New Century NCE-180 lens finishing unit",
  },
  {
    image: images.drills,
    caption: "Lens drilling units",
    alt: "Two lens drilling units with red-handled levers",
  },
  {
    image: images.svStock,
    caption: "Single vision lens stock",
    alt: "Tray of packaged single vision lenses sorted by power",
  },
  {
    image: images.bifocalStock,
    caption: "Round-top bifocal lens stock",
    alt: "Tray of packaged round-top bifocal lenses sorted by power",
  },
  {
    image: images.fitting,
    caption: "The details behind a precise fit",
    alt: "Spectacle frame with lens-blocking components",
  },
  {
    image: images.craft,
    caption: "Hands-on laboratory craftsmanship",
    alt: "Team member working at the laboratory bench",
  },
];

export const equipment = [
  {
    image: images.digitalMeter,
    name: "Digital lensmeter",
    stage: "Measure",
    tone: "blue",
    text: "Used to read and check lens power and alignment, with results shown on screen.",
  },
  {
    image: images.manualMeter,
    name: "NJC-4 lensmeter",
    stage: "Measure",
    tone: "mint",
    text: "A manual lensmeter for checking lens power through the eyepiece.",
  },
  {
    image: images.edgeUnit,
    name: "NCE-180 finishing unit",
    stage: "Finish",
    tone: "yellow",
    text: "Bench equipment from our workspace used in finishing lens edges.",
  },
  {
    image: images.polisher,
    name: "NH-900 auto polisher",
    stage: "Finish",
    tone: "coral",
    text: "An auto polisher that gives lens edges a smooth, clean finish.",
  },
  {
    image: images.drills,
    name: "Lens drilling units",
    stage: "Prepare",
    tone: "blue",
    text: "Bench drilling units used to prepare lenses that are mounted with drilled fittings.",
  },
  {
    image: images.svStock,
    name: "Organised lens stock",
    stage: "Prepare",
    tone: "mint",
    text: "Packaged lenses are sorted by type and power so the right lens is easy to find.",
  },
];

export type Product = {
  title: string;
  image: string;
  category: string;
  description: string;
  detail: string;
};
export const products: Product[] = [
  {
    title: "Single vision lenses",
    image: images.lens,
    category: "EVERYDAY CLARITY",
    description: "One focal distance. A clear, comfortable view for everyday needs.",
    detail:
      "Single vision lenses have one prescription across the lens. They can be prescribed for distance, intermediate or near vision. Talk to our team about your prescription and fitting requirements.",
  },
  {
    title: "Bifocal lenses",
    image: images.bifocalStock,
    category: "TWO ZONES, ONE LENS",
    description: "A distance zone with a defined reading segment below.",
    detail:
      "Bifocal lenses combine two prescriptions in one lens, with a visible segment for near vision. Our lens stock includes round-top bifocal options. Ask our team about the types available for your orders.",
  },
  {
    title: "Progressive lenses",
    image: images.progressive,
    category: "SEAMLESS VISION",
    description: "A smooth transition between near, intermediate and distance vision.",
    detail:
      "Progressive lenses bring several viewing distances into one lens without a visible dividing line. Accurate measurements and fitting are important. Enquire about the options suitable for your customers.",
  },
  {
    title: "Lens coatings",
    image: images.fitting,
    category: "THE FINISHING TOUCH",
    description: "Explore finishes that complement how your customers use their lenses.",
    detail:
      "Anti-reflective coatings can help reduce lens-surface reflections. Coating suitability and availability depend on the lens selected. Ask our team about finishes for your requirements.",
  },
  {
    title: "Tinted & sun lenses",
    image: images.tints,
    category: "A DIFFERENT PERSPECTIVE",
    description: "Discover lens tints for personal style and outdoor visual comfort.",
    detail:
      "Lens tints vary in colour and light transmission. A tint alone does not establish UV protection or polarisation. Discuss available specifications and suitability with our team before ordering.",
  },
];

export const business = {
  address: "No: 164, Dewanampiyathissapura, Anuradhapura, Sri Lanka",
  mobile: "077 797 1259",
  mobileHref: "tel:+94777971259",
  whatsapp: "https://wa.me/94777971259",
  mobile2: "070 503 1570",
  mobile2Href: "tel:+94705031570",
  landline: "025 492 0718",
  landlineHref: "tel:+94254920718",
  email: "info@rathnayakafittres.com",
  hours: "07:30 AM – 06:30 PM",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Rathnayaka Fittres, No : 164 Dewanampiyathissapura, Anuradhapura 50000, Sri Lanka",
    ),
  mapEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Rathnayaka Fittres, No : 164 Dewanampiyathissapura, Anuradhapura 50000, Sri Lanka",
    ) +
    "&z=17&output=embed",
};

export const services: { title: string; tone: string; text: string; list?: string[] }[] = [
  {
    title: "Prescription spectacle preparation",
    tone: "blue",
    text: "Precision-focused spectacle preparation tailored to individual optical prescriptions, for accurate vision correction and comfort.",
  },
  {
    title: "Lens edging & precision fitting",
    tone: "mint",
    text: "Accurate edging, grooving and fitting of single vision, bifocal and progressive lenses for a wide range of frame types and materials.",
  },
  {
    title: "Lens mounting & frame assembly",
    tone: "yellow",
    text: "Professional mounting of lenses and seamless assembly of prescription eyewear to high optical standards.",
  },
  {
    title: "Spectacle adjustments & frame maintenance",
    tone: "coral",
    text: "Frame care and alignment for long-lasting comfort and correct optical positioning.",
    list: [
      "Frame alignment & reshaping",
      "Temple, bridge & nose pad adjustments",
      "Frame tightening & comfort fitting",
      "Lens alignment & realignment",
      "Screw & nose pad replacement",
      "Rim & rimless frame repairs",
      "Lens replacement services",
      "General spectacle maintenance",
    ],
  },
  {
    title: "Quality inspection & finishing",
    tone: "blue",
    text: "Multi-point quality checks and precision finishing to maintain optical clarity and durability.",
  },
  {
    title: "Custom optical solutions",
    tone: "mint",
    text: "Tailored edging and fitting solutions for complex or non-standard prescription requirements.",
  },
  {
    title: "Support for optical practitioners",
    tone: "yellow",
    text: "Reliable B2B laboratory services, fast turnaround and technical assistance for optical stores, optometrists and eye care professionals.",
  },
];

export const capabilities = [
  {
    title: "Express & priority processing",
    text: "Urgent orders are prioritised with rapid processing, without compromising on precision.",
  },
  {
    title: "Wide lens selection",
    text: "We work with lens types available in Sri Lanka and keep imported lenses, frames and spare parts in stock.",
  },
  {
    title: "Precision lens processing",
    text: "Single vision, freeform progressive and high-index lenses.",
  },
  {
    title: "Advanced edging & fitting",
    text: "Computerised cutting and mounting for all frame types, including rimless and half-rim (nylor) frames, using drilling and grooving machinery.",
  },
  {
    title: "Coatings & tinting",
    text: "Blue-cut, photochromic and AR-coated lenses, plus personalised custom tinting.",
  },
  {
    title: "Ultrasonic cleaning",
    text: "Deep cleaning of spectacles as part of our repair and maintenance service.",
  },
];

export const commitments = [
  {
    title: "Dedicated technical support",
    text: "Our team is available throughout working hours to help troubleshoot complex fitting challenges.",
    tone: "blue",
  },
  {
    title: "Knowledge sharing",
    text: "We share guidance, consultations and new optical technologies to help you understand the industry.",
    tone: "mint",
  },
  {
    title: "Friendly & accessible",
    text: "When you contact us, you speak directly with experienced technicians.",
    tone: "yellow",
  },
  {
    title: "Excellence at a fair price",
    text: "Quality laboratory finishes and personal service at competitive, reasonable prices.",
    tone: "coral",
  },
];
