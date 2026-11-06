//maincontent.jsx // status: 'past' | 'upcoming' | 'active'
// Conference was November 2025 — all complete. Styled with clear timeline hierarchy.
const importantDates = [
  { title: 'Full paper Submission Deadline',                  originalValue: 'October 15, 2026', value: 'November 30, 2026',        status: 'active',   badge: 'upcoming' },
  { title: 'Final Notification of Acceptance',  value: 'January 30, 2027',   status: 'closed',   badge: 'upcoming' },
  { title: 'Registration Deadline',                      value: 'February 10, 2027',     status: 'closed',   badge: 'upcoming' },
  {title:  'camera ready submission', value:'February 28, 2027', status:'closed' , badge:'upcoming'},
  { title: 'Conference Dates',                  value: 'March 6–7, 2027', status: 'closed', badge: 'upcoming' },
];

const topics = [
  { icon: '🤖', label: 'Artificial Intelligence' }, 
  { icon: '🧠', label: 'Machine Learning' },
  { icon: '📊', label: 'Deep Learning' },
  { icon: '🔭', label: 'Astronomy & Astrophysics' },
  { icon: '⚡', label: 'Renewable Energy Systems' },
  { icon: '📡', label: 'Internet of Things' },
  { icon: '🔒', label: 'Cybersecurity' },
  { icon: '📈', label: 'Big Data Analytics' },
  { icon: '👁️', label: 'Computer Vision' },
  { icon: '💬', label: 'Natural Language Processing' },
  { icon: '☁️', label: 'Cloud & Edge Computing' },
  { icon: '🌱', label: 'Sustainable Technologies' },
  { icon: '🦾', label: 'Robotics & Automation' },
  { icon: '⚙️',  label: 'Smart Grids' },
  { icon: '🗄️', label: 'Data Mining' },
  { icon: '🔗', label: 'Blockchain Technology' },
];

const globalReach = [
  { flag: '🇮🇳', country: 'India',       count: '12,347', rank: 1 },
  { flag: '🇺🇸', country: 'USA',         count: '5,448',  rank: 2 },
  { flag: '🇨🇳', country: 'China',       count: '4,628',  rank: 3 },
  { flag: '🇧🇩', country: 'Bangladesh',  count: '627',    rank: 4 },
  { flag: '🇨🇦', country: 'Canada',      count: '949',    rank: 5 },
  { flag: '🇯🇵', country: 'Japan',       count: '627',    rank: 6 },
  { flag: '🇩🇪', country: 'Germany',     count: '769',    rank: 7 },
  { flag: '🇦🇺', country: 'Australia',   count: '773',    rank: 8 },
  { flag: '🇳🇿', country: 'New Zealand', count: '495',    rank: 9 },
];

