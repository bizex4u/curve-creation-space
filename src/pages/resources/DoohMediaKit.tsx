import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadMagnet from "@/components/LeadMagnet";
import DotPatternBackground from "@/components/DotPatternBackground";

const DoohMediaKit = () => (
  <div className="relative min-h-screen bg-neutral-00 overflow-x-hidden">
    <div className="absolute inset-x-0 top-0 h-[50vh] min-h-[400px] z-0">
      <DotPatternBackground variant="main" />
    </div>
    <Helmet>
      <title>Free DOOH Advertising Media Kit India 2026 | BIZEX4U</title>
      <meta
        name="description"
        content="Download our free DOOH advertising media kit for India 2026. Digital out-of-home formats, screen networks, programmatic buying guide, rate ranges and creative specifications."
      />
      <link rel="canonical" href="https://bizex4u.com/resources/dooh-advertising-media-kit" />
      <meta property="og:title" content="Free DOOH Advertising Media Kit India 2026 | BIZEX4U" />
      <meta property="og:description" content="Free DOOH media kit — digital out-of-home formats, rates, networks and programmatic buying guide for India." />
      <meta property="og:url" content="https://bizex4u.com/resources/dooh-advertising-media-kit" />
      <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
    </Helmet>
    <div className="relative z-10 flex flex-col">
      <Navbar />
      <div className="container py-16 tablet:py-24">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h1 className="text-heading-2 text-neutral-12 mb-4">
            DOOH Advertising Media Kit — India 2026
          </h1>
          <p className="text-body-large text-neutral-10">
            Plan your digital out-of-home campaign with precision. Screen networks,
            programmatic options, rate ranges and creative specs — free download.
          </p>
        </div>
        <LeadMagnet
          title="DOOH Advertising Media Kit India 2026"
          subtitle="Free campaign planning resource from BIZEX4U"
          assetName="DOOH Advertising Media Kit India 2026"
          assetDescription="Complete DOOH planning guide — screen networks, formats, programmatic buying and audience targeting in India."
          source="lead_magnet_dooh_kit"
          bullets={[
            "India's top DOOH networks — Times OOH, Laqshya, Bright Outdoor and more",
            "Screen formats: large LED, mall screens, metro DOOH, highway digital",
            "Programmatic DOOH: DSP options, audience targeting parameters",
            "City-wise rate ranges for Gurgaon, Bangalore, Mumbai, Delhi, Hyderabad",
            "OOH vs DOOH ROI comparison framework",
            "Creative specifications for major DOOH screen formats",
            "Day-parting and dynamic content planning guide",
          ]}
        />
        <div className="mt-12 text-center">
          <p className="text-body-small text-neutral-08">
            Related:{" "}
            <a href="/dooh-advertising" className="text-main-01 hover:underline">DOOH Advertising Services</a>
            {" · "}
            <a href="/gurgaon-dooh-advertising" className="text-main-01 hover:underline">Gurgaon DOOH Advertising</a>
            {" · "}
            <a href="/bangalore-dooh-advertising" className="text-main-01 hover:underline">Bangalore DOOH Advertising</a>
            {" · "}
            <a href="/blog/dooh-advertising-india-guide" className="text-main-01 hover:underline">DOOH Advertising India Guide</a>
          </p>
        </div>
      </div>
      <Footer showDivider={false} />
    </div>
  </div>
);

export default DoohMediaKit;
