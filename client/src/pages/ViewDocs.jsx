import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewDocs.css';

function ViewDocs() {
  const [docs, setDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/documents')
      .then(res => res.json())
      .then(data => setDocs(data))
      .catch(err => console.error('Failed to fetch documents:', err));
  }, []);

  return (
    <div className="view-docs-container">
      <div className="top-bar">
        <h2>Document List</h2>
        <div>
          <button className="add-btn" onClick={() => navigate('/')}>Homepage</button>
          <button className="add-btn" onClick={() => navigate('/add')}>+ Add Docs</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Patient</th>
            <th>Age</th>
            <th>Insurance</th>
            <th>Date</th>
            <th>Summary</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {docs.map(doc => (
            <tr key={doc.id}>
              <td>{doc.name}</td>
              <td>{doc.patientName}</td>
              <td>{doc.age}</td>
              <td>{doc.insurance ? 'Yes' : 'No'}</td>
              <td>{doc.date?.slice(0, 10)}</td>
              <td>{doc.summary}</td>
              <td>{doc.status}</td>
              <td>{doc.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDocs;
