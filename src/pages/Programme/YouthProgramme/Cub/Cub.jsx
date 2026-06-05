import "./Cub.css";

export default function Cub() {
  return (
    <div className="cub-page">
      <div className="cub-banner">
        <h1>CUB SECTION</h1>
      </div>

      <div className="cub-content">
        <div className="cub-image">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5"
            alt=""
          />
        </div>

        <div className="cub-text">
          <h2>Pravesh Requirements</h2>

          <ul>
            <li>Be able to tell the first jungle story.</li>
            <li>Understand Cub Law and Cub Motto.</li>
            <li>Demonstrate Cub Salute.</li>
            <li>Offer daily prayers.</li>
            <li>Do a daily good turn.</li>
            <li>Sing Cub Prayer.</li>
            <li>Wear Cub Uniform properly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}