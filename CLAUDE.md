# CLAUDE.md - Guidelines for Gender Reveal Website

## Build and Development Commands
- **Local Server**: Run `php -S localhost:8000` to start a local PHP server
- **Deploy**: Push changes to main branch for automatic deployment
- **Validate HTML**: Use `html-validate index.html`
- **File Structure**: Keep HTML, CSS, and JS in separate files

## Code Style Guidelines

### HTML
- Use HTML5 doctype and semantic elements
- Indent with 4 spaces
- Keep element attributes in alphabetical order
- Include viewport meta tag for responsiveness

### CSS
- Follow BEM naming convention for classes
- Use CSS variables for colors and repeated values
- Organize styles in logical sections (reset, layout, components)
- Place CSS in external stylesheet (styles.css)

### JavaScript
- Use ES6+ features
- Function names in camelCase
- Prefer const/let over var
- Add descriptive comments for complex logic
- Handle potential errors with try/catch
- Place JS in external file (script.js)

### Animation/Performance
- Keep animations under 60fps
- Clean up DOM elements when no longer needed
- Use requestAnimationFrame for complex animations

### Media
- Use preload="auto" for essential audio files
- Ensure audio files are compressed appropriately
- Always provide fallback content for media elements

This website is a gender reveal page with pink theme, confetti animation, and sound effects.