export default function Loader({
  borderWidth = 2,
  ringColor = "#FFF",
  trackColor = "#000",
  width = 25,
  height = 25,
}) {
  return (
    <div className="loader-container">
      <div
        className="loader"
        style={{
          border: `${borderWidth}px solid ${ringColor}`,
          borderTop: `${borderWidth}px solid ${trackColor}`,
          height: `${height}px`,
          width: `${width}px`,
        }}
      ></div>
    </div>
  );
}
