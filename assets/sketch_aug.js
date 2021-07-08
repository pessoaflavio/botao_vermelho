console.log('done');

let img;

let w = 7500/2;
let h = 5000/2;
let divw = 100/2;
let divh = 66/2;

function preload() {
    img_y = loadImage('assets/cana3.jpg');
}

function setup(){
    let sketch_canvas = createCanvas(w, h);
    sketch_canvas.parent('#canvasPlace');   
    image(img_y,0,0,w,h);
    rectMode(CENTER);
    angleMode(DEGREES);
    noLoop();
}

function draw(){
    splitImg();
}

function splitImg(){
    
    let ref_w = w/divw; // 292.96875
    let ref_h = h/divh; // 303.121212
    
    let photo = image(img_y,0,0,w,h);
    photo;
    
    let data = [];
    // arrumar loop
    for (i = 1; i < divw; i++) {

        let tempArray = [];

        for (j = 1; j < divh; j++) {
            let color = get(i*ref_w, j*ref_h);
            // fill(color);
            let elObj = {};
            elObj.y = j*ref_h;
            elObj.c = color;
            tempArray.push(elObj);
        }       
        
        for (t=0;t<tempArray.length;t++) {
            let finalObj = tempArray[t];
            finalObj.x = i*ref_w;
            data.push(finalObj);
        }

    }
    clear();
    
    for (z = 0; z < data.length; z++) {

        push();
        translate(data[z].x,data[z].y);

        let con = 12;

        for (let b = 0; b < con; b++){
            push();
            rotate((360/(con*2))*b);
            noStroke();
            fill(data[z+1].c);
            rect(0,0,2,random(10, ref_w * 4));
            pop();
        };

        pop();
        
    }

    console.log('woo')
    // photo;
    
}