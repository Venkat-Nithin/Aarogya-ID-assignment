import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddDocs from './pages/AddDocs';
import ViewDocs from './pages/ViewDocs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<AddDocs />} />
        <Route path="/view" element={<ViewDocs />} />
      </Routes>
    </Router>
  );
}

export default App;
