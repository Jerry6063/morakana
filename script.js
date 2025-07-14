// Make each section collapsible by clicking its title
document.querySelectorAll("section").forEach(section => {
  const header = section.querySelector("h2");
  if (header) {
    header.style.cursor = "pointer"; // Show pointer cursor on hover
    const content = Array.from(section.children).slice(1); // All content except h2
    header.addEventListener("click", () => {
      content.forEach(el => {
        el.style.display = (el.style.display === "none") ? "block" : "none";
      });
    });
  }
});

// Highlight Ontological Analysis section on hover
document.querySelectorAll(".ontology").forEach(section => {
  section.addEventListener("mouseenter", () => {
    section.style.backgroundColor = "#f0f8ff"; // light blue
  });
  section.addEventListener("mouseleave", () => {
    section.style.backgroundColor = "#ffffff"; // reset to white
  });
});

// Highlight Contextual Analysis section on hover
document.querySelectorAll(".contextual").forEach(section => {
  section.addEventListener("mouseenter", () => {
    section.style.backgroundColor = "#f0faff";
  });
  section.addEventListener("mouseleave", () => {
    section.style.backgroundColor = "#e9f2f9";
  });
});

// Highlight Visual Analysis section on hover
document.querySelectorAll(".visual-analysis").forEach(section => {
  section.addEventListener("mouseenter", () => {
    section.style.backgroundColor = "#fff0e6"; // light peach highlight
  });
  section.addEventListener("mouseleave", () => {
    section.style.backgroundColor = "#fff7f0"; // original background
  });
});
