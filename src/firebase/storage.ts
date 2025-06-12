import { uploadBytes, ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./config";
import { nanoid } from "nanoid";

const folder = "images";
export async function uploadFileToBucket(file: File) {
  let filePath = `${folder}/${file.name + nanoid()}`;
  const result = await uploadBytes(ref(storage, filePath), file);
  return result.metadata.name;
}

export async function getFilesFromBucket() {
  const filesRef = await listAll(ref(storage, folder + "/"));
  const filesUrls = filesRef.items.map(
    async (fileRef) => await getDownloadURL(fileRef)
  );
  return await Promise.all(filesUrls);
}
