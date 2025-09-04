import { useNavigate } from "react-router-dom";

export default function TablaNiños({ ninos }) {
  const navigate = useNavigate();

  const irADetalle = (id) => {
    navigate(`/nino/${id}`); // Redirige a InfoNino.jsx
  };

  return (
    <table className="tabla-ninos">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>DNI</th>
          <th>Fecha de ingreso</th>
          <th>Colaborador</th>
          <th>Estado</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {ninos.length > 0 ? (
          ninos.map((n) => (
            <tr key={n.id}>
              <td>{n.nombre}</td>
              <td>{n.dni}</td>
              <td>{n.fechaIngreso}</td>
              <td>{n.colaborador}</td>
              <td>{n.estado}</td>
              <td>
                <button onClick={() => irADetalle(n.id)} className="btn-detalle">
                  Ver detalle
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              No se encontraron resultados
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
