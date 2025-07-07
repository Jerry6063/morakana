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
