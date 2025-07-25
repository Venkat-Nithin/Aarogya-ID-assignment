import './Homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <div style={{ textAlign: 'center', margin: '40px 0 10px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#000' }}>
          Seamless Access With Privacy
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'gray' }}>
          Giving you access to your medical records, anytime, anywhere.
        </p>
        <div style={{ marginTop: '20px' }}>
          <Link to="/view"><button>View Docs</button></Link>
          <Link to="/add"><button>Add Docs</button></Link>
        </div>
      </div>

      <div className="layout-wrapper">
        <svg viewBox="0 150 1100 500" className="full-svg">
          {[150, 250, 350, 450].map((y, i) => {
            const x1 = 100, y1 = y, x2 = 250, y2 = 300;
            const curvePath = `M ${x1} ${y1} Q ${(x1 + x2) / 2} ${y1}, ${x2} ${y2}`;

            return (
              <g key={i}>
                <rect x="40" y={y - 25} width="60" height="50" rx="10" fill="#ddd" />
                <text x="70" y={y + 5} textAnchor="middle" fontWeight="bold" fill="#333">{i + 1}</text>
                <defs><path id={`path-${i}`} d={curvePath} fill="none" /></defs>
                <path d={curvePath} stroke="#007bff" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                <polygon points="-6,-4 6,0 -6,4" fill="#007bff">
                  <animateMotion dur="1.5s" repeatCount="indefinite" rotate="auto">
                    <mpath xlinkHref={`#path-${i}`} />
                  </animateMotion>
                </polygon>
              </g>
            );
          })}

          <line x1="250" y1="300" x2="450" y2="300" stroke="#007bff" strokeWidth="2.5" />
          <polygon points="-6,-4 6,0 -6,4" fill="#007bff" className="merge-to-circle-arrow" transform="rotate(0)" />
          <circle cx="550" cy="300" r="100" fill="none" stroke="#007bff" strokeWidth="2.5" />
          <text x="550" y="300" textAnchor="middle" dominantBaseline="middle" fontWeight="500">Docs + Person</text>
          <g className="rotating-arrow"><polygon points="-6,-4 6,0 -6,4" fill="#007bff" transform="translate(550,200) rotate(0)" /></g>
          <g className="rotating-arrow"><polygon points="-6,-4 6,0 -6,4" fill="#007bff" transform="translate(550,400) rotate(180)" /></g>
          <line x1="650" y1="300" x2="950" y2="300" stroke="#007bff" strokeWidth="2.5" />
          <polygon points="-6,-4 6,0 -6,4" fill="#007bff" className="circle-to-phone-arrow" transform="rotate(0)" />
          <rect x="950" y="200" width="100" height="200" rx="20" fill="#ddd" />
          <text x="1000" y="310" textAnchor="middle" fontWeight="bold" fill="#333">Phone UI</text>
        </svg>
      </div>
    </div>
  );
}

export default Homepage;
