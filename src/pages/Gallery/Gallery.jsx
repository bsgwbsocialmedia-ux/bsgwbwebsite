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

      const data = await apiFetch(GALLERY_URL);
      console.log('Gallery API Response:', data); // Debug

      // ✅ Fix: Handle API response format
      if (data) {
        // Agar data array hai toh direct set karo
        if (Array.isArray(data)) {
          setGallery(data);
        } 
        // Agar data object hai aur usme data key hai toh
        else if (data.data && Array.isArray(data.data)) {
          setGallery(data.data);
        } 
        // Agar data.success hai aur data.data hai toh
        else if (data.success && data.data && Array.isArray(data.data)) {
          setGallery(data.data);
        }
        else {
          setGallery([]);
        }
      } else {
        setGallery([]);
      }

    } catch (error) {

      console.log(error);
      setGallery([]);

    } finally {

      setLoading(false);

    }

  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    const baseUrl = 'http://localhost:5000';
    return `${baseUrl}${imagePath}`;
  };

  return (
    <div className="gallery-page">

      <div className="gallery-hero">

        <h2>
          Scouts & Guides Gallery
        </h2>

        <p>
          Memories from camps,
          rallies and scouting & Guiding events.
        </p>

      </div>

      {
        loading
          ? (
            <div className="gallery-loading">
              <div className="loading-spinner"></div>
              <p>Loading Gallery...</p>
            </div>
          )
          : gallery.length === 0
            ? (
              <div className="gallery-empty">
                <p>No images available</p>
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
                        src={getImageUrl(item.imageUrl)}
                        alt={item.title}
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23ddd"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="%23999"%3ENo Image%3C/text%3E%3C/svg%3E';
                        }}
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