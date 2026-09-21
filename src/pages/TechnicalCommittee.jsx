import '../styles/page.css';

const tpcDataBatch2 = [
  "Dr. Anirban Mitra, HOD CSE, Amity University Kolkata",
  "Dr. Subir Gupta, HOD CSE AI ML, Haldia Institute of Technology",
  "Dr. Bikramjit Sarkar, HOD CSE, JIS College of Engineering",
  "Dr. Avijit Kumar Chaudhuri, Associate Professor, Brainware University",
  "Dr. Rahul Kumar Ghosh, Associate Professor, Brainware University",
  "Dr. Prantosh K. Paul, Assistant Professor CIS, Raiganj University",
  "Dr. Anjan Bandyopadhyay, Assistant Professor, KIIT University",
  "Dr. Souvik Pal, Associate Professor, Sister Nivedita University",
  "Dr. Kedar Nath Das, Associate Professor, NIT Silchar",
  "Dr. Amit Kumar Singh, Assistant Professor, Rajkiya Engineering College",
  "Dr. Chandan Kumar Chandam, Professor, Department of Electrical Engineering, IIEST Shibpur",
  "Prof. Sivaji Chakraborty, Professor, Jadavpur University",
  "Dr. Monojit Mitra, Professor, Electronics and Telecommunication Engineering",
  "Dr. Riya Sen, Geetanjali Institute of Technical Studies, Udaipur",
  "Dr. Sumana Kundu, Dr. B. C. Roy Engineering College, Durgapur",
  "Dr. Ravi Kant Kumar, SRM University, Andhra Pradesh",
  "Dr. Prabhat Kumar Upadhyay, Birla Institute of Technology",
  "Prof. Dr. Ayan Banerjee, Indian Institute of Engineering Science and Technology, Shibpur",
  "Mr. Aninda Sankar Shukla, Mindshare Global",
  "Dr. Suman De Sarkar, Associate Professor, IISER Kolkata",
  "Dr. Manas Roy, Assistant Professor, NIT Agartala",
  "Dr. Atanu Singha Roy, Associate Professor, NIT Meghalaya",
  "Dr. Animesh Samanta, Assistant Professor, Shiv Nadar University",
  "Dr. Ambrish Singh, Professor, Central University of Nagaland",
  "Dr. Goutam Pramanik, Scientist, UGC Division of Atomic Energy",
  "Dr. Sabyasachi Chatterjee, Assistant Professor, Department of ECE, Heritage Institute of Technology",
  "Dr. Kalyan Sundar Kola, Associate Professor, Dept of CSE, Brainware University",
  "Amitesh Das, Assistant Professor, ECE Department, Brainware University",
  "Rahmat Ali, FOUNDER & CEO, Illicium Motors Pvt Ltd",
  "Dr. Rajat Kumar Pal, University of Calcutta, Kolkata",
  "Dr. Nabendu Chaki, University of Calcutta",
  "Dr. Rajitha B, Motilal Nehru National Institute of Technology Allahabad",
  "Dr. Anirban Mukhopadhyay, University of Kalyani",
  "Dr. Debashish De, Maulana Abul Kalam Azad University of Technology",
  "Dr. Shivendra Shivani, Thapar University, Patiala",
  "Dr. Ekramul Hamid, Thapar University, Patiala",
  "Dr. Chintan Kumar Mandal, Jadavpur University",
  "Dr. Santi Prasad Maity, Indian Institute of Engineering Science and Technology, Shibpur",
  "Dr. Asish Kumar Mukhopadhyay, Professor Emeritus, IET Bundelkhand University",
  "Dr. Apurba Sarkar, Indian Institute of Engineering Science and Technology, Shibpur",
  "Dr. Jaya Sil, Indian Institute of Engineering Science and Technology, Shibpur",
  "Dr. Surajit Kumar Roy, Indian Institute of Engineering Science and Technology, Shibpur",
  "Dr. Nidul Sinha, National Institute of Technology, Silchar",
  "Dr. Annapa B, National Institute of Technology Karnataka, Surathkal",
  "Dr. Malay Kule, Indian Institute of Engineering Science and Technology, Shibpur",
  "Dr. Sankhayan Choudhury, University of Calcutta",
  "Dr. Sunirmal Khatua, University of Calcutta",
  "Dr. Pritha Banerjee, University of Calcutta",
  "Dr. Rajib Das, University of Calcutta",
  "Dr. Bansibadan Maji, National Institute of Technology, Durgapur",
  "Dr. Tanvi Agrawal, Indian Institute of Technology, Mumbai",
  "Dr. Sahil Neelam, Punjab Institute of Technology Kapurthala",
  "Dr. Parag Kumar Guha Thakurta, National Institute of Technology Durgapur",
  "Dr. Padmalochan Bera, Indian Institute of Technology, Bhubaneswar",
  "Dr. Himadri Shekhar Dutta, Kalyani Govt. Engineering College",
  "Dr. K.K. Shukla, Indian Institute of Technology, Banaras Hindu University",
  "Dr. Rinki Sharma Ramaiah, University of Applied Sciences, Karnataka",
  "Dr. Tapas Si, University of Engineering & Management, Jaipur",
  "Dr. Saradindu Panda, Narula Institute of Technology Kolkata",
  "Dr. Indranil Chakrabarty, International Institute of Information Technology, Hyderabad",
  "Mr. Sanjay Saha, SAMSUNG, India",
  "Dr. Rudra Pratap Ojha, G. L. Bajaj Institute of technology and management",
  "Dr Soumya Ranjan Mishra, School of Computer Engineering, KIIT University",
  "Prof Dr Bidisha Bhavani, Assistant Professor, JIS University",
  "Prof Dr Nipa Biswas, Associate Professor, Narula Institute of Technology",
  "Mr Shaswata Basu, Principal Consultant, INFOSYS",
  "Mr Snehasish Bhattacharya, TCS Pvt Ltd",
  "Mrs Swati Deb, Senior Manager, Capgemini",
  "Prof Dr Biswajit Ghosh, Professor, Techno India Saltlake",
  "Prof Dr Ankur Bhattacharjee, Assistant Professor, BITS Pilani",
  "Dr Joydip Jana, RESOLZ Power Pvt Ltd",
  "Dr Himadri Shekhar Bhattacharya, R&D Engineer, Battery Data Scientist at EXIDE Energy",
  "Dr Tamalika Chowdhury, Assistant Professor, KLE Technological University",
  "Dr. Dhananjoy Bhakta, Indian Institute of Information Technology Ranchi",
  "Dr. Mandeep K. Chawla, MCM DAV College for Women, Chandigarh",
  "Dr. Samya Muhuri, Thapar Institute of Engineering and Technology",
  "Dr. Kousik Dasgupta, Kalyani Government Engineering College",
  "Dr. Samir Kr Borgohain, National Institute of Technology, Silchar",
  "Dr. Rik Das, Xavier Institute of Social Service",
  "Dr. Bhaskar Karn, Birla institute of Technology, Mesra",
  "Dr. Dhruba Jyoti Bora, Madanapalle Institute of Technology",
  "Dr. Debashree Devi, Indian Institute of Information Technology, Guwahati",
  "Mr. Subham Bid, Associate at CB Tech, Deutsche Bank",
  "Dr. Sandip Das, Geetanjali Institute of Technical Studies, Udaipur",
  "Mr. Shashwata Banerjee, HCL Technologies",
  "Ms. Rishmita Saha, Capgemini",
  "Mr. Aritra Dutta, Accenture",
  "Dr. Sovan Dalai, Professor, Electrical Engineering, Jadavpur University",
  "Dr. Samarjeet Bora, Professor, Department of Computer Applications, SMIT Sikkim",
  "Dr. Harish Sharma, Rajasthan Technical University",
  "Dr Amar Kishor, Magadh University",
  "Prof Anupam Das, KIIT University",
  "Dr. Jayanta Mandal, KIIT University",
  "Dr. Brojo Kishor Mishra, NIST Berhampur",
  "Dr. Avijit Chowdhury, Brainware University",
  "Dr. Sudip Sinha, Lynde Group",
  "Dr Kousik Bhattacharya, Rabindrabharati University",
  "Dr Balaam Dey, Haldia Institute of Technology",
  "Dr Jagannath Samanta, Haldia Institute of Technology",
  "Dr Sanjukta Chakraborty, Seacom Skills University",
  "Dr Mauparna Nandan, Techno India",
  "Malay Halder, Aquiver Technologies",
  "Koushik Das, Aquiver Technologies",
  "Prakshal Doshi, IEEE Senior Member and Site Reliability Engineer at Apple",
  "Anvesh Reddy Aileni, Director of AI Solution Architecture - C3.ai",
  "Rahul Gupta, Senior Software Development Engineer, Amazon Web Services (AWS)",
  "Sujay Annareddy, Enterprise Product Leader – AI, ML, and Data Platforms, Senior Product Manager, Walmart Global Tech"
];

