/**
 * Datos de caminos tecnológicos basados en intereses y habilidades
 */

// Base de datos de caminos tecnológicos
const caminosDB = [
  {
    id: 'camino001',
    nombre: 'Desarrollo de Experiencias Digitales',
    descripcion: 'Combina diseño visual con programación para crear experiencias digitales atractivas e intuitivas para los usuarios.',
    interesesRelacionados: ['Arte y diseño', 'Videojuegos', 'Comunicación'],
    habilidadesRelacionadas: ['Crear cosas visuales', 'Comunicar ideas', 'Resolver problemas'],
    impactoRelacionado: 'Mejorar la vida cotidiana de las personas',
    roles: [
      'Diseñador UX/UI',
      'Desarrollador Frontend',
      'Diseñador de Interacción',
      'Desarrollador de Videojuegos',
      'Especialista en Realidad Virtual/Aumentada'
    ],
    tecnologias: [
      'HTML/CSS/JavaScript',
      'Figma/Adobe XD',
      'React/Vue/Angular',
      'Unity/Unreal Engine',
      'WebGL/Three.js'
    ],
    ejemplosProyectos: [
      'Rediseño de la experiencia de usuario de una aplicación',
      'Sitio web interactivo para un museo',
      'Prototipo de videojuego educativo',
      'Experiencia de realidad aumentada para retail'
    ],
    recursos: [
      {
        nombre: 'Curso de Diseño UX/UI',
        descripcion: 'Curso completo que cubre los fundamentos del diseño de experiencia de usuario e interfaces',
        url: 'https://www.coursera.org/specializations/ui-ux-design'
      },
      {
        nombre: 'Frontend Masters',
        descripcion: 'Plataforma con cursos avanzados de desarrollo frontend',
        url: 'https://frontendmasters.com/'
      },
      {
        nombre: 'Comunidad de Diseño',
        descripcion: 'Comunidad de diseñadores donde puedes compartir tu trabajo y recibir feedback',
        url: 'https://dribbble.com/'
      }
    ],
    areaRelacionada: 'desarrollo_web'
  },
  {
    id: 'camino002',
    nombre: 'Tecnología para Impacto Social',
    descripcion: 'Utiliza la tecnología para crear soluciones que aborden problemas sociales y ambientales, generando un impacto positivo en comunidades.',
    interesesRelacionados: ['Medio ambiente', 'Educación', 'Política y sociedad', 'Salud'],
    habilidadesRelacionadas: ['Resolver problemas', 'Comunicar ideas', 'Trabajar en equipo'],
    impactoRelacionado: 'Resolver grandes problemas globales',
    roles: [
      'Desarrollador de Tecnología Cívica',
      'Especialista en Tecnología Educativa',
      'Ingeniero de Soluciones Sostenibles',
      'Gestor de Proyectos de Impacto',
      'Especialista en Accesibilidad Digital'
    ],
    tecnologias: [
      'Desarrollo Web/Móvil',
      'Ciencia de Datos',
      'IoT para Sostenibilidad',
      'Energías Renovables',
      'Tecnologías de Código Abierto'
    ],
    ejemplosProyectos: [
      'Aplicación para conectar donantes con organizaciones locales',
      'Sistema de monitoreo de calidad del aire comunitario',
      'Plataforma educativa para zonas con conectividad limitada',
      'Solución de telemedicina para áreas rurales'
    ],
    recursos: [
      {
        nombre: 'Tech for Good',
        descripcion: 'Comunidad global que utiliza la tecnología para el bien social',
        url: 'https://www.techforgood.global/'
      },
      {
        nombre: 'Civic Tech Field Guide',
        descripcion: 'Directorio de herramientas, proyectos y recursos de tecnología cívica',
        url: 'https://civictech.guide/'
      },
      {
        nombre: 'Curso de Innovación Social',
        descripcion: 'Curso sobre cómo aplicar la tecnología para resolver problemas sociales',
        url: 'https://www.edx.org/course/social-innovation'
      }
    ],
    areaRelacionada: 'desarrollo_web'
  },
  {
    id: 'camino003',
    nombre: 'Análisis de Datos e Inteligencia de Negocios',
    descripcion: 'Transforma datos en insights accionables que ayuden a las organizaciones a tomar mejores decisiones estratégicas y operativas.',
    interesesRelacionados: ['Ciencias exactas', 'Negocios', 'Política y sociedad'],
    habilidadesRelacionadas: ['Analizar datos', 'Resolver problemas', 'Organizar y planificar'],
    impactoRelacionado: 'Optimizar procesos y eficiencia',
    roles: [
      'Analista de Datos',
      'Especialista en Business Intelligence',
      'Consultor de Analítica',
      'Data Storyteller',
      'Especialista en Visualización de Datos'
    ],
    tecnologias: [
      'SQL',
      'Python/R',
      'Tableau/Power BI',
      'Excel Avanzado',
      'Google Analytics'
    ],
    ejemplosProyectos: [
      'Dashboard para seguimiento de KPIs de negocio',
      'Análisis predictivo de tendencias de ventas',
      'Segmentación de clientes para estrategias de marketing',
      'Optimización de cadena de suministro mediante análisis de datos'
    ],
    recursos: [
      {
        nombre: 'Google Data Analytics Certificate',
        descripcion: 'Certificación completa para iniciarse en el análisis de datos',
        url: 'https://www.coursera.org/professional-certificates/google-data-analytics'
      },
      {
        nombre: 'Comunidad de Tableau Public',
        descripcion: 'Plataforma para compartir y explorar visualizaciones de datos',
        url: 'https://public.tableau.com/en-us/s/'
      },
      {
        nombre: 'Data Visualization Society',
        descripcion: 'Comunidad profesional dedicada a la visualización de datos',
        url: 'https://www.datavisualizationsociety.org/'
      }
    ],
    areaRelacionada: 'ciencia_datos'
  },
  {
    id: 'camino004',
    nombre: 'Inteligencia Artificial Creativa',
    descripcion: 'Combina IA con creatividad para desarrollar sistemas que generen arte, música, narrativas y otras formas de contenido creativo.',
    interesesRelacionados: ['Arte y diseño', 'Música', 'Literatura', 'Ciencias exactas'],
    habilidadesRelacionadas: ['Resolver problemas', 'Crear cosas visuales', 'Investigar'],
    impactoRelacionado: 'Innovar y crear tecnologías disruptivas',
    roles: [
      'Ingeniero de IA Creativa',
      'Artista Computacional',
      'Desarrollador de Herramientas Creativas',
      'Investigador en IA Generativa',
      'Diseñador de Experiencias Interactivas'
    ],
    tecnologias: [
      'Python',
      'TensorFlow/PyTorch',
      'GANs/Diffusion Models',
      'Procesamiento de Lenguaje Natural',
      'Web Audio API/TensorFlow.js'
    ],
    ejemplosProyectos: [
      'Sistema de generación de música adaptativa',
      'Herramienta de asistencia creativa para diseñadores',
      'Instalación artística interactiva basada en IA',
      'Generador de narrativas personalizadas'
    ],
    recursos: [
      {
        nombre: 'Curso de Machine Learning para Creativos',
        descripcion: 'Curso que enseña fundamentos de ML aplicados a proyectos creativos',
        url: 'https://ml4a.github.io/'
      },
      {
        nombre: 'RunwayML',
        descripcion: 'Plataforma para crear con IA sin necesidad de programar',
        url: 'https://runwayml.com/'
      },
      {
        nombre: 'Comunidad de Arte Generativo',
        descripcion: 'Foro para artistas computacionales y entusiastas de la IA creativa',
        url: 'https://genart.social/'
      }
    ],
    areaRelacionada: 'ciencia_datos'
  },
  {
    id: 'camino005',
    nombre: 'Tecnología para Deportes y Bienestar',
    descripcion: 'Desarrolla soluciones tecnológicas que mejoren el rendimiento deportivo, promuevan el bienestar físico y transformen la experiencia de los aficionados.',
    interesesRelacionados: ['Deportes', 'Salud', 'Ciencias exactas'],
    habilidadesRelacionadas: ['Analizar datos', 'Resolver problemas', 'Trabajar en equipo'],
    impactoRelacionado: 'Mejorar la vida cotidiana de las personas',
    roles: [
      'Analista de Datos Deportivos',
      'Desarrollador de Wearables',
      'Ingeniero de Biomecánica',
      'Especialista en Tecnología de Entrenamiento',
      'Desarrollador de Experiencias para Fans'
    ],
    tecnologias: [
      'IoT y Sensores',
      'Análisis de Video',
      'Aplicaciones Móviles de Fitness',
      'Realidad Aumentada',
      'Procesamiento de Señales Biométricas'
    ],
    ejemplosProyectos: [
      'Sistema de análisis de rendimiento para atletas',
      'Aplicación de entrenamiento personalizado basada en datos',
      'Plataforma de e-sports con análisis en tiempo real',
      'Wearable para prevención de lesiones'
    ],
    recursos: [
      {
        nombre: 'Sports Analytics Conference',
        descripcion: 'Conferencia anual sobre análisis de datos en deportes',
        url: 'https://www.sloansportsconference.com/'
      },
      {
        nombre: 'Curso de Tecnología Deportiva',
        descripcion: 'Curso sobre aplicaciones tecnológicas en el deporte',
        url: 'https://www.futurelearn.com/courses/sport-technology'
      },
      {
        nombre: 'Comunidad de Desarrolladores de Health Tech',
        descripcion: 'Foro para desarrolladores de tecnologías de salud y fitness',
        url: 'https://healthtech.community/'
      }
    ],
    areaRelacionada: 'iot'
  }
];

