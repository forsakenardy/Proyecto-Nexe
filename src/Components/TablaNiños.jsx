import { useNavigate } from "react-router-dom";

export default function TablaNiños({ ninos }) {
  const navigate = useNavigate();

  const irADetalle = (id) => {
    navigate(`/nino/${id}`); // Redirige a InfoNino.jsx
  };
  console.log("Niños recibidos en la tabla:", ninos); // 👈 Verificar aquí
  return (
    <table className="tabla-ninos">
      <thead>
        <tr>
          <th>Nombre completo</th>
          <th>DNI</th>
          <th>Fecha de ingreso</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {ninos.length > 0 ? (
          ninos.map((n) => (
            <tr key={n.dni}>
              <td>{n.name} {n.lastName}</td>
              <td>{n.dni}</td>
              <td>{new Date(n.admissionDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => irADetalle(n.dni)} className="btn-detalle">
                  Ver detalle
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              No se encontraron resultados
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
