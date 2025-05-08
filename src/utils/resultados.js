/**
 * Utilidades para procesar los resultados del test vocacional
 */

/**
 * Analiza las respuestas del test vocacional y genera recomendaciones
 * @param {Object} respuestas - Respuestas del usuario al test
 * @returns {Object} Objeto con áreas recomendadas y próximos pasos
 */
export function getResultados(respuestas) {
  // Mapeo de preferencias a áreas tecnológicas
  const mapeoPreferencias = {
    'Resolver problemas complejos': ['Desarrollo de Software', 'Ciberseguridad', 'Inteligencia Artificial'],
    'Diseñar experiencias visuales': ['Diseño UX/UI', 'Desarrollo Frontend', 'Diseño de Videojuegos'],
    'Analizar datos y encontrar patrones': ['Ciencia de Datos', 'Inteligencia Artificial', 'Business Intelligence'],
    'Construir cosas físicas que interactúen con el mundo digital': ['Internet de las Cosas (IoT)', 'Robótica', 'Realidad Aumentada'],
    'Gestionar equipos y proyectos': ['Gestión de Proyectos Tecnológicos', 'Product Management', 'DevOps']
  };
  
  // Mapeo de habilidades a áreas tecnológicas
  const mapeoHabilidades = {
    'Lógica y razonamiento': ['Desarrollo de Software', 'Ciberseguridad', 'Inteligencia Artificial'],
    'Creatividad y diseño': ['Diseño UX/UI', 'Desarrollo Frontend', 'Diseño de Videojuegos'],
    'Matemáticas y estadística': ['Ciencia de Datos', 'Inteligencia Artificial', 'Blockchain'],
    'Electrónica y manualidades': ['Internet de las Cosas (IoT)', 'Robótica', 'Hardware'],
    'Comunicación y organización': ['Gestión de Proyectos Tecnológicos', 'Product Management', 'Marketing Digital']
  };
  
  // Mapeo de intereses a áreas tecnológicas
  const mapeoIntereses = {
    'Inteligencia Artificial': ['Inteligencia Artificial', 'Machine Learning', 'Procesamiento de Lenguaje Natural'],
    'Diseño de interfaces': ['Diseño UX/UI', 'Desarrollo Frontend', 'Experiencia de Usuario'],
    'Análisis de datos': ['Ciencia de Datos', 'Business Intelligence', 'Big Data'],
    'Internet de las cosas': ['Internet de las Cosas (IoT)', 'Sistemas Embebidos', 'Smart Cities'],
    'Ciberseguridad': ['Ciberseguridad', 'Hacking Ético', 'Seguridad de la Información'],
    'Desarrollo web': ['Desarrollo Frontend', 'Desarrollo Backend', 'Desarrollo Full Stack'],
    'Videojuegos': ['Desarrollo de Videojuegos', 'Diseño de Videojuegos', 'Realidad Virtual'],
    'Aplicaciones móviles': ['Desarrollo de Apps Móviles', 'Desarrollo iOS', 'Desarrollo Android'],
    'Robótica': ['Robótica', 'Automatización', 'Sistemas de Control'],
    'Blockchain': ['Blockchain', 'Criptomonedas', 'Smart Contracts']
  };
  
  // Mapeo de ambientes a consejos
  const mapeoAmbientes = {
    'Startup innovadora': 'Desarrolla habilidades versátiles y aprende a trabajar en entornos ágiles y de rápido cambio.',
    'Gran empresa tecnológica': 'Especialízate en un área específica y busca certificaciones reconocidas en la industria.',
    'Freelance/independiente': 'Desarrolla tanto habilidades técnicas como de gestión de proyectos y comunicación con clientes.',
    'Investigación académica': 'Profundiza en fundamentos teóricos y matemáticos, y considera estudios de posgrado.',
    'Sector público o ONG': 'Enfócate en soluciones tecnológicas con impacto social y aprende sobre tecnologías accesibles.'
  };
  
  // Recolectar áreas recomendadas basadas en las respuestas
  let areasRecomendadas = [];
  
  // Añadir áreas basadas en preferencia de trabajo
  if (respuestas.preferencia_trabajo && mapeoPreferencias[respuestas.preferencia_trabajo]) {
    areasRecomendadas = areasRecomendadas.concat(mapeoPreferencias[respuestas.preferencia_trabajo]);
  }
  
  // Añadir áreas basadas en habilidad
  if (respuestas.habilidad && mapeoHabilidades[respuestas.habilidad]) {
    areasRecomendadas = areasRecomendadas.concat(mapeoHabilidades[respuestas.habilidad]);
  }
  
  // Añadir áreas basadas en intereses
  if (respuestas.intereses && respuestas.intereses.length > 0) {
    respuestas.intereses.forEach(interes => {
      if (mapeoIntereses[interes]) {
        areasRecomendadas = areasRecomendadas.concat(mapeoIntereses[interes]);
      }
    });
  }
  
  // Eliminar duplicados y limitar a 5 áreas
  areasRecomendadas = [...new Set(areasRecomendadas)].slice(0, 5);
  
  // Generar próximos pasos
  const proximosPasos = [
    `Investiga más sobre ${areasRecomendadas[0]} y ${areasRecomendadas[1]}`,
    'Realiza cursos introductorios en línea para probar estas áreas',
    'Únete a comunidades y grupos relacionados con estas tecnologías',
    'Desarrolla un proyecto pequeño para aplicar lo aprendido'
  ];
  
  // Añadir consejo basado en ambiente preferido
  if (respuestas.ambiente && mapeoAmbientes[respuestas.ambiente]) {
    proximosPasos.push(mapeoAmbientes[respuestas.ambiente]);
  }
  
  return {
    areasRecomendadas,
    proximosPasos
  };
}