export default function MainContent() {
  return (
    <>
      {/* ── AICARE WATERMARK ── */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 600,
        backgroundImage: "url('/images/logos/aicare.png')",
        backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        opacity: 0.055, zIndex: 0, pointerEvents: 'none',
      }} />

      {/* ══════════════════════════════════════
          TWO-COLUMN CONTENT
      ══════════════════════════════════════ */}
      <div className="main-content" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── CMT ACKNOWLEDGEMENT (Top Section) ── */}
        <p style={{
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: '600',
          color: '#1a3a6a',
          maxWidth: '900px',
          margin: '0 auto 36px auto',
          lineHeight: '1.6',
          padding: '0 20px'
        }}>
          The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
        </p>

        <div className="content-row">

          {/* Left column */}
          <div>
            <div className="content-box">
              <h2 className="section-title">Welcome to AICARE 2027</h2>
              <p>
                The <strong>2nd International Conference on Artificial Intelligence for Computing,
                Astronomy and Renewable Energy (AICARE 2027)</strong> is being organized by the
                Centre Of Excellence in Renewable Energy and the Centre Of Excellence in Astronomy
                at UEM Kolkata. The conference brings together leading minds from academia, research
                laboratories, and the technology industry to advance the frontiers of AI-driven
                solutions across multiple engineering disciplines.
              </p>
              <p style={{ marginTop: 14 }}>
                Participants from academia, industry, and government agencies come together to present
                their research findings, discuss challenges, and propose innovative solutions. Through
                keynote speeches, technical sessions, and networking opportunities, the conference
                aims to stimulate interdisciplinary discussions. All accepted and presented papers
                will be submitted for inclusion in the <strong>IEEE Xplore Digital Library</strong>.
              </p>
            </div>

            <div className="content-box">
              <h2 className="section-title">About the Institution</h2>
              <p>
                The <strong>University of Engineering &amp; Management (UEM), Kolkata</strong> stands
                as one of Eastern India's most distinguished centres of higher education, consistently
                recognised for its academic rigour, research output, and industry-aligned curriculum.
                Established under the aegis of the <strong>IEM-UEM Group</strong> — founded by
                Padma Bhushan awardee Prof. (Dr.) Satyajit Chakrabarti — the institution has earned
                top positions in the list of Best Engineering Colleges of West Bengal and ranks highly
                among leading private universities in India.
              </p>
              <p style={{ marginTop: 14 }}>
                Spread across a sprawling, state-of-the-art campus in New Town, Kolkata, UEM offers
                modern laboratories, dedicated research centres, a fully digitised library, and
                innovation hubs that foster entrepreneurial thinking and real-world problem solving.
              </p>
              <p style={{ marginTop: 14 }}>
                UEM offers a comprehensive blend of hardware and software programmes enabling deep
                expertise in <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>,{' '}
                <strong>IoT</strong>, <strong>Renewable Energy Systems</strong>,{' '}
                <strong>Cloud Computing</strong>, <strong>Cybersecurity</strong>, and{' '}
                <strong>Astronomy &amp; Astrophysics</strong>. The two flagship Centres of Excellence
                actively drive interdisciplinary research bridging engineering, science, and sustainability.
              </p>
              <p style={{ marginTop: 14 }}>
                With a distinguished faculty and strong global collaborations, UEM maintains active
                partnerships with leading international universities, research organisations, and
                technology enterprises. AICARE 2027 embodies UEM's vision: a global platform where
                academia and industry converge to shape the future of technology.
              </p>
            </div>
          </div>

          {/* ── SIDEBAR — Important Dates (Clean) ── */}
          <div>
            <div className="sidebar-box">

              {/* Header */}
              <h3 className="section-title" style={{ fontSize: '1.15rem' }}>
                Important Dates
              </h3>

              {/* Slim note */}
              <p style={{
                fontSize: 11.5,
                color: '#888',
                textAlign: 'left',
                marginBottom: 8,
                letterSpacing: '0.3px',
                lineHeight: 1.5,
              }}>
                AICARE 2027 — All milestones.
              </p>

              {/* Timeline items */}
              <div style={{ marginTop: 4 }}>
                {importantDates.map(item => (
                  <div key={item.title} className="date-item">

                    <div className="date-item-body">
                      <div className="date-title">{item.title}</div>
                      <div className="date-value">
                        {item.originalValue ? (
                          <>
                            <span style={{ textDecoration: 'line-through', color: '#d9534f', marginRight: '6px', fontSize: '0.9em' }}>
                              {item.originalValue}
                            </span>
                            <span style={{ color: '#28a745', fontWeight: 700 }}>{item.value}</span>
                          </>
                        ) : (
                          item.value
                        )}
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════
          GLOBAL REACH
      ══════════════════════════════════════ */}
      <section className="global-reach-section">
        <div className="global-reach-pattern" />
        <div className="global-reach-inner">
          <div className="global-reach-header">
            <div className="global-reach-title-row">
              <div className="global-reach-rule" />
              <h2 className="global-reach-title">Global Reach</h2>
              <div className="global-reach-rule" />
            </div>
            <p className="global-reach-sub">Connecting researchers and professionals from around the world</p>
          </div>

          <div className="global-reach-layout">
            <div className="country-grid">
              {globalReach.map(c => (
                <div key={c.country} className={`country-card${c.active ? ' country-card--active' : ''}`}>
                  <div className="country-card__rank">{c.rank}</div>
                  <div className="country-card__flag">{c.flag}</div>
                  <div className="country-card__pill">
                    <div className="country-card__count">{c.count}</div>
                    <div className="country-card__label">participants</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="stats-panel">
              <div className="stats-panel__block">
                <div className="stats-panel__eyebrow">Total Worldwide Visits</div>
                <div className="stats-panel__big">
                  <span className="stats-panel__num">26,663</span>
                  <span className="stats-panel__unit">visitors</span>
                </div>
                <div className="stats-panel__bar" />
              </div>
              <div className="stats-panel__block">
                <div className="stats-panel__eyebrow">Daily Average Visits</div>
                <div className="stats-panel__big">
                  <span className="stats-panel__num stats-panel__num--green">10</span>
                  <span className="stats-panel__unit">per day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CAMPUS BG SECTION
      ══════════════════════════════════════ */}
      <section className="campus-section">
        <img
          src="/images/campus/uem_campus.jpg"
          alt="" aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            filter: 'brightness(0.18) saturate(0.4)',
            zIndex: 0, display: 'block',
          }}
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(120deg, rgba(5,14,45,0.55) 0%, rgba(5,14,45,0.2) 50%, rgba(5,14,45,0.55) 100%)' }} />

        <div className="campus-section-inner">
          <h2 className="campus-heading">
            <span className="campus-heading-gold">Paper</span> Submission
          </h2>
          <div className="campus-submission-grid">
            <div>
              <p className="campus-body">
                Authors are invited to submit original, unpublished research papers strictly
                following the <strong>IEEE two-column conference template</strong>. All papers
                must be submitted exclusively through the Microsoft CMT portal before the stated deadline.
              </p>
              <p className="campus-body" style={{ marginTop: 14 }}>
                Each submission will undergo a rigorous <strong>double-blind peer review</strong> by
                at least three members of the Technical Program Committee. Authors must ensure that
                submitted papers do not contain any identifying information — all author names,
                affiliations, and acknowledgements must be removed from the manuscript prior to submission.
              </p>
              <p className="campus-body" style={{ marginTop: 14 }}>
                The maximum page limit is <strong>6 pages</strong> including all references, figures,
                and tables, formatted strictly per IEEE guidelines. Up to 2 additional pages may be
                included with an extra-page charge payable at the time of registration.
              </p>
            </div>
            <div>
              <p className="campus-body">
                Upon acceptance, at least one author must complete a full registration and present
                the paper at the conference for it to be included in the proceedings and submitted
                to <strong>IEEE Xplore</strong> for indexing. Extended versions of selected papers
                will be invited for submission to partner journals.
              </p>
              
              <p className="campus-body" style={{ marginTop: 14 }}>
                All submitted manuscripts are screened using IEEE CrossCheck powered by iThenticate.
                Plagiarism, self-plagiarism, and duplicate submissions are strictly prohibited and
                will result in immediate rejection without review.
              </p>
              <p className="campus-body" style={{ marginTop: 14 }}>Submission Type:</p>
              <a href="#" className="campus-template-link" style={{ marginTop: 8 }}>
                📄 IEEE Full Paper (Publication and Presentation) Template
              </a>
              <div className="campus-btn-row">
                <a href="#" className="campus-btn-outline">⬇ Download Template</a>
                <a href="https://cmt3.research.microsoft.com/AICARE2027" target="_blank" rel="noreferrer" className="campus-btn">↗ Submit via CMT</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TOPICS — WHITE BACKGROUND
      ══════════════════════════════════════ */}
      <section className="topics-white-section">
        <div className="topics-white-dots" />
        <div className="topics-white-inner">
          <div className="topics-white-header">
            <div className="topics-scope-label">
              <span className="topics-scope-bar" />
              Scope
            </div>
            <h2 className="topics-white-title">Conference Topics</h2>
            <p className="topics-white-sub">
              AICARE 2027 welcomes original research across — but not limited to — the following areas of study:
            </p>
          </div>
          <div className="topics-white-chips">
            {topics.map(t => (
              <span key={t.label} className="topic-chip-white">
                <span className="topic-chip-white__icon">{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}