import { useState, useRef } from "react";
import { Upload, X, Loader2, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface GalleryUploadProps {
  value: string[];
  onChange: (urls: string[]) => void;
}

const GalleryUpload = ({ value, onChange }: GalleryUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const newUrls: string[] = [];
    let skippedCount = 0;

    try {
      for (const file of Array.from(files)) {
        if (!ALLOWED_TYPES.includes(file.type)) {
          skippedCount++;
          continue;
        }
        if (file.size > MAX_FILE_SIZE) {
          toast({ title: "File too large", description: `${file.name} exceeds 5MB limit.`, variant: "destructive" });
          continue;
        }

        const fileExt = file.name.split(".").pop();
        const fileName = `gallery/${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("blog-images")
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from("blog-images")
          .getPublicUrl(fileName);

        newUrls.push(publicUrl);
      }

      onChange([...value, ...newUrls]);
    } catch (error) {
      toast({ title: "Upload failed", description: (error as Error).message, variant: "destructive" });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemove = (index: number) => {
    const newUrls = value.filter((_, i) => i !== index);
    onChange(newUrls);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-4">
        {value.map((url, index) => (
          <div key={index} className="relative aspect-square">
            <img
              src={url}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-xl border border-neutral-04"
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="absolute top-2 right-2 p-1 bg-neutral-12 text-neutral-00 rounded-full hover:bg-neutral-10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}

        <div
          onClick={() => fileInputRef.current?.click()}
          className="aspect-square border-2 border-dashed border-neutral-04 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-neutral-06 transition-colors"
        >
          {isUploading ? (
            <Loader2 className="w-8 h-8 animate-spin text-neutral-08" />
          ) : (
            <>
              <Plus className="w-8 h-8 text-neutral-08 mb-2" />
              <p className="text-body text-neutral-08">Add images</p>
            </>
          )}
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleUpload}
        className="hidden"
      />
    </div>
  );
};

export default GalleryUpload;
