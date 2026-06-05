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

  const [loadingCirculars, setLoadingCirculars] =
    useState(true);

  const [loadingVideos, setLoadingVideos] =
    useState(true);

  useEffect(() => {

    fetchCirculars();
    fetchVideos();

  }, []);

  const fetchCirculars = async () => {

    try {

      const data =
        await apiFetch(
          CIRCULARS_URL
        );

      if (data) {
        setCirculars(data);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoadingCirculars(false);

    }

  };

  const fetchVideos = async () => {

    try {

      const data =
        await apiFetch(
          VIDEOS_URL
        );

      if (data) {
        setVideos(data);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoadingVideos(false);

    }

  };

  const formatDate = (date) => {

    return new Date(date)
      .toLocaleDateString(
        'en-IN',
        {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }
      );

  };

  const getPlatformIcon =
    (platform) => {

      switch (platform) {

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

  return (

    <section className="circulars-section">

      <div className="section-header">

        <h2>
          Latest Updates
        </h2>

      </div>

      <div className="circulars-wrapper">

        {/* Circulars */}

        <div className="circular-panel">

          <div className="panel-title">
            📄 Circulars & Notifications
          </div>

          {
            loadingCirculars
              ? (
                <div className="loading-box">
                  Loading Circulars...
                </div>
              )
              : circulars.length === 0
                ? (
                  <div className="empty-box">
                    No Circular Available
                  </div>
                )
                : (

                  <div className="circular-list">

                    {
                      circulars.map(
                        (
                          item,
                          index
                        ) => (

                          <a
                            key={item._id}
                            href={`http://localhost:5000${item.pdfUrl}`}
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

                                {
                                  index < 5 && (

                                    <span className="new-badge">

                                      NEW

                                    </span>

                                  )
                                }

                              </div>

                              <p>
                                {
                                  formatDate(
                                    item.createdAt
                                  )
                                }
                              </p>

                            </div>

                          </a>

                        )
                      )
                    }

                  </div>

                )
          }

        </div>

        {/* Videos */}

        <div className="video-panel">

          <div className="panel-title">
            🎬 Latest Videos
          </div>

          {
            loadingVideos
              ? (
                <div className="loading-box">
                  Loading Videos...
                </div>
              )
              : videos.length === 0
                ? (
                  <div className="empty-box">
                    No Videos Available
                  </div>
                )
                : (

                  <div className="video-list">

                    {
                      videos.map(
                        (video) => (

                          <a
                            key={video._id}
                            href={video.link}
                            target="_blank"
                            rel="noreferrer"
                            className="video-card"
                          >

                            <div
                              className={`video-icon ${video.platform}`}
                            >

                              {
                                getPlatformIcon(
                                  video.platform
                                )
                              }

                            </div>

                            <div className="video-content">

                              <h4>
                                {video.title}
                              </h4>

                              <span>
                                {
                                  video.platform
                                }
                              </span>

                            </div>

                          </a>

                        )
                      )
                    }

                  </div>

                )
          }

        </div>

      </div>

    </section>

  );
}