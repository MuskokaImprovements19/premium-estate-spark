import ServicePage from "@/components/ServicePage";
import { IMAGES } from "@/lib/images";

const WeeklyGarbage = () => (
  <ServicePage
    title="Weekly Garbage & Recycling Pickup"
    subtitle="Reliable Waste Collection for Your Muskoka Property — May to October"
    heroImage={IMAGES.garbageLakeside}
    description={[
      "The District Municipality of Muskoka has introduced a clear bag requirement for landfill garbage and changed what is accepted for recycling materials — but our service remains unchanged for you. We continue to accept black bags and handle disposal through private waste facilities that have not adopted these new restrictions.",
      "Our 2026 season runs from May 19 to October 13, with pickups every Monday. If Monday falls on a holiday (e.g., Labour Day), pickup moves to Tuesday that week. Invoices for the season will be sent out in April.",
      "We accept household garbage, food waste, recycling, and cardboard. Please ensure all cardboard is either bagged or broken down and securely taped or tied. The standard limit is 5 bags per week — we understand occasional overages and remain flexible. If you expect to exceed this limit significantly, just let us know in advance so we can plan accordingly.",
    ]}
    features={[
      "Season: May 19 – October 13",
      "Pickup day: Mondays (Tuesday on holiday weeks)",
      "Black bags still accepted — no clear bag requirement",
      "Household garbage, food waste, recycling & cardboard",
      "Standard limit: 5 bags/week (flexible)",
      "Invoices sent in April",
    ]}
    gallery={[IMAGES.landscape, IMAGES.lakefront]}
  />
);

export default WeeklyGarbage;
