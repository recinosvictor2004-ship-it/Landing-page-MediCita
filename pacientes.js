// Lista de pacientes de ejemplo para MediCita
const pacientes = [
  { id: 1, nombre: 'Sofía Ramírez', email: 'sofia.ramirez@gmail.com', ciudad: 'Bogotá', especialidad: 'Psicología', edad: 29, fechaUltimaCita: '2024-02-10', eps: 'Sanitas', montoUSD: 45, activo: true },
  { id: 2, nombre: 'Andrés Rojas', email: 'andres.rojas@outlook.com', ciudad: 'Medellín', especialidad: 'Medicina general', edad: 41, fechaUltimaCita: '2024-05-22', eps: 'Nueva EPS', montoUSD: 25, activo: true },
  { id: 3, nombre: 'Camila Torres', email: 'camila.t@gmail.com', ciudad: 'Cali', especialidad: 'Nutrición', edad: 34, fechaUltimaCita: '2023-11-03', eps: 'Compensar', montoUSD: 35, activo: false },
  { id: 4, nombre: 'Juan Martínez', email: 'juan.martinez@gmail.com', ciudad: 'Bogotá', especialidad: 'Dermatología', edad: 38, fechaUltimaCita: '2024-01-15', eps: 'Sura', montoUSD: 45, activo: true },
  { id: 5, nombre: 'Paula López', email: 'paula.lopez@yahoo.com', ciudad: 'Medellín', especialidad: 'Pediatría', edad: 32, fechaUltimaCita: '2023-09-20', eps: 'Sanitas', montoUSD: 35, activo: false },

  { id: 6, nombre: 'Luis Herrera', email: 'luis.herrera@gmail.com', ciudad: 'Bogotá', especialidad: 'Cardiología', edad: 52, fechaUltimaCita: '2024-03-11', eps: 'Sura', montoUSD: 45, activo: true },
  { id: 7, nombre: 'María Fernanda Ruiz', email: 'mfernanda.ruiz@hotmail.com', ciudad: 'Medellín', especialidad: 'Ginecología', edad: 27, fechaUltimaCita: '2024-04-02', eps: 'Sanitas', montoUSD: 45, activo: true },
  { id: 8, nombre: 'Daniel Castro', email: 'daniel.castro@gmail.com', ciudad: 'Cali', especialidad: 'Medicina general', edad: 45, fechaUltimaCita: '2023-08-19', eps: 'Compensar', montoUSD: 25, activo: false },
  { id: 9, nombre: 'Valentina Gómez', email: 'valentina.gomez@yahoo.com', ciudad: 'Bogotá', especialidad: 'Psicología', edad: 31, fechaUltimaCita: '2024-01-22', eps: 'Nueva EPS', montoUSD: 45, activo: true },
  { id: 10, nombre: 'Sebastián López', email: 'sebastian.lopez@gmail.com', ciudad: 'Barranquilla', especialidad: 'Dermatología', edad: 36, fechaUltimaCita: '2024-03-05', eps: 'Particular', montoUSD: 45, activo: true },

  { id: 11, nombre: 'Carolina Méndez', email: 'carolina.mendez@gmail.com', ciudad: 'Medellín', especialidad: 'Nutrición', edad: 28, fechaUltimaCita: '2023-10-14', eps: 'Sanitas', montoUSD: 35, activo: true },
  { id: 12, nombre: 'Jorge Salazar', email: 'jorge.salazar@hotmail.com', ciudad: 'Bogotá', especialidad: 'Psiquiatría', edad: 48, fechaUltimaCita: '2024-02-28', eps: 'Sura', montoUSD: 45, activo: false },
  { id: 13, nombre: 'Natalia Rincón', email: 'natalia.rincon@gmail.com', ciudad: 'Cali', especialidad: 'Fisioterapia', edad: 22, fechaUltimaCita: '2023-07-09', eps: 'Compensar', montoUSD: 35, activo: true },
  { id: 14, nombre: 'Felipe Duarte', email: 'felipe.duarte@gmail.com', ciudad: 'Bogotá', especialidad: 'Medicina general', edad: 55, fechaUltimaCita: '2024-04-17', eps: 'Nueva EPS', montoUSD: 25, activo: true },
  { id: 15, nombre: 'Laura Sánchez', email: 'laura.sanchez@gmail.com', ciudad: 'Medellín', especialidad: 'Psicología', edad: 30, fechaUltimaCita: '2024-03-29', eps: 'Sanitas', montoUSD: 45, activo: true },

  { id: 16, nombre: 'Ricardo Molina', email: 'ricardo.molina@gmail.com', ciudad: 'Bogotá', especialidad: 'Endocrinología', edad: 60, fechaUltimaCita: '2024-01-09', eps: 'Sura', montoUSD: 45, activo: false },
  { id: 17, nombre: 'Ana María Torres', email: 'ana.torres@gmail.com', ciudad: 'Cali', especialidad: 'Ginecología', edad: 33, fechaUltimaCita: '2023-12-18', eps: 'Compensar', montoUSD: 45, activo: true },
  { id: 18, nombre: 'David Ramírez', email: 'david.ramirez@gmail.com', ciudad: 'Bogotá', especialidad: 'Cardiología', edad: 50, fechaUltimaCita: '2024-04-11', eps: 'Nueva EPS', montoUSD: 45, activo: true },
  { id: 19, nombre: 'Juliana Pérez', email: 'juliana.perez@gmail.com', ciudad: 'Medellín', especialidad: 'Nutrición', edad: 26, fechaUltimaCita: '2023-09-07', eps: 'Sanitas', montoUSD: 35, activo: true },
  { id: 20, nombre: 'Mateo Vargas', email: 'mateo.vargas@gmail.com', ciudad: 'Barranquilla', especialidad: 'Medicina general', edad: 44, fechaUltimaCita: '2024-02-03', eps: 'Particular', montoUSD: 25, activo: false },

  { id: 21, nombre: 'Isabella León', email: 'isabella.leon@gmail.com', ciudad: 'Bogotá', especialidad: 'Psicología', edad: 24, fechaUltimaCita: '2024-03-21', eps: 'Sura', montoUSD: 45, activo: true },
  { id: 22, nombre: 'Tomás Gutiérrez', email: 'tomas.gutierrez@gmail.com', ciudad: 'Cali', especialidad: 'Fisioterapia', edad: 39, fechaUltimaCita: '2023-06-30', eps: 'Compensar', montoUSD: 35, activo: true },
  { id: 23, nombre: 'Mariana Silva', email: 'mariana.silva@gmail.com', ciudad: 'Medellín', especialidad: 'Dermatología', edad: 37, fechaUltimaCita: '2024-01-27', eps: 'Sanitas', montoUSD: 45, activo: true },
  { id: 24, nombre: 'Samuel Ortega', email: 'samuel.ortega@gmail.com', ciudad: 'Bogotá', especialidad: 'Psiquiatría', edad: 46, fechaUltimaCita: '2024-04-08', eps: 'Nueva EPS', montoUSD: 45, activo: false },
  { id: 25, nombre: 'Nicole Herrera', email: 'nicole.herrera@gmail.com', ciudad: 'Cartagena', especialidad: 'Ginecología', edad: 29, fechaUltimaCita: '2023-11-12', eps: 'Particular', montoUSD: 45, activo: true },

  { id: 26, nombre: 'Pablo Cárdenas', email: 'pablo.cardenas@gmail.com', ciudad: 'Bogotá', especialidad: 'Medicina general', edad: 58, fechaUltimaCita: '2024-02-14', eps: 'Sura', montoUSD: 25, activo: true },
  { id: 27, nombre: 'Sara Montoya', email: 'sara.montoya@gmail.com', ciudad: 'Medellín', especialidad: 'Psicología', edad: 35, fechaUltimaCita: '2024-03-02', eps: 'Sanitas', montoUSD: 45, activo: true },
  { id: 28, nombre: 'Héctor Lozano', email: 'hector.lozano@gmail.com', ciudad: 'Cali', especialidad: 'Nutrición', edad: 30, fechaUltimaCita: '2023-10-25', eps: 'Compensar', montoUSD: 35, activo: false },
  { id: 29, nombre: 'Daniela Prieto', email: 'daniela.prieto@gmail.com', ciudad: 'Bogotá', especialidad: 'Dermatología', edad: 40, fechaUltimaCita: '2024-01-19', eps: 'Nueva EPS', montoUSD: 45, activo: true },
  { id: 30, nombre: 'Cristian Rivas', email: 'cristian.rivas@gmail.com', ciudad: 'Barranquilla', especialidad: 'Cardiología', edad: 53, fechaUltimaCita: '2024-03-16', eps: 'Particular', montoUSD: 45, activo: true },

  { id: 31, nombre: 'Elena Duarte', email: 'elena.duarte@gmail.com', ciudad: 'Medellín', especialidad: 'Fisioterapia', edad: 23, fechaUltimaCita: '2023-07-14', eps: 'Sanitas', montoUSD: 35, activo: true },
  { id: 32, nombre: 'Gabriel Torres', email: 'gabriel.torres@gmail.com', ciudad: 'Bogotá', especialidad: 'Endocrinología', edad: 62, fechaUltimaCita: '2024-02-26', eps: 'Sura', montoUSD: 45, activo: false },
  { id: 33, nombre: 'Luisa Peña', email: 'luisa.pena@gmail.com', ciudad: 'Cali', especialidad: 'Ginecología', edad: 28, fechaUltimaCita: '2023-12-03', eps: 'Compensar', montoUSD: 45, activo: true },
  { id: 34, nombre: 'Oscar Medina', email: 'oscar.medina@gmail.com', ciudad: 'Bogotá', especialidad: 'Psiquiatría', edad: 47, fechaUltimaCita: '2024-04-01', eps: 'Nueva EPS', montoUSD: 45, activo: false },
  { id: 35, nombre: 'Daniela Cifuentes', email: 'daniela.cifuentes@gmail.com', ciudad: 'Medellín', especialidad: 'Nutrición', edad: 33, fechaUltimaCita: '2023-09-28', eps: 'Sanitas', montoUSD: 35, activo: true }
];
