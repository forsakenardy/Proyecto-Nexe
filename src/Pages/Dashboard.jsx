import { useState, useEffect } from "react";
import Filtros from "../Components/Filtros";
import TablaNiños from "../Components/TablaNiños";

export default function Dashboard() {
    // Datos simulados (luego se reemplazarán por datos de backend/API)

      const [ninos, setNinos] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7009/api/Kid")
      .then((res) => res.json())
      .then((data) => {
              console.log("Datos recibidos:", data);
        setNinos(data)

      })
      .catch((err) => console.error("Error al obtener niños:", err));
  }, []);
    


    const [filtro, setFiltro] = useState({
        nombre: "",
        fecha: "",
        colaborador: "",
        estado: ""
    });

    // Filtrar datos
    const ninosFiltrados = ninos.filter((n) => {
        return (
            (filtro.nombre === "" || n.nombre.toLowerCase().includes(filtro.nombre.toLowerCase())) &&
            (filtro.fecha === "" || n.fechaIngreso === filtro.fecha) &&
            (filtro.colaborador === "" || n.colaborador === filtro.colaborador) &&
            (filtro.estado === "" || n.estado === filtro.estado)
        );
    });

    return (
        <div className="dashboard-container">
            <div className="info-dashboard">
                <h2>Panel de trabajadores</h2>
                <p>
                    Aquí puedes acceder a la información de los niños bajo tu cuidado.
                    Usa los filtros para buscar por nombre, colaborador, estado o fecha de ingreso,
                    y localiza rápidamente a cada niño.
                </p>
                <p>
                    Una vez localizado, haz clic en "Ver detalles" para consultar sus registros y progreso.
                </p>
            </div>
            <h2 className="dashboard-title">Lista de niños</h2>

            {/* Filtros arriba */}
            <Filtros filtro={filtro} setFiltro={setFiltro} />

            {/* Tabla */}
            {ninos.length > 0 ? <TablaNiños ninos={ninos} /> : <p>Cargando datos...</p>}
        </div>
    );
}
