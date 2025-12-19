const fs = require("fs");
const path = require("path");

// Read all component files
const componentsDir = path.join(__dirname, "components");
const sections = {
  header: fs.readFileSync(path.join(componentsDir, "header.html"), "utf8"),
  hero: fs.readFileSync(path.join(componentsDir, "hero.html"), "utf8"),
  howItWorks: fs.readFileSync(
    path.join(componentsDir, "how-it-works.html"),
    "utf8"
  ),
  features: fs.readFileSync(path.join(componentsDir, "features.html"), "utf8"),
  screenshots: fs.readFileSync(
    path.join(componentsDir, "screenshots.html"),
    "utf8"
  ),
  cta: fs.readFileSync(path.join(componentsDir, "cta.html"), "utf8"),
  footer: fs.readFileSync(path.join(componentsDir, "footer.html"), "utf8"),
};

// Build the HTML
const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flisto - Your Food Memory Companion</title>
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
${sections.header}

    <main>
${sections.hero}

${sections.howItWorks}

${sections.features}

${sections.screenshots}

${sections.cta}
    </main>

${sections.footer}

    <script src="js/script.js"></script>
  </body>
</html>`;

// Write to index.html
fs.writeFileSync(path.join(__dirname, "index.html"), html, "utf8");
console.log("✅ Built index.html from components!");
