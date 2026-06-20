import { useState } from "react";
import { Download, CheckCircle2 } from "lucide-react";
import LeadForm from "@/components/LeadForm";

interface LeadMagnetProps {
  title: string;
  subtitle: string;
  assetName: string;
  assetDescription: string;
  bullets: string[];
  source: string;
}

const LeadMagnet = ({
  title,
  subtitle,
  assetName,
  assetDescription,
  bullets,
  source,
}: LeadMagnetProps) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!submitted ? (
        <div className="bg-neutral-01 border border-neutral-03 rounded-2xl overflow-hidden">
          {/* Asset preview header */}
          <div className="bg-main-01/10 border-b border-main-01/20 p-6 tablet:p-8 text-center">
            <div className="inline-flex items-center gap-2 bg-main-01/20 text-main-01 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
              <Download size={14} />
              Free Download
            </div>
            <h3 className="text-heading-3 text-neutral-12 mb-2">{assetName}</h3>
            <p className="text-body-small text-neutral-09">{assetDescription}</p>
          </div>

          {/* What's inside */}
          <div className="p-6 tablet:p-8 border-b border-neutral-03">
            <p className="text-label-medium text-neutral-10 mb-3 uppercase tracking-wider">What's inside</p>
            <ul className="space-y-2">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 text-body-small text-neutral-11">
                  <CheckCircle2 size={16} className="text-main-01 mt-0.5 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="p-6 tablet:p-8">
            <p className="text-body-small text-neutral-09 mb-4">
              Enter your details to get instant access — sent to your email.
            </p>
            <LeadForm
              source={source}
              ctaLabel="Get Free Download →"
              onSuccess={() => setSubmitted(true)}
            />
          </div>
        </div>
      ) : (
        <div className="bg-neutral-01 border border-neutral-03 rounded-2xl p-8 tablet:p-12 text-center">
          <div className="w-16 h-16 bg-main-01/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} className="text-main-01" />
          </div>
          <h3 className="text-heading-3 text-neutral-12 mb-2">Check your inbox</h3>
          <p className="text-body-medium text-neutral-09 mb-1">
            We've sent <strong className="text-neutral-11">{assetName}</strong> to your email.
          </p>
          <p className="text-body-small text-neutral-08">
            Our team will also reach out shortly to discuss your campaign objectives.
          </p>
        </div>
      )}
    </div>
  );
};

export default LeadMagnet;
