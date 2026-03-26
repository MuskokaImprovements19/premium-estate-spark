import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Trash2, Recycle, Package, CreditCard, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { IMAGES } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

const InfoCard = ({ icon: Icon, title, children, index }: { icon: any; title: string; children: React.ReactNode; index: number }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index} className="bg-card border border-border rounded-lg p-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-md bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="font-serif text-lg font-bold text-foreground">{title}</h3>
    </div>
    <div className="text-muted-foreground text-sm leading-relaxed space-y-2">{children}</div>
  </motion.div>
);

const WeeklyGarbage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
      <img src={IMAGES.garbageLakeside} alt="Weekly Garbage & Recycling Pickup" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="relative z-10 section-padding pb-12 max-w-7xl mx-auto w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-2">2026 Season</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground">Weekly Garbage & Recycling</motion.h1>
      </div>
    </section>

    {/* Important Update Banner */}
    <section className="section-padding max-w-7xl mx-auto pt-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-primary/5 border border-primary/20 rounded-lg p-6 flex gap-4 items-start">
        <AlertCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-serif text-lg font-bold text-foreground mb-1">Important Update for 2026</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The District Municipality of Muskoka has introduced a <strong className="text-foreground">clear bag requirement</strong> for landfill garbage and changed what is accepted for recycling. <strong className="text-foreground">Our service remains unchanged</strong> — we continue to accept black bags and handle disposal through private waste facilities that have not adopted these new restrictions.
          </p>
        </div>
      </motion.div>
    </section>

    {/* Info Cards Grid */}
    <section className="section-padding py-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard icon={CalendarDays} title="Pickup Schedule" index={0}>
          <ul className="space-y-1.5">
            <li><strong className="text-foreground">Season:</strong> May 19 – October 13</li>
            <li><strong className="text-foreground">Pickup day:</strong> Every Monday</li>
            <li><strong className="text-foreground">Holiday weeks:</strong> If Monday is a holiday (e.g. Labour Day), pickup moves to Tuesday</li>
          </ul>
        </InfoCard>

        <InfoCard icon={Recycle} title="What We Accept" index={1}>
          <ul className="space-y-1.5">
            <li>✓ Household garbage & food waste</li>
            <li>✓ Recycling</li>
            <li>✓ Cardboard</li>
          </ul>
        </InfoCard>

        <InfoCard icon={Package} title="Cardboard & Bag Limits" index={2}>
          <p>Please ensure all cardboard is either <strong className="text-foreground">bagged</strong> or <strong className="text-foreground">broken down and securely taped/tied</strong>.</p>
          <p>Standard limit is <strong className="text-foreground">5 bags per week</strong>. We're flexible with occasional overages — just let us know in advance if you expect to exceed this regularly.</p>
        </InfoCard>

        <InfoCard icon={CreditCard} title="Billing" index={3}>
          <p>Invoices for the full season will be sent out in <strong className="text-foreground">April</strong>.</p>
          <p>If you have any questions or special requests, feel free to reach out anytime.</p>
        </InfoCard>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-card py-16">
      <div className="section-padding text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Questions or Special Requests?</h2>
        <p className="text-muted-foreground mb-8">Contact Brendan & Evan — we're happy to help.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wide">
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default WeeklyGarbage;