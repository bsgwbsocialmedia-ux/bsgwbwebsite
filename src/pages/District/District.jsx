import { useState } from 'react';
import './District.css';

const districts = [
  {
  id: 'kolkata',
  name: 'Kolkata',
  description: 'District Association of Kolkata Bharat Scouts and Guides West Bengal',

  contacts: [
    {
      name: 'GOURANGO SARKAR',
      designation: 'District Secretary',
      phone: '+919830590622',
      // email: 'example@email.com'
    },
    {
      name: 'ABHISHEK MUKHERJEE',
      designation: 'District Organising Commissioner',
      phone: '+918017376862',
      // email: 'example@email.com'
    }
  ],

  localAssociations: [

    {
      id: 'kolkata-la-1',
      name: 'NORTH KOLKATA LOCAL ASSOCIATION',
      description: 'Local Association under Kolkata District Association',
      contacts: [
        {
          name: 'LA Member Name',
          designation: 'Secretary',
          phone: '+91XXXXXXXXXX',
          email: 'example@email.com'
        }
      ]
    },

    {
      id: 'kolkata-la-2',
      name: 'SOUTH KOLKATA LOCAL ASSOCIATION',
      description: 'Local Association under Kolkata District Association',
      contacts: [
        {
          name: 'LA Member Name',
          designation: 'Secretary',
          phone: '+91XXXXXXXXXX',
          email: 'example@email.com'
        }
      ]
    },

    {
      id: 'kolkata-la-3',
      name: 'LA Name 3',
      description: 'Local Association under Kolkata District Association',
      contacts: []
    },

    {
      id: 'kolkata-la-4',
      name: 'LA Name 4',
      description: 'Local Association under Kolkata District Association',
      contacts: []
    },

    {
      id: 'kolkata-la-5',
      name: 'LA Name 5',
      description: 'Local Association under Kolkata District Association',
      contacts: []
    }

  ]
},
  {
    id: 'howrah',
    name: 'Howrah',
    description: 'District Association of Kolkata Bharat Scouts and Guides West Bengal',
    contacts: [],
    localAssociations: []
  },
  {
    id: 'hooghly',
    name: 'Hooghly',
    description: 'District Association of Kolkata Bharat Scouts and Guides West Bengal',
    contacts: [],
    localAssociations: []
  },
  {
    id: 'north-24-parganas',
    name: 'North 24 Parganas',
    description: 'District Association of Kolkata Bharat Scouts and Guides West Bengal',
    contacts: [],
    localAssociations: []
  },
  {
    id: 'south-24-parganas',
    name: 'South 24 Parganas',
    description: 'District Association of Kolkata Bharat Scouts and Guides West Bengal',
    contacts: [],
    localAssociations: []
  },
  {
    id: 'purba-bardhaman',
    name: 'Purba Bardhaman',
    description: 'District Association of Kolkata Bharat Scouts and Guides West Bengal',
    contacts: [],
    localAssociations: []
  },
  {
    id: 'paschim-bardhaman',
    name: 'Paschim Bardhaman',
    description: 'District Association of Kolkata Bharat Scouts and Guides West Bengal',
    contacts: [],
    localAssociations: []
  },
  {
    id: 'maldah',
    name: 'Maldah',
    description: 'District Association of Kolkata Bharat Scouts and Guides West Bengal',
    contacts: [],
    localAssociations: []
  },
  {
    id: 'jalpaiguri',
    name: 'Jalpaiguri',
    description: 'District Association of Kolkata Bharat Scouts and Guides West Bengal',
    contacts: [],
    localAssociations: []
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    description: 'District Association of Kolkata Bharat Scouts and Guides West Bengal',
    contacts: [],
    localAssociations: []
  },
  {
    id: 'alipurduar',
    name: 'Alipurduar',
    description: 'District Association of Kolkata Bharat Scouts and Guides West Bengal',
    contacts: [],
    localAssociations: []
  }
];

