const isLogged = localStorage.getItem("isLogged");
if (!isLogged && !window.location.href.includes("/login/login.html")) {
  let url;
  if (window.location.protocol.includes("https")) {
    url = `https://${window.location.host}/pi-1-senac-tecnico-informatica-internet-2026/code/login/login.html`;
  } else {
    url = `http://${window.location.host}/code/login/login.html`;
  }
  window.location.href = url;
} else if (isLogged && !window.location.href.includes("/internal")) {
  const params = new URLSearchParams(window.location.search);
  const isToLogoff = params.get("logoff");
  if (isToLogoff) {
    localStorage.removeItem("isLogged");
  }
  let url;
  if (window.location.protocol.includes("https")) {
    url = `https://${window.location.host}/pi-1-senac-tecnico-informatica-internet-2026/code/internal/home/home.html`;
  } else {
    url = `http://${window.location.host}/code/internal/home/home.html`;
  }
  window.location.href = url;
}
