import { Loader2, Check, AlertCircle, Cloud } from "lucide-react";

interface AutoSaveIndicatorProps {
  status: "idle" | "saving" | "saved" | "error";
  lastSaved?: Date | null;
}

const AutoSaveIndicator = ({ status, lastSaved }: AutoSaveIndicatorProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      {status === "idle" && (
        <>
          <Cloud className="w-4 h-4" />
          <span>Auto-save enabled</span>
        </>
      )}
      {status === "saving" && (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Saving...</span>
        </>
      )}
      {status === "saved" && (
        <>
          <Check className="w-4 h-4 text-green-600" />
          <span>Saved {lastSaved && `at ${formatTime(lastSaved)}`}</span>
        </>
      )}
      {status === "error" && (
        <>
          <AlertCircle className="w-4 h-4 text-destructive" />
          <span>Save failed</span>
        </>
      )}
    </div>
  );
};

export default AutoSaveIndicator;
