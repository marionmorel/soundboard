let weight = window.innerWidth;
let height = window.innerHeight;

let buttons_top = [];
let buttons_middle = [];
let buttons_bottom = [];

let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;
let sound7;
let sound8;
let sound9;


function setup() {
  // put setup code here
  canvas = createCanvas(weight, height);

  // load sounds
  sound1 = loadSound('./sounds/sound1.wav');
  sound2 = loadSound('./sounds/sound2.wav');
  sound3 = loadSound('./sounds/sound3.wav');
  sound4 = loadSound('./sounds/sound4.wav');
  sound5 = loadSound('./sounds/sound5.wav');
  sound6 = loadSound('./sounds/sound6.wav');
  sound7 = loadSound('./sounds/sound7.wav');
  sound8 = loadSound('./sounds/sound8.wav');
  sound9 = loadSound('./sounds/sound9.wav');

  // buttons
  let b1 = new Button(weight/3.5, height/4, 200, 50, color(0, 95, 163), color(92, 187, 255), sound1);
  let b2 = new Button(weight/2, height/4, 200, 50, color(59, 52, 111), color(125, 116, 190), sound2);
  let b3 = new Button(2*weight/2.8, height/4, 200, 50, color(85, 41, 102), color(164, 95, 191), sound3);

  let b4 = new Button(weight/3.5, height/2, 200, 50, color(95, 28, 84), color(203, 82, 183), sound4);
  let b5 = new Button(weight/2, height/2, 200, 50, color(132, 0, 50), color(255, 31, 117), sound5);
  let b6 = new Button(2*weight/2.8, height/2, 200, 50, color(115, 28, 28), color(211, 74, 74), sound6);

  let b7 = new Button(weight/3.5, 2*height/2.6, 200, 50, color(144, 59, 20), color(228, 112, 58), sound7);
  let b8 = new Button(weight/2, 2*height/2.6, 200, 50, color(184, 119, 0), color(255, 184, 51), sound8);
  let b9 = new Button(2*weight/2.8, 2*height/2.6, 200, 50, color(221, 164, 64), color(237, 205, 151), sound9);

  buttons_top.push(b1);
  buttons_top.push(b2);
  buttons_top.push(b3);

  buttons_middle.push(b4);
  buttons_middle.push(b5);
  buttons_middle.push(b6);

  buttons_bottom.push(b7);
  buttons_bottom.push(b8);
  buttons_bottom.push(b9);

}

function mousePressed() {
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].clicked(mouseX, mouseY);
    buttons_middle[i].clicked(mouseX, mouseY);
    buttons_bottom[i].clicked(mouseX, mouseY);
  }
}

function mouseReleased() {
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].y = height/4;
    buttons_middle[i].y = height/2;
    buttons_bottom[i].y = 2*height/2.6;
  }
}

function draw() {
  // put drawing code here
  background(238, 229, 229);
  noStroke();
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].show(); // using our show() function from our Button class.
    buttons_middle[i].show();
    buttons_bottom[i].show();
  }
}

class Button {
  constructor(x, y, w, h, color, accent, sound) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.accent = accent;
    this.sound = sound;
    }

    show() {
      noStroke();

      fill(this.color);
      rect((this.x - 100), this.y, this.w, this.h);

      fill(this.accent);
      ellipse(this.x, this.y, this.w, this.h);

      fill(this.color);
      arc(this.x, (this.y + 50), this.w, this.h, TWO_PI, PI);
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);

    if (d < this.w / 2) {
      this.y = this.y + 10;
      this.sound.play();
    }
  }
}

