/**
 * Datos de rutas de aprendizaje (roadmaps) para diferentes áreas tecnológicas
 */

// Base de datos de roadmaps
const roadmaps = {
  desarrollo_web: {
    titulo: 'Desarrollo Web',
    descripcion: 'Ruta de aprendizaje para convertirte en desarrollador web, desde los fundamentos hasta tecnologías avanzadas.',
    etapas: [
      {
        nombre: 'Fundamentos Web',
        descripcion: 'Aprende los conceptos básicos de la web y sus tecnologías fundamentales.',
        recursos: [
          { nombre: 'HTML & CSS - MDN Web Docs', url: 'https://developer.mozilla.org/es/docs/Learn/HTML' },
          { nombre: 'JavaScript Basics - FreeCodeCamp', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' },
          { nombre: 'Git Básico', url: 'https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Fundamentos-de-Git' }
        ],
        habilidades: ['HTML5', 'CSS3', 'JavaScript básico', 'Control de versiones con Git', 'Responsive Design']
      },
      {
        nombre: 'Frontend Intermedio',
        descripcion: 'Profundiza en el desarrollo frontend con frameworks y herramientas modernas.',
        recursos: [
          { nombre: 'React - Documentación oficial', url: 'https://es.reactjs.org/docs/getting-started.html' },
          { nombre: 'CSS Avanzado y Preprocesadores', url: 'https://sass-lang.com/guide' },
          { nombre: 'JavaScript Moderno (ES6+)', url: 'https://es6.io/' }
        ],
        habilidades: ['Framework Frontend (React/Vue/Angular)', 'ES6+', 'Preprocesadores CSS', 'Gestión de estado', 'APIs REST']
      },
      {
        nombre: 'Backend y Bases de Datos',
        descripcion: 'Aprende a construir el lado servidor de aplicaciones web.',
        recursos: [
          { nombre: 'Node.js - Introducción', url: 'https://nodejs.org/es/docs/guides/getting-started-guide/' },
          { nombre: 'Express.js - Guía', url: 'https://expressjs.com/es/guide/routing.html' },
          { nombre: 'SQL y NoSQL - Conceptos básicos', descripcion: 'Curso sobre bases de datos relacionales y no relacionales' }
        ],
        habilidades: ['Node.js', 'Express.js', 'SQL', 'MongoDB', 'Autenticación y Autorización', 'API Design']
      },
      {
        nombre: 'Desarrollo Full Stack y Despliegue',
        descripcion: 'Integra frontend y backend, y aprende a desplegar aplicaciones.',
        recursos: [
          { nombre: 'Integración Frontend-Backend', descripcion: 'Curso sobre comunicación entre cliente y servidor' },
          { nombre: 'DevOps para Desarrolladores Web', url: 'https://www.docker.com/get-started' },
          { nombre: 'CI/CD y Despliegue', descripcion: 'Guía sobre integración continua y despliegue continuo' }
        ],
        habilidades: ['Arquitectura Full Stack', 'Docker', 'CI/CD', 'Cloud Deployment (AWS/GCP/Azure)', 'Optimización de rendimiento']
      }
    ],
    meta: 'Desarrollar aplicaciones web completas, desde el frontend hasta el backend, y desplegarlas en entornos de producción.'
  },
  
  ciencia_datos: {
    titulo: 'Ciencia de Datos',
    descripcion: 'Ruta de aprendizaje para convertirte en científico de datos, desde los fundamentos matemáticos hasta el machine learning avanzado.',
    etapas: [
      {
        nombre: 'Fundamentos Matemáticos y Programación',
        descripcion: 'Aprende las bases matemáticas y de programación necesarias para la ciencia de datos.',
        recursos: [
          { nombre: 'Python para Ciencia de Datos', url: 'https://www.python.org/about/gettingstarted/' },
          { nombre: 'Matemáticas para Machine Learning', url: 'https://mml-book.github.io/' },
          { nombre: 'Estadística Básica', descripcion: 'Curso sobre conceptos estadísticos fundamentales' }
        ],
        habilidades: ['Python', 'Álgebra Lineal', 'Cálculo', 'Estadística', 'Probabilidad']
      },
      {
        nombre: 'Análisis y Visualización de Datos',
        descripcion: 'Aprende a manipular, analizar y visualizar datos de manera efectiva.',
        recursos: [
          { nombre: 'Pandas - Documentación', url: 'https://pandas.pydata.org/docs/' },
          { nombre: 'Matplotlib y Seaborn', url: 'https://matplotlib.org/stable/tutorials/index.html' },
          { nombre: 'SQL para Análisis de Datos', descripcion: 'Curso sobre SQL para científicos de datos' }
        ],
        habilidades: ['Pandas', 'NumPy', 'Matplotlib/Seaborn', 'SQL', 'Limpieza de datos', 'Storytelling con datos']
      },
      {
        nombre: 'Machine Learning',
        descripcion: 'Aprende los fundamentos del aprendizaje automático y sus algoritmos principales.',
        recursos: [
          { nombre: 'Scikit-Learn - Tutoriales', url: 'https://scikit-learn.org/stable/tutorial/index.html' },
          { nombre: 'Machine Learning - Curso de Andrew Ng', url: 'https://www.coursera.org/learn/machine-learning' },
          { nombre: 'Feature Engineering', descripcion: 'Guía sobre ingeniería de características' }
        ],
        habilidades: ['Scikit-Learn', 'Algoritmos supervisados', 'Algoritmos no supervisados', 'Evaluación de modelos', 'Feature Engineering']
      },
      {
        nombre: 'Deep Learning y Especialización',
        descripcion: 'Profundiza en redes neuronales y especialízate en un área de la ciencia de datos.',
        recursos: [
          { nombre: 'TensorFlow - Guía', url: 'https://www.tensorflow.org/guide' },
          { nombre: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/' },
          { nombre: 'MLOps', descripcion: 'Curso sobre operacionalización de modelos de ML' }
        ],
        habilidades: ['TensorFlow/PyTorch', 'Redes Neuronales', 'NLP/Computer Vision', 'MLOps', 'Big Data (Spark)']
      }
    ],
    meta: 'Construir modelos de machine learning que resuelvan problemas reales y desplegarlos en entornos de producción.'
  }
};

/**
 * Obtiene los datos de un roadmap específico
 * @param {string} area - Área tecnológica
 * @returns {Object|null} Datos del roadmap o null si no existe
 */
export function getRoadmapData(area) {
  return roadmaps[area] || null;
}
