import { useState } from "react";
import Filtros from "../Components/Filtros";
import TablaNiños from "../Components/TablaNiños";

export default function Dashboard() {
  // Datos simulados (luego se reemplazarán por datos de backend/API)
  const [ninos, setNinos] = useState([
    {
      id: 1,
      nombre: "Carlos Pérez",
      dni: "12345678",
      fechaIngreso: "2022-01-15",
      colaborador: "María López",
      estado: "Activo"
    },
    {
      id: 2,
      nombre: "Lucía Gómez",
      dni: "87654321",
      fechaIngreso: "2023-03-10",
      colaborador: "Juan Torres",
      estado: "Inactivo"
    }
  ]);

  const [filtro, setFiltro] = useState({
    colaborador: "",
    estado: ""
  });

  // Filtrar datos
  const ninosFiltrados = ninos.filter((n) => {
    return (
      (filtro.colaborador === "" || n.colaborador === filtro.colaborador) &&
      (filtro.estado === "" || n.estado === filtro.estado)
    );
  });

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Lista de niños</h2>

      {/* Filtros arriba */}
      <Filtros filtro={filtro} setFiltro={setFiltro} />

      {/* Tabla */}
      <TablaNiños ninos={ninosFiltrados} />
    </div>
  );
}
