export default function FormTrabajador({ form, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h2 className="form-title">Inicio de sesión trabajador</h2>

      <div className="form-group">
        <label htmlFor="username">Usuario</label>
        <input
          id="username"
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn-submit">Iniciar sesión</button>
    </form>
  );
}
