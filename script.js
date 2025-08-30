
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("workerForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const skill = document.getElementById("skill").value;
      const location = document.getElementById("location").value;
      const phone = document.getElementById("phone").value;

      const worker = { name, skill, location, phone };

      const workers = JSON.parse(localStorage.getItem("workers")) || [];
      workers.push(worker);
      localStorage.setItem("workers", JSON.stringify(workers));

      form.reset();
      document.getElementById("done").style.display = "block";
    });
  }

  const workerList = document.getElementById("workerList");
  if (workerList) {
    const workers = JSON.parse(localStorage.getItem("workers")) || [];
    workers.forEach(worker => {
      const card = document.createElement("div");
      card.className = "worker-card";
      card.innerHTML = `
        <strong>Name:</strong> ${worker.name} <br>
        <strong>Skill:</strong> ${worker.skill} <br>
        <strong>Location:</strong> ${worker.location} <br>
        <strong>Phone:</strong> ${worker.phone}
      `;
      workerList.appendChild(card);
    });
  }
});
