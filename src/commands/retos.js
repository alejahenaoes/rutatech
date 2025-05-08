import chalk from 'chalk';
import inquirer from 'inquirer';
import { getRetos } from '../data/retos.js';

/**
 * Implementa el comando 'retos' que presenta retos prácticos
 * para diferentes tecnologías y niveles
 * @param {Object} options - Opciones del comando (nivel, tecnología)
 */
export async function retosCommand(options) {
  try {
    let nivel = options.nivel || null;
    let tecnologia = options.tecnologia || null;
    
    // Si no se especificaron opciones, preguntar al usuario
    if (!nivel && !tecnologia) {
      const respuestas = await inquirer.prompt([
        {
          type: 'list',
          name: 'nivel',
          message: '¿Qué nivel de dificultad prefieres?',
          choices: ['principiante', 'intermedio', 'avanzado', 'todos']
        },
        {
          type: 'list',
          name: 'tecnologia',
          message: '¿Qué tecnología te interesa?',
          choices: [
            'javascript', 
            'python', 
            'java', 
            'web', 
            'mobile', 
            'datos', 
            'ia', 
            'todas'
          ]
        }
      ]);
      
      nivel = respuestas.nivel === 'todos' ? null : respuestas.nivel;
      tecnologia = respuestas.tecnologia === 'todas' ? null : respuestas.tecnologia;
    }
    
    // Obtener retos según los filtros
    const retos = getRetos(nivel, tecnologia);
    
    if (retos.length === 0) {
      console.log(chalk.red('No se encontraron retos con los criterios especificados.'));
      console.log(chalk.yellow('Intenta con otros filtros o sin filtros.'));
      return;
    }
    
    // Mostrar retos
    console.log(chalk.cyan.bold(`\n🧩 Retos ${nivel ? `de nivel ${nivel}` : ''} ${tecnologia ? `para ${tecnologia}` : ''}:`));
    
    retos.forEach((reto, index) => {
      console.log(chalk.yellow.bold(`\n[RETO ${index + 1}] ${reto.titulo}`));
      
      // Mostrar nivel y tecnología
      const nivelColor = {
        'principiante': chalk.green,
        'intermedio': chalk.yellow,
        'avanzado': chalk.red
      };
      
      console.log(
        nivelColor[reto.nivel](`Nivel: ${reto.nivel}`) + 
        chalk.white(' | ') + 
        chalk.blue(`Tecnología: ${reto.tecnologia}`)
      );
      
      // Descripción del reto
      console.log(chalk.white(`\n${reto.descripcion}`));
      
      // Requisitos
      if (reto.requisitos && reto.requisitos.length > 0) {
        console.log(chalk.magenta('\nRequisitos:'));
        reto.requisitos.forEach(req => {
          console.log(chalk.white(`• ${req}`));
        });
      }
      
      // Pasos sugeridos
      if (reto.pasos && reto.pasos.length > 0) {
        console.log(chalk.cyan('\nPasos sugeridos:'));
        reto.pasos.forEach((paso, i) => {
          console.log(chalk.white(`${i + 1}. ${paso}`));
        });
      }
      
      // Recursos
      if (reto.recursos && reto.recursos.length > 0) {
        console.log(chalk.blue('\nRecursos útiles:'));
        reto.recursos.forEach(recurso => {
          console.log(chalk.white(`• ${recurso.nombre}: ${recurso.url}`));
        });
      }
      
      console.log(chalk.gray('\n---'));
    });
    
    console.log(chalk.cyan.bold('\n💡 Consejo: ') + chalk.white('Completa estos retos para mejorar tus habilidades y agrégalos a tu portafolio.'));
    
  } catch (error) {
    console.error(chalk.red('Error al mostrar retos:'), error);
  }
}