const independentLocalAssociations = [
 {
    id: 'independent-la-1',
    name: 'LOCAL ASSOCIATION NAME',
    description: 'Independent Local Association of Bharat Scouts and Guides',
    contacts: [
      {
        name: 'PERSON NAME',
        designation: 'Secretary',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      },
      {
        name: 'SECOND PERSON',
        designation: 'President',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      }
    ]
  },

  {
    id: 'independent-la-2',
    name: 'LOCAL ASSOCIATION NAME',
    description: 'Independent Local Association of Bharat Scouts and Guides',
    contacts: [
      {
        name: 'PERSON NAME',
        designation: 'Secretary',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      },
      {
        name: 'SECOND PERSON',
        designation: 'President',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      }
    ]
  },

  {
    id: 'independent-la-3',
    name: 'LOCAL ASSOCIATION NAME',
    description: 'Independent Local Association of Bharat Scouts and Guides',
    contacts: [
      {
        name: 'PERSON NAME',
        designation: 'Secretary',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      },
      {
        name: 'SECOND PERSON',
        designation: 'President',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      }
    ]
  },

  {
    id: 'independent-la-4',
    name: 'LOCAL ASSOCIATION NAME',
    description: 'Independent Local Association of Bharat Scouts and Guides',
    contacts: [
      {
        name: 'PERSON NAME',
        designation: 'Secretary',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      },
      {
        name: 'SECOND PERSON',
        designation: 'President',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      }
    ]
  },

  {
    id: 'independent-la-5',
    name: 'LOCAL ASSOCIATION NAME',
    description: 'Independent Local Association of Bharat Scouts and Guides',
    contacts: [
      {
        name: 'PERSON NAME',
        designation: 'Secretary',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      },
      {
        name: 'SECOND PERSON',
        designation: 'President',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      }
    ]
  },

  {
    id: 'independent-la-6',
    name: 'LOCAL ASSOCIATION NAME',
    description: 'Independent Local Association of Bharat Scouts and Guides',
    contacts: [
      {
        name: 'PERSON NAME',
        designation: 'Secretary',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      },
      {
        name: 'SECOND PERSON',
        designation: 'President',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      }
    ]
  },

{
    id: 'independent-la-7',
    name: 'LOCAL ASSOCIATION NAME',
    description: 'Independent Local Association of Bharat Scouts and Guides',
    contacts: [
      {
        name: 'PERSON NAME',
        designation: 'Secretary',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      },
      {
        name: 'SECOND PERSON',
        designation: 'President',
        phone: '+919XXXXXXXXX',
        email: 'example@email.com'
      }
    ]
  },

];

