/**
 * Datos de historias inspiradoras en el campo de la tecnología
 */

// Base de datos de historias
const historiasDB = [
  {
    id: 'hist001',
    nombre: 'María Rodríguez',
    pais: 'Colombia',
    categoria: 'superacion',
    titulo: 'De cero a desarrolladora senior en 3 años',
    historia: 'María creció en un pequeño pueblo de Colombia sin acceso a computadoras hasta los 19 años. Cuando se mudó a la ciudad para estudiar, descubrió la programación en un taller gratuito. Fascinada por el potencial de crear con código, comenzó a aprender por su cuenta usando bibliotecas públicas e internet. A pesar de no tener título universitario en informática, su perseverancia la llevó a conseguir su primer trabajo como desarrolladora junior. Tres años después, es desarrolladora senior en una empresa internacional y mentora para jóvenes de su comunidad.',
    impacto: 'Ha creado un programa de mentoría que ha ayudado a más de 50 jóvenes de zonas rurales a iniciarse en la programación.',
    consejo: 'No dejes que tu origen o circunstancias definan tu futuro. La tecnología es un gran ecualizador si tienes la determinación para aprender constantemente.',
    enlaces: [
      { descripcion: 'Programa de mentoría', url: 'https://mentoria.ejemplo.com' },
      { descripcion: 'Entrevista en TechLatam', url: 'https://techlatam.ejemplo.com/entrevista-maria' }
    ]
  },
  {
    id: 'hist002',
    nombre: 'Carlos Méndez',
    pais: 'México',
    categoria: 'emprendimiento',
    titulo: 'Transformando la educación rural con tecnología',
    historia: 'Carlos trabajaba como maestro en zonas rurales de México cuando se dio cuenta de que sus estudiantes no tenían acceso a recursos educativos actualizados. Aprendió programación por las noches y desarrolló una aplicación que funciona sin internet, actualizándose cuando detecta conexión. Su aplicación, EduRural, ahora se usa en más de 500 escuelas rurales en Latinoamérica, proporcionando contenido educativo interactivo adaptado a cada región. Lo que comenzó como un proyecto personal se convirtió en una startup con impacto social que ha recibido financiamiento internacional.',
    impacto: 'Su aplicación ha mejorado el acceso a educación de calidad para más de 50,000 niños en zonas rurales.',
    consejo: 'La tecnología más impactante es la que resuelve problemas reales. Observa tu entorno, identifica necesidades y usa la tecnología como herramienta de cambio.',
    enlaces: [
      { descripcion: 'EduRural', url: 'https://edurural.ejemplo.com' },
      { descripcion: 'Charla TED', url: 'https://ted.ejemplo.com/carlos-mendez' }
    ]
  },
  {
    id: 'hist003',
    nombre: 'Ana Gómez',
    pais: 'Argentina',
    categoria: 'inclusion',
    titulo: 'Tecnología accesible para todos',
    historia: 'Ana nació con discapacidad visual parcial. Durante su adolescencia, se frustró por la falta de tecnologías accesibles y decidió convertirse en parte de la solución. Estudió ingeniería informática y se especializó en interfaces accesibles. Desarrolló una biblioteca de código abierto que facilita la implementación de características de accesibilidad en aplicaciones web y móviles. Su trabajo ha sido adoptado por grandes empresas y ha dado charlas internacionales sobre diseño inclusivo. Actualmente lidera un equipo de accesibilidad en una importante empresa tecnológica.',
    impacto: 'Su biblioteca de código ha sido implementada en más de 1,000 aplicaciones, mejorando la accesibilidad para millones de usuarios.',
    consejo: 'Las mejores innovaciones nacen de experiencias personales. Si enfrentas un desafío, probablemente millones de personas también lo hagan. Usa la tecnología para crear soluciones inclusivas.',
    enlaces: [
      { descripcion: 'Biblioteca AccessLib', url: 'https://github.com/ejemplo/accesslib' },
      { descripcion: 'Fundación Tecnología Inclusiva', url: 'https://tecinclusiva.ejemplo.org' }
    ]
  },
  {
    id: 'hist004',
    nombre: 'Javier Torres',
    pais: 'Perú',
    categoria: 'innovacion',
    titulo: 'Revolucionando la agricultura con IoT',
    historia: 'Javier creció en una familia de agricultores en Perú. Después de estudiar ingeniería electrónica, regresó a su comunidad y observó cómo los agricultores luchaban con la escasez de agua y los cambios climáticos. Desarrolló un sistema IoT de bajo costo que monitorea condiciones del suelo, clima y optimiza el riego. Su sistema, AgroSmart, utiliza sensores económicos y energía solar, haciéndolo accesible para pequeños agricultores. La implementación ha aumentado la productividad agrícola en un 30% mientras reduce el consumo de agua en un 40%. Su innovación ha ganado premios internacionales y ahora se implementa en varios países.',
    impacto: 'Ha ayudado a más de 200 pequeñas comunidades agrícolas a aumentar su producción y adaptarse al cambio climático.',
    consejo: 'La tecnología más avanzada no siempre es la mejor solución. Diseña pensando en el contexto real de los usuarios y en la sostenibilidad a largo plazo.',
    enlaces: [
      { descripcion: 'Proyecto AgroSmart', url: 'https://agrosmart.ejemplo.pe' },
      { descripcion: 'Documental sobre el impacto', url: 'https://documental.ejemplo.com/agrosmart' }
    ]
  },
  {
    id: 'hist005',
    nombre: 'Sofía Ramírez',
    pais: 'Chile',
    categoria: 'educacion',
    titulo: 'De estudiante autodidacta a educadora tecnológica',
    historia: 'Sofía descubrió la programación a los 14 años a través de tutoriales en línea. Sin recursos para una educación formal en tecnología, aprovechó todos los recursos gratuitos disponibles. A los 17 años, creó un canal de YouTube enseñando programación en español, que rápidamente ganó popularidad. A los 20, desarrolló una plataforma de aprendizaje que adapta contenidos educativos al ritmo de cada estudiante. Hoy, con 25 años, su startup educativa ha recibido inversión internacional y su plataforma es utilizada por escuelas en toda Latinoamérica. Además, mantiene una beca que financia la educación tecnológica de jóvenes de bajos recursos.',
    impacto: 'Su plataforma ha ayudado a más de 100,000 estudiantes a aprender programación, y su programa de becas ha beneficiado a 500 jóvenes.',
    consejo: 'Comparte lo que aprendes, incluso si apenas estás comenzando. Enseñar es la mejor manera de aprender y crear comunidad.',
    enlaces: [
      { descripcion: 'Plataforma CodeLearn', url: 'https://codelearn.ejemplo.cl' },
      { descripcion: 'Canal de YouTube', url: 'https://youtube.com/ejemplo/sofia-code' }
    ]
  }
];

/**
 * Obtiene historias filtradas por categoría
 * @param {string|null} categoria - Categoría de historias
 * @returns {Array} Lista de historias filtradas
 */
export function getHistorias(categoria = null) {
  if (!categoria) {
    return historiasDB;
  }
  
  return historiasDB.filter(historia => historia.categoria === categoria);
}
