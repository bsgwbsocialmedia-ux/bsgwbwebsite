import { useEffect, useState } from 'react';

import {
  FaFilePdf,
  FaYoutube,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';

import {
  CIRCULARS_URL,
  VIDEOS_URL,
  apiFetch
} from '../../services/api';

import './Circulars.css';

export default function Circulars() {
  const [circulars, setCirculars] = useState([]);
  const [videos, setVideos] = useState([]);

  const [loadingCirculars, setLoadingCirculars] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(true);

  useEffect(() => {
    fetchCirculars();
    fetchVideos();
  }, []);

  const fetchCirculars = async () => {
    try {
      const data = await apiFetch(CIRCULARS_URL);

      if (Array.isArray(data)) {
        setCirculars(data);
      } else if (
        data?.data &&
        Array.isArray(data.data)
      ) {
        setCirculars(data.data);
      } else {
        setCirculars([]);
      }
    } catch (error) {
      console.log('Circular fetch error:', error);
      setCirculars([]);
    } finally {
      setLoadingCirculars(false);
    }
  };

  const fetchVideos = async () => {
    try {
      const data = await apiFetch(VIDEOS_URL);

      if (Array.isArray(data)) {
        setVideos(data);
      } else if (
        data?.data &&
        Array.isArray(data.data)
      ) {
        setVideos(data.data);
      } else {
        setVideos([]);
      }
    } catch (error) {
      console.log('Video fetch error:', error);
      setVideos([]);
    } finally {
      setLoadingVideos(false);
    }
  };

  /* ==========================================
     DATE FORMAT
  ========================================== */

  const formatDate = (date) => {
    if (!date) return '';

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return '';
    }

    return parsedDate.toLocaleDateString(
      'en-IN',
      {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }
    );
  };

  /* ==========================================
     NEW BADGE
     Visible for 3 days after upload
  ========================================== */

  const isNewCircular = (createdAt) => {
    if (!createdAt) return false;

    const createdDate = new Date(createdAt);

    if (Number.isNaN(createdDate.getTime())) {
      return false;
    }

    const now = new Date();

    const difference =
      now.getTime() -
      createdDate.getTime();

    const threeDays =
      3 * 24 * 60 * 60 * 1000;

    return (
      difference >= 0 &&
      difference <= threeDays
    );
  };

  /* ==========================================
     CIRCULAR CATEGORY
  ========================================== */

  const getCategory = (item) => {
    /*
      Backend will later send:

      category: "national"

      OR

      category: "state"

      Existing circulars without a category
      are temporarily treated as State.
    */

    if (
      item?.category &&
      item.category.toLowerCase() === 'national'
    ) {
      return 'national';
    }

    return 'state';
  };

  /* ==========================================
     FILTER CIRCULARS
  ========================================== */

  const nationalCirculars =
    circulars.filter(
      (item) =>
        getCategory(item) === 'national'
    );

  const stateCirculars =
    circulars.filter(
      (item) =>
        getCategory(item) === 'state'
    );

  /* ==========================================
     VIDEO PLATFORM ICON
  ========================================== */

  const getPlatformIcon = (platform) => {
    switch (
      platform?.toLowerCase()
    ) {
      case 'youtube':
        return <FaYoutube />;

      case 'facebook':
        return <FaFacebook />;

      case 'instagram':
        return <FaInstagram />;

      default:
        return null;
    }
  };

  /* ==========================================
     CIRCULAR CARD
  ========================================== */

  const renderCircular = (item) => {
    return (
      <a
        key={item._id}
        href={item.pdfUrl}
        target="_blank"
        rel="noreferrer"
        className="circular-card"
      >

        <div className="circular-icon">
          <FaFilePdf />
        </div>

        <div className="circular-content">

          <div className="circular-top">

            <h3>
              {item.title}
            </h3>

            {isNewCircular(
              item.createdAt
            ) && (
              <span className="new-badge">
                NEW
              </span>
            )}

          </div>

          <p>
            {formatDate(
              item.createdAt
            )}
          </p>

        </div>

      </a>
    );
  };

  /* ==========================================
     CATEGORY COMPONENT
  ========================================== */

  const renderCategory = (
    title,
    icon,
    items,
    className
  ) => {
    return (
      <div
        className={`circular-category ${className}`}
      >

        <div className="category-title">

          <span className="category-icon">
            {icon}
          </span>

          <span>
            {title}
          </span>

        </div>

        {items.length === 0 ? (

          <div className="category-empty">
            No {title.toLowerCase()} available
          </div>

        ) : (

          <div className="category-list">
            {items.map(
              renderCircular
            )}
          </div>

        )}

      </div>
    );
  };

  return (
    <section className="circulars-section">

      {/* ======================================
          SECTION HEADER
      ====================================== */}

      <div className="section-header">

        <h2>
          Latest Updates
        </h2>

      </div>


      <div className="circulars-wrapper">

        {/* ====================================
            CIRCULAR PANEL
        ==================================== */}

        <div className="circular-panel">

          <div className="panel-title">
            📄 Circulars & Notifications
          </div>

          {loadingCirculars ? (

            <div className="loading-box">
              Loading Circulars...
            </div>

          ) : (

            <div className="circular-categories">

              {/* =================================
                  STATE FIRST
              ================================= */}

              {renderCategory(
                'State Circulars',
                '',
                stateCirculars,
                'state-category'
              )}

              {/* =================================
                  NATIONAL SECOND
              ================================= */}

              {renderCategory(
                'National Circulars',
                '',
                nationalCirculars,
                'national-category'
              )}

            </div>

          )}

        </div>


        {/* ====================================
            VIDEO PANEL
        ==================================== */}

        <div className="video-panel">

          <div className="panel-title">
            🎬 Latest Videos
          </div>

          {loadingVideos ? (

            <div className="loading-box">
              Loading Videos...
            </div>

          ) : videos.length === 0 ? (

            <div className="empty-box">
              No Videos Available
            </div>

          ) : (

            <div className="video-list">

              {videos.map(
                (video) => (

                  <a
                    key={video._id}
                    href={video.link}
                    target="_blank"
                    rel="noreferrer"
                    className="video-card"
                  >

                    <div
                      className={`video-icon ${
                        video.platform?.toLowerCase() || ''
                      }`}
                    >

                      {getPlatformIcon(
                        video.platform
                      )}

                    </div>

                    <div className="video-content">

                      <h4>
                        {video.title}
                      </h4>

                      <span>
                        {video.platform}
                      </span>

                    </div>

                  </a>

                )
              )}

            </div>

          )}

        </div>

      </div>

    </section>
  );
}