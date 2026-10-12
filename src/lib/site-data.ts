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
  logo: logo.url, technician: technician.url, lab: lab.url, progressive: progressive.url, fitting: fitting.url,
  lens: lens.url, tints: tints.url, craft: craft.url, digitalMeter: digitalMeter.url, polisher: polisher.url,
  drills: drills.url, edgeUnit: edgeUnit.url, manualMeter: manualMeter.url, bifocalStock: bifocalStock.url, svStock: svStock.url,
};

export type Photo = { image: string; caption: string; alt: string };

export const labPhotos: Photo[] = [
  { image: images.technician, caption: "Lens preparation, in focus", alt: "Rathnayaka Fitters technician working with lens-fitting equipment" },
  { image: images.lab, caption: "Inside our optical workspace", alt: "Rathnayaka Fitters laboratory workbench and equipment" },
  { image: images.digitalMeter, caption: "Digital lensmeter", alt: "Digital lensmeter with an on-screen alignment display in our laboratory" },
  { image: images.manualMeter, caption: "NJC-4 lensmeter", alt: "NJC-4 manual lensmeter in our laboratory" },
  { image: images.polisher, caption: "NH-900 auto polisher", alt: "NH-900 auto polisher with its lid open" },
  { image: images.edgeUnit, caption: "NCE-180 lens finishing unit", alt: "New Century NCE-180 lens finishing unit" },
  { image: images.drills, caption: "Lens drilling units", alt: "Two lens drilling units with red-handled levers" },
  { image: images.svStock, caption: "Single vision lens stock", alt: "Tray of packaged single vision lenses sorted by power" },
  { image: images.bifocalStock, caption: "Round-top bifocal lens stock", alt: "Tray of packaged round-top bifocal lenses sorted by power" },
  { image: images.fitting, caption: "The details behind a precise fit", alt: "Spectacle frame with lens-blocking components" },
  { image: images.craft, caption: "Hands-on laboratory craftsmanship", alt: "Team member working at the laboratory bench" },
];

export const equipment = [
  { image: images.digitalMeter, name: "Digital lensmeter", stage: "Measure", tone: "blue", text: "Used to read and check lens power and alignment, with results shown on screen." },
  { image: images.manualMeter, name: "NJC-4 lensmeter", stage: "Measure", tone: "mint", text: "A manual lensmeter for checking lens power through the eyepiece." },
  { image: images.edgeUnit, name: "NCE-180 finishing unit", stage: "Finish", tone: "yellow", text: "Bench equipment from our workspace used in finishing lens edges." },
  { image: images.polisher, name: "NH-900 auto polisher", stage: "Finish", tone: "coral", text: "An auto polisher that gives lens edges a smooth, clean finish." },
  { image: images.drills, name: "Lens drilling units", stage: "Prepare", tone: "blue", text: "Bench drilling units used to prepare lenses that are mounted with drilled fittings." },
  { image: images.svStock, name: "Organised lens stock", stage: "Prepare", tone: "mint", text: "Packaged lenses are sorted by type and power so the right lens is easy to find." },
];

export type Product = { title: string; image: string; category: string; description: string; detail: string; article: string };
export const products: Product[] = [
  { title: "Single vision lenses", image: images.lens, category: "EVERYDAY CLARITY", description: "One focal distance. A clear, comfortable view for everyday needs.", detail: "Single vision lenses have one prescription across the lens. They can be prescribed for distance, intermediate or near vision. Talk to our team about your prescription and fitting requirements.", article: "single-vision-lenses" },
  { title: "Bifocal lenses", image: images.bifocalStock, category: "TWO ZONES, ONE LENS", description: "A distance zone with a defined reading segment below.", detail: "Bifocal lenses combine two prescriptions in one lens, with a visible segment for near vision. Our lens stock includes round-top bifocal options. Ask our team about the types available for your orders.", article: "bifocal-lenses" },
  { title: "Progressive lenses", image: images.progressive, category: "SEAMLESS VISION", description: "A smooth transition between near, intermediate and distance vision.", detail: "Progressive lenses bring several viewing distances into one lens without a visible dividing line. Accurate measurements and fitting are important. Enquire about the options suitable for your customers.", article: "progressive-lenses" },
  { title: "Lens coatings", image: images.fitting, category: "THE FINISHING TOUCH", description: "Explore finishes that complement how your customers use their lenses.", detail: "Anti-reflective coatings can help reduce lens-surface reflections. Coating suitability and availability depend on the lens selected. Ask our team about finishes for your requirements.", article: "lens-coatings" },
  { title: "Tinted & sun lenses", image: images.tints, category: "A DIFFERENT PERSPECTIVE", description: "Discover lens tints for personal style and outdoor visual comfort.", detail: "Lens tints vary in colour and light transmission. A tint alone does not establish UV protection or polarisation. Discuss available specifications and suitability with our team before ordering.", article: "polarised-lenses" },
];

export const services = [
  { title: "Lens fitting", tone: "blue", text: "Lenses prepared and fitted to frames with careful attention to measurements and alignment." },
  { title: "Lens checking", tone: "mint", text: "Lens power and alignment checked on lensmeters in our laboratory." },
  { title: "Edge finishing & polishing", tone: "yellow", text: "Lens edges finished and polished on dedicated bench equipment." },
  { title: "Lens drilling", tone: "coral", text: "Lenses prepared for frames that use drilled mounting." },
];

