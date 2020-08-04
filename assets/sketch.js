console.log('hi')

let img;

function preload() {
  img = loadImage('assets/window.jpeg');
}

function setup(){
    let sketch_canvas = createCanvas(windowWidth, windowHeight);
    sketch_canvas.parent('#canvasPlace');

    let txt;

    fetch('assets/test.txt')
    .then(response => response.text())
    .then((data) => {
        console.log(data)
        txt = data;
        let color;
        let div = createDiv(`<div><p id='poetry'>${txt}</p></div>`);
        div.class('main_article');
        div.mouseWheel(messTextUp);
        return div;
    })
    
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


function draw(){
    background(200,100,80);
    // image(img, 0, 0);
    image(img, 50, 200, 400, 600, 50, 50, 50, 50);

}

