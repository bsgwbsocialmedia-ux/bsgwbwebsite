/* src/components/VideoLinks/VideoLinks.jsx */
import { useState, useEffect } from 'react';
import './VideoLinks.css';

const VideoLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 400));
      const mockLinks = [
        { id: 1, platform: 'youtube', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', title: 'Scout National Song' },
        { id: 2, platform: 'instagram', url: 'https://www.instagram.com/reel/C9jMZbMIPqG/', title: 'Campfire Highlights' },
        { id: 3, platform: 'facebook', url: 'https://www.facebook.com/watch/?v=101532234567890', title: 'Bharat Scouts Day' },
        { id: 4, platform: 'twitter', url: 'https://twitter.com/i/status/178123456789', title: 'Scout Pledge' },
      ];
      setLinks(mockLinks);
      setLoading(false);
    };
    fetchLinks();
  }, []);

  const getIcon = (platform) => {
    switch(platform) {
      case 'youtube': return '▶️ YouTube';
      case 'instagram': return '📸 Instagram';
      case 'facebook': return '📘 Facebook';
      case 'twitter': return '🐦 Twitter';
      default: return '🔗';
    }
  };

  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="video-links-section glass-card">
      <h3>🎬 Latest Video Links</h3>
      <p className="sub">Click any platform to watch exclusive scout videos</p>
      {loading ? (
        <div className="skeleton-video">Loading latest videos...</div>
      ) : (
        <div className="links-grid">
          {links.map((item) => (
            <div key={item.id} className="link-card" onClick={() => handleRedirect(item.url)}>
              <div className="platform-icon">{getIcon(item.platform)}</div>
              <div className="link-title">{item.title}</div>
              <span className="watch-now">Watch →</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoLinks;