import { useEffect, useState } from 'react';
import { NEWS_URL, apiFetch } from '../../services/api';
import './News.css';

export default function News() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchNews();

  }, []);

  const fetchNews = async () => {

    try {

      const data = await apiFetch(
        NEWS_URL
      );

      if (data) {
        setNews(data);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const formatDate = (date) => {

    return new Date(date).toLocaleDateString(
      'en-IN',
      {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }
    );

  };

  return (
    <div className="news-page">

      <div className="news-hero">

        <h2>
          News & Announcements
        </h2>

      </div>

      {
        loading
          ? (
            <div className="news-loading">
              Loading News...
            </div>
          )
          : (
            <div className="news-list">

              {
                news.map((item) => (

                  <div
                    className="news-card"
                    key={item._id}
                  >

                    <span className="news-tag">
                      NEWS
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                    <small>
                      {formatDate(
                        item.createdAt
                      )}
                    </small>

                  </div>

                ))
              }

            </div>
          )
      }

    </div>
  );
}