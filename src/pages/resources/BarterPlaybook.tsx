import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadMagnet from "@/components/LeadMagnet";
import DotPatternBackground from "@/components/DotPatternBackground";

const BarterPlaybook = () => (
  <div className="relative min-h-screen bg-neutral-00 overflow-x-hidden">
    <div className="absolute inset-x-0 top-0 h-[50vh] min-h-[400px] z-0">
      <DotPatternBackground variant="main" />
    </div>
    <Helmet>
      <title>Free Barter Advertising Playbook for Indian Brands | BIZEX4U</title>
      <meta
        name="description"
        content="Download the free BIZEX4U Barter Advertising Playbook. How to run GST-compliant barter media campaigns in India — OOH, cinema, transit and mall. For FMCG and D2C brands."
      />
      <link rel="canonical" href="https://bizex4u.com/resources/barter-advertising-playbook" />
      <meta property="og:title" content="Free Barter Advertising Playbook for Indian Brands | BIZEX4U" />
      <meta property="og:description" content="Free barter advertising playbook — how to run compliant inventory barter campaigns across OOH, cinema and transit in India." />
      <meta property="og:url" content="https://bizex4u.com/resources/barter-advertising-playbook" />
      <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
    </Helmet>
    <div className="relative z-10 flex flex-col">
      <Navbar />
      <div className="container py-16 tablet:py-24">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h1 className="text-heading-2 text-neutral-12 mb-4">
            Barter Advertising Playbook — India 2026
          </h1>
          <p className="text-body-large text-neutral-10">
            The definitive guide for FMCG and D2C brands looking to convert product
            inventory into media reach. Free download from BIZEX4U.
          </p>
        </div>
        <LeadMagnet
          title="Barter Advertising Playbook India 2026"
          subtitle="Free resource for FMCG, D2C and consumer goods brands"
          assetName="Barter Advertising Playbook — India 2026"
          assetDescription="Step-by-step guide to running GST-compliant barter campaigns across India's OOH, cinema, transit and mall media."
          source="lead_magnet_barter_playbook"
          bullets={[
            "How barter advertising works — the complete mechanics",
            "GST-compliant PO structure for barter transactions",
            "Which media formats accept barter — OOH, cinema, transit, mall",
            "Category eligibility guide by media type",
            "Economics worked example: ₹15L media for ₹5.5L product cost",
            "Barter campaign brief template",
            "Red flags to avoid in barter media negotiations",
            "How to audit barter campaign delivery",
          ]}
        />
        <div className="mt-12 text-center">
          <p className="text-body-small text-neutral-08">
            Related:{" "}
            <a href="/barter-advertising" className="text-main-01 hover:underline">Barter Advertising Services</a>
            {" · "}
            <a href="/advertising-for-fmcg-brands" className="text-main-01 hover:underline">Advertising for FMCG Brands</a>
            {" · "}
            <a href="/blog/barter-advertising-india-guide" className="text-main-01 hover:underline">Barter Advertising India Guide</a>
            {" · "}
            <a href="/blog/how-brands-save-costs-using-inventory-barter" className="text-main-01 hover:underline">How Brands Save 40–60% on Media</a>
          </p>
        </div>
      </div>
      <Footer showDivider={false} />
    </div>
  </div>
);

export default BarterPlaybook;
