import { useRef } from "react";
import UploadIcon from "../assets/uploadIcon";
import style from "./_style.module.css";
import { useUpload } from "../hooks/images";
import Loader from "./loader";

const UploadButton = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { upload, uploading } = useUpload();

  const clickInput = () => {
    inputRef.current?.click();
  };

  const select = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (!files) return;
    upload(files);
  };

  return (
    <>
      <button className={style.upload__button} onClick={clickInput}>
        {uploading ? <Loader /> : <UploadIcon />}
      </button>
      <input
        type="file"
        id="images"
        multiple
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={select}
      />
    </>
  );
};

export default UploadButton;
