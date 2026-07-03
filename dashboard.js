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
