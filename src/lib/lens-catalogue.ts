import sv from "@/assets/catalogue/lens-single-vision.jpg.asset.json";
import bf from "@/assets/catalogue/lens-bifocal.jpg.asset.json";
import pg from "@/assets/catalogue/lens-progressive.jpg.asset.json";
import lt from "@/assets/catalogue/lens-lenticular.jpg.asset.json";
import cr from "@/assets/catalogue/lens-cr39.jpg.asset.json";
import gl from "@/assets/catalogue/lens-glass.jpg.asset.json";
import pc from "@/assets/catalogue/lens-polycarbonate.jpg.asset.json";
import tx from "@/assets/catalogue/lens-trivex.jpg.asset.json";
import hi from "@/assets/catalogue/lens-high-index.jpg.asset.json";
import ar from "@/assets/catalogue/lens-anti-reflective.jpg.asset.json";
import bc from "@/assets/catalogue/lens-blue-cut.jpg.asset.json";
import ph from "@/assets/catalogue/lens-photochromic.jpg.asset.json";
import tn from "@/assets/catalogue/lens-tinted.jpg.asset.json";
import nd from "@/assets/catalogue/lens-night-driving.jpg.asset.json";
import po from "@/assets/catalogue/lens-polarized.jpg.asset.json";

export type CatalogueItem = {
  title: string;
  image: string;
  alt: string;
  summary: string;
  detail: string[];
};
export type CatalogueCategory = {
  id: string;
  label: string;
  eyebrow: string;
  heading: string;
  intro: string;
  items: CatalogueItem[];
};

