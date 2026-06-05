import React, { useState, useEffect } from 'react';
import './InfoPages.css';

import About from '../../pages/About/About';
import Gallery from '../../pages/Gallery/Gallery';
import District from '../../pages/District/District';
import News from '../../pages/News/News';
import Awards from '../../pages/Awards/Awards';
import Shop from '../../pages/Shop/Shop';
import Contact from '../../pages/Contact/Contact';

import PresentLeadership from '../../pages/Organization/PresentLeadership/PresentLeadership';
import OurTeam from '../../pages/Organization/OurTeam/OurTeam';
import Patron from '../../pages/Organization/Patron/Patron';
import DistrictAssociation from '../../pages/Organization/DistrictAssociation/DistrictAssociation';
import ByeLaws from '../../pages/Organization/ByeLaws/ByeLaws';
import FinancialPolicy from '../../pages/Organization/FinancialPolicy/FinancialPolicy';
import TypeOfMembership from '../../pages/Organization/Membership/TypeOfMembership';

import Cub from '../../pages/Programme/YouthProgramme/Cub/Cub';
import Bulbul from '../../pages/Programme/YouthProgramme/Bulbul/Bulbul';
import Scout from '../../pages/Programme/YouthProgramme/Scout/Scout';
import Guide from '../../pages/Programme/YouthProgramme/Guide/Guide';
import Rover from '../../pages/Programme/YouthProgramme/Rover/Rover';
import Ranger from '../../pages/Programme/YouthProgramme/Ranger/Ranger';

import UnitLeaders from '../../pages/Programme/AdultProgramme/UnitLeaders/UnitLeaders';
import AdultLeaders from '../../pages/Programme/AdultProgramme/AdultLeaders/AdultLeaders';
import LeadersOfAdult from '../../pages/Programme/AdultProgramme/LeadersAdult/LeadersAdult';

import YouthAnnualPlan from '../../pages/Programme/AnnualPlan/YouthAnnualPlan/YouthAnnualPlan';
import AdultAnnualPlan from '../../pages/Programme/AnnualPlan/AdultAnnualPlan/AdultAnnualPlan';

// ---- Tab configuration (same as before) ----
const TABS = [
  { id: 'about', label: 'About Us', icon: '🏛️' },
  { id: 'gallery', label: 'Gallery', icon: '🖼️' },
  { id: 'district', label: 'District', icon: '📍' },
  { id: 'news', label: 'News', icon: '📰' },
  { id: 'awards', label: 'Awards', icon: '🏆' },
  { id: 'shop', label: 'Shop', icon: '🛍️' },
  {
    id: 'programme',
    label: 'Programme & Annual Plan',
    icon: '📋',
    children: [
      {
        label: 'Youth Programme',
        items: [
          { id: 'cub', label: 'Cub' },
          { id: 'bulbul', label: 'Bulbul' },
          { id: 'scout', label: 'Scout' },
          { id: 'guide', label: 'Guide' },
          { id: 'rover', label: 'Rover' },
          { id: 'ranger', label: 'Ranger' },
        ],
      },
      {
        label: 'Adult Programme',
        items: [
          { id: 'unitleaders', label: 'Unit Leaders' },
          { id: 'adultleaders', label: 'Adult Leaders' },
          { id: 'leadersofadult', label: 'Leaders Of Adult' },
        ],
      },
      {
        label: 'Annual Plan',
        items: [
          { id: 'youthannualplan', label: 'Youth Annual Plan' },
          { id: 'adultannualplan', label: 'Adult Annual Plan' },
        ],
      },
    ],
  },
  {
    id: 'organization',
    label: 'Organization',
    icon: '🏢',
    children: [
      {
        label: 'Organgram',
        children: [
          {
            label: 'State Association',
            items: [
              { id: 'presentleadership', label: 'Present Leadership' },
              { id: 'ourteam', label: 'Our Team' },
              { id: 'patron', label: 'Patron' },
            ],
          },
          { id: 'districtassociation', label: 'District Association' },
        ],
      },
      {
        label: 'UP Rules',
        children: [
          { id: 'byelaws', label: 'Bye Laws' },
          { id: 'financialpolicy', label: 'Financial Policy' },
        ],
      },
      {
        label: 'Membership',
        children: [{ id: 'typeofmembership', label: 'Type Of Membership' }],
      },
    ],
  },
  { id: 'contact', label: 'Contact Us', icon: '☎️' },
];