export default function District() {
  const [selected, setSelected] = useState(null);

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = '';
  };

  const openModal = (item) => {
    setSelected(item);
    document.body.style.overflow = 'hidden';
  };

  const callMember = (phone) => {
    if (phone) window.location.href = `tel:${phone}`;
  };

  const emailMember = (email) => {
    if (email) window.location.href = `mailto:${email}`;
  };

  return (
    <div className="district-page">

      <section className="district-hero">
        <div className="district-hero-content">
          <span className="district-eyebrow">
            BHARAT SCOUTS & GUIDES • WEST BENGAL
          </span>

          <h1>West Bengal State Associations</h1>

          <p>
            District and Local Associations across West Bengal
          </p>
        </div>
      </section>

      <section className="association-intro">
        <div className="association-intro-content">
          <span className="section-eyebrow">
            ASSOCIATION DIRECTORY
          </span>

          <h2>Our Associations</h2>

          <p>
            Explore District Associations and their Local
            Associations across West Bengal.
          </p>
        </div>

        <div className="association-count">
          <div className="count-box">
            <strong>{districts.length}</strong>
            <span>Districts</span>
          </div>

          <div className="count-box">
            <strong>
              {districts.reduce(
                (total, district) =>
                  total + district.localAssociations.length,
                0
              )}
            </strong>
            <span>District LAs</span>
          </div>

          <div className="count-box">
            <strong>{independentLocalAssociations.length}</strong>
            <span>Independent LAs</span>
          </div>
        </div>
      </section>

      <section className="association-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              DISTRICT LEVEL
            </span>

            <h2>District Associations</h2>
          </div>

          <span className="section-count">
            {districts.length} Associations
          </span>
        </div>

        <div className="association-grid">
          {districts.map((district) => (
            <button
              type="button"
              className="association-card"
              key={district.id}
              onClick={() => openModal(district)}
            >
              <div className="card-top">
                <span className="association-badge">
                  DISTRICT
                </span>

                <span className="card-arrow">→</span>
              </div>

              <div className="association-icon">D</div>

              <h3>{district.name}</h3>

              <p>{district.description}</p>

              <div className="card-footer">
                <span>
                  {district.localAssociations.length} Local
                  Associations
                </span>

                <span>→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {independentLocalAssociations.length > 0 && (
        <section className="association-section local-section">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                LOCAL LEVEL
              </span>

              <h2>Independent Local Associations</h2>
            </div>
          </div>

          <div className="association-grid">
            {independentLocalAssociations.map((la) => (
              <button
                type="button"
                className="association-card local-card"
                key={la.id}
                onClick={() => openModal(la)}
              >
                <div className="card-top">
                  <span className="association-badge local-badge">
                    LOCAL ASSOCIATION
                  </span>

                  <span className="card-arrow">→</span>
                </div>

                <div className="association-icon local-icon">
                  LA
                </div>

                <h3>{la.name}</h3>

                <p>{la.description}</p>

                <div className="card-footer">
                  <span>View Association</span>
                  <span>→</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {selected && (
        <div
          className="association-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="association-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="modal-label">
                  {selected.type || 'Association'}
                </span>

                <h2>{selected.name}</h2>

                {selected.district && (
                  <p>Under {selected.district} District</p>
                )}
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            <div className="modal-description">
              <p>{selected.description}</p>
            </div>

            {selected.localAssociations?.length > 0 && (
              <div className="members-section">
                <div className="members-heading">
                  <span className="section-eyebrow">
                    LOCAL ASSOCIATIONS
                  </span>

                  <h3>
                    Local Associations under {selected.name}
                  </h3>
                </div>

                <div className="district-local-grid">
                  {selected.localAssociations.map((la) => (
                    <button
                      type="button"
                      className="district-local-card"
                      key={la.id}
                      onClick={() => openModal(la)}
                    >
                      <div className="district-local-icon">
                        LA
                      </div>

                      <div>
                        <h4>{la.name}</h4>
                        <p>{la.description}</p>
                      </div>

                      <span>→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="members-section">
              <div className="members-heading">
                <span className="section-eyebrow">
                  CONTACT DIRECTORY
                </span>

                <h3>Association Members</h3>
              </div>

              {selected.contacts?.length > 0 ? (
                <div className="members-list">
                  {selected.contacts.map((member, index) => (
                    <div
                      className="member-card"
                      key={`${member.name}-${index}`}
                    >
                      <div className="member-avatar">
                        {member.name
                          ? member.name.charAt(0).toUpperCase()
                          : 'M'}
                      </div>

                      <div className="member-info">
                        <h4>{member.name}</h4>

                        {member.designation && (
                          <span>{member.designation}</span>
                        )}

                        <div className="member-contact">
                          {member.phone && (
                            <span>{member.phone}</span>
                          )}

                          {member.email && (
                            <span>{member.email}</span>
                          )}
                        </div>
                      </div>

                      <div className="member-actions">
                        {member.phone && (
                          <button
                            type="button"
                            onClick={() =>
                              callMember(member.phone)
                            }
                          >
                            Call
                          </button>
                        )}

                        {member.email && (
                          <button
                            type="button"
                            onClick={() =>
                              emailMember(member.email)
                            }
                          >
                            Email
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-contact-data">
                  <h4>Contact information coming soon</h4>

                  <p>
                    Official association member information
                    will be updated here.
                  </p>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <span>
                Bharat Scouts & Guides — West Bengal
              </span>

              <button
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}