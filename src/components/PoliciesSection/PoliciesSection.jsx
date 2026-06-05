import { useEffect, useRef, useState } from 'react';
import './PoliciesSection.css';

function ChildProtectionIcon() {
  return (
    <svg
      className="policy-icon-svg"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 6L12 18V38C12 54 24 67 40 72C56 67 68 54 68 38V18L40 6Z"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2"
      />

      <ellipse
        cx="28"
        cy="46"
        rx="8"
        ry="5"
        fill="rgba(255,255,255,0.5)"
        transform="rotate(-20 28 46)"
      />

      <ellipse
        cx="52"
        cy="46"
        rx="8"
        ry="5"
        fill="rgba(255,255,255,0.5)"
        transform="rotate(20 52 46)"
      />

      <circle
        cx="40"
        cy="32"
        r="7"
        fill="white"
        opacity="0.9"
      />

      <path
        d="M33 48 Q40 56 47 48"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />

      <circle
        cx="56"
        cy="20"
        r="4"
        fill="var(--accent-light)"
        opacity="0.8"
      />
    </svg>
  );
}

function SafeFromHarmLogo() {

  const cells = [
    { text: 'SAFE', bg: '#e63946' },
    { text: 'FROM', bg: '#2ec4b6' },
    { text: 'HARM', bg: '#8338ec' },
    { text: '⚜', bg: '#1d3557' }
  ];

  return (
    <div className="sfh-logo">

      {cells.map((cell, index) => (
        <div
          key={index}
          className="sfh-cell"
          style={{
            background: cell.bg
          }}
        >
          {cell.text}
        </div>
      ))}

    </div>
  );
}

export default function PoliciesSection() {

  const sectionRef = useRef(null);

  const [expandedPolicy, setExpandedPolicy] =
    useState(null);

  const togglePolicy = (id) => {

    setExpandedPolicy(
      expandedPolicy === id
        ? null
        : id
    );

  };

  useEffect(() => {

    const el = sectionRef.current;

    if (!el) return;

    const observer =
      new IntersectionObserver(

        ([entry]) => {

          if (entry.isIntersecting) {

            el.classList.add(
              'visible'
            );

          }

        },

        {
          threshold: 0.1
        }

      );

    observer.observe(el);

    return () => observer.disconnect();

  }, []);

  return (
    <section
      className="policies-section reveal"
      ref={sectionRef}
    >

      <div className="policies-inner">

        <div className="policies-top-label">

          <span>🛡️</span>

          <h2 className="section-heading">
            Our Policies
          </h2>

        </div>

        <div className="section-divider" />

        <div className="policies-grid">

          {/* Child Protection */}

          <div className="policy-panel">

            <div className="policy-icon-box">
              <ChildProtectionIcon />
            </div>

            <h2 className="policy-title">
              Child Protection Policy
            </h2>

            <p
              className={`policy-desc ${
                expandedPolicy === 1
                  ? 'expanded'
                  : ''
              }`}
            >

              Bharat Scouts & Guides is committed
              to the safety and well-being of every
              child in our movement. Our Child
              Protection Policy works towards the
              empowerment of adolescents, enabling
              them to negotiate improved outcomes
              of gender equality, health, and
              personal dignity.

              {expandedPolicy === 1 && (
                <>
                  <br />
                  <br />

                  We work with youth to create a
                  supportive environment in which
                  they are able to exercise and
                  access their rights and achieve
                  their full potential. Every Scout
                  leader is trained and bound by
                  this policy.

                  <br />
                  <br />

                  Additional safeguarding
                  procedures, reporting
                  mechanisms and awareness
                  programmes ensure a secure
                  environment for all members.
                </>
              )}

            </p>

            <button
              className="policy-readmore"
              onClick={() =>
                togglePolicy(1)
              }
            >

              {expandedPolicy === 1
                ? 'Read Less'
                : 'Read More'}

              <span className="policy-readmore-arrow">
                ›
              </span>

            </button>

          </div>

          {/* Safe From Harm */}

          <div className="policy-panel">

            <div className="policy-icon-box">
              <SafeFromHarmLogo />
            </div>

            <h2 className="policy-title">
              Safe From Harm Policy
            </h2>

            <p
              className={`policy-desc ${
                expandedPolicy === 2
                  ? 'expanded'
                  : ''
              }`}
            >

              Safe from Harm is a set of actions
              designed to make sure that every
              person involved in Scouting is
              responsible and committed to protect
              children and young people inside or
              outside the Movement.

              {expandedPolicy === 2 && (
                <>
                  <br />
                  <br />

                  Everyone can feel safe at any
                  time. If you want to learn more
                  about online safety, join our
                  Being Safe Online awareness
                  programme available to all
                  registered members and their
                  families.

                  <br />
                  <br />

                  The programme covers cyber
                  safety, responsible
                  communication, privacy
                  awareness and protection from
                  harmful online activities.
                </>
              )}

            </p>

            <button
              className="policy-readmore"
              onClick={() =>
                togglePolicy(2)
              }
            >

              {expandedPolicy === 2
                ? 'Read Less'
                : 'Read More'}

              <span className="policy-readmore-arrow">
                ›
              </span>

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}