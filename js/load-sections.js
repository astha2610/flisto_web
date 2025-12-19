// Load all sections dynamically
async function loadSection(sectionId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
    }
    const html = await response.text();
    const container = document.getElementById(sectionId);
    if (container) {
      container.innerHTML = html;
    } else {
      console.error(`Container #${sectionId} not found`);
    }
  } catch (error) {
    console.error(`Error loading section ${sectionId}:`, error);
  }
}

// Determine base path based on current page location
function getBasePath() {
  // All pages are now at root level, so components are always at root/components/
  return "";
}

// Load all sections when DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  const basePath = getBasePath();

  // Define all possible sections
  const sections = [
    { id: "header-section", file: "header.html" },
    { id: "hero-section", file: "hero.html" },
    { id: "how-it-works-section", file: "how-it-works.html" },
    { id: "features-section", file: "features.html" },
    { id: "screenshots-section", file: "screenshots.html" },
    { id: "cta-section", file: "cta.html" },
    { id: "footer-section", file: "footer.html" },
  ];

  // Only load sections that exist on the page
  const sectionsToLoad = sections.filter((section) =>
    document.getElementById(section.id)
  );

  await Promise.all(
    sectionsToLoad.map((section) =>
      loadSection(section.id, `${basePath}components/${section.file}`)
    )
  );

  // Dispatch event to signal that sections are loaded
  document.dispatchEvent(new Event("sectionsLoaded"));

  // Also initialize after a short delay to ensure DOM is updated
  setTimeout(() => {
    if (window.initializeApp) {
      window.initializeApp();
    }
  }, 50);
});
