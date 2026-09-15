document.addEventListener("DOMContentLoaded", () => {
  let url;
  if (window.location.protocol.includes("https")) {
    url = `https://${window.location.host}/pi-1-senac-tecnico-informatica-internet-2026/code/internal/validation/validation.html`;
  } else {
    url = `http://${window.location.host}/code/internal/validation/validation.html`;
  }
  new QRCode(document.getElementById("qrcode"), {
    width: 400,
    height: 400,
  }).makeCode(url);
});
