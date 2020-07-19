let font;
let graphic;

const waveInput = document.querySelector("input.wave");
const distortionXInput = document.querySelector("input.distortionX");
const distortionYInput = document.querySelector("input.distortionY");
const line1Input = document.querySelector("input.line1");
const line2Input = document.querySelector("input.line2");

function preload() {
  font = loadFont("spacegrotesk-medium.otf");
}

function setup() {
  createCanvas(1200, 600);
  createCopy();
}

// This makes the wavy text
function draw() {
  background("#ebe2d8");

  const tileSize = 10;

  for (let x = 0; x < 120; x = x + 1) {
    for (let y = 0; y < 60; y = y + 1) {
      const wave = waveInput.value;

      // makes wave go left/right
      const distortionX =
        sin(frameCount * wave + x * 0.5 + y * 0.1) * distortionXInput.value;

      //  makes wave go up/down
      const distortionY =
        sin(frameCount * wave + x * 0.5 + y * 1) * distortionYInput.value;

      // source x, y, width, height
      const sx = x * tileSize + distortionX;
      const sy = y * tileSize + distortionY;
      const sw = tileSize;
      const sh = tileSize;

      // send source to
      // destination x, y, width, height
      const dx = x * tileSize;
      const dy = y * tileSize;
      const dw = tileSize;
      const dh = tileSize;

      // first enter destination, the the source
      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}

function createCopy() {
  graphic = createGraphics(1200, 600);

  const text = line1Input.value + "\n" + line2Input.value;

  graphic.fill("#0383ff");
  graphic.textSize(300);
  graphic.textAlign(CENTER, CENTER);
  graphic.textLeading(250);
  graphic.textFont(font);
  graphic.text(text, 600, 300);
}

line1Input.addEventListener("input", function () {
  createCopy();
});

line2Input.addEventListener("input", function () {
  createCopy();
});
