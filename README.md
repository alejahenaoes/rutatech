# RutaTech

CLI para ayudar a jóvenes a explorar su vocación tecnológica.

## Descripción

RutaTech es una herramienta de línea de comandos diseñada para guiar a jóvenes en su exploración vocacional en el campo de la tecnología. Ofrece tests vocacionales, rutas de aprendizaje personalizadas, oportunidades actuales, historias inspiradoras y retos prácticos.

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/rutatech.git
cd rutatech

# Instalar dependencias
npm install

# Instalar globalmente (opcional)
npm install -g .
```

## Uso

```bash
# Si está instalado globalmente
rutatech [comando]

# Si no está instalado globalmente
npm start -- [comando]
```

## Comandos disponibles

- `start`: Inicia el test vocacional
- `roadmap`: Muestra una ruta de aprendizaje sugerida
  - Opciones: `--area <area>` - Área específica de tecnología
- `oportunidades`: Lista oportunidades actuales
  - Opciones: `--tipo <tipo>` - Tipo de oportunidad (trabajo, estudio, voluntariado)
- `historias`: Muestra historias inspiradoras
  - Opciones: `--categoria <categoria>` - Categoría de historias
- `retos`: Presenta retos prácticos
  - Opciones: `--nivel <nivel>` - Nivel de dificultad (principiante, intermedio, avanzado)
  - Opciones: `--tecnologia <tecnologia>` - Tecnología específica
- `explora`: Permite combinar intereses para descubrir caminos nuevos

## Ejemplos

```bash
# Iniciar el test vocacional
rutatech start

# Ver roadmap de desarrollo web
rutatech roadmap --area desarrollo_web

# Listar oportunidades de estudio
rutatech oportunidades --tipo estudio

# Ver historias de superación
rutatech historias --categoria superacion

# Encontrar retos de nivel principiante en JavaScript
rutatech retos --nivel principiante --tecnologia javascript

# Explorar caminos tecnológicos basados en intereses
rutatech explora
```

## Estructura del proyecto

```
rutatech/
├── bin/                  # Punto de entrada de la CLI
├── src/
│   ├── commands/         # Implementación de comandos
│   ├── data/             # Datos y contenido
│   └── utils/            # Utilidades y helpers
├── package.json
└── README.md
```

## Contribuir

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
