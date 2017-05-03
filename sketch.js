var img;
s = "I applaud the huge effort made by energy producers around the world. These great companies creates value by serving the energy needs of our great nation. Together they make use of the resources provided to us by nature, and turn them into products and solutions that enable you and your loved ones to live your daily lives, and run your daily businesses. Today our great nation pays special tribute to the hard working energi companies of (Country). Their continuing hard work has resulted in (impressively high) production levels."

function preload() {
  img = loadImage('http://i.imgur.com/uwlV07H.jpg');
}

function setup() {
	createCanvas(1000,1000);
	background(150);
    
}



function draw() {
    image(img, 0, 0);
    textFont("Orator Std");
    fill(80);
    textSize(20);
    text(s, 190, 400, 650, 500);

}

