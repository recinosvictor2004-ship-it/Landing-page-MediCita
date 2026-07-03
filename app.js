// ===============================
// FASE 5 — CRUD + localStorage
// ===============================

let datos = [];

// -------------------------------
// cargarDatos()
// -------------------------------
function cargarDatos() {
  const guardados = localStorage.getItem("pacientes");

  if (guardados) {
    datos = JSON.parse(guardados);
  } else {
    datos = pacientes; // viene de pacientes.js
    guardarDatos();
  }

  renderizarCards(datos);
  actualizarGrafico();
}

// -------------------------------
// guardarDatos()
// -------------------------------
function guardarDatos() {
  localStorage.setItem("pacientes", JSON.stringify(datos));
}

// -------------------------------
// renderizarCards(lista)
// -------------------------------
function renderizarCards(lista) {
  const cont = document.getElementById("cardsContainer");
  cont.innerHTML = "";

  lista.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <h3>${p.nombre}</h3>
      <p><strong>Email:</strong> ${p.email}</p>
      <p><strong>Ciudad:</strong> ${p.ciudad}</p>
      <p><strong>Especialidad:</strong> ${p.especialidad}</p>
      <p><strong>Edad:</strong> ${p.edad}</p>
      <p><strong>EPS:</strong> ${p.eps}</p>
      <span class="badge badge-${p.activo}">${p.activo ? "Activo" : "Inactivo"}</span>

      <section class="card-buttons">
        <button onclick="abrirModal(${p.id})">Editar</button>
        <button onclick="eliminarPaciente(${p.id})">Eliminar</button>
      </section>
    `;

    cont.appendChild(card);
  });
}

// -------------------------------
// filtrar()
// -------------------------------
function filtrar() {
  const texto = document.getElementById("searchInput").value.toLowerCase();
  const ciudad = document.getElementById("filtroCiudad").value;
  const esp = document.getElementById("filtroEspecialidad").value;

  let lista = datos.filter(p =>
    (p.nombre.toLowerCase().includes(texto) ||
     p.email.toLowerCase().includes(texto)) &&
    (ciudad === "" || p.ciudad === ciudad) &&
    (esp === "" || p.especialidad === esp)
  );

  renderizarCards(lista);
}

// -------------------------------
// abrirModal(id)
// -------------------------------
function abrirModal(id) {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");

  if (id) {
    const p = datos.find(x => x.id === id);

    document.getElementById("modalTitulo").textContent = "Editar paciente";
    document.getElementById("modalId").value = p.id;
    document.getElementById("modalNombre").value = p.nombre;
    document.getElementById("modalEmail").value = p.email;
    document.getElementById("modalCiudad").value = p.ciudad;
    document.getElementById("modalEspecialidad").value = p.especialidad;
    document.getElementById("modalEdad").value = p.edad;
    document.getElementById("modalFecha").value = p.fechaUltimaCita;
    document.getElementById("modalEPS").value = p.eps;
    document.getElementById("modalActivo").value = p.activo;
  } else {
    document.getElementById("modalTitulo").textContent = "Agregar paciente";
    document.getElementById("modalForm").reset();
    document.getElementById("modalId").value = "";
  }
}

// -------------------------------
// guardarPaciente()
// -------------------------------
function guardarPaciente() {
  const id = document.getElementById("modalId").value;
  const nuevo = {
    id: id ? Number(id) : datos.length + 1,
    nombre: document.getElementById("modalNombre").value,
    email: document.getElementById("modalEmail").value,
    ciudad: document.getElementById("modalCiudad").value,
    especialidad: document.getElementById("modalEspecialidad").value,
    edad: Number(document.getElementById("modalEdad").value),
    fechaUltimaCita: document.getElementById("modalFecha").value,
    eps: document.getElementById("modalEPS").value,
    montoUSD: obtenerTarifa(document.getElementById("modalEspecialidad").value),
    activo: document.getElementById("modalActivo").value === "true"
  };

  if (id) {
    const index = datos.findIndex(x => x.id === Number(id));
    datos[index] = nuevo;
  } else {
    datos.push(nuevo);
  }

  guardarDatos();
  renderizarCards(datos);
  actualizarGrafico();
  cerrarModal();
}

// -------------------------------
// eliminarPaciente(id)
// -------------------------------
function eliminarPaciente(id) {
  if (!confirm("¿Eliminar este paciente?")) return;

  datos = datos.filter(p => p.id !== id);
  guardarDatos();
  renderizarCards(datos);
  actualizarGrafico();
}

// -------------------------------
// cerrarModal()
// -------------------------------
function cerrarModal() {
  document.getElementById("modal").classList.add("hidden");
}

// -------------------------------
// actualizarGrafico()
// -------------------------------
function actualizarGrafico() {
  const conteo = {};

  datos.forEach(p => {
    conteo[p.especialidad] = (conteo[p.especialidad] || 0) + 1;
  });

  const ctx = document.getElementById("chartEspecialidades");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(conteo),
      datasets: [{
        label: "Pacientes por especialidad",
        data: Object.values(conteo),
        backgroundColor: "#2b7de9"
      }]
    }
  });
}

// -------------------------------
// EVENTOS
// -------------------------------
document.getElementById("searchInput").addEventListener("input", filtrar);
document.getElementById("filtroCiudad").addEventListener("change", filtrar);
document.getElementById("filtroEspecialidad").addEventListener("change", filtrar);
document.getElementById("btnAgregar").addEventListener("click", () => abrirModal(null));
document.getElementById("btnCerrarModal").addEventListener("click", cerrarModal);
document.getElementById("modalForm").addEventListener("submit", (e) => {
  e.preventDefault();
  guardarPaciente();
});

// Inicializar
cargarDatos();
actualizarGrafico();