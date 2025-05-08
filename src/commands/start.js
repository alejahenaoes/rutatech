import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { sleep } from '../utils/helpers.js';
import { getResultados } from '../utils/resultados.js';

/**
 * Implementa el comando 'start' que inicia el test vocacional
 * Guía al usuario a través de una serie de preguntas para determinar
 * sus intereses y aptitudes en tecnología
 */
export async function startCommand() {
  console.log(chalk.cyan.bold('📝 Test Vocacional Tecnológico'));
  console.log(chalk.white('Este test te ayudará a descubrir qué áreas de la tecnología podrían interesarte más.'));
  console.log(chalk.white('Responde honestamente a las siguientes preguntas:\n'));

  try {
    // Preguntas del test vocacional
    const respuestas = await inquirer.prompt([
      {
        type: 'list',
        name: 'preferencia_trabajo',
        message: '¿Qué prefieres hacer?',
        choices: [
          'Resolver problemas complejos',
          'Diseñar experiencias visuales',
          'Analizar datos y encontrar patrones',
          'Construir cosas físicas que interactúen con el mundo digital',
          'Gestionar equipos y proyectos'
        ]
      },
      {
        type: 'list',
        name: 'habilidad',
        message: '¿En qué te consideras más hábil?',
        choices: [
          'Lógica y razonamiento',
          'Creatividad y diseño',
          'Matemáticas y estadística',
          'Electrónica y manualidades',
          'Comunicación y organización'
        ]
      },
      {
        type: 'checkbox',
        name: 'intereses',
        message: 'Selecciona los temas que más te interesen (máximo 3):',
        choices: [
          'Inteligencia Artificial',
          'Diseño de interfaces',
          'Análisis de datos',
          'Internet de las cosas',
          'Ciberseguridad',
          'Desarrollo web',
          'Videojuegos',
          'Aplicaciones móviles',
          'Robótica',
          'Blockchain'
        ],
        validate: (answer) => {
          if (answer.length > 3) {
            return 'Por favor, selecciona máximo 3 opciones';
          }
          if (answer.length === 0) {
            return 'Selecciona al menos una opción';
          }
          return true;
        }
      },
      {
        type: 'list',
        name: 'ambiente',
        message: '¿En qué ambiente te gustaría trabajar?',
        choices: [
          'Startup innovadora',
          'Gran empresa tecnológica',
          'Freelance/independiente',
          'Investigación académica',
          'Sector público o ONG'
        ]
      }
    ]);

    // Simular procesamiento
    const spinner = ora('Analizando tus respuestas...').start();
    await sleep(2000);
    spinner.succeed('Análisis completado');

    // Obtener y mostrar resultados
    const resultados = getResultados(respuestas);
    console.log('\n' + chalk.green.bold('📊 Resultados del Test Vocacional'));
    
    console.log(chalk.yellow.bold('\n🌟 Áreas recomendadas:'));
    resultados.areasRecomendadas.forEach((area, index) => {
      console.log(chalk.white(`${index + 1}. ${area}`));
    });

    console.log(chalk.yellow.bold('\n📚 Próximos pasos sugeridos:'));
    resultados.proximosPasos.forEach((paso, index) => {
      console.log(chalk.white(`${index + 1}. ${paso}`));
    });

    console.log(chalk.cyan.bold('\n💡 Consejo: ') + chalk.white('Usa el comando ') + 
      chalk.green('rutatech roadmap') + chalk.white(' para ver una ruta de aprendizaje personalizada.'));

  } catch (error) {
    console.error(chalk.red('Error al ejecutar el test vocacional:'), error);
  }
}
