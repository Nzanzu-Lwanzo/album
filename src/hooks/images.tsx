import { useState } from "react";
import { uploadFileToBucket } from "../firebase/storage";

export function useUpload() {
  const [uploading, setUploading] = useState(false);

  return {
    upload: async (files: FileList) => {
      const confirmed = confirm(`Uploader ${files.length} images ?`);

      if (!confirmed) {
        return;
      }

      setUploading(true);
      Array.from(files).forEach(async (file) => {
        await uploadFileToBucket(file);
      });
      setUploading(false);
    },
    uploading,
  };
}
