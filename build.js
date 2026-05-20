const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "components");
const sections = {
  header: fs.readFileSync(path.join(componentsDir, "header.html"), "utf8"),
  hero: fs.readFileSync(path.join(componentsDir, "hero.html"), "utf8"),
  howItWorks: fs.readFileSync(
    path.join(componentsDir, "how-it-works.html"),
    "utf8"
  ),
  features: fs.readFileSync(path.join(componentsDir, "features.html"), "utf8"),
  analyticsDeepDive: fs.readFileSync(
    path.join(componentsDir, "analytics-deep-dive.html"),
    "utf8"
  ),
  shareSection: fs.readFileSync(
    path.join(componentsDir, "share-section.html"),
    "utf8"
  ),
  screenshots: fs.readFileSync(
    path.join(componentsDir, "screenshots.html"),
    "utf8"
  ),
  referrals: fs.readFileSync(
    path.join(componentsDir, "referrals.html"),
    "utf8"
  ),
  cta: fs.readFileSync(path.join(componentsDir, "cta.html"), "utf8"),
  footer: fs.readFileSync(path.join(componentsDir, "footer.html"), "utf8"),
};

const metaBlock = `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flisto - Your Food Memory Companion</title>
    <meta
      name="description"
      content="Flisto is your food memory journal: scan Indian restaurant bills with AI, rate dishes, organize collections, explore analytics, and share picks with friends."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.flisto.in/" />
    <meta property="og:title" content="Flisto - Your Food Memory Companion" />
    <meta
      property="og:description"
      content="Capture dining experiences, organize collections, understand your habits with analytics, and share restaurants with friends."
    />
    <meta property="og:site_name" content="Flisto" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Flisto - Your Food Memory Companion" />
    <meta
      name="twitter:description"
      content="Scan bills, remember dishes, track spend in ₹, and share your favorite spots."
    />`;

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
${metaBlock}
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
${sections.header}

    <main>
${sections.hero}

${sections.howItWorks}

${sections.features}

${sections.analyticsDeepDive}

${sections.shareSection}

${sections.screenshots}

${sections.referrals}

${sections.cta}
    </main>

${sections.footer}

    <script src="js/script.js"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(__dirname, "index.html"), html, "utf8");
console.log("✅ Built index.html from components!");
