
let ballCount = 100;
let x = [];
let y = [];
let xSpeed = [];
let ySpeed = [];
let size = [];
let r = [];
let g = [];
let b = [];



export function setup() {
    createCanvas(windowWidth, windowHeight);
    for (i = 0; i < ballCount; i++ ) {
        x[i] = width / 2;
        y[i] = height / 2;
        xSpeed[i] = random(-5, 5);
        ySpeed[i] = random(-5, 5);
        size[i] = random(10, 50);
        r[i] = random(0, 256);
        g[i] = random(0, 256);
        b[i] = random(0, 256);

    }

}

export function draw() {
  background(0, 50);
  for (i = 0; i < ballCount; i++) {
    x[i] += xSpeed[i];
    y[i] += ySpeed[i];
    if (x[i] < 0 || x[i] > width) {
        xSpeed[i] *= -1
    };
    if (y[i] < 0 || y[i] > height) {
        ySpeed[i] *= -1
    };
    fill(r[i], g[i], b[i]);
    noStroke();
    ellipse(x[i], y[i], size[i])
  }
}