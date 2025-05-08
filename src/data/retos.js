/**
 * Datos de retos prácticos para diferentes tecnologías y niveles
 */

// Base de datos de retos
const retosDB = [
  {
    id: 'reto001',
    titulo: 'Portafolio Personal Responsivo',
    descripcion: 'Crea un sitio web de portafolio personal que muestre tus proyectos, habilidades y forma de contacto. El sitio debe ser completamente responsivo y funcionar bien en dispositivos móviles y de escritorio.',
    nivel: 'principiante',
    tecnologia: 'web',
    requisitos: [
      'HTML5 y CSS3',
      'Diseño responsivo',
      'Al menos 3 secciones: Inicio, Proyectos, Contacto'
    ],
    pasos: [
      'Diseña la estructura del sitio en papel o una herramienta de wireframing',
      'Crea la estructura HTML básica',
      'Aplica estilos CSS para desktop primero',
      'Implementa media queries para hacer el diseño responsivo',
      'Añade interactividad básica con JavaScript (opcional)',
      'Prueba en diferentes dispositivos y navegadores'
    ],
    recursos: [
      { nombre: 'Guía de Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
      { nombre: 'Media Queries Explained', url: 'https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries' },
      { nombre: 'Ejemplos de Portafolios', url: 'https://www.freecodecamp.org/news/15-web-developer-portfolios-to-inspire-you-137fb1743cae/' }
    ]
  },
  {
    id: 'reto002',
    titulo: 'Aplicación de Lista de Tareas',
    descripcion: 'Desarrolla una aplicación de lista de tareas (Todo List) que permita añadir, marcar como completadas y eliminar tareas. La aplicación debe guardar las tareas en el almacenamiento local del navegador.',
    nivel: 'principiante',
    tecnologia: 'javascript',
    requisitos: [
      'JavaScript vanilla (sin frameworks)',
      'LocalStorage para persistencia de datos',
      'Interfaz de usuario intuitiva'
    ],
    pasos: [
      'Diseña la interfaz de usuario',
      'Implementa la funcionalidad para añadir tareas',
      'Añade la funcionalidad para marcar tareas como completadas',
      'Implementa la eliminación de tareas',
      'Guarda y carga tareas usando localStorage',
      'Añade validación de formularios y manejo de errores'
    ],
    recursos: [
      { nombre: 'Guía de LocalStorage', url: 'https://developer.mozilla.org/es/docs/Web/API/Window/localStorage' },
      { nombre: 'Manipulación del DOM', url: 'https://www.javascripttutorial.net/javascript-dom/' },
      { nombre: 'Eventos en JavaScript', url: 'https://eloquentjavascript.net/15_event.html' }
    ]
  },
  {
    id: 'reto003',
    titulo: 'API de Gestión de Biblioteca',
    descripcion: 'Crea una API RESTful para gestionar una biblioteca, con endpoints para libros, autores y préstamos. Implementa autenticación básica y documentación de la API.',
    nivel: 'intermedio',
    tecnologia: 'javascript',
    requisitos: [
      'Node.js y Express',
      'Base de datos (MongoDB o SQL)',
      'Autenticación JWT',
      'Documentación con Swagger o similar'
    ],
    pasos: [
      'Diseña el modelo de datos para libros, autores y préstamos',
      'Configura Express y las rutas básicas',
      'Implementa los controladores para cada entidad',
      'Añade validación de datos y manejo de errores',
      'Implementa autenticación con JWT',
      'Documenta la API con Swagger',
      'Escribe pruebas unitarias y de integración'
    ],
    recursos: [
      { nombre: 'RESTful API Design', url: 'https://restfulapi.net/' },
      { nombre: 'JWT Authentication', url: 'https://jwt.io/introduction/' },
      { nombre: 'Swagger Documentation', url: 'https://swagger.io/docs/specification/basic-structure/' },
      { nombre: 'Testing con Jest', url: 'https://jestjs.io/docs/getting-started' }
    ]
  },
  {
    id: 'reto004',
    titulo: 'Análisis de Datos de COVID-19',
    descripcion: 'Realiza un análisis exploratorio de datos sobre la pandemia de COVID-19 utilizando un dataset público. Genera visualizaciones informativas y extrae insights relevantes.',
    nivel: 'intermedio',
    tecnologia: 'python',
    requisitos: [
      'Python con pandas y numpy',
      'Visualización con matplotlib o seaborn',
      'Jupyter Notebook para documentar el análisis'
    ],
    pasos: [
      'Obtén un dataset público de COVID-19',
      'Limpia y preprocesa los datos',
      'Realiza análisis exploratorio básico',
      'Crea visualizaciones informativas',
      'Identifica tendencias y patrones',
      'Documenta tus hallazgos y conclusiones',
      'Comparte tu notebook con explicaciones claras'
    ],
    recursos: [
      { nombre: 'Dataset de COVID-19', url: 'https://github.com/owid/covid-19-data/tree/master/public/data' },
      { nombre: 'Pandas Tutorial', url: 'https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html' },
      { nombre: 'Data Visualization con Seaborn', url: 'https://seaborn.pydata.org/tutorial.html' },
      { nombre: 'Ejemplo de EDA', url: 'https://www.kaggle.com/code/prashant111/eda-on-covid-19-dataset' }
    ]
  },
  {
    id: 'reto005',
    titulo: 'Aplicación de Reconocimiento de Imágenes',
    descripcion: 'Desarrolla una aplicación web que utilice machine learning para clasificar imágenes subidas por el usuario. Puedes usar modelos pre-entrenados o entrenar uno propio.',
    nivel: 'avanzado',
    tecnologia: 'ia',
    requisitos: [
      'Python con TensorFlow o PyTorch',
      'Backend para API (Flask o FastAPI)',
      'Frontend básico para subir imágenes',
      'Conocimientos de redes neuronales convolucionales'
    ],
    pasos: [
      'Selecciona un modelo pre-entrenado o entrena uno propio',
      'Crea una API con Flask/FastAPI para servir el modelo',
      'Desarrolla un frontend simple para subir imágenes',
      'Implementa la lógica de procesamiento de imágenes',
      'Muestra los resultados de la clasificación de forma amigable',
      'Optimiza el rendimiento y la experiencia de usuario',
      'Despliega la aplicación en la nube'
    ],
    recursos: [
      { nombre: 'TensorFlow Hub', url: 'https://www.tensorflow.org/hub' },
      { nombre: 'Flask para ML', url: 'https://flask.palletsprojects.com/en/2.0.x/' },
      { nombre: 'Despliegue de modelos ML', url: 'https://www.tensorflow.org/tfx/guide/serving' },
      { nombre: 'Tutorial de Clasificación de Imágenes', url: 'https://www.tensorflow.org/tutorials/images/classification' }
    ]
  },
  {
    id: 'reto006',
    titulo: 'Sistema de Monitoreo IoT',
    descripcion: 'Construye un sistema de monitoreo IoT que recopile datos de sensores (temperatura, humedad, etc.), los almacene en la nube y muestre un dashboard en tiempo real.',
    nivel: 'avanzado',
    tecnologia: 'iot',
    requisitos: [
      'Hardware: Arduino/ESP8266/Raspberry Pi',
      'Sensores básicos (DHT11/22, etc.)',
      'Backend para API y almacenamiento',
      'Dashboard web en tiempo real'
    ],
    pasos: [
      'Configura el hardware y los sensores',
      'Programa el microcontrolador para leer los sensores',
      'Implementa la comunicación con el servidor',
      'Desarrolla una API para recibir y almacenar datos',
      'Crea un dashboard web con actualizaciones en tiempo real',
      'Implementa alertas basadas en umbrales',
      'Añade funcionalidades de análisis de datos históricos'
    ],
    recursos: [
      { nombre: 'Guía de ESP8266', url: 'https://randomnerdtutorials.com/esp8266-web-server-with-arduino-ide/' },
      { nombre: 'MQTT para IoT', url: 'https://mqtt.org/getting-started/' },
      { nombre: 'Dashboard con Node-RED', url: 'https://nodered.org/docs/tutorials/' },
      { nombre: 'InfluxDB para series temporales', url: 'https://docs.influxdata.com/influxdb/v2.0/get-started/' }
    ]
  }
];

/**
 * Obtiene retos filtrados por nivel y/o tecnología
 * @param {string|null} nivel - Nivel de dificultad
 * @param {string|null} tecnologia - Tecnología específica
 * @returns {Array} Lista de retos filtrados
 */
export function getRetos(nivel = null, tecnologia = null) {
  let retosFiltrados = [...retosDB];
  
  if (nivel) {
    retosFiltrados = retosFiltrados.filter(reto => reto.nivel === nivel);
  }
  
  if (tecnologia) {
    retosFiltrados = retosFiltrados.filter(reto => reto.tecnologia === tecnologia);
  }
  
  return retosFiltrados;
}
