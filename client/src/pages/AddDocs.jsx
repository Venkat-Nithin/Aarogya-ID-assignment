import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddDocs.css';

function AddDocs() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    patientName: '',
    age: '',
    insurance: 'no',
    date: '',
    summary: '',
    status: '',
    notes: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    try {
      const payload = {
        ...formData,
        age: parseInt(formData.age),
        insurance: formData.insurance.toLowerCase() === 'yes'
      };

      const response = await fetch('http://localhost:8080/api/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSuccess(true);
      alert("Details successfully added"); // ✅ alert
      navigate('/'); // ✅ redirect to homepage

    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="add-docs-container">
      <h2>Add Document</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Document Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Patient Name</label>
          <input name="patientName" value={formData.patientName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input name="age" type="number" value={formData.age} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Insurance</label>
          <select name="insurance" value={formData.insurance} onChange={handleChange} required>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input name="date" type="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Summary</label>
          <textarea name="summary" value={formData.summary} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Status (optional)</label>
          <input name="status" value={formData.status} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Notes (optional)</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Submit</button>

        {success && <p className="success-msg">Document added successfully!</p>}
        {error && <p className="error-msg">{error}</p>}
      </form>
    </div>
  );
}

export default AddDocs;
