export default function FormBuscarNiño({ form, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h2 className="form-title">Buscar información del niño</h2>

      <div className="form-group">
        <label htmlFor="nombreNino">Nombre del niño</label>
        <input
          id="nombreNino"
          type="text"
          name="nombreNino"
          value={form.nombreNino}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="dni">DNI</label>
        <input
          id="dni"
          type="text"
          name="dni"
          value={form.dni}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn-submit">Buscar</button>
    </form>
  );
}