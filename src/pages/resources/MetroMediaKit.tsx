import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadMagnet from "@/components/LeadMagnet";
import DotPatternBackground from "@/components/DotPatternBackground";

const MetroMediaKit = () => (
  <div className="relative min-h-screen bg-neutral-00 overflow-x-hidden">
    <div className="absolute inset-x-0 top-0 h-[50vh] min-h-[400px] z-0">
      <DotPatternBackground variant="main" />
    </div>
    <Helmet>
      <title>Free Metro Branding Media Kit India 2026 | BIZEX4U</title>
      <meta
        name="description"
        content="Download our free metro branding media kit for India 2026. Delhi Metro, Mumbai Metro, Bangalore Namma Metro — formats, rates, line-level targeting and campaign templates."
      />
      <link rel="canonical" href="https://bizex4u.com/resources/metro-branding-media-kit" />
      <meta property="og:title" content="Free Metro Branding Media Kit India 2026 | BIZEX4U" />
      <meta property="og:description" content="Free metro advertising media kit — formats, rates and audience data for India's metro networks." />
      <meta property="og:url" content="https://bizex4u.com/resources/metro-branding-media-kit" />
      <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
    </Helmet>
    <div className="relative z-10 flex flex-col">
      <Navbar />
      <div className="container py-16 tablet:py-24">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h1 className="text-heading-2 text-neutral-12 mb-4">
            Metro Branding Media Kit — India 2026
          </h1>
          <p className="text-body-large text-neutral-10">
            Plan your metro advertising campaign with confidence. Formats, rate ranges,
            line-level audience data and planning templates — free download.
          </p>
        </div>
        <LeadMagnet
          assetName="Metro Branding Media Kit India 2026"
          assetDescription="Complete metro advertising planning guide for Delhi, Mumbai, Bangalore, Hyderabad and Chennai."
          source="lead_magnet_metro_kit"
          bullets={[
            "Format guide: platform panels, station dominations, train wraps, DOOH, fare gates",
            "Rate ranges per line for DMRC Delhi, Mumbai Metro Lines 1/2A/7, Namma Metro Bangalore",
            "Line-by-line audience profile — income, occupation, footfall",
            "DEC methodology and CPM benchmarks",
            "Station domination vs line booking comparison",
            "Barter eligibility for metro transit advertising",
            "Multi-city metro campaign planning template",
          ]}
        />
        <div className="mt-12 text-center">
          <p className="text-body-small text-neutral-08">
            Related:{" "}
            <a href="/metro-branding" className="text-main-01 hover:underline">Metro Branding Services</a>
            {" · "}
            <a href="/delhi-metro-advertising" className="text-main-01 hover:underline">Delhi Metro Advertising</a>
            {" · "}
            <a href="/mumbai-metro-advertising" className="text-main-01 hover:underline">Mumbai Metro Advertising</a>
            {" · "}
            <a href="/blog/delhi-metro-advertising-cost" className="text-main-01 hover:underline">Delhi Metro Advertising Cost Guide</a>
          </p>
        </div>
      </div>
      <Footer showDivider={false} />
    </div>
  </div>
);

export default MetroMediaKit;
