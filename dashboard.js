// PROMPT: Sidebar hamburguesa + usuario desde localStorage
// - Mostrar nombre del usuario registrado
// - Sidebar colapsable con transición
// - Botón hamburguesa ≡ / X
// - Cerrar sesión limpia localStorage y vuelve a la landing

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const nombreUsuarioSpan = document.getElementById("nombreUsuario");
  const logoutBtn = document.getElementById("logoutBtn");

  // Cargar usuario desde localStorage
  const usuarioStr = localStorage.getItem("medicitaUsuario");
  if (usuarioStr) {
    const usuario = JSON.parse(usuarioStr);
    nombreUsuarioSpan.textContent = usuario.nombre;
  }

  let isOpen = false;

  function toggleSidebar() {
    isOpen = !isOpen;
    if (isOpen) {
      sidebar.classList.add("sidebar--visible");
      hamburgerBtn.textContent = "X";
    } else {
      sidebar.classList.remove("sidebar--visible");
      hamburgerBtn.textContent = "≡";
    }
  }

  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSidebar();
  });

  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && isOpen) {
      toggleSidebar();
    }
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("medicitaUsuario");
    window.location.href = "index.html";
  });
});
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
let pagosPendientes = [
  { id: 1, descripcion: "Consulta Psicología", monto: 150000 },
  { id: 2, descripcion: "Consulta Dermatología", monto: 180000 }
];

let pagosHistorial = [];

function renderizarPagos() {
  const pendientes = document.getElementById("listaPagosPendientes");
  const historial = document.getElementById("listaPagosHistorial");

  pendientes.innerHTML = "";
  historial.innerHTML = "";

  pagosPendientes.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.descripcion} - COP ${p.monto}
      <button onclick="pagar(${p.id})">Pagar</button>
      <button onclick="eliminarPago(${p.id})">Eliminar</button>
    `;
    pendientes.appendChild(li);
  });

  pagosHistorial.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.descripcion} - COP ${p.monto}`;
    historial.appendChild(li);
  });
}

function pagar(id) {
  const pago = pagosPendientes.find(p => p.id === id);
  pagosPendientes = pagosPendientes.filter(p => p.id !== id);
  pagosHistorial.push(pago);
  renderizarPagos();
}

function eliminarPago(id) {
  pagosPendientes = pagosPendientes.filter(p => p.id !== id);
  renderizarPagos();
}
// Abrir modal de pago
document.getElementById("btnAgregarPago").addEventListener("click", () => {
  document.getElementById("formPago").reset();
  document.getElementById("modalPago").classList.remove("hidden");
});

// Cerrar modal de pago
document.getElementById("cerrarModalPago").addEventListener("click", () => {
  document.getElementById("modalPago").classList.add("hidden");
});

// Guardar nuevo pago
document.getElementById("formPago").addEventListener("submit", (e) => {
  e.preventDefault();

  const nuevoPago = {
    id: pagosPendientes.length ? pagosPendientes[pagosPendientes.length - 1].id + 1 : 1,
    descripcion: document.getElementById("pagoDescripcion").value,
    monto: Number(document.getElementById("pagoMonto").value)
  };

  pagosPendientes.push(nuevoPago);
  renderizarPagos();
  document.getElementById("modalPago").classList.add("hidden");
});

const usuario = {
  nombre: "Victor Recinos",
  email: "victor@example.com",
  ciudad: "Mixco",
  eps: "Sanitas"
};

function renderizarPerfil() {
  document.getElementById("perfilNombre").textContent = usuario.nombre;
  document.getElementById("perfilEmail").textContent = usuario.email;
  document.getElementById("perfilCiudad").textContent = usuario.ciudad;
  document.getElementById("perfilEPS").textContent = usuario.eps;
}
document.getElementById("btnCrearCita").addEventListener("click", () => {
  document.getElementById("modalCita").classList.remove("hidden");
});

document.getElementById("cerrarModalCita").addEventListener("click", () => {
  document.getElementById("modalCita").classList.add("hidden");
});

document.getElementById("formCita").addEventListener("submit", (e) => {
  e.preventDefault();

  const nuevaCita = {
    especialidad: document.getElementById("citaEspecialidad").value,
    medico: document.getElementById("citaMedico").value,
    modalidad: document.getElementById("citaModalidad").value,
    fecha: document.getElementById("citaFecha").value,
    precio: document.getElementById("citaPrecio").value,
    estado: document.getElementById("citaEstado").value
  };

  agregarCitaATabla(nuevaCita);
  document.getElementById("modalCita").classList.add("hidden");
});
function agregarCitaATabla(cita) {
  const tbody = document.querySelector(".appointments-table tbody");

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${cita.especialidad}</td>
    <td>${cita.medico}</td>
    <td>${cita.modalidad}</td>
    <td>${cita.fecha}</td>
    <td>${cita.precio}</td>
    <td><span class="badge badge--${cita.estado.toLowerCase()}">${cita.estado}</span></td>
  `;

  tbody.appendChild(tr);
}
// Abrir modal de perfil
document.getElementById("btnEditarPerfil").addEventListener("click", () => {
  document.getElementById("perfilNombreInput").value = usuario.nombre;
  document.getElementById("perfilEmailInput").value = usuario.email;
  document.getElementById("perfilCiudadInput").value = usuario.ciudad;
  document.getElementById("perfilEPSInput").value = usuario.eps;

  document.getElementById("modalPerfil").classList.remove("hidden");
});

// Cerrar modal de perfil
document.getElementById("cerrarModalPerfil").addEventListener("click", () => {
  document.getElementById("modalPerfil").classList.add("hidden");
});

// Guardar cambios de perfil
document.getElementById("formPerfil").addEventListener("submit", (e) => {
  e.preventDefault();

  usuario.nombre = document.getElementById("perfilNombreInput").value;
  usuario.email = document.getElementById("perfilEmailInput").value;
  usuario.ciudad = document.getElementById("perfilCiudadInput").value;
  usuario.eps = document.getElementById("perfilEPSInput").value;

  renderizarPerfil();
  document.getElementById("modalPerfil").classList.add("hidden");
});
renderizarPagos();
renderizarPerfil();