/**
 * Analiza las respuestas del usuario y devuelve caminos tecnológicos recomendados
 * @param {Object} respuestas - Respuestas del usuario sobre intereses y habilidades
 * @returns {Array} Lista de caminos tecnológicos recomendados
 */
export function getCaminosTecnologicos(respuestas) {
  // Algoritmo simple de puntuación para cada camino
  const caminosPuntuados = caminosDB.map(camino => {
    let puntuacion = 0;
    
    // Puntuar por intereses coincidentes
    respuestas.intereses.forEach(interes => {
      if (camino.interesesRelacionados.includes(interes)) {
        puntuacion += 2;
      }
    });
    
    // Puntuar por habilidades coincidentes
    respuestas.habilidades.forEach(habilidad => {
      if (camino.habilidadesRelacionadas.includes(habilidad)) {
        puntuacion += 1.5;
      }
    });
    
    // Puntuar por impacto
    if (camino.impactoRelacionado === respuestas.impacto) {
      puntuacion += 3;
    }
    
    return {
      ...camino,
      puntuacion
    };
  });
  
  // Ordenar por puntuación y devolver los 3 mejores
  return caminosPuntuados
    .sort((a, b) => b.puntuacion - a.puntuacion)
    .slice(0, 3)
    .map(({ puntuacion, ...camino }) => camino); // Eliminar la propiedad puntuación
}