/** Edit catalogue content here. Images are illustrative lens renders, not photos of specific branded products. */
export const lensCatalogue: CatalogueCategory[] = [
  {
    id: "lens-designs",
    label: "Lens Designs",
    eyebrow: "Category 01",
    heading: "Lens designs",
    intro: "How the prescription is laid out across the lens.",
    items: [
      {
        title: "Single Vision Lenses",
        image: sv.url,
        alt: "Clear single vision lens",
        summary: "One prescription power throughout the lens.",
        detail: [
          "A single vision lens carries one prescription power across the whole lens.",
          "Used for distance, near or intermediate vision correction.",
        ],
      },
      {
        title: "Bifocal Lenses",
        image: bf.url,
        alt: "Clear bifocal lens with a visible reading segment",
        summary: "Two distinct prescription zones, usually distance and near.",
        detail: [
          "Bifocal lenses have two distinct prescription zones, commonly for distance and near vision.",
          "Suitable for people who need both near and distance correction.",
        ],
      },
      {
        title: "Progressive Lenses (Multifocal)",
        image: pg.url,
        alt: "Clear progressive lens",
        summary: "A gradual transition between distance, intermediate and near.",
        detail: [
          "Progressive lenses change power gradually between distance, intermediate and near zones.",
          "There is no visible dividing line between the viewing zones. Accurate measurements and fitting are important.",
        ],
      },
      {
        title: "Lenticular Lenses (High Plus / High Minus)",
        image: lt.url,
        alt: "Lenticular lens with a central optical zone and outer carrier",
        summary: "Specialised designs for selected very high prescriptions.",
        detail: [
          "Lenticular designs concentrate the prescription in a central optical zone for selected very high plus or minus prescriptions.",
          "Lens design and availability depend on the prescription requirements. Please enquire with your prescription details.",
        ],
      },
    ],
  },
  {
    id: "lens-materials",
    label: "Lens Materials",
    eyebrow: "Category 02",
    heading: "Lens materials",
    intro: "What the lens is made from, affecting weight, thickness and durability.",
    items: [
      {
        title: "CR-39 Standard Plastic",
        image: cr.url,
        alt: "Clear CR-39 plastic lens",
        summary: "Good optical clarity, lightweight and affordable.",
        detail: [
          "CR-39 is a standard plastic lens material with good optical clarity, light weight and affordability.",
          "Commonly used for everyday prescription eyewear.",
        ],
      },
      {
        title: "Mineral Glass",
        image: gl.url,
        alt: "Clear mineral glass lens with a thick edge",
        summary: "Good optical clarity and surface scratch resistance.",
        detail: [
          "Mineral glass offers good optical clarity and resistance to surface scratches.",
          "It is heavier and more susceptible to breakage than many plastic alternatives.",
        ],
      },
      {
        title: "Polycarbonate",
        image: pc.url,
        alt: "Thin clear polycarbonate lens",
        summary: "Lightweight and impact-resistant.",
        detail: [
          "Polycarbonate is lightweight and impact-resistant.",
          "Suitable for children's eyewear and selected safety or sports applications.",
        ],
      },
      {
        title: "Trivex",
        image: tx.url,
        alt: "Clear Trivex lens",
        summary: "Lightweight, impact-resistant, good optical quality.",
        detail: [
          "Trivex is a lightweight, impact-resistant material with good optical quality.",
          "Suitable for selected everyday and active-use applications.",
        ],
      },
      {
        title: "High-Index (1.61 / 1.67 / 1.74)",
        image: hi.url,
        alt: "Thin clear high-index lens",
        summary: "Thinner lenses for stronger prescriptions.",
        detail: [
          "High-index options include 1.61, 1.67 and 1.74. Higher index materials can provide thinner lenses for stronger prescriptions.",
          "Final lens thickness depends on the prescription, frame dimensions and lens design.",
        ],
      },
    ],
  },
  {
    id: "coatings-features",
    label: "Coatings & Special Features",
    eyebrow: "Category 03",
    heading: "Coatings & special features",
    intro: "Treatments and functions added to a lens design and material.",
    items: [
      {
        title: "Hard Coating (HC)",
        image: cr.url,
        alt: "Clear lens representing a hard-coated surface",
        summary: "Helps resist everyday surface scratches.",
        detail: [
          "A hard coating helps improve the lens surface's resistance to everyday scratches.",
        ],
      },
      {
        title: "Anti-Reflective (ARC / HMC)",
        image: ar.url,
        alt: "Clear lens with a faint green-violet anti-reflective sheen",
        summary: "Reduces reflections from lens surfaces.",
        detail: [
          "Anti-reflective coatings reduce reflections from lens surfaces.",
          "They improve lens appearance and can improve visual comfort.",
        ],
      },
      {
        title: "Blue Cut / Blue-Filtering",
        image: bc.url,
        alt: "Lens with a soft blue-violet edge tint",
        summary: "Filters some wavelengths of blue light.",
        detail: [
          "Blue-filtering lenses filter a portion of blue-light wavelengths.",
          "The amount filtered varies by product. They are not proven to prevent digital eye strain or eye damage.",
        ],
      },
      {
        title: "Photochromic Lenses",
        image: ph.url,
        alt: "Lens shown half clear and half darkened",
        summary: "Darken in suitable UV exposure, clear again indoors.",
        detail: [
          "Photochromic lenses darken in response to suitable ultraviolet exposure and become clearer again when conditions change.",
          "Performance inside vehicles varies by product, as many windscreens block much of the UV that activates them.",
        ],
      },
      {
        title: "Tinted Lenses",
        image: tn.url,
        alt: "Brown tinted lens",
        summary: "Grey, brown, green and other tints for comfort or style.",
        detail: [
          "Grey tints reduce overall brightness with natural colour perception; brown tints can enhance contrast; green tints offer a balance of the two. Other tints are available on enquiry, including custom tinting.",
          "Tints are used for light filtering, comfort or appearance. Tint darkness alone does not guarantee UV protection.",
        ],
      },
      {
        title: "Night-Driving Lenses",
        image: nd.url,
        alt: "Pale amber lens representing a night-driving option",
        summary: "Product-dependent glare management for driving comfort.",
        detail: [
          "Night-driving lens options are designed to help manage glare and support visual comfort when driving. Performance depends on the product.",
          "They do not eliminate headlight glare or make unsafe night driving safe. Ask us which branded options, such as DriveSafe, are currently available.",
        ],
      },
      {
        title: "Polarized Lenses",
        image: po.url,
        alt: "Dark grey polarized lens",
        summary: "Reduce reflected glare from roads and water.",
        detail: [
          "Polarized lenses reduce reflected glare from surfaces such as roads and water.",
          "Suitable for many outdoor activities and daytime driving. They are generally not recommended for night driving.",
        ],
      },
    ],
  },
];

export const materialComparison = [
  {
    material: "CR-39",
    advantages: "Good optical clarity, lightweight, affordable",
    considerations:
      "Thicker for strong prescriptions; lower impact resistance than polycarbonate or Trivex",
    uses: "Everyday prescription eyewear",
  },
  {
    material: "Mineral glass",
    advantages: "Good optical clarity, surface scratch resistance",
    considerations: "Heavier; more susceptible to breakage",
    uses: "Selected prescriptions where scratch resistance is a priority",
  },
  {
    material: "Polycarbonate",
    advantages: "Lightweight, highly impact-resistant",
    considerations: "Softer surface usually needs a hard coat",
    uses: "Children's eyewear, selected safety and sports use",
  },
  {
    material: "Trivex",
    advantages: "Lightweight, impact-resistant, good optical quality",
    considerations: "Not as thin as high-index for strong prescriptions",
    uses: "Everyday and active-use eyewear",
  },
  {
    material: "High-index (1.61 / 1.67 / 1.74)",
    advantages: "Thinner lenses for stronger prescriptions",
    considerations:
      "Final thickness depends on prescription, frame and design; AR coating usually recommended",
    uses: "Moderate to strong prescriptions",
  },
];
