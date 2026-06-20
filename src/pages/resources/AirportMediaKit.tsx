import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadMagnet from "@/components/LeadMagnet";
import DotPatternBackground from "@/components/DotPatternBackground";

const AirportMediaKit = () => (
  <div className="relative min-h-screen bg-neutral-00 overflow-x-hidden">
    <div className="absolute inset-x-0 top-0 h-[50vh] min-h-[400px] z-0">
      <DotPatternBackground variant="main" />
    </div>
    <Helmet>
      <title>Free Airport Advertising Media Kit India 2026 | BIZEX4U</title>
      <meta
        name="description"
        content="Download our free airport advertising media kit for India 2026. Formats, rate ranges, audience data and campaign planning templates for IGI Delhi, Mumbai and Bangalore airports."
      />
      <link rel="canonical" href="https://bizex4u.com/resources/airport-advertising-media-kit" />
      <meta property="og:title" content="Free Airport Advertising Media Kit India 2026 | BIZEX4U" />
      <meta property="og:description" content="Free airport advertising media kit — formats, rates, audience data for India's top airports." />
      <meta property="og:url" content="https://bizex4u.com/resources/airport-advertising-media-kit" />
      <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
    </Helmet>
    <div className="relative z-10 flex flex-col">
      <Navbar />
      <div className="container py-16 tablet:py-24">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h1 className="text-heading-2 text-neutral-12 mb-4">
            Airport Advertising Media Kit — India 2026
          </h1>
          <p className="text-body-large text-neutral-10">
            Everything you need to plan an airport advertising campaign in India. Formats,
            rate ranges, audience data and planning templates — free download.
          </p>
        </div>
        <LeadMagnet
          assetName="Airport Advertising Media Kit India 2026"
          assetDescription="A comprehensive guide to airport advertising in India — formats, rates and audience data."
          source="lead_magnet_airport_kit"
          bullets={[
            "Format guide: aerobridges, DOOH, departure hall, baggage reclaim",
            "Rate ranges for IGI Delhi T1/T2/T3, Mumbai CSIA T1/T2, Bangalore KIA",
            "Audience profile data — income, business vs leisure, international mix",
            "CPM benchmarks vs OOH, metro and digital",
            "60-day vs 30-day campaign ROI comparison",
            "Barter eligibility by format and airport",
            "Sample campaign brief template",
          ]}
        />
        <div className="mt-12 text-center">
          <p className="text-body-small text-neutral-08">
            Related:{" "}
            <a href="/airport-advertising" className="text-main-01 hover:underline">Airport Advertising Services</a>
            {" · "}
            <a href="/airport-advertising-delhi" className="text-main-01 hover:underline">Delhi Airport Advertising</a>
            {" · "}
            <a href="/airport-advertising-mumbai" className="text-main-01 hover:underline">Mumbai Airport Advertising</a>
            {" · "}
            <a href="/blog/airport-advertising-cost-india-2026" className="text-main-01 hover:underline">Airport Advertising Cost Guide</a>
          </p>
        </div>
      </div>
      <Footer showDivider={false} />
    </div>
  </div>
);

export default AirportMediaKit;
