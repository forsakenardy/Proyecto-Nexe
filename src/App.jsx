
import "./styles/inicio.css"
import "./App.css";
import Inicio from "./Pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  return (

      <div className="app-container">
        <header className="header">
          <h1 className="title">Fundación Nexe</h1>
        </header>

        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Inicio />} />

          {/* Dashboard trabajador */}
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>

  );
}