export type Article = { slug: string; title: string; group: "Lens types" | "Lens coatings"; image: string; summary: string; sections: { heading: string; body: string }[]; related: string[] };
export const articles: Article[] = [
  { slug: "lens-types", title: "Lens types", group: "Lens types", image: images.lens, summary: "An overview of the main spectacle lens designs and how they differ.", related: ["single-vision-lenses", "bifocal-lenses", "progressive-lenses"], sections: [
    { heading: "Why lens design matters", body: "The lens design decides how a prescription is distributed across the lens surface. Choosing the right design depends on the wearer's prescription and how they use their eyes during the day." },
    { heading: "Single vision", body: "One prescription across the whole lens, for distance, intermediate or near tasks." },
    { heading: "Bifocal", body: "Two prescription zones in one lens, separated by a visible segment for near work." },
    { heading: "Progressive", body: "A gradual change in power from distance to near, without a visible line. Accurate fitting measurements are essential." },
  ] },
  { slug: "single-vision-lenses", title: "Single vision lenses", group: "Lens types", image: images.svStock, summary: "One focal power across the lens for a single viewing distance.", related: ["lens-types", "bifocal-lenses", "anti-reflective-coatings"], sections: [
    { heading: "What they are", body: "Single vision lenses have the same prescription power across the full lens. They may correct for distance, intermediate or near vision." },
    { heading: "Typical uses", body: "They are commonly prescribed for short-sightedness, long-sightedness and astigmatism, or as dedicated reading lenses." },
    { heading: "Fitting considerations", body: "The optical centre should align with the wearer's pupil position. Correct centration helps the wearer receive the intended prescription." },
  ] },
  { slug: "bifocal-lenses", title: "Bifocal lenses", group: "Lens types", image: images.bifocalStock, summary: "Two prescriptions in one lens, with a visible reading segment.", related: ["lens-types", "progressive-lenses", "single-vision-lenses"], sections: [
    { heading: "What they are", body: "A bifocal lens has a main area for distance vision and a smaller segment, usually in the lower part, for near vision." },
    { heading: "Segment styles", body: "Segments come in different shapes, such as round-top and flat-top designs. The segment is visible on the lens surface." },
    { heading: "Fitting considerations", body: "The segment height must be positioned correctly for the wearer so near vision is comfortable without obstructing distance vision." },
  ] },
  { slug: "progressive-lenses", title: "Progressive lenses", group: "Lens types", image: images.progressive, summary: "A smooth progression from distance to near, without a visible line.", related: ["lens-types", "bifocal-lenses", "lens-coatings"], sections: [
    { heading: "What they are", body: "Progressive lenses change power gradually from the distance zone at the top, through an intermediate corridor, to the near zone at the bottom." },
    { heading: "Adapting to them", body: "Some wearers need time to adapt. The sides of a progressive lens contain areas of unwanted astigmatism, which is a normal part of the design." },
    { heading: "Fitting considerations", body: "Fitting height, pupillary distance and frame selection have a direct effect on how well a progressive lens performs for the wearer." },
  ] },
  { slug: "lens-coatings", title: "Lens coatings", group: "Lens coatings", image: images.fitting, summary: "How surface treatments and lens technologies can complement a lens.", related: ["anti-reflective-coatings", "blue-light-filtering", "photochromic-lenses"], sections: [
    { heading: "An overview", body: "Coatings and treatments are applied to change how a lens handles light or how its surface behaves. Availability depends on the lens material and type." },
    { heading: "Common options", body: "Popular choices include anti-reflective coatings, blue-light filtering options, photochromic lenses and polarised lenses." },
    { heading: "Choosing well", body: "The right combination depends on the wearer's needs. Specifications should always be confirmed with the lens supplier before ordering." },
  ] },
  { slug: "anti-reflective-coatings", title: "Anti-reflective coatings", group: "Lens coatings", image: images.lens, summary: "Reducing reflections from the lens surface.", related: ["lens-coatings", "blue-light-filtering", "single-vision-lenses"], sections: [
    { heading: "What they do", body: "Anti-reflective coatings reduce the amount of light reflected from the lens surfaces. This can make lenses look clearer and reduce distracting reflections." },
    { heading: "Care", body: "Coated lenses should be cleaned with suitable lens cleaners and cloths. Performance and durability vary by coating." },
  ] },
  { slug: "blue-light-filtering", title: "Blue-light filtering", group: "Lens coatings", image: images.tints, summary: "Lenses designed to filter a portion of blue light.", related: ["lens-coatings", "anti-reflective-coatings", "photochromic-lenses"], sections: [
    { heading: "What it is", body: "Blue-light filtering lenses reflect or absorb part of the blue portion of visible light. Some appear with a slight colour reflection." },
    { heading: "Setting expectations", body: "The amount filtered varies by product. Claims about health or sleep benefits should not be assumed; refer to the supplier's specifications." },
  ] },
  { slug: "photochromic-lenses", title: "Photochromic lenses", group: "Lens coatings", image: images.tints, summary: "Lenses that darken in response to UV exposure.", related: ["lens-coatings", "polarised-lenses", "blue-light-filtering"], sections: [
    { heading: "How they work", body: "Photochromic lenses darken when exposed to ultraviolet light and lighten again indoors." },
    { heading: "Things to know", body: "Speed and depth of darkening depend on the product, temperature and UV levels. Many do not darken fully behind a car windscreen." },
  ] },
  { slug: "polarised-lenses", title: "Polarised lenses", group: "Lens coatings", image: images.tints, summary: "Reducing reflected glare from flat surfaces.", related: ["lens-coatings", "photochromic-lenses", "anti-reflective-coatings"], sections: [
    { heading: "How they work", body: "Polarised lenses contain a filter that blocks horizontally polarised light, which helps reduce glare reflected from surfaces such as water and roads." },
    { heading: "Tint versus polarisation", body: "A dark tint alone is not polarisation. Polarisation and UV protection must be confirmed from the lens specification." },
  ] },
];
export const findArticle = (slug: string) => articles.find((a) => a.slug === slug);
