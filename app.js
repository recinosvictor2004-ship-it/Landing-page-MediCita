let datosPacientes = [];
let chart;

// cargarDatos: lee de localStorage o usa dataset inicial
function cargarDatos() {
  const almacenados = localStorage.getItem('medicitaPacientes');
  if (almacenados) {
    datosPacientes = JSON.parse(almacenados);
  } else {
    datosPacientes = [...pacientes]; // viene de pacientes.js
    guardarDatos();
  }
}

// guardarDatos: guarda en localStorage
function guardarDatos() {
  localStorage.setItem('medicitaPacientes', JSON.stringify(datosPacientes));
}

// renderizarCards: construye HTML de las cards
function renderizarCards(lista) {
  const contenedor = document.getElementById('cardsContainer');
  contenedor.innerHTML = '';

  lista.forEach(p => {
    const adherencia = p.activo ? 85 : 60; // ejemplo simple
    const cardHtml = `
      <article class="card">
        <div class="card__header">
          <h3>${p.nombre}</h3>
          <span class="card__badge">${p.eps}</span>
        </div>
        <div class="card__body">
          <p><strong>Ciudad:</strong> ${p.ciudad}</p>
          <p><strong>Especialidad:</strong> ${p.especialidad}</p>
          <p><strong>Email:</strong> ${p.email}</p>
          <p><strong>Monto USD:</strong> ${p.montoUSD}</p>
          <p><strong>Activo:</strong> ${p.activo ? 'Sí' : 'No'}</p>
        </div>
        <div class="card__actions">
          <button class="btn-edit" onclick="abrirModal(${p.id})">Editar</button>
          <button class="btn-delete" onclick="eliminarPaciente(${p.id})">Eliminar</button>
        </div>
      </article>
    `;
    contenedor.innerHTML += cardHtml;
  });
}

// filtrar: aplica búsqueda + filtros
function filtrar() {
  const texto = document.getElementById('searchInput').value.toLowerCase();
  const ciudad = document.getElementById('cityFilter').value;
  const especialidad = document.getElementById('specialtyFilter').value;

  const filtrados = datosPacientes.filter(p => {
    const coincideTexto =
      p.nombre.toLowerCase().includes(texto) ||
      p.email.toLowerCase().includes(texto);

    const coincideCiudad = ciudad ? p.ciudad === ciudad : true;
    const coincideEspecialidad = especialidad ? p.especialidad === especialidad : true;

    return coincideTexto && coincideCiudad && coincideEspecialidad;
  });

  renderizarCards(filtrados);
}

// abrirModal: nuevo o editar
function abrirModal(id) {
  const modal = document.getElementById('patientModal');
  modal.classList.add('modal--visible');

  const form = document.getElementById('patientForm');
  form.reset();

  if (id) {
    const paciente = datosPacientes.find(p => p.id === id);
    document.getElementById('modalTitle').textContent = 'Editar paciente';
    document.getElementById('patientId').value = paciente.id;
    document.getElementById('nombreInput').value = paciente.nombre;
    document.getElementById('emailInput').value = paciente.email;
    document.getElementById('ciudadInput').value = paciente.ciudad;
    document.getElementById('especialidadInput').value = paciente.especialidad;
    document.getElementById('edadInput').value = paciente.edad;
    document.getElementById('epsInput').value = paciente.eps;
    document.getElementById('montoInput').value = paciente.montoUSD;
    document.getElementById('activoInput').checked = paciente.activo;
  } else {
    document.getElementById('modalTitle').textContent = 'Nuevo paciente';
    document.getElementById('patientId').value = '';
  }
}

// cerrar modal
function cerrarModal() {
  const modal = document.getElementById('patientModal');
  modal.classList.remove('modal--visible');
}

// guardarPaciente: alta o edición
function guardarPaciente() {
  const id = document.getElementById('patientId').value;
  const nombre = document.getElementById('nombreInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const ciudad = document.getElementById('ciudadInput').value.trim();
  const especialidad = document.getElementById('especialidadInput').value.trim();
  const edad = parseInt(document.getElementById('edadInput').value, 10);
  const eps = document.getElementById('epsInput').value.trim();
  const montoUSD = parseFloat(document.getElementById('montoInput').value);
  const activo = document.getElementById('activoInput').checked;

  if (!nombre || !email) {
    alert('Nombre y email son obligatorios');
    return;
  }

  if (id) {
    const idx = datosPacientes.findIndex(p => p.id === parseInt(id, 10));
    datosPacientes[idx] = {
      ...datosPacientes[idx],
      nombre,
      email,
      ciudad,
      especialidad,
      edad,
      eps,
      montoUSD,
      activo
    };
  } else {
    const nuevoId = datosPacientes.length
      ? Math.max(...datosPacientes.map(p => p.id)) + 1
      : 1;

    datosPacientes.push({
      id: nuevoId,
      nombre,
      email,
      ciudad,
      especialidad,
      edad,
      eps,
      montoUSD,
      activo
    });
  }

  guardarDatos();
  filtrar();
  actualizarGrafico();
  cerrarModal();
}

// eliminarPaciente
function eliminarPaciente(id) {
  if (!confirm('¿Seguro que deseas eliminar este paciente?')) return;
  datosPacientes = datosPacientes.filter(p => p.id !== id);
  guardarDatos();
  filtrar();
  actualizarGrafico();
}

// actualizarGrafico: conteo por especialidad
function actualizarGrafico() {
  const conteo = {};
  datosPacientes.forEach(p => {
    conteo[p.especialidad] = (conteo[p.especialidad] || 0) + 1;
  });

  const labels = Object.keys(conteo);
  const valores = Object.values(conteo);

  const ctx = document.getElementById('chartEspecialidades').getContext('2d');

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Pacientes por especialidad',
        data: valores,
        backgroundColor: '#2b7de9'
      }]
    }
  });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  cargarDatos();
  filtrar();
  actualizarGrafico();

  document.getElementById('searchInput').addEventListener('input', filtrar);
  document.getElementById('cityFilter').addEventListener('change', filtrar);
  document.getElementById('specialtyFilter').addEventListener('change', filtrar);

  document.getElementById('addPatientBtn').addEventListener('click', () => abrirModal(null));
  document.getElementById('closeModalBtn').addEventListener('click', cerrarModal);

  document.getElementById('patientForm').addEventListener('submit', (e) => {
    e.preventDefault();
    guardarPaciente();
  });
});
