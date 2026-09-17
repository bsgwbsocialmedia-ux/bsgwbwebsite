import { useEffect, useState } from 'react';
import { NEWS_URL, apiFetch } from '../../services/api';
import './News.css';

const CATEGORIES = [
  { key: 'district', label: 'District' },
  { key: 'state', label: 'State' },
  { key: 'national', label: 'National' },
  { key: 'international', label: 'International' }
];

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('district');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await apiFetch(NEWS_URL);
      console.log('News API Response:', response);

      let newsData = [];
      if (response?.data) {
        newsData = response.data;
      } else if (Array.isArray(response)) {
        newsData = response;
      }

      setNews(newsData);
      setError(null);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Failed to load news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Filter news by active tab
  const filteredNews = news.filter(item => item.category === activeTab);

  const formatDate = (date) => {
    if (!date) return 'Date not available';
    try {
      return new Date(date).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return 'Invalid date';
    }
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    const baseUrl = 'http://localhost:5000';
    return `${baseUrl}${imagePath}`;
  };

  if (loading) {
    return (
      <div className="news-page">
        <div className="news-hero">
          <h2>News & Announcements</h2>
        </div>
        <div className="news-loading">
          <div className="loading-spinner"></div>
          <p>Loading News...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-page">
        <div className="news-hero">
          <h2>News & Announcements</h2>
        </div>
        <div className="news-error">
          <p>{error}</p>
          <button onClick={fetchNews} className="retry-btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="news-page">
      <div className="news-hero">
        <h2>News & Announcements</h2>
        <p>Stay updated with the latest news and events</p>
      </div>

      {/* Tabs */}
      <div className="news-tabs">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            type="button"
            className={`news-tab ${activeTab === cat.key ? 'news-tab-active' : ''}`}
            onClick={() => setActiveTab(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filteredNews.length === 0 ? (
        <div className="news-empty">
          <p>No {activeTab} news available at the moment.</p>
          <p>Please check back later for updates.</p>
        </div>
      ) : (
        <div className="news-list">
          {filteredNews.map((item, index) => (
            <div className="news-card" key={item._id || index}>
              {item.image && (
                <div className="news-image-wrapper">
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.title || 'News image'}
                    className="news-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const wrapper = e.target.parentElement;
                      const placeholder = document.createElement('div');
                      placeholder.className = 'news-image-placeholder';
                      placeholder.innerHTML = `
                        <span>📸</span>
                        <p>Image not available</p>
                      `;
                      wrapper.appendChild(placeholder);
                    }}
                    loading="lazy"
                  />
                  <span className="news-badge">
                    {CATEGORIES.find(c => c.key === item.category)?.label || 'NEWS'}
                  </span>
                </div>
              )}

              <div className="news-content">
                <h3 className="news-title">{item.title || 'Untitled'}</h3>

                <div className="news-meta">
                  <span className="news-date">
                    <span className="meta-icon">📅</span>
                    {formatDate(item.createdAt)}
                  </span>
                  {item.location && (
                    <span className="news-location">
                      <span className="meta-icon">📍</span>
                      {item.location}
                    </span>
                  )}
                </div>

                <p className="news-description">
                  {item.description || 'No description available'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}