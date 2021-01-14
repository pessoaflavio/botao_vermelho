console.log('hi')

let img;
let cols, rows;
let w = 65;
let h = 62;
let array_images = [];
let shuffled_array = [];


function preload() {
    img_y = loadImage('assets/suplemento.jpg');
}

function setup(){
    let sketch_canvas = createCanvas(6500, 5022);
    sketch_canvas.parent('#canvasPlace');   
    
    cols = canvas.width/w;
    rows = canvas.height/h;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let piece = new Piece(i,j);
            array_images.push(piece);
        }
    }

}

function draw(){
    
    noLoop();
    shuffled_array = shuffleArray([...array_images]);
    for (let i = 0; i < array_images.length; i++) {
        
        let orig = array_images[i];
        let shuf = shuffled_array[i];
        //console.log(orig, shuf);
        //tint(100);
        image(img_y, orig.x*w, orig.y*h, w, h, shuf.x*w, shuf.y*h, w, h);
        noFill();
        //stroke(253, 242, 236);
        stroke(255, 255, 255);
        strokeWeight(5);
        rect(orig.x*w, orig.y*h, w, h);
    }

    
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Piece(x,y) {
    this.x = x;
    this.y = y;
}

