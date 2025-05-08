import chalk from 'chalk';
import boxen from 'boxen';
import { getHistorias } from '../data/historias.js';

/**
 * Implementa el comando 'historias' que muestra historias inspiradoras
 * de personas en el campo de la tecnología
 * @param {Object} options - Opciones del comando (categoría de historias)
 */
export function historiasCommand(options) {
  try {
    const categoria = options.categoria || null;
    
    // Obtener historias según la categoría
    const historias = getHistorias(categoria);
    
    if (historias.length === 0) {
      console.log(chalk.red('No se encontraron historias con la categoría especificada.'));
      console.log(chalk.yellow('Intenta con otra categoría o sin filtros.'));
      return;
    }
    
    // Si no se especificó una categoría, mostrar todas las categorías disponibles
    if (!categoria) {
      console.log(chalk.cyan.bold('📚 Categorías de historias disponibles:'));
      console.log(chalk.white('Usa ') + chalk.green('rutatech historias --categoria <nombre_categoria>') + 
        chalk.white(' para filtrar por categoría.\n'));
      
      const categoriasDisponibles = [
        'emprendimiento', 
        'superacion', 
        'innovacion', 
        'inclusion', 
        'educacion'
      ];
      
      categoriasDisponibles.forEach(cat => {
        console.log(chalk.yellow('• ') + chalk.white(formatCategoryName(cat)));
      });
      
      console.log('');
    }
    
    // Mostrar historias
    console.log(chalk.cyan.bold(`\n🌟 ${categoria ? `Historias de ${formatCategoryName(categoria)}` : 'Historias inspiradoras'}:`));
    
    historias.forEach((historia, index) => {
      console.log(boxen(
        chalk.bold.yellow(`${historia.nombre} (${historia.pais})`) + 
        `\n${chalk.white(historia.titulo)}`,
        { padding: 1, margin: { top: 1, bottom: 0 }, borderStyle: 'round', borderColor: 'yellow' }
      ));
      
      console.log(chalk.white(historia.historia));
      
      if (historia.impacto) {
        console.log(chalk.green.bold('\nImpacto: ') + chalk.white(historia.impacto));
      }
      
      if (historia.consejo) {
        console.log(chalk.blue.bold('\nConsejo: ') + chalk.italic(`"${historia.consejo}"`));
      }
      
      if (historia.enlaces && historia.enlaces.length > 0) {
        console.log(chalk.magenta.bold('\nEnlaces de interés:'));
        historia.enlaces.forEach(enlace => {
          console.log(chalk.white(`• ${enlace.descripcion}: ${enlace.url}`));
        });
      }
      
      console.log('\n' + chalk.gray('---') + '\n');
    });
    
    console.log(chalk.cyan.bold('💡 Consejo: ') + chalk.white('Usa el comando ') + 
      chalk.green('rutatech explora') + chalk.white(' para descubrir tu propio camino en tecnología.'));
    
  } catch (error) {
    console.error(chalk.red('Error al mostrar historias:'), error);
  }
}

/**
 * Formatea el nombre de la categoría para mostrar
 * @param {string} categoria - Nombre de la categoría
 * @returns {string} Nombre formateado
 */
function formatCategoryName(categoria) {
  const formatMap = {
    'emprendimiento': 'Emprendimiento',
    'superacion': 'Superación de Obstáculos',
    'innovacion': 'Innovación',
    'inclusion': 'Inclusión y Diversidad',
    'educacion': 'Educación y Aprendizaje'
  };
  
  return formatMap[categoria] || categoria.charAt(0).toUpperCase() + categoria.slice(1);
}
