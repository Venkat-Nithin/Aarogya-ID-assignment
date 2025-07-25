const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Schema
const DocumentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  patientName: { type: String, required: true },
  age: { type: Number, required: true },
  insurance: { type: Boolean, required: true },
  date: { type: Date, required: true },
  summary: { type: String, required: true },
  status: { type: String, required: true },
  notes: { type: String, required: true }
});

const Document = mongoose.model('Document', DocumentSchema);

// GET all documents
app.get('/api/documents', async (req, res) => {
  try {
    const docs = await Document.find();
    const formatted = docs.map(doc => ({
      id: doc._id,
      name: doc.name,
      patientName: doc.patientName,
      age: doc.age,
      insurance: doc.insurance,
      date: doc.date,
      summary: doc.summary,
      status: doc.status,
      notes: doc.notes
    }));
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch documents" });
  }
});

// GET a single document by ID
app.get('/api/documents/:id', async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (doc) {
      const formatted = {
        id: doc._id,
        name: doc.name,
        patientName: doc.patientName,
        age: doc.age,
        insurance: doc.insurance,
        date: doc.date,
        summary: doc.summary,
        status: doc.status,
        notes: doc.notes
      };
      res.json(formatted);
    } else {
      res.status(404).json({ error: "Document not found" });
    }
  } catch (err) {
    res.status(400).json({ error: "Invalid ID format" });
  }
});

// POST new document
app.post('/api/documents', async (req, res) => {
  try {
    const {
      name,
      patientName,
      age,
      insurance,
      date,
      summary,
      status,
      notes
    } = req.body;

    const insuranceFlag = typeof insurance === 'string'
      ? insurance.toLowerCase() === 'yes'
      : Boolean(insurance);

    const newDoc = new Document({
      name,
      patientName,
      age,
      insurance: insuranceFlag,
      date,
      summary,
      status,
      notes
    });

    await newDoc.save();
    res.status(201).json({ message: "Document saved", id: newDoc._id });
  } catch (err) {
    res.status(400).json({ error: "Failed to save document", details: err.message });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
