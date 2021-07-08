console.log('hi')

let img;

let w = 7500;
let h = 5000;
let divw = 320;
let divh = 240;
let bgcolor = '#00ff44';


function preload() {
    img_y = loadImage('assets/volcano3.jpg');
}

function setup(){
    let sketch_canvas = createCanvas(w, h);
    sketch_canvas.parent('#canvasPlace');   
    image(img_y,0,0,w,h);
}

function draw(){
    noLoop()     
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
            // let randomR = 10;
            let randomT = random(20,ref_h*20);
            //let randomR = random(2,ref_h);
            let randomR = random(2,20);
            let color = get(i*ref_w, j*ref_h);
            stroke(color);
            //noStroke();
            // stroke(bgcolor);
            // strokeWeight(2);
            // console.log(`x: ${i*ref_w} y: ${j*ref_h} w: ${ref_h} h: ${ref_h}`);
            let elObj = {};
            elObj.y = j*ref_h;
            elObj.height = randomT;
            elObj.width = randomR;
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
    // background(bgcolor);
   // blend(img_y,0,0,w,h,0,0,w,h,OVERLAY);
    for (z=0;z<data.length;z++){
        //console.log(data[z]);
        stroke(data[z].c);
        strokeWeight(data[z].width)
        //rect(data[z].x,data[z].y,data[z].w,data[z].h);
        line(data[z].x,data[z].y-(data[z].height/2),data[z].x,data[z].y+(data[z].height/2))
    }
    //sblend(img_y,0,0,w,h,0,0,w,h,OVERLAY);


//    beginShape();
//    curveVertex(10, 26);
//    curveVertex(10, 26);
//    curveVertex(83, 24);
//    curveVertex(83, 61);
//    curveVertex(25, 65);
//    curveVertex(25, 65);
//    endShape()
    
    

}