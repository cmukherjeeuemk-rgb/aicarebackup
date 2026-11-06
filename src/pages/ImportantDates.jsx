import '../styles/page.css';

const dates = [
  { 
    label: 'Full Paper Submission Deadline',        
    originalDate: 'October 15, 2026',
    date: 'November 30, 2026',  
    status: 'upcoming' 
  },
  { label: 'Final Notification of Acceptance', date: 'January 30, 2027',  status: 'upcoming' },
  { label: 'Registration Deadline',            date: 'February 10, 2027',  status: 'upcoming' },
  { label: 'Camera-Ready Submission',          date: 'February 28, 2027',  status: 'upcoming' },
  { label: 'Conference Dates',                 date: 'March 6–7, 2027',   status: 'upcoming' },
];

export default function ImportantDates() {
  return (
    <div className="page-wrapper">

      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">Timeline</span>
          <h1>Important Dates</h1>
          <p>All deadlines are at 23:59 IST (Indian Standard Time).</p>
        </div>
      </div>

      <div className="page-body">

        {/* TIMELINE */}
        <div className="page-card">
          <h2>Submission Timeline</h2>

          {/* EXTENSION NOTICE */}
          <div style={{
            background: '#fff9e6',
            border: '1px solid #ffe58f',
            borderLeft: '4px solid #faad14',
            borderRadius: '6px',
            padding: '12px 16px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '14px',
            color: '#874d00'
          }}>
            <span style={{ fontSize: '18px' }}>📢</span>
            <div>
              <strong>Extension Notice:</strong> The Full Paper Submission Deadline has been extended from <span style={{ textDecoration: 'line-through', color: '#d9534f' }}>October 15, 2026</span> to <strong>November 30, 2026</strong>.
            </div>
          </div>

          <div className="timeline">
            {dates.map((item, i) => (
              <div className={`timeline-item ${item.status}`} key={i}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-label">{item.label}</span>
                  <span className="timeline-date">
                    {item.originalDate ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ color: '#d9534f', textDecoration: 'line-through' }}>
                          {item.originalDate}
                        </span>
                        <span style={{ color: '#28a745', fontWeight: 700 }}>
                          {item.date}
                        </span>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: '12px',
                          backgroundColor: '#e6f4ea',
                          color: '#137333',
                          border: '1px solid #b7e1cd',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          Extended
                        </span>
                      </span>
                    ) : (
                      <span>{item.date}</span>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NOTES */}
        <div className="page-card">
          <h2>Submission Notes</h2>

          <ul className="page-list">
            <li>Deadlines may be extended — check regularly.</li>
            <li>Late camera-ready papers will not be included.</li>
            <li>All times are in <strong>AoE (UTC−12)</strong>.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}