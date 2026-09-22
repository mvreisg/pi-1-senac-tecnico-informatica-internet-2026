document.addEventListener("DOMContentLoaded", () => {
  renderQrCode();
});

window.addEventListener("resize", () => {
  renderQrCode();
});

function renderQrCode() {
  const element = document.getElementById("qrcode");
  for (const e of [...element.children]) {
    e.remove();
  }
  const WIDTH_LIMIT = 300;
  let width, height;
  if (window.innerWidth / 2 < WIDTH_LIMIT) {
    width = window.innerWidth / 2;
    height = window.innerWidth / 2;
  } else {
    width = WIDTH_LIMIT;
    height = WIDTH_LIMIT;
  }

  let url;
  if (window.location.protocol.includes("https")) {
    url = `https://${window.location.host}/pi-1-senac-tecnico-informatica-internet-2026/code/external/validation/validation.html`;
  } else {
    url = `http://${window.location.host}/code/external/validation/validation.html`;
  }

  new QRCode(element, {
    width,
    height,
  }).makeCode(url);
}
