import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import {Dashboard} from "./components/Dashboard";
import {Landing} from "./components/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Appbar() {
  const navigate = useNavigate();
  return(
  <div>
    <div>
      <button
        onClick={() => {
          // window.location.href = "/";
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          // window.location.href = "/dashboard";
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>
    </div>
  </div>
  )
}

export default App;
