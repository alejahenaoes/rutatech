#!/usr/bin/env node

import { program } from 'commander';
import figlet from 'figlet';
import chalk from 'chalk';
import { startCommand } from '../src/commands/start.js';
import { roadmapCommand } from '../src/commands/roadmap.js';
import { oportunidadesCommand } from '../src/commands/oportunidades.js';
import { historiasCommand } from '../src/commands/historias.js';
import { retosCommand } from '../src/commands/retos.js';
import { exploraCommand } from '../src/commands/explora.js';

// Mostrar banner de bienvenida
console.log(
  chalk.cyan(
    figlet.textSync('RutaTech', { horizontalLayout: 'full' })
  )
);
console.log(chalk.yellow('¡Descubre tu camino en tecnología!\n'));

// Configurar la aplicación CLI
program
  .name('rutatech')
  .description('CLI para ayudar a jóvenes a explorar su vocación tecnológica')
  .version('1.0.0');

// Registrar comandos
program
  .command('start')
  .description('Inicia el test vocacional')
  .action(startCommand);

program
  .command('roadmap')
  .description('Muestra una ruta de aprendizaje sugerida')
  .option('-a, --area <area>', 'Área específica de tecnología')
  .action(roadmapCommand);

program
  .command('oportunidades')
  .description('Lista oportunidades actuales')
  .option('-t, --tipo <tipo>', 'Tipo de oportunidad (trabajo, estudio, voluntariado)')
  .action(oportunidadesCommand);

program
  .command('historias')
  .description('Muestra historias inspiradoras')
  .option('-c, --categoria <categoria>', 'Categoría de historias')
  .action(historiasCommand);

program
  .command('retos')
  .description('Presenta retos prácticos')
  .option('-n, --nivel <nivel>', 'Nivel de dificultad (principiante, intermedio, avanzado)')
  .option('-t, --tecnologia <tecnologia>', 'Tecnología específica')
  .action(retosCommand);

program
  .command('explora')
  .description('Permite combinar intereses para descubrir caminos nuevos')
  .action(exploraCommand);

// Procesar argumentos
program.parse(process.argv);

// Si no se proporciona ningún comando, mostrar ayuda
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
