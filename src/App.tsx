import { useEffect } from "react";
import "./assets/global.css";
import UploadButton from "./ui/UploadButton";
import { useAppContect } from "./contexts/app";
import { getFilesFromBucket } from "./firebase/storage";

function App() {
  const ctx = useAppContect();

  useEffect(() => {
    getFilesFromBucket().then((urls) => {
      ctx?.setUrls(urls);
    });
  }, []);

  return (
    <>
      <UploadButton />
    </>
  );
}

export default App;
