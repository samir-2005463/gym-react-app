import men1 from "../assets/men1.png";
import men2 from "../assets/men2.png";
import men3 from "../assets/men3.png";
import mne4 from "../assets/men4.png";
import men5 from "../assets/men5.png";
import men6 from "../assets/men6.png";
function Gallery() {
  const images = [men1,men2,men3,mne4,men5,men6];

  return (
    <section className="gallery">
      <h1>Our Gym Gallery</h1>
      <p>Take a look at our facilities and training environment.</p>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt={`Gym ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;