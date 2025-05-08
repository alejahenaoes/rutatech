/**
 * Utilidades y funciones helper para la aplicación
 */

/**
 * Función para pausar la ejecución por un tiempo determinado
 * @param {number} ms - Tiempo en milisegundos
 * @returns {Promise} Promesa que se resuelve después del tiempo especificado
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Formatea una fecha en formato legible
 * @param {Date|string} fecha - Fecha a formatear
 * @returns {string} Fecha formateada
 */
export function formatearFecha(fecha) {
  if (typeof fecha === 'string') {
    fecha = new Date(fecha);
  }
  
  return fecha.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/**
 * Trunca un texto si excede cierta longitud
 * @param {string} texto - Texto a truncar
 * @param {number} longitud - Longitud máxima
 * @returns {string} Texto truncado
 */
export function truncarTexto(texto, longitud = 100) {
  if (texto.length <= longitud) {
    return texto;
  }
  
  return texto.substring(0, longitud) + '...';
}

/**
 * Genera un ID único
 * @returns {string} ID único
 */
export function generarId() {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

/**
 * Capitaliza la primera letra de cada palabra en un texto
 * @param {string} texto - Texto a capitalizar
 * @returns {string} Texto capitalizado
 */
export function capitalizarPalabras(texto) {
  return texto
    .split(' ')
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(' ');
}
