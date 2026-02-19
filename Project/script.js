document.addEventListener("DOMContentLoaded", () => {
  fetch("./Project/projects.json")
    .then(res => res.json())
    .then(projects => {
      const container = document.getElementById("projectsContainer");

      projects.forEach(project => {
        const box = document.createElement("div");
        box.className = "box";

        box.innerHTML = `
          <img src="./Project/${project.image}.png" alt="${project.name}">
          
          <div class="content">
            
            <div class="tag">
              <h3>${project.name}</h3>
            </div>

            <div class="desc">
              <p>${project.desc}</p>

              <div class="btns">
                <a href="${project.links.view}" target="_blank" class="btn">View</a>
                <a href="${project.links.code}" target="_blank" class="btn">Code</a>
              </div>
            </div>

          </div>
        `;

        container.appendChild(box);
      });
    })
    .catch(err => console.error("Project load error:", err));
});
