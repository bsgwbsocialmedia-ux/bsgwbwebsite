import { useState, useEffect } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa';

import './SocialSidebar.css';

export default function SocialSidebar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socials = [
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      url: 'https://www.facebook.com/share/1Y14hSJec7/?mibextid=wwXIfr',
      color: '#1877f2'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com',
      color: '#000000'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/919330321982',
      color: '#25d366'
    },
    {
      name: 'YouTube',
      icon: <FaYoutube />,
      url: 'https://youtube.com/@bsgindia?si=QY49AXXDxM1wPXAs',
      color: '#ff0000'
    }
  ];

  return (
    <div className={`social-sidebar ${visible ? 'social-sidebar-visible' : 'social-sidebar-hidden'}`}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="social-sidebar-link"
          style={{ '--hover-color': social.color }}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}