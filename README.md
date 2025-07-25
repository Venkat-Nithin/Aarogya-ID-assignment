# Aarogya ID Assignment

This is a full-stack web application built with React, Express.js, and MongoDB. It allows users to add and view medical-related documents. Each document includes fields like name, patient name, age, insurance status, date, summary, status, and notes.

---

### Deployed Links

- **Frontend**: [https://aarogya-id-assignment.vercel.app](https://aarogya-id-assignment.vercel.app)  
- **Backend**: [https://aarogya-id-assignment.onrender.com](https://aarogya-id-assignment.onrender.com)

---

### How It Works

- **Frontend (React)**
  - Located in the `client/` folder.
  - Contains three main pages:
    - `Homepage`: Displays a flow diagram using an SVG illustration.
    - `AddDocs`: A form to input and submit document data.
    - `ViewDocs`: Displays submitted documents in a table.
  - Routing is handled using React Router.
  - Data is submitted to and fetched from the backend using the Fetch API.

- **SVG Diagram**
  - The homepage features a custom SVG diagram that visually represents the data processing flow.
  - Four input blocks on the left send data through curved arrows to a central circle labeled "Docs + Person".
  - The circle has two rotating arrows symbolizing processing.
  - A final arrow exits the circle and points to a phone-like rectangle labeled "Phone UI", representing the output.
  - Arrows are animated using `animateMotion` and CSS keyframes for dynamic movement.

- **Backend (Express + MongoDB)**
  - Located in the `server/` folder.
  - Connects to MongoDB using Mongoose.
  - Provides three main API endpoints:
    - `GET /api/documents`: Retrieves all documents with full details.
    - `POST /api/documents`: Saves a new document to the database.
    - `GET /api/documents/:id`: Retrieves a single document by ID.

### Setup Instructions

#### 1. Clone the Repository

- in bash:
  - git clone https://github.com/your-username/aarogya-id-assignment.git
  - cd aarogya-id-assignment

#### 2. Set Up the Backend

- in terminal:
  - cd server
  - npm install
- Create a .env file inside the server/ folder and add: MONGO_URL=your_mongodb_connection_string
- Start the backend server: node index.js

#### 3. Set Up the Frontend

- in terminal:
  - cd ../client
  - npm install
  - npm run dev

Now the app should be running locally on:

- Frontend: http://localhost:5173

- Backend: http://localhost:8080
