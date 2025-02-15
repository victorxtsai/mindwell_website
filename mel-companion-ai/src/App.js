import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Chatbot from "./Chatbot"; // Import Chatbot component

const Home = () => (
  <div>
    <h1>Welcome to Mel Companion AI</h1>
    <p>This is the homepage.</p>
    <Link to="/mel">
      <button>Go to Mel Chatbot</button>
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mel" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;