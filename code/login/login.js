window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#login-form").addEventListener("submit", (event) => {
    try {
      event.preventDefault();

      const form = document.querySelector("#login-form");

      const data = new FormData(form);

      const username = data.get("username");
      const password = data.get("password");

      if (username === "admin" && password === "admin") {
        let url;
        if (window.location.protocol.includes("https")) {
          url = `https://${window.location.host}/pi-1-senac-tecnico-informatica-internet-2026/code/internal/home/home.html`;
        } else {
          url = `http://${window.location.host}/code/internal/home/home.html`;
        }
        navigation.navigate(url);
      } else {
        alert("Credenciais incorretas!");
      }
    } catch (e) {
      alert(e.message);
    }
  });
});
