import chalk from 'chalk';
import boxen from 'boxen';
import { getRoadmapData } from '../data/roadmaps.js';

/**
 * Implementa el comando 'roadmap' que muestra una ruta de aprendizaje
 * para diferentes áreas de la tecnología
 * @param {Object} options - Opciones del comando (área específica)
 */
export function roadmapCommand(options) {
  try {
    const area = options.area || null;
    
    // Si no se especifica un área, mostrar lista de áreas disponibles
    if (!area) {
      console.log(chalk.cyan.bold('🗺️  Áreas disponibles para rutas de aprendizaje:'));
      console.log(chalk.white('Usa ') + chalk.green('rutatech roadmap --area <nombre_area>') + 
        chalk.white(' para ver una ruta específica.\n'));
      
      const areasDisponibles = [
        'desarrollo_web',
        'desarrollo_movil',
        'ciencia_datos',
        'inteligencia_artificial',
        'ciberseguridad',
        'devops',
        'diseño_ux',
        'blockchain',
        'iot',
        'videojuegos'
      ];
      
      areasDisponibles.forEach(area => {
        console.log(chalk.yellow('• ') + chalk.white(formatAreaName(area)));
      });
      
      return;
    }
    
    // Obtener datos del roadmap para el área especificada
    const roadmapData = getRoadmapData(area);
    
    if (!roadmapData) {
      console.log(chalk.red(`No se encontró una ruta de aprendizaje para el área "${area}".`));
      console.log(chalk.white('Usa ') + chalk.green('rutatech roadmap') + 
        chalk.white(' para ver las áreas disponibles.'));
      return;
    }
    
    // Mostrar el roadmap
    console.log(boxen(chalk.bold.cyan(`RUTA DE APRENDIZAJE: ${roadmapData.titulo}`), 
      { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'cyan' }));
    
    console.log(chalk.white(roadmapData.descripcion) + '\n');
    
    // Mostrar etapas del roadmap
    roadmapData.etapas.forEach((etapa, index) => {
      console.log(chalk.yellow.bold(`\n[ETAPA ${index + 1}] ${etapa.nombre}`));
      console.log(chalk.white(etapa.descripcion) + '\n');
      
      console.log(chalk.cyan('Recursos de aprendizaje:'));
      etapa.recursos.forEach(recurso => {
        console.log(chalk.white(`• ${recurso.nombre}: ${recurso.url || recurso.descripcion}`));
      });
      
      console.log(chalk.magenta('\nHabilidades a desarrollar:'));
      etapa.habilidades.forEach(habilidad => {
        console.log(chalk.white(`• ${habilidad}`));
      });
      
      if (index < roadmapData.etapas.length - 1) {
        console.log(chalk.gray('\n↓ ↓ ↓\n'));
      }
    });
    
    console.log(chalk.green.bold('\n✅ Meta final: ') + chalk.white(roadmapData.meta));
    
    console.log(chalk.cyan.bold('\n💡 Consejo: ') + chalk.white('Usa el comando ') + 
      chalk.green('rutatech retos --tecnologia ' + area) + 
      chalk.white(' para encontrar retos prácticos relacionados con esta área.'));
    
  } catch (error) {
    console.error(chalk.red('Error al mostrar el roadmap:'), error);
  }
}

/**
 * Formatea el nombre del área para mostrar
 * @param {string} area - Nombre del área en formato snake_case
 * @returns {string} Nombre formateado
 */
function formatAreaName(area) {
  return area
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
