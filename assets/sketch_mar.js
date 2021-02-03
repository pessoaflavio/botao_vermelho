console.log('hi')

let img;

let w = 1200;
let h = 900;
let divw = 80;
let divh = 60;


function preload() {
    img_y = loadImage('assets/teste2.jpg');
}

function setup(){
    let sketch_canvas = createCanvas(w, h);
    sketch_canvas.parent('#canvasPlace');   
    image(img_y,0,0,w,h);
}

function draw(){
    noLoop();
    background('#00ff44');
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
            let randomR = random(2,ref_h*1.5);

            let color = get(i*ref_w, j*ref_h);
            fill(color);
            //noStroke();
            stroke('white');
            //strokeWeight(4);
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

    for (z=0;z<data.length;z++){
        //console.log(data[z]);
        fill(data[z].c);
        ellipse(data[z].x,data[z].y,data[z].w,data[z].h);
    }


}