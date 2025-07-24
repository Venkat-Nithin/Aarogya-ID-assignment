const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy document list
const documents = [
  {
    id: 1,
    name: "Medical Report - John",
    keyValues: {
      Name: "John Doe",
      Age: "34",
      Diagnosis: "Hypertension",
      Date: "2023-08-22"
    }
  },
  {
    id: 2,
    name: "Insurance Claim - Jane",
    keyValues: {
      Name: "Jane Smith",
      ClaimAmount: "$4500",
      Status: "Approved",
      Date: "2024-02-10"
    }
  }
];

// GET all documents
app.get('/api/documents', (req, res) => {
  const list = documents.map(({ id, name }) => ({ id, name }));
  res.json(list);
});

// GET document details
app.get('/api/documents/:id', (req, res) => {
  const doc = documents.find(d => d.id == req.params.id);
  if (doc) {
    res.json(doc);
  } else {
    res.status(404).json({ error: "Document not found" });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
