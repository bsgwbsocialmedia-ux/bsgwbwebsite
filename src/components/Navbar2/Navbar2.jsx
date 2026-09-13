import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar2.css';

const TABS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'aboutus', label: 'About Us', path: '/aboutus' },
  { id: 'gallery', label: 'Gallery', path: '/gallery' },
  { id: 'district', label: 'District', path: '/district' },
  { id: 'news', label: 'News', path: '/news' },
  { id: 'awards', label: 'Awards', path: '/awards' },
  { id: 'shop', label: 'Shop', path: '/shop' },
  {
    id: 'programme',
    label: 'Programme & Annual Plan',
    children: [
      {
        label: 'Youth Programme',
        items: [
          { id: 'bunny', label: 'Bunny', path: '/programme/youth-programme/bunny' },
          { id: 'cub', label: 'Cub', path: '/programme/youth-programme/cub' },
          { id: 'bulbul', label: 'Bulbul', path: '/programme/youth-programme/bulbul' },
          { id: 'scout', label: 'Scout', path: '/programme/youth-programme/scout' },
          { id: 'guide', label: 'Guide', path: '/programme/youth-programme/guide' },
          { id: 'rover', label: 'Rover', path: '/programme/youth-programme/rover' },
          { id: 'ranger', label: 'Ranger', path: '/programme/youth-programme/ranger' },
        ],
      },
      {
        label: 'Adult Programme',
        items: [
          { id: 'unitleaders', label: 'Unit Leaders', path: '/programme/adult-programme/unitleaders' },
          { id: 'adultleaders', label: 'Adult Leaders', path: '/programme/adult-programme/adultleaders' },
          { id: 'leadersofadult', label: 'Leaders Of Adult', path: '/programme/adult-programme/leadersofadult' },
        ],
      },
      {
        // label: 'Annual Plan',
        // items: [
        //   { id: 'youthannualplan', label: 'Youth Annual Plan', path: '/programme/annual-plan/youth' },
        //   { id: 'adultannualplan', label: 'Adult Annual Plan', path: '/programme/annual-plan/adult' },
        // ],
      },
    ],
  },


  {
    id: 'organization',
    label: 'Organization',
    children: [
      {
        label: 'Organisation',
        children: [
          {
            label: 'State Association',
            items: [
              { id: 'presentleadership', label: 'Present Leadership', path: '/organization/presentleadership' },
              { id: 'shqofficers', label: 'ShqOfficers', path: '/organization/shqofficers' },
              { id: 'shqstaff', label: 'ShqStaff', path: '/organization/shqstaff' },
            ],
          },
          // { id: 'districtassociation', label: 'District Association', path: '/organization/districtassociation' },
        ],
      },
      {
        label: 'WB Rules',
        children: [
          // { id: 'byelaws', label: 'Bye Laws', path: '/organization/byelaws' },
          { id: 'financialpolicy', label: 'Financial Policy', path: '/organization/financialpolicy' },
        ],
      },
      {
        label: 'Membership',
        children: [
          { id: 'typeofmembership', label: 'Type Of Membership', path: '/organization/membership/typeofmembership' },
        ],
      },
    ],
  },
  { id: 'contact', label: 'Contact Us', path: '/contact' },
];

