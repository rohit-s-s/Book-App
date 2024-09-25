import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Form from "./page/Add";
import Info from "./page/Info";
import Edit from "./page/Edit";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
};

export default App;
