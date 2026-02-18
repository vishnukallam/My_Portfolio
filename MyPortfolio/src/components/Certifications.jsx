import React, { useState } from 'react';
import mongoCert from '../assets/certificates/mongo_cert.jpeg';
import pythonCert from '../assets/certificates/python_cert.jpeg';
import magnoCert from '../assets/certificates/thumb_magno_charger_certificate.jpeg';

const Certifications = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openLightbox = (image) => {
    setLightboxImage(image);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setIsZoomed(false);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

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
            overflow: isZoomed ? 'auto' : 'hidden',
            cursor: 'zoom-out'
          }}
          onClick={closeLightbox}
        >
          <img
            src={lightboxImage}
            alt="Certificate View"
            style={{
              maxWidth: isZoomed ? 'none' : '90%',
              maxHeight: isZoomed ? 'none' : '90%',
              transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
              transition: 'transform 0.3s ease',
              borderRadius: '10px',
              boxShadow: '0 0 50px rgba(0,0,0,0.5)',
              cursor: isZoomed ? 'zoom-out' : 'zoom-in',
              margin: isZoomed ? 'auto' : '0'
            }}
            onClick={toggleZoom}
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
