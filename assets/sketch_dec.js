console.log('hi')

let img;

function preload() {
    img_y = loadImage('assets/escravidao.jpg');
}

function setup(){
    let sketch_canvas = createCanvas(windowWidth, windowHeight);
    sketch_canvas.parent('#canvasPlace');   
}

function draw(){
    noLoop();
    background('#00ff44');
    splitImg();
}

function splitImg(){

    // loop over a defined lenght? and... maybe start adding images
    // we need to randomize posy, and also where we extract the image from the original
    let refy = 90;
    let ref_cut = 90;

    for (i=0;i<ref_cut;i++){
        let randomY = random(-1*refy, refy)
        let randomY2 = random(-1*refy, refy)



        push();
        translate(windowWidth/2,windowHeight/2)
        rotate(radians(4*(i+1)));
        shearX(radians(random(70,80)))
        image(img_y, 0,0, random((windowWidth/ref_cut)*0.1,(windowWidth/ref_cut)*0.5), random(windowHeight/9,windowHeight/2), (img_y.width/ref_cut)*i, 0, img_y.width/ref_cut, img_y.height-refy); 
        pop();
        
        // pop()
        // image(img_y, (windowWidth/ref_cut)*i, randomY, windowWidth/ref_cut, windowHeight-refy, random(0,img_y.width), 0, img_y.width/ref_cut, img_y.height-refy); 
        // blend(img_y, windowWidth/56*i, randomY2, windowWidth/56, windowHeight-refy, random(0,img_p.width), 0, img_p.width/56, windowHeight-refy,MULTIPLY);
    }


}