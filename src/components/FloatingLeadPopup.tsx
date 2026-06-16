import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import LeadForm from "./LeadForm";
import strategist from "@/assets/bizex4u-logo.png.asset.json";

const STORAGE_KEY = "bizex4u_popup_dismissed_at";

const FloatingLeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);

  // Auto-open after engagement (15s) once per 24h
  useEffect(() => {
    const last = Number(localStorage.getItem(STORAGE_KEY) || 0);
    const fresh = Date.now() - last > 1000 * 60 * 60 * 24;
    if (!fresh || autoOpened) return;
    const t = setTimeout(() => {
      setOpen(true);
      setAutoOpened(true);
    }, 15000);
    return () => clearTimeout(t);
  }, [autoOpened]);

  const close = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  };

  return (
    <>
      {/* Floating bubble */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Talk to a strategist"
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 whitespace-nowrap rounded-full pl-4 pr-5 py-3 text-button text-neutral-00 shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:scale-[1.03] active:scale-100 transition-transform"
        style={{ background: "linear-gradient(135deg, hsl(var(--theme-main-02)), #d94f17)" }}
      >
        <MessageCircle className="w-5 h-5" />
        <span>Talk to a strategist</span>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[70] flex items-end tablet:items-center justify-center bg-neutral-12/55 backdrop-blur-sm animate-in fade-in">
          <div
            className="absolute inset-0"
            onClick={close}
            aria-hidden
          />
          <div className="relative w-full max-w-[560px] mx-3 mb-3 tablet:mb-0 bg-neutral-00 rounded-[20px] border border-neutral-03 shadow-2xl overflow-hidden">
            <div
              className="flex items-center gap-4 px-6 pt-6 pb-5 border-b border-neutral-03"
              style={{ background: "linear-gradient(180deg, hsl(var(--theme-main-00)), hsl(var(--neutral-00)))" }}
            >
              <img src={strategist.url} alt="BIZEX4U" className="h-12 w-auto" />
              <div className="flex-1">
                <p className="text-h4 text-neutral-12">Plan a campaign with us</p>
                <p className="text-body-small text-neutral-10 mt-0.5">
                  Yash, Head of Strategy · Replies in &lt; 1 business day
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="rounded-full p-2 hover:bg-neutral-02 transition-colors"
              >
                <X className="w-5 h-5 text-neutral-11" />
              </button>
            </div>
            <div className="px-6 py-6 max-h-[75vh] overflow-y-auto">
              <LeadForm source="popup" compact onSuccess={close} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingLeadPopup;
