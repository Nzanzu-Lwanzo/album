import { useAppContect } from "../contexts/app";

const listImages = () => {
  const ctx = useAppContect();

  return (
    <div>
      {ctx?.urls.map((url) => {
        return (
          <img
            key={url}
            src={url}
            alt="Image stored in Firebase storage bucket"
          />
        );
      })}
    </div>
  );
};

export default listImages;
