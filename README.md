# RutaTech CLI
Is a command-line tool built with Node.js and Amazon Q Developer that helps users - especially students, career changers, and curious adults - explore paths in technology through a personalized, interactive experience.

This tool transforms the question *"What career in technology is right for me?* into a conversation in the Amazon Q-powered CLI. Users can:

- 📝 Take a quiz to identify skills.
- 🧩 Get AI-generated learning paths
- 💡 Find real opportunities (bootcamps, scholarships, jobs)
- ❤️ Discover inspiring stories from technology professionals
- 🤩 Explore interactive challenges
- 🤝 Match personal interests with relevant technology roles

This isn't just a script - it's a smart, modular career companion on your terminal. Built with the Amazon Q Developer CLI, it's an unexpected use case that goes beyond code and really helps.

### Why it's important

There is a big gap between interest in technology and actual direction - especially for people without mentors or exposure to real technology applications. RutaTech CLI makes exploring this world easier, more engaging, and available directly from the terminal - without a browser.

# Demo

## Installation

```bash
# Clone the repository
git clone https://github.com/tu-usuario/rutatech.git
cd rutatech

#  Install dependencies
npm install

# Install globally (optional)
npm install -g .
```

## Use

```bash
# If installed globally
rutatech [comando]

# If not globally installed
npm start -- [comando]
```

## Available Commands

- `start`: Starts the vocational test
- `roadmap`: Displays a suggested learning route
  - Opciones: `--area <area>` - Specific area of technology
- `oportunidades`: Lists current opportunities
  - Opciones: `--tipo <tipo>` -  Type of opportunity (work, study, volunteer)
- `historias`: Displays inspiring stories
  - Opciones: `--categoria <categoria>` - Category of stories
- `retos`: Show practical challenges
  - Opciones: `--nivel <nivel>` - Difficulty level (beginner, intermediate, advanced).
  - Opciones: `--tecnologia <tecnologia>` - Specific technology.
- `explora`: Allows you to combine interests to discover new paths.

## Preview:

![RutaTech CLI preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8dze6q2jhr3xksq1sc85.png)


# How I Used Amazon Q Developer

Amazon Q Developer CLI was the basis of this whole project. I used it to:

- Define the Node.js CLI architecture. 
- Generate each feature module with clear directions (vocational questionnaire, roadmap builder, etc.).
- Rapidly prototype features and get refactoring suggestions
- Automate repetitive logic and improve error handling
- Interactive brainstorming on UX edge cases and details.

Instead of jumping from tool to tool, I was able to stay in the CLI and iterate conversationally. Amazon Q validated structure, logic and wrote clean, maintainable code faster than I could have done it alone.


## Examples

```bash
# Start vocational test
rutatech start

# See web development roadmap
rutatech roadmap --area desarrollo_web

# List study opportunities
rutatech oportunidades --tipo estudio

# See stories of overcoming
rutatech historias --categoria superacion

# Finding beginner-level challenges in JavaScript
rutatech retos --nivel principiante --tecnologia javascript

# Exploring interest-based technology pathways
rutatech explora
```

## Project structure

```
rutatech/
├── bin/                  # CLI entry point
├── src/
│   ├── commands/         # Command implementation
│   ├── data/             # Data and content
│   └── utils/            # Utilities and helpers
├── package.json
└── README.md
```

## Contribute 🤩

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a branch for your feature (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
