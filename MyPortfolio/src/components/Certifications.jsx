import React, { useState } from 'react';
import mongoCert from '../assets/certificates/mongo_cert.jpeg';
import pythonCert from '../assets/certificates/python_cert.jpeg';
import magnoCert from '../assets/certificates/thumb_magno_charger_certificate.jpeg';

const Certifications = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const certs = [
    {
      id: 'mongo_cert',
      title: "MongoDB Developer's Toolkit",
      issuer: 'GeeksForGeeks',
      image: mongoCert,
      alt: 'MongoDB Certificate'
    },
    {
      id: 'python_cert',
      title: 'Python Full Stack Development',
      issuer: 'Ethnus',
      image: pythonCert,
      alt: 'Python Certificate'
    },
    {
      id: 'magno_cert',
      title: 'Magno Charger: Intelligent Auto Disconnect Charger',
      issuer: 'TIH-IoT Chanakya',
      image: magnoCert,
      alt: 'Magno Charger Certificate'
    }
  ];

  return (
    <section className="content-section active" id="certifications">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>

        <div className="certs-grid" id="certsGrid">
          {certs.map(cert => (
            <div className="cert-card" key={cert.id} onClick={() => setLightboxImage(cert.image)}>
              <h3>{cert.title}</h3>
              <p>Issued by: {cert.issuer}</p>
              <img
                src={cert.image}
                alt={cert.alt}
                className="cert-preview"
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'zoom-out'
          }}
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Certificate View"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '10px',
              boxShadow: '0 0 50px rgba(0,0,0,0.5)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer'
            }}
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