export default function Navbar2() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openThird, setOpenThird] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedTabs, setExpandedTabs] = useState({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTab = (tabId) => {
    setExpandedTabs((prev) => ({ ...prev, [tabId]: !prev[tabId] }));
  };

  const isActive = (path) => location.pathname === path;

  const renderMobileItems = (items, level = 0) => {
    return items.map((item, idx) => {
      if (item.items || item.children) {
        const childItems = item.items || item.children;
        const key = item.id || item.label;
        return (
          <div key={idx} className="mobile-accordion-item" style={{ paddingLeft: `${level * 0.8}rem` }}>
            <div
              className="mobile-accordion-header"
              onClick={() => toggleTab(key)}
            >
              <span>{item.label}</span>
              <span className="accordion-arrow">
                {expandedTabs[key] ? '▾' : '▸'}
              </span>
            </div>
            {expandedTabs[key] && (
              <div className="mobile-accordion-body">
                {renderMobileItems(childItems, level + 1)}
              </div>
            )}
          </div>
        );
      }
      return (
        <Link
          key={item.id || item.label}
          to={item.path}
          className={`mobile-item ${isActive(item.path) ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
          style={{ paddingLeft: `${level * 0.8 + 1}rem` }}
        >
          {item.label}
        </Link>
      );
    });
  };

  return (
    <section className="navbar-section">
      {isMobile ? (
        <div className="mobile-nav">
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="menu-icon">{menuOpen ? '✕' : '☰'}</span>
            <span className="menu-label">Menu</span>
          </button>

          {menuOpen && (
            <div className="mobile-drawer">
              {TABS.map((tab) => {
                if (tab.children) {
                  return (
                    <div key={tab.id} className="mobile-accordion-item">
                      <div
                        className="mobile-accordion-header"
                        onClick={() => toggleTab(tab.id)}
                      >
                        <span>{tab.label}</span>
                        <span className="accordion-arrow">
                          {expandedTabs[tab.id] ? '▾' : '▸'}
                        </span>
                      </div>
                      {expandedTabs[tab.id] && (
                        <div className="mobile-accordion-body">
                          {renderMobileItems(tab.children, 1)}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={tab.id}
                    to={tab.path}
                    className={`mobile-direct-btn ${isActive(tab.path) ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="desktop-nav">
          <div className="desktop-nav-inner">
            {TABS.map((tab) => (
              <div
                key={tab.id}
                className="desktop-tab-wrapper"
                onMouseEnter={() => tab.children && setOpenDropdown(tab.id)}
                onMouseLeave={() => {
                  setOpenDropdown(null);
                  setOpenSubmenu(null);
                  setOpenThird(null);
                }}
              >
                {tab.path ? (
                  <Link
                    to={tab.path}
                    className={`desktop-tab-btn ${isActive(tab.path) ? 'active' : ''}`}
                  >
                    {tab.label}
                  </Link>
                ) : (
                  <button className="desktop-tab-btn">
                    {tab.label}
                    {tab.children && <span className="dropdown-arrow">▾</span>}
                  </button>
                )}

                {tab.children && openDropdown === tab.id && (
                  <div className="desktop-dropdown">
                    {tab.children.map((group, idx) => (
                      <div
                        key={idx}
                        className="desktop-group"
                        onMouseEnter={() => setOpenSubmenu(group.label)}
                        onMouseLeave={() => {
                          setOpenSubmenu(null);
                          setOpenThird(null);
                        }}
                      >
                        <div className="desktop-group-title">{group.label}</div>
                        {group.items ? (
                          <div className="desktop-items">
                            {group.items.map((item) => (
                              <Link
                                key={item.id}
                                to={item.path}
                                className={`desktop-item ${isActive(item.path) ? 'active' : ''}`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ) : group.children ? (
                          <div className="desktop-submenu">
                            {group.children.map((sub, sIdx) => (
                              <div
                                key={sIdx}
                                className="desktop-subgroup"
                                onMouseEnter={() => setOpenThird(sub.label)}
                                onMouseLeave={() => setOpenThird(null)}
                              >
                                {sub.items ? (
                                  <>
                                    <div className="desktop-subgroup-title">
                                      {sub.label} ▸
                                    </div>
                                    {openThird === sub.label && (
                                      <div className="desktop-thirdmenu">
                                        {sub.items.map((item) => (
                                          <Link
                                            key={item.id}
                                            to={item.path}
                                            className={`desktop-item ${isActive(item.path) ? 'active' : ''}`}
                                          >
                                            {item.label}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <Link
                                    to={sub.path}
                                    className={`desktop-item ${isActive(sub.path) ? 'active' : ''}`}
                                  >
                                    {sub.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}