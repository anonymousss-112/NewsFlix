import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<News key="general" pageSize={10} category="general" />} />
        <Route path="/Business" element={<News key="business" pageSize={10} category="business" />} />
        <Route path="/Entertainment" element={<News key="entertainment" pageSize={10} category="entertainment" />} />
        <Route path="/Science" element={<News key="science" pageSize={10} category="science" />} />
        <Route path="/Health" element={<News key="health" pageSize={10} category="health" />} />
        <Route path="/Sports" element={<News key="sports" pageSize={10} category="sports" />} />
        <Route path="/Technology" element={<News key="technology" pageSize={10} category="technology" />} />
      </Routes>
    </Router>
  );
}

export default App;
