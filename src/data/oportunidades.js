/**
 * Datos de oportunidades en el campo de la tecnología
 */

// Base de datos de oportunidades
const oportunidadesDB = [
  {
    id: 'op001',
    titulo: 'Programa de Becas para Desarrollo Web',
    descripcion: 'Programa de formación intensiva en desarrollo web full stack con beca completa para jóvenes entre 18 y 25 años.',
    tipo: 'beca',
    organizacion: 'Fundación Código Futuro',
    fechaLimite: '2025-06-30',
    requisitos: [
      'Edad entre 18 y 25 años',
      'Conocimientos básicos de programación',
      'Disponibilidad de tiempo completo',
      'Carta de motivación'
    ],
    url: 'https://fundacioncodigofuturo.org/becas'
  },
  {
    id: 'op002',
    titulo: 'Hackathon Soluciones Sostenibles',
    descripcion: 'Competencia de 48 horas para desarrollar soluciones tecnológicas que aborden problemas ambientales.',
    tipo: 'hackathon',
    organizacion: 'TechForGood',
    fechaLimite: '2025-07-15',
    requisitos: [
      'Equipos de 2-4 personas',
      'Al menos un miembro con experiencia en desarrollo',
      'Presentación de idea preliminar'
    ],
    url: 'https://techforgood.org/hackathon2025'
  },
  {
    id: 'op003',
    titulo: 'Prácticas en Desarrollo de Aplicaciones Móviles',
    descripcion: 'Programa de prácticas remuneradas de 6 meses en desarrollo de aplicaciones móviles para iOS y Android.',
    tipo: 'trabajo',
    organizacion: 'AppTech Inc.',
    fechaLimite: '2025-08-01',
    requisitos: [
      'Estudiantes de último año o recién graduados',
      'Conocimientos de Swift o Kotlin',
      'Portfolio de proyectos personales'
    ],
    url: 'https://apptech.com/careers/internships'
  },
  {
    id: 'op004',
    titulo: 'Curso Online Gratuito de Inteligencia Artificial',
    descripcion: 'Curso completo de introducción a la inteligencia artificial y machine learning con certificación.',
    tipo: 'estudio',
    organizacion: 'AI Learning Hub',
    fechaLimite: null,
    requisitos: [
      'Conocimientos básicos de programación en Python',
      'Fundamentos de matemáticas y estadística'
    ],
    url: 'https://ailearninghub.edu/free-course'
  },
  {
    id: 'op005',
    titulo: 'Programa de Mentorías en Ciberseguridad',
    descripcion: 'Programa de mentorías personalizadas con profesionales de ciberseguridad durante 3 meses.',
    tipo: 'voluntariado',
    organizacion: 'CyberDefenders',
    fechaLimite: '2025-06-15',
    requisitos: [
      'Interés demostrable en ciberseguridad',
      'Compromiso de 5 horas semanales',
      'Completar desafío técnico inicial'
    ],
    url: 'https://cyberdefenders.org/mentorship'
  },
  {
    id: 'op006',
    titulo: 'Bootcamp de Data Science',
    descripcion: 'Programa intensivo de 12 semanas para convertirte en científico de datos con garantía de empleo.',
    tipo: 'estudio',
    organizacion: 'DataCamp Academy',
    fechaLimite: '2025-07-30',
    requisitos: [
      'Conocimientos básicos de programación',
      'Fundamentos de estadística',
      'Superar prueba de admisión',
      'Disponibilidad tiempo completo'
    ],
    url: 'https://datacampacademy.com/bootcamp'
  },
  {
    id: 'op007',
    titulo: 'Voluntariado en Enseñanza de Programación',
    descripcion: 'Programa para enseñar programación básica a niños y jóvenes de comunidades vulnerables.',
    tipo: 'voluntariado',
    organizacion: 'Code4All',
    fechaLimite: null,
    requisitos: [
      'Conocimientos de programación',
      'Habilidades de comunicación',
      'Disponibilidad de 3 horas semanales',
      'Compromiso mínimo de 3 meses'
    ],
    url: 'https://code4all.org/volunteer'
  },
  {
    id: 'op008',
    titulo: 'Desarrollador Junior Frontend',
    descripcion: 'Posición para desarrollador junior frontend con React en startup de educación tecnológica.',
    tipo: 'trabajo',
    organizacion: 'EduTech Startup',
    fechaLimite: '2025-06-20',
    requisitos: [
      'Conocimientos de HTML, CSS y JavaScript',
      'Experiencia con React',
      'Portfolio de proyectos',
      '0-2 años de experiencia'
    ],
    url: 'https://edutech.jobs/frontend-junior'
  }
];

/**
 * Obtiene oportunidades filtradas por tipo
 * @param {string|null} tipo - Tipo de oportunidad (trabajo, estudio, voluntariado, etc.)
 * @returns {Array} Lista de oportunidades filtradas
 */
export function getOportunidades(tipo = null) {
  if (!tipo) {
    return oportunidadesDB;
  }
  
  return oportunidadesDB.filter(op => op.tipo === tipo);
}
