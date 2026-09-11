import "../styles/page.css";

const committeeData = [
  {
    members: [{ name: "Prof. Banani Chakrabarty", role: "Chief Patron" }],
  },
  {
    members: [{ name: "Prof. Dr. Satyajit Chakrabarty", role: "Patron" }],
  },
  {
    members: [
      { name: "Prof. Dr. Kamakhya Prasad Ghatak", role: "Co-Patron" },
      { name: "Prof. Dr. Sukalyan Goswami", role: "Co-Patron" },
      { name: "Prof. Dr. Abir Chattapadhyay", role: "Co-Patron" },
    ],
  },
  {
    members: [
      { name: "Prof. Dr. Emilia Balas Valentina", role: "General Chair" },
      { name: "Prof. Dr. Rajashree Paul", role: "Convener" },
      { name: "Prof. Dr. Sudipta Basu Pal", role: "Conference Chair" },
      { name: "Prof. Dr. Anirban Das", role: "Organizing Chair" },
      { name: "Prof. Sujata Ghatak", role: "Organizing Co-Chair" },
      { name: "Prof. Dr. Kuheli Goswami", role: "Organizing Co-Chair" },
    ],
  },
  {
    members: [{ name: "Prof. Dr. Chiradeep Mukherjee", role: "TPC Chair" }],
  },
  {
    members: [
      { name: "Prof. Dr. Maumita Das", role: "TPC Co-Chair" },
      { name: "Prof. Dr. Koustov Mondal", role: "TPC Co-Chair" },
    ],
  },
  {
    members: [{ name: "Prof. Dr. Arnab Ghosh", role: "Publication Chair" }],
  },
  {
    members: [
      { name: "Prof. Dr. Arijeet Ghosh", role: "Publication Co-Chair" },
      { name: "Prof. Dr. Sananda Pal", role: "Publication Co-Chair" },
      { name: "Prof. Dr. Rajarshi Mukhopadhyay", role: "Publication Co-Chair" },
    ],
  },
  {
    members: [{ name: "Prof. Dr. Tanay Pramanik", role: "Publicity Chair" }],
  },
  {
    members: [
      { name: "Prof. Dr. Keya De Mukhopadhyay", role: "Publicity Co-Chair" },
      { name: "Prof. Dr. Moupiya Ghosh", role: "Publicity Co-Chair" },
    ],
  },
  {
    members: [
      { name: "Prof. Dr. Sayantan Sil", role: "Finance Chair" },
      { name: "Prof. Dr. Arkabrata Gupta", role: "Finance Co-Chair" },
    ],
  },
  {
    members: [{ name: "Prof. Dr. Abhishek Haldar", role: "Hospitality Chair" }],
  },
  {
    members: [
      { name: "Prof. Subrata Mondal", role: "Hospitality Co-Chair" },
      { name: "Prof. Isita Chandra", role: "Hospitality Co-Chair" },
      { name: "Prof. Pradipta Sarkar", role: "Hospitality Co-Chair" },
      { name: "Prof. Dr. Suparna Sau", role: "Hospitality Co-Chair" },
    ],
  },
  {
    members: [
      {
        name: "Prof. Dr. Goutam Dalapati",
        role: "Industry Chair",
        org: "CEO - Sunkonnect, Singapore",
      },
    ],
  },
  {
    title: "IEEE Kolkata Section Steering Committee",
    members: [
      { name: "Prof. Dr. Debangshu Dey", role: "Member" },
      { name: "Prof. Dr. Susanta Ray", role: "Member" },
      { name: "Prof. Dr. Sovan Dalai", role: "Member" },
      { name: "Prof. Dr. Tridibesh Nag", role: "Member" },
    ],
  },
];

export default function OrganizingCommittee() {
  return (
    <div
      className="page-wrapper"
      style={{ position: "relative", backgroundColor: "#fdfdfd" }}
    >
      {/* Watermark */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.04,
          width: "60vw",
          height: "60vw",
          backgroundImage: 'url("/aicare.png")',
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(100%)",
        }}
      />

      {/* Dot Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(#d1d9e6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.3,
        }}
      />

      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">AICARE Committee</span>
          <h1>Organizing Committee</h1>
          <p>
            Collaborating across disciplines to ensure excellence in research
            and innovation.
          </p>
        </div>
      </div>

      {/* Body */}
      <div
        className="page-body"
        style={{ position: "relative", zIndex: 2 }}
      >
        {committeeData.map((group, idx) => (
          <div key={idx} style={{ marginBottom: "48px" }}>
            {group.title ? (
              /* ------------------ Steering Committee ------------------ */
              <div
                style={{
                  maxWidth: "950px",
                  margin: "0 auto",
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "32px",
                  borderTop: "5px solid #0056b3",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    marginBottom: "28px",
                    color: "#1a4a8a",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {group.title}
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit,minmax(260px,1fr))",
                    gap: "18px",
                  }}
                >
                  {group.members.map((member, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#f8fbff",
                        borderLeft: "5px solid #0056b3",
                        borderRadius: "12px",
                        padding: "18px",
                        transition: ".3s",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "18px",
                          fontWeight: "700",
                          color: "#1a4a8a",
                          fontFamily:
                            "'Barlow Condensed', sans-serif",
                          textTransform: "uppercase",
                        }}
                      >
                        {member.name}
                      </div>

                      <div
                        style={{
                          width: "35px",
                          height: "2px",
                          background: "#e8a020",
                          margin: "10px 0",
                        }}
                      />

                      <div
                        style={{
                          color: "#666",
                          fontSize: "15px",
                          fontWeight: 600,
                        }}
                      >
                        {member.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* ------------------ Normal Cards ------------------ */
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "24px",
                }}
              >
                {group.members.map((m, mIdx) => (
                  <div
                    className="advisor-card"
                    key={mIdx}
                    style={{
                      flex: "0 1 320px",
                      padding: "24px",
                      textAlign: "center",
                      cursor: "default",
                      backgroundColor: "rgba(255,255,255,0.9)",
                      borderTop: "4px solid #0056b3",
                    }}
                  >
                    <div className="advisor-info">
                      <div
                        style={{
                          fontSize: "18px",
                          fontWeight: "700",
                          fontFamily:
                            "'Barlow Condensed', sans-serif",
                          textTransform: "uppercase",
                          background:
                            "linear-gradient(90deg,#0056b3 0%,#8b5cf6 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          display: "inline-block",
                        }}
                      >
                        {m.name}
                      </div>

                      <div
                        style={{
                          height: "2px",
                          width: "30px",
                          background: "#e8a020",
                          margin: "10px auto",
                          borderRadius: "2px",
                        }}
                      />

                      <div
                        className="advisor-title"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#1a4a8a",
                        }}
                      >
                        {m.role}
                      </div>

                      {m.org && (
                        <div
                          className="advisor-org"
                          style={{
                            marginTop: "4px",
                            fontSize: "12px",
                            color: "#666",
                          }}
                        >
                          {m.org}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}