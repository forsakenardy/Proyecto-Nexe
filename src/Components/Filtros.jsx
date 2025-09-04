export default function Filtros({ filtro, setFiltro }) {
  return (
    <div className="filtros">
      <label>
        Colaborador:
        <select
          value={filtro.colaborador}
          onChange={(e) => setFiltro({ ...filtro, colaborador: e.target.value })}
        >
          <option value="">Todos</option>
          <option value="María López">María López</option>
          <option value="Juan Torres">Juan Torres</option>
        </select>
      </label>

      <label>
        Estado:
        <select
          value={filtro.estado}
          onChange={(e) => setFiltro({ ...filtro, estado: e.target.value })}
        >
          <option value="">Todos</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
      </label>
    </div>
  );
}