export default function TechnicalProgramCommitteeBatch2() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">TPC & REVIEWERS</span>
          <h1>Technical Program Committee</h1>
          <p>Recognizing the academic leaders and industry professionals supporting AICARE 2027.</p>
        </div>
      </div>

      <div className="page-body" style={{ maxWidth: '1440px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', 
          gap: '24px',
          justifyContent: 'center'
        }}>
          {tpcDataBatch2.map((member, idx) => {
            const [name, ...details] = member.split(',');
            const affiliation = details.join(',').trim();

            return (
              <div 
                className="advisor-card" 
                key={idx} 
                style={{ 
                  margin: 0, 
                  padding: '32px 28px', // Increased padding for better hierarchy
                  textAlign: 'left', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  borderTop: '5px solid #1a4a8a', // Thicker bar for readability
                  cursor: 'default',
                  height: '100%'
                }}
              >
                <div className="advisor-info">
                  {/* Name: Larger Font (19px) */}
                  <div 
                    style={{ 
                      fontSize: '19px',
                      fontWeight: '800',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease',
                      background: 'linear-gradient(90deg, #1a4a8a 0%, #8b5cf6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                      marginBottom: '6px',
                      letterSpacing: '0.5px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#8b5cf6';
                      e.currentTarget.style.WebkitTextFillColor = 'transparent';
                      e.currentTarget.style.WebkitBackgroundClip = 'text';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(90deg, #1a4a8a 0%, #8b5cf6 100%)';
                      e.currentTarget.style.WebkitTextFillColor = 'transparent';
                      e.currentTarget.style.WebkitBackgroundClip = 'text';
                    }}
                  >
                    {name.trim()}
                  </div>

                  {/* Thicker Yellow Line */}
                  <div style={{
                    height: '3px',
                    width: '40px',
                    background: '#e8a020',
                    margin: '8px 0 16px 0',
                    borderRadius: '2px'
                  }} />

                  {/* Affiliation: Larger Font (15px) */}
                  <div className="advisor-org" style={{ 
                    fontSize: '15px', 
                    color: '#444', 
                    lineHeight: '1.7',
                    fontWeight: '600'
                  }}>
                    {affiliation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}