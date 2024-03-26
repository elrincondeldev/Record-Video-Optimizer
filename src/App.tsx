import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecordOptimizer from "./pages/RecordOptimizer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record-optimizer" element={<RecordOptimizer />} />
      </Routes>
    </Router>
  );
}

export default App;
