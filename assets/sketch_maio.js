console.log('hi')

let img_0,img_1;
let w = 2917;
let h = 4083;
let w2 = 3892;
let h2 = 2067;

function preload() {

    img_0 = loadImage('assets/face2_0.jpg');
    img_1 = loadImage('assets/eyes1.jpg');
    
}

function setup(){
    let sketch_canvas = createCanvas(w2, h2);
    sketch_canvas.parent('#canvasPlace');   
}

function draw(){
    noLoop();
    splitImg2();
}


function splitImg1(){

    // loop over a defined lenght? and... maybe start adding images
    // we need to randomize posy, and also where we extract the image from the original
    let refy = 80;
    let ref_cut = 80;

    for (i=0;i<ref_cut;i++){

        image(img_0, ((w/refy)*i)/2, ((h/refy)*i)/2, (w/refy)*(refy-i),(h/refy)*(refy-i) ); 
        
        if (i==ref_cut-1){
            noStroke()
            fill(get(((w/refy)*i-3)/2, ((h/refy)*i-3)/2))
            rect( ((w/refy)*i-3)/2, ((h/refy)*i-3)/2, (w/refy)*(refy-(i)), (h/refy)*(refy-(i)) )
        }
    }


}



function splitImg2(){

    // loop over a defined lenght? and... maybe start adding images
    // we need to randomize posy, and also where we extract the image from the original
    let refy = 40;
    let ref_cut = 40;

    for (i=0;i<ref_cut;i++){

        image(img_1, ((w2/refy)*i)/2, ((h2/refy)*i)/2, (w2/refy)*(refy-i),(h2/refy)*(refy-i) ); 

        if (i==ref_cut-1){
            noStroke()
            fill(get(((w2/refy)*i-3)/2, ((h2/refy)*i-3)/2))
            rect( ((w2/refy)*i-3)/2, ((h2/refy)*i-3)/2, (w2/refy)*(refy-(i)), (h2/refy)*(refy-(i)) )
        }
    }


}