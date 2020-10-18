console.log('hi')

let img;

function preload() {
//   img = loadImage('assets/window.jpeg');
  img_p = loadImage('assets/amazon3.jpg');
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
    background('#00ff44');
    // background(200,100,80);
    // image(img, 0, 0);
    // image(img, 0, 200, 400, 600, 50, 50, 50, 50);
    for (i=0;i<20;i++){
        splitImg();
    }
    // saveFrames('panama', 'png', 60, 30)


}

function splitImg(){

    // loop over a defined lenght? and... maybe start adding images
    // we need to randomize posy, and also where we extract the image from the original
    for (j=0;j<1;j++){
        let min_width = 10;
        let max_width = 50;
        let stroke = min_width/2;
        let ngen = function (){
            let x = Math.floor(random(min_width,max_width))
            if (x % 2 === 0) {
                return x
            } else {
                return x + 1
            }
        };
        let n_segments = ngen();
        let strip_width = n_segments;
        let imgList = []
        let constSlash = Math.floor(random(1,4))/10;  
    
        for (i=0;i<strip_width;i++) { 
            
            let isVertical = (i + 1) % 2 === 0;
            let isVerticalUpside = (i + 1) % 4 === 0;
            let isHorizontalUpside = i % 4 === 0;
            let prevItem = imgList[i-1];
    
            if (i == 0) {
                let data_repo = new Object;
                data_repo.con;
                data_repo.x = 0; 
                data_repo.y = random(0,windowHeight/2-strip_width);
                data_repo.w = random(strip_width*2,(windowWidth*constSlash)-strip_width)
                data_repo.h = strip_width;
                imgList.push(data_repo);
            } else {
                let data_repo = new Object;
                data_repo.x = prevItem.x + prevItem.w;
    
                if (isVertical) {
                    data_repo.w = strip_width;
    
                    if (isVerticalUpside) {
                            let currentHeight = random(strip_width*2,prevItem.y+strip_width);
                            data_repo.y = prevItem.y-(currentHeight-strip_width);
                            data_repo.h = currentHeight;
                        } else {
                            data_repo.y = prevItem.y;
                            data_repo.h = random(strip_width*2,windowHeight/2-prevItem.y);
                        }
                    imgList.push(data_repo);
    
                } else {
                    data_repo.h = strip_width;
    
                    if (i != strip_width-2) {
                        data_repo.w = random(strip_width*2,((windowWidth-prevItem.x+strip_width)*constSlash)-strip_width)
                        if (isHorizontalUpside) {
                            data_repo.y = prevItem.y;
                        } else {
                            data_repo.y = (prevItem.y + prevItem.h - strip_width);
                        }
                    } else {
                        data_repo.con = windowWidth;
                        data_repo.w = windowWidth - prevItem.x - strip_width;
                        data_repo.y = (prevItem.y + prevItem.h - strip_width);
                    } 
                    imgList.push(data_repo);
    
                }
            }
            // blend(img_p,random(0,img_p.width*0.5),random(0,img_p.height*0.5),imgList[i].w,imgList[i].h,imgList[i].x,imgList[i].y,imgList[i].w,imgList[i].h,OVERLAY);
            fill('#00ff44');
            noStroke();
            if (i%2!=0){
                if (i%4!=0){
                    fill('blue')
                    rect(imgList[i].x, imgList[i].y-stroke, imgList[i].w, stroke)
                    fill('brown')
                    rect(imgList[i].x + imgList[i].w, imgList[i].y - stroke, stroke, imgList[i].h - strip_width)
                    fill('yellow')
                    rect(imgList[i].x, imgList[i].y + imgList[i].h, imgList[i].w, stroke)
                    rect(imgList[i].x - stroke, imgList[i].y + stroke + strip_width, stroke, imgList[i].h - strip_width)
                } else {
                    fill('blue')
                    rect(imgList[i].x, imgList[i].y-stroke, imgList[i].w, stroke)
                    fill('pink')
                    rect(imgList[i].x - stroke, imgList[i].y + stroke + strip_width, stroke, imgList[i].h - strip_width)
                    fill('orange')
                    rect(imgList[i].x, imgList[i].y + imgList[i].h, imgList[i].w, stroke)
                    fill('white')
                    rect(imgList[i].x - stroke, imgList[i].y + stroke + strip_width, stroke, imgList[i].h - strip_width)
                }
                
               
            } else {
                fill('red');
                rect(imgList[i].x,imgList[i].y-stroke,imgList[i].w,stroke)
                rect(imgList[i].x,imgList[i].y+imgList[i].h,imgList[i].w,stroke)
            }
            image(img_p,imgList[i].x,imgList[i].y,imgList[i].w,imgList[i].h,random(0,img_p.width*0.5),random(0,img_p.height*0.5),imgList[i].w,imgList[i].h);
            
        }

    }
    

}