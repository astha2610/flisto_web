# Flisto Web - Landing Page

A modular, maintainable landing page for Flisto built with HTML, CSS, and JavaScript.

## Project Structure

```
flisto_web/
├── index.html          # Landing page at / (uses dynamic sections)
├── privacy-policy.html # Privacy policy at /privacy-policy
├── build.js            # Build script to combine sections (optional)
├── package.json        # Node.js dependencies and scripts
├── vercel.json         # Vercel routing configuration for clean URLs
├── css/
│   └── styles.css      # All CSS styles
├── js/
│   ├── load-sections.js # Dynamic section loader
│   └── script.js       # All JavaScript functionality
├── components/         # Modular HTML components
│   ├── header.html
│   ├── hero.html
│   ├── how-it-works.html
│   ├── features.html
│   ├── screenshots.html
│   ├── cta.html
│   └── footer.html
└── images/             # Image assets
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)

### Installation

1. Clone the repository
2. Install dependencies (if any):
   ```bash
   npm install
   ```

### Development

Build the project and start a local server:

```bash
npm run dev
```

Or build only:

```bash
npm run build
```

Then serve:

```bash
npm run serve
```

## How It Works

The project uses a modular approach with two options:

### Option 1: Dynamic Loading (Current)

- **Sections**: Each major section is loaded dynamically via JavaScript
- **index.html**: Contains placeholder divs that get populated with section content
- **load-sections.js**: Fetches and injects section HTML files at runtime
- **Works with**: Any web server (http-server, live-server, etc.)

### Option 2: Build Script (Alternative)

- **Components**: Each major section is in its own file in the `components/` directory
- **build.js**: Combines all sections into a single `index.html` file
- **Run**: `npm run build` to generate the final HTML
- **Works with**: Any static hosting (no server needed)

**Note**: The current setup uses dynamic loading. To switch to build-based approach, run `npm run build` and use the generated `index.html`.

## URL Structure

- `/` - Landing page (index.html)
- `/privacy-policy` - Privacy policy page (privacy-policy.html)

Clean URLs are configured via `vercel.json` for deployment on Vercel. For local development, you can access:

- `http://localhost:8000/` - Landing page
- `http://localhost:8000/privacy-policy.html` - Privacy policy

## Editing Sections

To edit a specific component, modify the corresponding file in `components/`:

- `components/header.html` - Navigation and header
- `components/hero.html` - Hero section with main CTA
- `components/how-it-works.html` - Steps section
- `components/features.html` - Features grid
- `components/screenshots.html` - Screenshot carousel
- `components/cta.html` - Call-to-action section
- `components/footer.html` - Footer with links

After editing, run `npm run build` to regenerate `index.html`.

## File Organization

- **HTML**: Modular components in `components/` directory
- **CSS**: Single file `css/styles.css` with all styles
- **JavaScript**: Single file `js/script.js` with all functionality
- **Build**: `build.js` combines sections into final HTML

## Deployment

The built `index.html` file can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

Make sure to run `npm run build` before deploying to ensure `index.html` is up to date.
