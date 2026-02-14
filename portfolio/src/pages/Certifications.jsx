import { useState } from 'react';

const Certifications = () => {
  const [certs, setCerts] = useState([
    {
      title: 'MongoDB',
      issuer: 'GeeksForGeeks',
      image: 'https://img.icons8.com/color/144/mongodb.png',
    },
    {
      title: 'Python Full Stack',
      issuer: 'Edu Skills',
      image: 'https://img.icons8.com/color/144/python--v1.png',
    },
    {
      title: 'Magno Charger: Intelligent Auto Disconnect',
      issuer: 'TIH Foundation for IoT, IIT Bombay',
      image: 'https://img.icons8.com/fluency/144/circuit.png',
    }
  ]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const title = prompt("Enter Certificate Title:") || "New Certificate";
        const issuer = prompt("Enter Issuer Name:") || "Unknown Issuer";

        const newCert = {
          title: title,
          issuer: issuer,
          image: e.target.result
        };
        setCerts([...certs, newCert]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="certs-header">
        <div style={{ textAlign: 'left' }}>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Certifications</h2>
          <p style={{ color: 'var(--text-muted)' }}>Validated expertise and academic achievements.</p>
        </div>
        <label className="add-cert-btn">
          <span>➕ Add New Certificate</span>
          <input type="file" style={{ display: 'none' }} onChange={handleUpload} accept="image/*" />
        </label>
      </div>

      <div className="projects-grid">
        {certs.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-img-container">
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-img"
              />
            </div>
            <div className="cert-info">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
