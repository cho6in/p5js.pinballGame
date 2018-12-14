'use strict';

var vx = [1, 1, -1, -1];
var vy = [1, -1, -1, 1];
var x = [];
var y = [];
var rx = 500 / 2;
var ry = 400;
var rsize = 50;

function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < 4; i++) {
    x[i] = int(random(500));
    y[i] = int(random(500));
  }
}

function draw() {
  background(0, 100, 100);
  strokeWeight(10);

  line(rx - rsize / 2, ry, rx + rsize / 2, ry);
  rx = mouseX;

  for (var i = 0; i < 4; i++) {
    x[i] += vx[i];
    y[i] += vy[i];
    point(x[i], y[i]);

    if (x[i] > width || x[i] < 0) {
      vx[i] *= -1;
    }
    if (y[i] > height || y[i] < 0) {
      vy[i] *= -1;
    }
    if (y[i] == ry && x[i] >= rx - rsize / 2 && x[i] <= rx + rsize / 2) {
      vx[i] *= -1;
      vy[i] *= -1;
    }
  }
}
