import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BrushHighlight from "@/components/BrushHighlight";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="border-t border-neutral-03 py-10 first:border-t-0 first:pt-0">
    <h2 className="text-h4 text-neutral-12 mb-4">{title}</h2>
    <div className="text-body text-neutral-10 space-y-4 max-w-[720px]">
      {children}
    </div>
  </section>
);

const Trust = () => {
  return (
    <div className="min-h-screen bg-neutral-00">
      <Helmet>
        <title>Trust & privacy — BIZEX4U</title>
        <meta
          name="description"
          content="How BIZEX4U handles security and privacy for visitors and customers of bizex4u.com."
        />
        <link rel="canonical" href="https://bizex4u.com/trust" />
        <meta property="og:title" content="Trust & privacy — BIZEX4U" />
        <meta property="og:url" content="https://bizex4u.com/trust" />
        <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trust & privacy — BIZEX4U" />
        <meta name="twitter:image" content="https://bizex4u.com/og-image.jpg" />
      </Helmet>
      <Navbar />
      <PageHeader
        heading={
          <>
            <BrushHighlight delay={400}>Trust</BrushHighlight> & privacy
          </>
        }
      />

      <main className="container mx-auto max-w-[1300px] px-5 lg:px-10 py-16">
        <p className="text-body text-neutral-09 max-w-[720px] mb-10">
          This page is maintained by the BIZEX4U team to answer common security
          and privacy questions about bizex4u.com. It describes current
          practices and platform features in use today and is not a third-party
          certification or independent audit.
        </p>

        <Section title="Shared responsibility">
          <p>
            BIZEX4U runs on a managed hosting and backend platform. The platform
            provider is responsible for the underlying infrastructure,
            database, and authentication services. BIZEX4U is responsible for
            the application code, what data we collect, how we use it, who on
            our team can access it, and how we respond to user requests.
            Customers are responsible for the accuracy of information they
            submit and for safeguarding any credentials issued to them.
          </p>
        </Section>

        <Section title="What we collect">
          <p>
            When you submit our contact form, we collect the details you
            provide — typically your name, email, phone number, company,
            budget range, funding model, and message. We also record the page
            you submitted from and standard UTM campaign parameters when
            present, so we can understand which channels brought you to us.
          </p>
          <p>
            We do not sell this information. We use it to respond to your
            enquiry and to plan campaigns with you.
          </p>
        </Section>

        <Section title="Access control">
          <p>
            Lead submissions are stored in our backend with row-level access
            rules enabled. Only authenticated team members with an admin or
            editor role can read submitted leads. Anonymous visitors can
            submit a lead but cannot read any leads. Role assignments
            themselves are not readable by anonymous visitors.
          </p>
          <p>
            Team accounts use magic-link sign-in; we do not store passwords
            for our admin tools.
          </p>
        </Section>

        <Section title="Platform & hosting">
          <p>
            The website is delivered over HTTPS. Our backend is a managed
            service that provides the database, authentication, file storage,
            and serverless functions used by this site. Transport encryption
            and at-rest encryption of the managed database are provided by
            that platform.
          </p>
        </Section>

        <Section title="Cookies & analytics">
          <p>
            The site uses only the cookies required for normal browsing and
            for admin sign-in sessions on the protected admin area. We do not
            embed third-party advertising trackers on this site.
          </p>
        </Section>

        <Section title="Retention & deletion">
          <p>
            We keep lead submissions for as long as needed to respond to your
            enquiry and maintain a record of campaigns we have discussed. You
            can ask us to delete your data at any time using the contact
            options below.
          </p>
        </Section>

        <Section title="Privacy requests & security contact">
          <p>
            To request access to, correction of, or deletion of your data, or
            to report a suspected security issue with the website, please
            reach us through the{" "}
            <Link to="/contact" className="underline text-neutral-12">
              contact page
            </Link>
            . We aim to acknowledge security reports promptly and will
            coordinate with you on a fix.
          </p>
        </Section>

        <p className="mt-12 text-small text-neutral-08 max-w-[720px]">
          This page is editable content owned by BIZEX4U. It is not a
          certification or independent verification, and it does not promise
          compliance with any specific regulatory framework.
        </p>
      </main>

      <Footer showDivider={false} />
    </div>
  );
};

export default Trust;