// ---- Helper: render content panel ----
function renderPanel(activeTab, setActiveTab) {
  switch (activeTab) {
    case 'about': return <About />;
    case 'gallery': return <Gallery />;
    case 'district': return <District />;
    case 'news': return <News />;
    case 'awards': return <Awards />;
    case 'shop': return <Shop setActiveTab={setActiveTab} />;
    case 'contact': return <Contact />;
    case 'presentleadership': return <PresentLeadership />;
    case 'ourteam': return <OurTeam />;
    case 'patron': return <Patron />;
    case 'districtassociation': return <DistrictAssociation />;
    case 'byelaws': return <ByeLaws />;
    case 'financialpolicy': return <FinancialPolicy />;
    case 'typeofmembership': return <TypeOfMembership />;
    case 'cub': return <Cub />;
    case 'bulbul': return <Bulbul />;
    case 'scout': return <Scout />;
    case 'guide': return <Guide />;
    case 'rover': return <Rover />;
    case 'ranger': return <Ranger />;
    case 'unitleaders': return <UnitLeaders />;
    case 'adultleaders': return <AdultLeaders />;
    case 'leadersofadult': return <LeadersOfAdult />;
    case 'youthannualplan': return <YouthAnnualPlan />;
    case 'adultannualplan': return <AdultAnnualPlan />;
    default: return <About />;
  }
}

// ---- Desktop: horizontal hover dropdown ----
function DesktopNav({ activeTab, setActiveTab }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openThird, setOpenThird] = useState(null);

  return (
    <div className="desktop-nav">
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
          <button
            className={`desktop-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => !tab.children && setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            {tab.label}
            {tab.children && <span className="dropdown-arrow">▼</span>}
          </button>

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
                    // flat list (e.g. Youth Programme items)
                    <div className="desktop-items">
                      {group.items.map((item) => (
                        <button
                          key={item.id}
                          className={`desktop-item ${activeTab === item.id ? 'active' : ''}`}
                          onClick={() => setActiveTab(item.id)}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  ) : group.children ? (
                    // second level (Organgram → State Association / District Association)
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
                                {sub.label} ›
                              </div>
                              {openThird === sub.label && (
                                <div className="desktop-thirdmenu">
                                  {sub.items.map((item) => (
                                    <button
                                      key={item.id}
                                      className={`desktop-item ${activeTab === item.id ? 'active' : ''}`}
                                      onClick={() => setActiveTab(item.id)}
                                    >
                                      {item.label}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <button
                              className={`desktop-item ${activeTab === sub.id ? 'active' : ''}`}
                              onClick={() => setActiveTab(sub.id)}
                            >
                              {sub.label}
                            </button>
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
  );
}

// ---- Mobile: accordion menu + drawer ----
function MobileNav({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedTabs, setExpandedTabs] = useState({});

  const toggleTab = (tabId) => {
    setExpandedTabs((prev) => ({ ...prev, [tabId]: !prev[tabId] }));
  };

  const renderTree = (items, level = 0) => {
    return items.map((item, idx) => {
      const hasChildren = item.children || item.items;
      const isExpanded = expandedTabs[item.label || item.id] || false;
      const itemId = item.id || item.label;

      if (hasChildren) {
        const childrenArray = item.children || item.items;
        return (
          <div key={idx} className="mobile-accordion-item" style={{ paddingLeft: `${level * 1}rem` }}>
            <div
              className="mobile-accordion-header"
              onClick={() => toggleTab(item.label || item.id)}
            >
              <span>{item.label}</span>
              <span className="accordion-arrow">{isExpanded ? '▲' : '▼'}</span>
            </div>
            {isExpanded && (
              <div className="mobile-accordion-body">
                {renderTree(childrenArray, level + 1)}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <button
            key={itemId}
            className={`mobile-item ${activeTab === itemId ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(itemId);
              setMenuOpen(false);
            }}
            style={{ paddingLeft: `${level * 1 + 0.5}rem` }}
          >
            {item.label}
          </button>
        );
      }
    });
  };

  return (
    <div className="mobile-nav">
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰ Menu
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
                    <span>
                      <span className="tab-icon">{tab.icon}</span> {tab.label}
                    </span>
                    <span className="accordion-arrow">
                      {expandedTabs[tab.id] ? '▲' : '▼'}
                    </span>
                  </div>
                  {expandedTabs[tab.id] && (
                    <div className="mobile-accordion-body">
                      {renderTree(tab.children, 1)}
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <button
                  key={tab.id}
                  className={`mobile-direct-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMenuOpen(false);
                  }}
                >
                  <span className="tab-icon">{tab.icon}</span> {tab.label}
                </button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

// ---- Main Component ----
export default function InfoPages() {
  const [activeTab, setActiveTab] = useState('about');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="infopages-section">
      {isMobile ? (
        <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <DesktopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      <div className="infopages-content" key={activeTab}>
        {renderPanel(activeTab, setActiveTab)}
      </div>
    </section>
  );
}