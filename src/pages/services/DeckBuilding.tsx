import ServicePage from "@/components/ServicePage";

const DeckBuilding = () => (
  <ServicePage
    title="Deck Building"
    subtitle="Custom Decks Built for Muskoka Living"
    heroImage="https://muskokaimprovements.ca/wp-content/uploads/2024/06/IMG_5994-scaled.jpg"
    description={[
      "Your deck is where memories are made — morning coffees overlooking the lake, summer barbecues, and starlit evenings. Muskoka Improvements builds custom decks designed to enhance your outdoor living experience.",
      "We use premium materials built to withstand Muskoka's harsh winters and beautiful summers. Every deck is custom-designed to complement your property's architecture and maximize your views.",
      "From initial design consultation to final staining, we handle every detail with craftsmanship and care.",
    ]}
    features={[
      "Custom design & layout",
      "Premium composite & natural wood",
      "Multi-level & wraparound decks",
      "Built-in seating & planters",
      "Railing & stair systems",
      "Staining & weatherproofing",
    ]}
    gallery={[
      "https://muskokaimprovements.ca/wp-content/uploads/2024/06/IMG_5994-scaled.jpg",
      "https://muskokaimprovements.ca/wp-content/uploads/2024/06/IMG_5993-scaled.jpg",
      "https://muskokaimprovements.ca/wp-content/uploads/2024/06/IMG_6087-scaled.jpg",
    ]}
  />
);

export default DeckBuilding;
