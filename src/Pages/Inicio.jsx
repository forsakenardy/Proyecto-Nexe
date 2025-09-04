import { useState } from "react";
import Toggle from "../Components/Toggle";
import FormBuscarNiño from "../Components/FormBuscarNiño";
import FormTrabajador from "../Components/FormTrabajador";



export default function Inicio() {
  const [mode, setMode] = useState("buscar");

  const [form, setForm] = useState({
    nombreNino: "",
    dni: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "buscar") {
      console.log("Buscando niño:", {
        nombre: form.nombreNino,
        dni: form.dni
      });
    } else {
      console.log("Iniciando sesión trabajador:", {
        usuario: form.username,
        password: form.password
      });
    }
  };

  return (
    <main className="main-content">
      <div className="form-container">
        <Toggle mode={mode} setMode={setMode} />

        {mode === "buscar" ? (
          <FormBuscarNiño
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <FormTrabajador
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </main>
  );
}
