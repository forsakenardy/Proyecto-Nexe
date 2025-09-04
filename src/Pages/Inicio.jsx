import { useState, useEffect } from "react";
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
                {/* Título siempre visible */}
                <div className="info-familiar">
                    <h2>Bienvenido a Fundación Nexe</h2>

                    {/* Mensaje solo si se busca niño */}
                    {mode === "buscar" && (
                        <>
                            <p>
                                A través de este formulario, puedes acceder a la información de tu hijo o hija.
                                Podrás verificar los datos proporcionados por su cuidador, consultar sus registros de comportamiento
                                y seguir de cerca su progreso.
                            </p>
                            <p>
                                Solo necesitas ingresar el nombre del niño y su DNI para comenzar.
                            </p>
                        </>
                    )}
                </div>
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
