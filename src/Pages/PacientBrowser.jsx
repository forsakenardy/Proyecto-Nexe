import { useState } from "react";


export default function PacientBrowser({DNI, DNIM}) {
  // 🔹 Datos simulados (traerías esto de tu backend con fetch/axios)
  const patients = [
    { DNI: "123", name: "Juan", LastName: "Pérez", Birthdate: "2001-03-30", Diagnose: "Tiene Hipersensivilidad", Observations:"Se recomienda comidas suaves", AdmissionDate:"2025-06-04", medicines: "No" },
    { DNI: "456", name: "Ana", LastName: "López", Birthdate: "2002-04-12", Diagnose: "Tiene fotosensibilidad", Observations:"Se recomienda apartarlo de las ventanas", AdmissionDate:"2025-04-02", medicines: "No" },
  ];

  const Doctors = [
    {DNI:"224", name: "Enrique", LastName:"Julio", gmail:"Alguien@gmail.com"},
    {DNI:"234", name: "Paco", LastName:"Albaricoque", gmail:"PAlbaricoque@gmail.com"}
  ]

  const [registros, setRegistros] = useState([
    { id: 1, DNIP: "123", DNIM:"224", fecha: "2025-09-04", horaInicio: "08:00", horaFin: "10:00", descripcion: "Juego libre en el parque" },
    { id: 2, DNIP: "123", DNIM:"234", fecha: "2025-09-04", horaInicio: "11:00", horaFin: "12:00", descripcion: "Sesión de lectura" },
    { id: 3, DNIP: "456", DNIM:"234", fecha: "2025-09-03", horaInicio: "09:00", horaFin: "10:30", descripcion: "Actividad con colores" },
  ]);

  const selectedPatient = patients.find(p => p.DNI === DNI);

  const doctor = Doctors.find(m => m.DNI === DNIM);
  const rol = Boolean(doctor);

  const [doc, setDocModal] = useState({});

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  if (!selectedPatient) {
    return <p>No se encontró el paciente con DNI {DNI}</p>;
  }

  // 🔹 Filtrar registros por paciente y fecha
  const filteredRecords = registros.filter(
    r =>
      selectedPatient &&
      r.DNIP === selectedPatient.DNI &&
      r.fecha === selectedDate
  );

  // Guarda el nuevo registro y lo envia a la base de datos
  const submitRecord = e => {
    e.preventDefault();

    const formData = new FormData(e.target); // e.target es el formulario

    const registroFinal = {
      id: (registros.length > 0 ? registros[registros.length - 1].id : 0) + 1, // demo
      DNIP: selectedPatient.DNI,
      DNIM: DNIM,
      fecha: selectedDate,
      horaInicio: formData.get("horaInicio"),
      horaFin: formData.get("horaFinal"),
      descripcion: formData.get("descripcion")
    };

    setRegistros([...registros, registroFinal]);

     // Aquí puedes enviarlo a tu backend
    /*
    fetch("/api/registros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registroFinal)
    });
    */

    // Cerrar modal
    setShowCreateForm(false);

  }

  return (
    <div className="page-container">
      <div className="card">
        <p><strong>Fecha de ingreso:</strong> {selectedPatient.AdmissionDate}</p>
      </div>
      {/*Observations solo para medicos */}
        {rol === true && (
          <div className="card">
            <p><strong>Observaciones:</strong>{selectedPatient.Observations}</p>
          </div>
        )}
        <div className="card">
          <p><strong>DNI:</strong> {selectedPatient.DNI}</p>
          <p><strong>Nombre:</strong> {selectedPatient.name} {selectedPatient.LastName}</p>
          <p><strong>Fecha de nacimiento:</strong> {selectedPatient.Birthdate}</p>
          <p><strong>Diagnostico:</strong>{selectedPatient.Diagnose}</p>
          <p><strong>Medicamentos:</strong> {selectedPatient.medicines}</p>
          
        </div>

        <div className="top-bar">
          {rol === true && (
            /*Boton para medicos o cuidadores */
            <div style={{ marginBottom: "15px" }}>
              <button onClick={() => setShowCreateForm(true)}>➕ Nuevo Registro</button>
            </div>
          )}
          <label>
            Selecciona fecha:{" "}
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            />
          </label>
      </div>
      {/* Lista de registros */}
      <div className="record-list">
        {filteredRecords.map(r => (
          <div
            key={r.id}
            className="record-card"
            onClick={() => {
              setDocModal(Doctors.find(m => m.DNI === r.DNIM))
              return setSelectedRecord(r)
            }}
          >
            <p><strong>{r.horaInicio}</strong> - <strong>{r.horaFin}</strong></p>
          </div>
        ))}
        {filteredRecords.length === 0 && <p>No hay registros este día.</p>}
      </div>

      {/* Modal ver registro */}
      {selectedRecord && (        
        <div className="modal">
          <div className="modal-content">
            <h3>Detalle del registro</h3>
            <p><strong>Cuidador</strong> {doc.name} {doc.LastName}</p>
            <p><strong>Hora:</strong> {selectedRecord.horaInicio} - {selectedRecord.horaFin}</p>
            <p><strong>Descripción:</strong> {selectedRecord.descripcion}</p>
            <button onClick={() => setSelectedRecord(null)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal crear registro */}
      {showCreateForm && rol === true && (
        <div className="modal">
          <div className="modal-content">
            <h3>Nuevo registro</h3>
            <form className="form" onSubmit={submitRecord}>
              <label>
                Hora inicial:
                <input type="time" name="horaInicio" required/>
              </label>
              <label>
                Hora final:
                <input type="time" name="horaFinal" required/>
              </label>
              <label>
                Descripción:
                <textarea rows="3" name="descripcion" required/>
              </label>
              <button type="submit">Guardar</button>
              <button type="button" onClick={() => setShowCreateForm(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
