# Aarogya ID Assignment

This is a full-stack web application built with React, Express.js, and MongoDB. It allows users to add and view medical-related documents. Each document includes fields like name, patient name, age, insurance status, date, summary, status, and notes.

---

### How It Works

- **Frontend (React)**
  - Located in the `client/` folder.
  - Contains three main pages:
    - `Homepage`: Displays a flow diagram representing data processing.
    - `AddDocs`: A form to input and submit document data.
    - `ViewDocs`: Displays submitted documents in a table.
  - Routing is handled using React Router.
  - Data is submitted to and fetched from the backend using the Fetch API.

- **Backend (Express + MongoDB)**
  - Located in the `server/` folder.
  - Connects to MongoDB using Mongoose.
  - Provides three main API endpoints:
    - `GET /api/documents`: Retrieves all documents with full details.
    - `POST /api/documents`: Saves a new document to the database.
    - `GET /api/documents/:id`: Retrieves a single document by ID.
