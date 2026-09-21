let url;
if (window.location.protocol.includes("https")) {
  url = `https://${window.location.host}/pi-1-senac-tecnico-informatica-internet-2026/code/internal/validation/validation.html`;
} else {
  url = `http://${window.location.host}/code/internal/validation/validation.html`;
}

document.addEventListener("DOMContentLoaded", () => {
  new QRCode(document.getElementById("qrcode"), {
    width: window.innerWidth / 2,
    height: window.innerWidth / 2,
  }).makeCode(url);
});

window.addEventListener("resize", () => {
  const element = document.getElementById("qrcode");
  for (const e of [...element.children]) {
    e.remove();
  }
  new QRCode(document.getElementById("qrcode"), {
    width: window.innerWidth / 2,
    height: window.innerWidth / 2,
  }).makeCode(url);
});
