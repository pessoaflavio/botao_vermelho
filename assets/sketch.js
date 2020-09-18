console.log('hi')

let img;

function preload() {
//   img = loadImage('assets/window.jpeg');
  img_p = loadImage('assets/stars.jpg');
//   img_r = loadImage('assets/r.jpeg');
  img_y = loadImage('assets/y.jpeg');
//   img_t = loadImage('assets/t.jpeg');
}

function setup(){
    let sketch_canvas = createCanvas(windowWidth, windowHeight);
    sketch_canvas.parent('#canvasPlace');

    let txt;

    // fetch('assets/test.txt')
    // .then(response => response.text())
    // .then((data) => {
    //     console.log(data)
    //     txt = data;
    //     let color;
    //     let div = createDiv(`<div><p id='poetry'>${txt}</p></div>`);
    //     div.class('main_article');
    //     div.mouseWheel(messTextUp);
    //     return div;
    // })
    
}

function messTextUp(event){

    let el = document.getElementById('poetry');
    console.log(event.deltaY)
    if (event.deltaY > 0){
        return el.setAttribute('class', 'red');
    } else {
        return el.setAttribute('class', 'blue');
    }
}


// image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])


function draw(){
    noLoop();
    // background(200,100,80);
    // image(img, 0, 0);
    // image(img, 0, 200, 400, 600, 50, 50, 50, 50);
    splitImg();
    
    // saveFrames('panama', 'png', 60, 30)


}

function splitImg(){

    // loop over a defined lenght? and... maybe start adding images
    // we need to randomize posy, and also where we extract the image from the original
    let refy = 200;
    let ref_cut = 200;

    for (i=0;i<ref_cut;i++){
        let randomY = random(-1*refy, refy)
        let randomY2 = random(-1*refy, refy)
        image(img_p, (windowWidth/ref_cut)*i, randomY, windowWidth/ref_cut, windowHeight-refy, random(0,img_p.width), 0, img_p.width/ref_cut, img_p.height-refy); 
        // blend(img_y, windowWidth/56*i, randomY2, windowWidth/56, windowHeight-refy, random(0,img_p.width), 0, img_p.width/56, windowHeight-refy,MULTIPLY);
    }


}