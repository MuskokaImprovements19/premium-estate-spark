import ServicePage from "@/components/ServicePage";

const CottageRenovations = () => (
  <ServicePage
    title="Cottage Renovations"
    subtitle="Transform Your Cottage Into a Modern Retreat"
    heroImage="https://muskokaimprovements.ca/wp-content/uploads/2024/01/IMG_3007-scaled.jpg"
    description={[
      "Whether you've just purchased a fixer-upper or want to modernize a family cottage that's been passed down through generations, Muskoka Improvements specializes in cottage renovations that respect character while adding modern comfort.",
      "We handle everything from kitchen and bathroom remodels to complete interior overhauls. Our team understands the unique challenges of cottage construction — from seasonal access to working with older structures.",
      "Every renovation is tailored to your vision, timeline, and budget. We keep you informed every step of the way.",
    ]}
    features={[
      "Kitchen & bathroom remodels",
      "Open-concept conversions",
      "Flooring & finishing",
      "Windows & insulation upgrades",
      "Structural repairs & reinforcement",
      "Custom cabinetry & built-ins",
    ]}
    gallery={[
      "https://muskokaimprovements.ca/wp-content/uploads/2024/01/IMG_3007-scaled.jpg",
      "https://muskokaimprovements.ca/wp-content/uploads/2024/01/IMG_3006-scaled.jpg",
      "https://muskokaimprovements.ca/wp-content/uploads/2024/06/IMG_5993-scaled.jpg",
    ]}
  />
);

export default CottageRenovations;
