console.log('hi')

let img;
let first_level = 20;
function preload() {
    img_y = loadImage('assets/coral1.jpg');
}

function setup(){
    let sketch_canvas = createCanvas(4000, 10000);
    sketch_canvas.parent('#canvasPlace');   
}

function draw(){
    noLoop();
    // background('#00ff44');
    splitImgTest(0, 0, 4000, first_level);
}




function splitImgTest(xpos, ypos, w, level){
    
    let l_array = [];
    for (x=0; x<level+1; x++) {
        l_array.unshift(x);
    }
       
    if (l_array[0]==first_level){
        image(img_y, xpos, ypos, w, w, 0, 0, w, w);
        if (level > 1) {
            level = level - 1;
            splitImgTest(xpos, ypos + w, w/2, level);
            splitImgTest(xpos + w/2, ypos + w, w/2, level);
            
        }
    } else {

        let x = floor(random(img_y.width));
        let y = floor(random(img_y.height));
        let pix = img_y.get(x, y);
        fill(pix, 128);
        stroke('white');
        strokeWeight(2)
        // noStroke();
        rect(xpos, ypos, w, w)
        
            
        if (level > 1){
            
            level = level - 1;
            let randomX = random(0,3500);
            let randomY = random(500,2500);
            image(img_y, xpos, ypos, w, w, randomX, randomX,w-randomX,w-randomX);
            splitImgTest(xpos, ypos + w, w/2, level);
            splitImgTest(xpos + w/2, ypos + w, w/2, level);
        }
        
    }
        
    
}


