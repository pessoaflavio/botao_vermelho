console.log('hi')

let img;

let w = 3927;
let h = 2154;
let divw = 160;
let divh = 120;
let bgcolor = '#00ff44';


function preload() {
    img_y = loadImage('assets/lazarus2.jpg');
}

function setup(){
    let sketch_canvas = createCanvas(w, h);
    sketch_canvas.parent('#canvasPlace');   
    image(img_y,0,0,w,h);
}

function draw(){
    noLoop();
    
    splitImg();
    
}

function splitImg(){
    
    let ref_w = w/divw;
    let ref_h = h/divh;
    
    
    
    let photo = image(img_y,0,0,w,h);
    photo;
    
    let data = [];
    // arrumar loop
    for (i=1; i<divw; i++) {

        let tempArray = [];

        for (j=1; j<divh; j++) {
            // let randomR = ref_h;
            let randomR = random(3,ref_h*2);

            let color = get(i*ref_w, j*ref_h);
            fill(color);
            //noStroke();
            stroke(bgcolor);
            strokeWeight(2);
            // console.log(`x: ${i*ref_w} y: ${j*ref_h} w: ${ref_h} h: ${ref_h}`);
            let elObj = {};
            elObj.y = j*ref_h;
            elObj.w = randomR;
            elObj.h = randomR;
            elObj.c = color;
            tempArray.push(elObj);

        }       
        
        for (t=0;t<tempArray.length;t++){
            let finalObj = tempArray[t];
            finalObj.x = i*ref_w;
            data.push(finalObj);
        }
    }
    clear();
    background(bgcolor);
    for (z=0;z<data.length;z++){
        //console.log(data[z]);
        fill(data[z].c);
        ellipse(data[z].x,data[z].y,data[z].w,data[z].h);
    }


}