// ===============================
// FASE 4 — Validación programática
// ===============================

// Listas válidas según tus instrucciones
const ciudadesValidas = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena"];
const epsValidas = ["Sura", "Nueva EPS", "Sanitas", "Compensar", "Particular"];
const especialidadesValidas = [
  "Medicina general", "Pediatría", "Psicología", "Dermatología", "Nutrición",
  "Ginecología", "Cardiología", "Fisioterapia", "Psiquiatría", "Endocrinología"
];

// Reglas de tarifas
function obtenerTarifa(especialidad) {
  if (especialidad === "Medicina general") return 25;
  if (["Pediatría", "Nutrición", "Fisioterapia"].includes(especialidad)) return 35;
  return 45; // avanzadas
}

// Validación principal
function validarDataset(pacientes) {
  const errores = [];
  const emails = new Set();
  const ids = new Set();

  pacientes.forEach((p, index) => {
    const registro = `ID ${p.id} (${p.nombre})`;

    // -----------------------------
    // Validación de ID
    // -----------------------------
    if (ids.has(p.id)) {
      errores.push({
        error: "ID duplicado",
        registro,
        causa: "Dos pacientes comparten el mismo ID",
        correccion: "Asignar un ID único"
      });
    }
    ids.add(p.id);

    if (p.id <= 0) {
      errores.push({
        error: "ID inválido",
        registro,
        causa: "El ID debe ser mayor que 0",
        correccion: "Asignar un ID válido"
      });
    }

    // -----------------------------
    // Validación de email
    // -----------------------------
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(p.email)) {
      errores.push({
        error: "Email inválido",
        registro,
        causa: "Formato incorrecto",
        correccion: "Usar un email válido"
      });
    }

    if (emails.has(p.email)) {
      errores.push({
        error: "Email duplicado",
        registro,
        causa: "Dos pacientes comparten el mismo email",
        correccion: "Asignar un email único"
      });
    }
    emails.add(p.email);

    // -----------------------------
    // Validación de ciudad
    // -----------------------------
    if (!ciudadesValidas.includes(p.ciudad)) {
      errores.push({
        error: "Ciudad inválida",
        registro,
        causa: "Ciudad fuera de la lista permitida",
        correccion: "Usar una ciudad válida"
      });
    }

    // -----------------------------
    // Validación de especialidad
    // -----------------------------
    if (!especialidadesValidas.includes(p.especialidad)) {
      errores.push({
        error: "Especialidad inválida",
        registro,
        causa: "Especialidad fuera de la lista permitida",
        correccion: "Usar una especialidad válida"
      });
    }

    // -----------------------------
    // Validación de edad
    // -----------------------------
    if (p.edad < 18 || p.edad > 90) {
      errores.push({
        error: "Edad fuera de rango",
        registro,
        causa: "Debe estar entre 18 y 90",
        correccion: "Asignar una edad válida"
      });
    }

    // -----------------------------
    // Validación de fecha
    // -----------------------------
    const fechaMin = new Date("2023-01-01");
    const fechaMax = new Date("2025-05-01");
    const fecha = new Date(p.fechaUltimaCita);

    if (fecha < fechaMin || fecha > fechaMax) {
      errores.push({
        error: "Fecha fuera de rango",
        registro,
        causa: "FechaUltimaCita no está entre 2023-01-01 y 2025-05-01",
        correccion: "Asignar una fecha válida"
      });
    }

    // -----------------------------
    // Validación de EPS
    // -----------------------------
    if (!epsValidas.includes(p.eps)) {
      errores.push({
        error: "EPS inválida",
        registro,
        causa: "EPS fuera de la lista permitida",
        correccion: "Usar una EPS válida"
      });
    }

    // -----------------------------
    // Validación de montoUSD
    // -----------------------------
    const tarifaCorrecta = obtenerTarifa(p.especialidad);

    if (p.montoUSD !== tarifaCorrecta) {
      errores.push({
        error: "MontoUSD incorrecto",
        registro,
        causa: `La especialidad ${p.especialidad} debe costar ${tarifaCorrecta}`,
        correccion: "Asignar el monto correcto"
      });
    }
  });

  return errores;
}

// ===============================
// EJECUCIÓN Y REPORTE
// ===============================

const errores = validarDataset(pacientes);

console.log("===== REPORTE DE ERRORES =====");
if (errores.length === 0) {
  console.log("✔ El dataset no tiene errores. Todo está correcto.");
} else {
  errores.forEach(e => {
    console.log(`
Error: ${e.error}
Registro: ${e.registro}
Causa: ${e.causa}
Corrección: ${e.correccion}
-----------------------------`);
  });
}

