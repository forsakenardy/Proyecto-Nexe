export default function Filtros({ filtro, setFiltro }) {
  const limpiarFiltros = () => {
    setFiltro({
      nombre: "",
      fecha: "",
      fechaAdmision: ""
    });
  };

  return (
    <div className="filtros">
      {/* Filtro por nombre */}
      <div className="filtro-item">
        <label>
          Nombre:
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={filtro.nombre}
            onChange={(e) => setFiltro({ ...filtro, nombre: e.target.value })}
          />
        </label>
      </div>

      {/* Filtro por fecha de ingreso */}
      <div className="filtro-item">
        <label>
          Fecha de ingreso:
          <input
            type="date"
            value={filtro.fecha}
            onChange={(e) => setFiltro({ ...filtro, fecha: e.target.value })}
          />
        </label>
      </div>

      {/* Filtro por fecha de  */}
      <div className="filtro-item">
        <label>
          Fecha de Nacimiento:
          <input
            type="date"
            value={filtro.fechaNacimiento}
            onChange={(e) => setFiltro({ ...filtro, fecha: e.target.value })}
          />
        </label>
      </div>

      {/* Botón limpiar filtros */}
      <div className="filtro-item">
        <button type="button" onClick={limpiarFiltros} className="btn-limpiar">
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
