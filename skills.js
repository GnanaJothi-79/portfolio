document.addEventListener("DOMContentLoaded", () => {
  fetch("./skills.json")
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to load JSON");
      }
      return res.json();
    })
    .then(skills => {
      const container = document.getElementById("skillsContainer");

      skills.forEach(skill => {
        const div = document.createElement("div");
        div.className = "bar";

        div.innerHTML = `
          <div class="info">
            <img src="${skill.icon}" alt="${skill.name}">
            <span>${skill.name}</span>
          </div>
        `;

        container.appendChild(div);
      });
    })
    .catch(err => console.error("Error:", err));
});
