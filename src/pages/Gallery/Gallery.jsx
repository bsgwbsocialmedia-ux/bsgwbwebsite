import { useEffect, useState } from 'react';
import { GALLERY_URL, apiFetch } from '../../services/api';
import './Gallery.css';

export default function Gallery() {

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchGallery();

  }, []);

  const fetchGallery = async () => {

    try {

      const data = await apiFetch(
        GALLERY_URL
      );

      if (data) {
        setGallery(data);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="gallery-page">

      <div className="gallery-hero">

        <h2>
          Scout Gallery
        </h2>

        <p>
          Memories from camps,
          rallies and scouting events.
        </p>

      </div>

      {
        loading
          ? (
            <div className="gallery-loading">
              Loading Gallery...
            </div>
          )
          : (
            <div className="gallery-grid">

              {
                gallery.map((item) => (

                  <div
                    className="gallery-card"
                    key={item._id}
                  >

                    <img
                      src={`http://localhost:5000${item.imageUrl}`}
                      alt={item.title}
                    />

                    <div className="gallery-overlay">

                      <h3>
                        {item.title}
                      </h3>

                    </div>

                  </div>

                ))
              }

            </div>
          )
      }

    </div>
  );
}