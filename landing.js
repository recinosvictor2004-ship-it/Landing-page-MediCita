// PROMPT: Manejo de registro + botón "Agendar cita"
// - Validar formulario
// - Guardar usuario en localStorage
// - Redirigir al dashboard
// - Botón flotante lleva al formulario

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");
  const agendarBtn = document.getElementById("agendarBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nombre || !email) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Guardar usuario en localStorage (simulación de registro)
    const usuario = { nombre, email };
    localStorage.setItem("medicitaUsuario", JSON.stringify(usuario));

    alert(`Cuenta creada para: ${nombre}`);

    // Redirigir al dashboard del paciente
    window.location.href = "dashboard.html";
  });

  // Botón flotante: lleva al formulario de registro
  agendarBtn.addEventListener("click", () => {
    const registroSection = document.getElementById("registro");
    registroSection.scrollIntoView({ behavior: "smooth" });
  });
});
