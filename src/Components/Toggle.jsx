export default function Toggle({ mode, setMode }) {
  return (
    <div className="form-toggle">
      <button
        className={`toggle-btn ${mode === "buscar" ? "active" : ""}`}
        onClick={() => setMode("buscar")}
      >
        Buscar niño
      </button>
      <button
        className={`toggle-btn ${mode === "trabajador" ? "active" : ""}`}
        onClick={() => setMode("trabajador")}
      >
        Trabajador
      </button>
    </div>
  );
}