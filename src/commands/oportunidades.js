import chalk from 'chalk';
import ora from 'ora';
import { sleep } from '../utils/helpers.js';
import { getOportunidades } from '../data/oportunidades.js';

/**
 * Implementa el comando 'oportunidades' que muestra oportunidades
 * actuales en el campo de la tecnología
 * @param {Object} options - Opciones del comando (tipo de oportunidad)
 */
export async function oportunidadesCommand(options) {
  try {
    const tipo = options.tipo || null;
    
    // Mostrar mensaje de carga mientras se "obtienen" las oportunidades
    const spinner = ora('Buscando oportunidades actuales...').start();
    await sleep(1500);
    
    // Obtener oportunidades
    const oportunidades = getOportunidades(tipo);
    
    if (oportunidades.length === 0) {
      spinner.fail('No se encontraron oportunidades con los criterios especificados.');
      console.log(chalk.yellow('Intenta con otro tipo de oportunidad o sin filtros.'));
      return;
    }
    
    spinner.succeed(`Se encontraron ${oportunidades.length} oportunidades`);
    
    // Si no se especificó un tipo, mostrar todas las categorías disponibles
    if (!tipo) {
      console.log(chalk.cyan.bold('\n🔍 Tipos de oportunidades disponibles:'));
      console.log(chalk.white('Usa ') + chalk.green('rutatech oportunidades --tipo <nombre_tipo>') + 
        chalk.white(' para filtrar por categoría.\n'));
      
      const tiposDisponibles = ['trabajo', 'estudio', 'voluntariado', 'hackathon', 'beca'];
      tiposDisponibles.forEach(t => {
        console.log(chalk.yellow('• ') + chalk.white(t));
      });
      
      console.log('');
    }
    
    // Mostrar oportunidades
    console.log(chalk.cyan.bold(`\n📋 ${tipo ? `Oportunidades de ${tipo}` : 'Todas las oportunidades'}:`));
    
    oportunidades.forEach((oportunidad, index) => {
      console.log(chalk.yellow.bold(`\n[${index + 1}] ${oportunidad.titulo}`));
      console.log(chalk.white(`${oportunidad.descripcion}`));
      console.log(chalk.green(`Organización: ${oportunidad.organizacion}`));
      
      if (oportunidad.fechaLimite) {
        console.log(chalk.red(`Fecha límite: ${oportunidad.fechaLimite}`));
      }
      
      if (oportunidad.requisitos && oportunidad.requisitos.length > 0) {
        console.log(chalk.magenta('\nRequisitos:'));
        oportunidad.requisitos.forEach(req => {
          console.log(chalk.white(`• ${req}`));
        });
      }
      
      if (oportunidad.url) {
        console.log(chalk.blue(`\nMás información: ${oportunidad.url}`));
      }
      
      console.log(chalk.gray('\n---'));
    });
    
    console.log(chalk.cyan.bold('\n💡 Consejo: ') + chalk.white('Usa el comando ') + 
      chalk.green('rutatech roadmap') + chalk.white(' para prepararte para estas oportunidades.'));
    
  } catch (error) {
    console.error(chalk.red('Error al mostrar oportunidades:'), error);
  }
}
