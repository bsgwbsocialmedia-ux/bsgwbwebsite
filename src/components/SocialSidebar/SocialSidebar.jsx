import { useState, useEffect } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
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
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/bsg.westbengal?stkn=N2hlMXdobGp3eHd0&utm_source=qr',
      color: '#e4405f'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/919330321982',
      color: '#25d366'
    }
  ];

  return (
    <div
      className={`social-sidebar ${
        visible
          ? 'social-sidebar-visible'
          : 'social-sidebar-hidden'
      }`}
    >
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-sidebar-link"
          style={{ '--hover-color': social.color }}
          aria-label={social.name}
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}