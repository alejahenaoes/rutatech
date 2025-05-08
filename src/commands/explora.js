import chalk from 'chalk';
import inquirer from 'inquirer';
import ora from 'ora';
import { sleep } from '../utils/helpers.js';
import { getCaminosTecnologicos } from '../data/caminos.js';

/**
 * Implementa el comando 'explora' que permite combinar intereses
 * para descubrir caminos nuevos en tecnología
 */
export async function exploraCommand() {
  try {
    console.log(chalk.cyan.bold('🔍 Explorador de Caminos Tecnológicos'));
    console.log(chalk.white('Esta herramienta te ayudará a descubrir caminos tecnológicos basados en tus intereses.\n'));
    
    // Preguntar al usuario sobre sus intereses
    const respuestas = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'intereses',
        message: 'Selecciona tus intereses principales (máximo 3):',
        choices: [
          'Arte y diseño',
          'Ciencias exactas',
          'Comunicación',
          'Negocios',
          'Salud',
          'Educación',
          'Medio ambiente',
          'Videojuegos',
          'Música',
          'Deportes',
          'Política y sociedad',
          'Literatura'
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
        type: 'checkbox',
        name: 'habilidades',
        message: 'Selecciona las habilidades que más disfrutas usar:',
        choices: [
          'Resolver problemas',
          'Crear cosas visuales',
          'Analizar datos',
          'Comunicar ideas',
          'Organizar y planificar',
          'Investigar',
          'Trabajar en equipo',
          'Trabajar de forma independiente'
        ],
        validate: (answer) => {
          if (answer.length === 0) {
            return 'Selecciona al menos una opción';
          }
          return true;
        }
      },
      {
        type: 'list',
        name: 'impacto',
        message: '¿Qué tipo de impacto te gustaría generar?',
        choices: [
          'Mejorar la vida cotidiana de las personas',
          'Resolver grandes problemas globales',
          'Crear experiencias entretenidas',
          'Optimizar procesos y eficiencia',
          'Innovar y crear tecnologías disruptivas',
          'Educar y compartir conocimiento'
        ]
      }
    ]);
    
    // Simular procesamiento
    const spinner = ora('Analizando combinaciones de intereses...').start();
    await sleep(2000);
    spinner.succeed('Análisis completado');
    
    // Obtener caminos tecnológicos basados en las respuestas
    const caminos = getCaminosTecnologicos(respuestas);
    
    console.log(chalk.green.bold('\n✨ Caminos tecnológicos descubiertos para ti:'));
    
    caminos.forEach((camino, index) => {
      console.log(chalk.yellow.bold(`\n[${index + 1}] ${camino.nombre}`));
      console.log(chalk.white(camino.descripcion));
      
      console.log(chalk.cyan('\nRoles relacionados:'));
      camino.roles.forEach(rol => {
        console.log(chalk.white(`• ${rol}`));
      });
      
      console.log(chalk.magenta('\nTecnologías clave:'));
      camino.tecnologias.forEach(tech => {
        console.log(chalk.white(`• ${tech}`));
      });
      
      if (camino.ejemplosProyectos && camino.ejemplosProyectos.length > 0) {
        console.log(chalk.blue('\nEjemplos de proyectos:'));
        camino.ejemplosProyectos.forEach(proyecto => {
          console.log(chalk.white(`• ${proyecto}`));
        });
      }
      
      console.log(chalk.gray('\n---'));
    });
    
    // Preguntar si quiere explorar algún camino en detalle
    const { explorarMas } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'explorarMas',
        message: '¿Te gustaría explorar alguno de estos caminos en más detalle?',
        default: true
      }
    ]);
    
    if (explorarMas) {
      const { caminoSeleccionado } = await inquirer.prompt([
        {
          type: 'list',
          name: 'caminoSeleccionado',
          message: '¿Qué camino te gustaría explorar?',
          choices: caminos.map((c, i) => ({ name: c.nombre, value: i }))
        }
      ]);
      
      const camino = caminos[caminoSeleccionado];
      
      console.log(chalk.green.bold(`\n📚 Recursos para explorar "${camino.nombre}":`));
      
      if (camino.recursos && camino.recursos.length > 0) {
        camino.recursos.forEach(recurso => {
          console.log(chalk.yellow(`\n• ${recurso.nombre}`));
          console.log(chalk.white(`  ${recurso.descripcion}`));
          if (recurso.url) {
            console.log(chalk.blue(`  ${recurso.url}`));
          }
        });
      }
      
      console.log(chalk.cyan.bold('\n💡 Consejo: ') + chalk.white('Usa el comando ') + 
        chalk.green('rutatech roadmap --area ' + camino.areaRelacionada) + 
        chalk.white(' para ver una ruta de aprendizaje detallada.'));
    }
    
  } catch (error) {
    console.error(chalk.red('Error al explorar caminos tecnológicos:'), error);
  }
}
