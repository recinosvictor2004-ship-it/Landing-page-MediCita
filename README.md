🩺 Descripción general del proyecto
MediCita es una plataforma de telemedicina diseñada para pacientes que desean gestionar citas médicas, pagos y su perfil desde un dashboard moderno y responsivo.

Este proyecto fue desarrollado en 5 fases, aplicando técnicas de Prompt Engineering, Role Prompting, Chain of Thought, Few-shot prompting, y validación programática.

Incluye:

Landing page profesional

Dashboard SPA con sidebar funcional

CRUD de citas

CRUD de pagos

CRUD de perfil

Dataset sintético validado

Navegación entre secciones sin recargar la página

Modales para crear citas, editar perfil y agregar pagos

Persistencia con localStorage

🟦 FASE 1 — Landing Page (Prompt Engineering)
🎯 Objetivo
Crear una landing page profesional para MediCita usando técnicas de prompting avanzadas.

🧠 Prompt usado (Priming)
Código
Actúa como un desarrollador frontend senior especializado en plataformas healthtech (salud digital).
Voy a pedirte que diseñes y codees la landing page de MediCita, una startup colombiana de telemedicina.
Antes de comenzar, confirma que entendiste el rol y pregúntame qué información necesitas para darme la mejor propuesta posible.
🧠 Prompt usado (Chain of Thought — diseño)
Código
Antes de escribir cualquier código, razona paso a paso:
1. ¿Qué secciones necesita la landing de MediCita?
2. ¿Qué jerarquía visual tienen?
3. ¿Qué paleta de colores propones?
4. ¿Qué tipografía recomiendas?
5. ¿Qué estructura HTML semántica usarías?

Contexto del proyecto:
- Nombre: MediCita
- Propósito: captar registros de pacientes para agendar citas médicas virtuales
- Audiencia: profesionales colombianos de 25-55 años
- Contenido requerido: hero con CTA, especialidades, testimonios, estadísticas, formulario, footer
- Estética: profesional, confiable, cálida
🧠 Prompt usado (HTML)
Código
Genera el HTML completo de la landing de MediCita siguiendo exactamente la propuesta anterior.
Requisitos:
- HTML semántico
- IDs para scroll suave
- Clases en kebab-case
- Sin CSS inline
🧠 Prompt usado (CSS)
Código
Genera el archivo style.css para la landing:
- Variables CSS
- Mobile-first
- Botón flotante
- Tipografía Google Fonts
✔ Resultado FASE 1
Landing moderna, responsiva, con:

Hero

Especialidades

Testimonios

Estadísticas

Formulario

Footer

Scroll suave

🟩 FASE 2 — Dashboard del paciente (Role Prompting)
🎯 Objetivo
Construir un dashboard SPA con sidebar, KPIs, tabla de citas y navegación móvil.

🧠 Prompt usado (Role Prompting)
Código
Eres un diseñador UX/UI con experiencia en plataformas de salud digital.
Diseña el dashboard del paciente de MediCita con:
- Sidebar fijo
- KPI cards
- Tabla responsiva
- Menú hamburguesa
🧠 Prompt usado (KPI cards)
Código
Genera las tarjetas KPI con:
- Ícono
- Título
- Valor
- Variación
- Barra de progreso
🧠 Prompt usado (Tabla)
Código
Crea una tabla responsiva con columnas:
Especialidad | Médico | Modalidad | Fecha | Precio | Estado
✔ Resultado FASE 2
Dashboard funcional con:

Sidebar

KPI cards

Tabla responsiva

Menú hamburguesa

Estilo consistente

🟧 FASE 3 — Dataset de pacientes (Few-shot + reglas)
🎯 Objetivo
Generar dataset sintético de 35 pacientes cumpliendo reglas estrictas.

🧠 Prompt usado (estructura)
Código
Diseña la estructura del dataset de pacientes de MediCita y complétala en tabla:
id, nombre, email, ciudad, especialidad, edad, fechaUltimaCita, eps, montoUSD, activo.
Incluye restricciones y ejemplos.
🧠 Prompt usado (few-shot)
Código
Genera 5 registros manuales que cumplan todas las reglas.
Servirán como few-shot para la generación IA.
🧠 Prompt usado (generación IA)
Código
Genera 30 registros adicionales cumpliendo:
- IDs únicos
- Emails válidos
- montoUSD según especialidad
- edad 18–90
- fechas 2023–2025
- EPS válidas
- ciudades válidas
- especialidades válidas
✔ Resultado FASE 3
Dataset completo, limpio, consistente y listo para validación.

🟥 FASE 4 — Validación programática (JavaScript)
🎯 Objetivo
Validar el dataset antes de usarlo en el CRUD.

🧠 Prompt usado (validación)
Código
Crea validacion.js que revise:
- IDs únicos
- Emails válidos
- montoUSD correcto
- edad en rango
- fecha en rango
- EPS válidas
- especialidades válidas
🧠 Prompt usado (meta-validación)
Código
Actúa como auditor de datos.
Detecta inconsistencias, duplicados, valores fuera de rango y patrones sospechosos.
✔ Resultado FASE 4
Archivo validacion.js con:

Validación completa

Reporte de errores

Documentación de errores

🟩 FASE 5 — CRUD + SPA + Modales + Pagos + Perfil
🎯 Objetivo
Construir un dashboard completamente funcional:

Sidebar navegable

Secciones SPA

CRUD de citas

CRUD de pagos

CRUD de perfil

Modales

Persistencia con localStorage

🧠 Prompt usado (interfaz completa)
Código
Construye la interfaz de gestión de pacientes con:

SECCIONES:
- Inicio
- Mis citas
- Pagos
- Perfil

CRUD:
- Crear cita (modal)
- Editar perfil (modal)
- Agregar pago (modal)
- Pagar
- Eliminar pago

SPA:
- mostrarSeccion()

Persistencia:
- localStorage

Genera:
- HTML
- CSS
- JS completo
✔ Resultado FASE 5
Dashboard final con:

Sidebar funcional

Navegación SPA

Crear cita

Editar perfil

Agregar pago

Pagar

Eliminar pago

Persistencia

Modales

Tabla dinámica

🟦 Arquitectura del proyecto
Código
/mediCita
│
├── index.html
├── landing.css
├── landing.js
│
├── dashboard.html
├── dashboard.css
├── dashboard.js
│
├── crud.html
├── style.css
├── app.js
│
├── pacientes.js
├── validacion.js
│
└── README.md
🟩 Cómo ejecutar el proyecto
Abrir index.html → Landing

Registrarse → Guarda usuario en localStorage

Redirige a dashboard.html

Sidebar permite navegar entre:

Inicio

Mis citas

Pagos

Perfil

Crear cita → Modal

Editar perfil → Modal

Agregar pago → Modal

Pagar / eliminar pago

Todo se guarda en localStorage

🟦 Cómo funciona cada módulo
✔ Sidebar
Botón hamburguesa

Animación

Cerrar sesión limpia localStorage

✔ SPA (Single Page Application)
mostrarSeccion(id) oculta todas las secciones y muestra solo la seleccionada.

✔ Citas
Modal para crear

Se agregan a la tabla

Estado con badges

✔ Pagos
Lista de pagos pendientes

Historial

Botón pagar

Botón eliminar

Modal agregar pago

✔ Perfil
Datos del usuario

Modal para editar

Se actualiza en tiempo real