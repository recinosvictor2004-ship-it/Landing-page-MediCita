// Listas válidas
const ciudadesValidas = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena'];
const epsValidas = ['Sura', 'Nueva EPS', 'Sanitas', 'Compensar', 'Particular'];
const especialidadesValidas = [
  'Medicina general', 'Pediatría', 'Psicología', 'Dermatología',
  'Nutrición', 'Ginecología', 'Cardiología', 'Fisioterapia',
  'Psiquiatría', 'Endocrinología'
];

function tarifaPorEspecialidad(especialidad) {
  if (especialidad === 'Medicina general') return 25;
  if (['Pediatría', 'Nutrición', 'Fisioterapia'].includes(especialidad)) return 35;
  return 45; // resto consideradas avanzadas
}

function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function fechaValida(fechaStr) {
  const fecha = new Date(fechaStr);
  const min = new Date('2023-01-01');
  const max = new Date('2025-05-01');
  return fecha >= min && fecha <= max;
}

function validarDataset(dataset) {
  const errores = [];

  // IDs únicos y consecutivos
  const ids = dataset.map(p => p.id);
  const idsSet = new Set(ids);
  if (idsSet.size !== ids.length) {
    errores.push({ tipo: 'ID duplicado', detalle: 'Hay IDs repetidos en el dataset' });
  }

  const minId = Math.min(...ids);
  const maxId = Math.max(...ids);
  for (let i = minId; i <= maxId; i++) {
    if (!idsSet.has(i)) {
      errores.push({ tipo: 'ID faltante', detalle: `Falta el ID ${i}` });
    }
  }

  // Validación por registro
  const emailsSet = new Set();

  dataset.forEach(p => {
    if (!emailValido(p.email)) {
      errores.push({ tipo: 'Email inválido', id: p.id, valor: p.email });
    }
    if (emailsSet.has(p.email)) {
      errores.push({ tipo: 'Email duplicado', id: p.id, valor: p.email });
    }
    emailsSet.add(p.email);

    const tarifaEsperada = tarifaPorEspecialidad(p.especialidad);
    if (p.montoUSD !== tarifaEsperada) {
      errores.push({
        tipo: 'Tarifa incoherente',
        id: p.id,
        especialidad: p.especialidad,
        montoUSD: p.montoUSD,
        esperado: tarifaEsperada
      });
    }

    if (p.edad < 18 || p.edad > 90) {
      errores.push({ tipo: 'Edad fuera de rango', id: p.id, edad: p.edad });
    }

    if (!fechaValida(p.fechaUltimaCita)) {
      errores.push({ tipo: 'Fecha fuera de rango', id: p.id, fecha: p.fechaUltimaCita });
    }

    if (!ciudadesValidas.includes(p.ciudad)) {
      errores.push({ tipo: 'Ciudad inválida', id: p.id, ciudad: p.ciudad });
    }

    if (!epsValidas.includes(p.eps)) {
      errores.push({ tipo: 'EPS inválida', id: p.id, eps: p.eps });
    }

    if (!especialidadesValidas.includes(p.especialidad)) {
      errores.push({ tipo: 'Especialidad inválida', id: p.id, especialidad: p.especialidad });
    }
  });

  return errores;
}

// Ejemplo de uso:
// const reporte = validarDataset(pacientes);
// console.log(reporte);
