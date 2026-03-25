import ServicePage from "@/components/ServicePage";

const WeeklyGarbage = () => (
  <ServicePage
    title="Weekly Garbage Collection"
    subtitle="Hassle-Free Waste Management for Your Property"
    heroImage="https://muskokaimprovements.ca/wp-content/uploads/2024/06/IMG_6087-scaled.jpg"
    description={[
      "Don't let garbage be a headache at your Muskoka property. Muskoka Improvements offers reliable weekly garbage and recycling collection services so you never have to worry about waste management.",
      "We handle pickup, sorting, and proper disposal — whether you're a seasonal cottage owner or a year-round resident. Our service ensures your property stays clean and bear-free.",
      "Flexible scheduling available to match your needs. Bundle with our property management services for the ultimate hands-off experience.",
    ]}
    features={[
      "Weekly garbage & recycling pickup",
      "Bear-proof bin management",
      "Seasonal & year-round service",
      "Flexible scheduling",
      "Bundled with property management",
      "Serving all of Muskoka",
    ]}
    gallery={[
      "https://muskokaimprovements.ca/wp-content/uploads/2024/06/IMG_6087-scaled.jpg",
      "https://muskokaimprovements.ca/wp-content/uploads/2024/06/IMG_5994-scaled.jpg",
    ]}
  />
);

export default WeeklyGarbage;
