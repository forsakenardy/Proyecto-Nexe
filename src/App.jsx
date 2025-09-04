
import "./styles/inicio.css"
import "./App.css";
import "./styles/PacientBrowser.css";
import "./styles/Dashboard.css";
import Inicio from "./Pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import PacientBrowser from "./Pages/PacientBrowser";

export default function App() {
  return (

      <div className="app-container">


        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Inicio />} />

          {/* Dashboard trabajador */}
          <Route path="/Dashboard" element={<Dashboard/>} />

          {/*Paciente*/}
          <Route path="/pacientbrowser" element={<PacientBrowser DNI="123" DNIM="224"/>} />

        </Routes>
      </div>

  );
}
