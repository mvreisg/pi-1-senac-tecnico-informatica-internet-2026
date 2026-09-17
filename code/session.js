const isLogged = localStorage.getItem("isLogged");
let url;
if (
  !isLogged &&
  window.location.pathname.includes("/internal") &&
  !window.location.pathname.includes("/internal/validation") &&
  !window.location.pathname.includes("/internal/qrcode")
) {
  if (window.location.protocol.includes("https")) {
    url = `https://${window.location.host}/pi-1-senac-tecnico-informatica-internet-2026/code/login/login.html`;
  } else {
    url = `http://${window.location.host}/code/login/login.html`;
  }
  navigation.navigate(url);
} else if (isLogged && !window.location.pathname.includes("/internal")) {
  const params = new URLSearchParams(window.location.search);
  const isToLogoff = params.get("logoff");
  if (isToLogoff) {
    localStorage.removeItem("isLogged");
  }
  if (window.location.protocol.includes("https")) {
    url = `https://${window.location.host}/pi-1-senac-tecnico-informatica-internet-2026/code/internal/home/home.html`;
  } else {
    url = `http://${window.location.host}/code/internal/home/home.html`;
  }
  navigation.navigate(url);
}
