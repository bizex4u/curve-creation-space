import { useState, memo } from "react";
import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

const FAQItem = memo(({ question, answer, isOpen: controlledIsOpen, onToggle }: FAQItemProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;
  
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div className="bg-neutral-00 p-5 rounded-xl border border-transparent hover:border-neutral-02 hover:shadow-[0_4px_10px_rgba(23,23,23,0.1)] transition-all duration-300">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="text-body-large text-neutral-12 max-w-[550px]">{question}</span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-12 flex items-center justify-center">
          <Plus 
            className={`w-4 h-4 text-neutral-00 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isOpen ? "rotate-45" : "rotate-0"
            }`} 
          />
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-body text-neutral-10 pt-4 max-w-[550px]">{answer}</p>
      </div>
    </div>
  );
});

FAQItem.displayName = "FAQItem";

export default FAQItem;
