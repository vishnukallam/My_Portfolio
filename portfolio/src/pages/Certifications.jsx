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
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-left space-y-2">
          <h2 className="text-4xl font-bold text-white">Certifications</h2>
          <p className="text-slate-400">Validated expertise and academic achievements.</p>
        </div>
        <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-900/40 flex items-center gap-2">
          <span>➕ Add New Certificate</span>
          <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert, index) => (
          <div key={index} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all group">
            <div className="h-48 bg-slate-800/50 flex items-center justify-center p-8 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-bold text-white line-clamp-2">{cert.title}</h3>
              <p className="text-blue-400 font-medium">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
