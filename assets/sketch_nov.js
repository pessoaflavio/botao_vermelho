console.log('hi')

let img;

function preload() {
  img_p = loadImage('assets/amazon2.jpg');
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
    for (j=0;j<20;j++){
        let min_width = 4;
        let max_width = 24;
        let stroke = min_width/2;
        let newArray4 = [];
        for (b=min_width;b<=max_width;b++){
            if (b%4===0){
                newArray4.push(b)
            } else {
                 
            }
        }
        let ngen = function (){
           return newArray4[Math.floor(random(0,newArray4.length-1))] 
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
                data_repo.x = 0; 
                data_repo.y = random(0,windowHeight/1.5-strip_width);
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
                        data_repo.w = windowWidth - prevItem.x - strip_width;
                        if ((i+1)%4===0){
                            data_repo.y = (prevItem.y);
                        } else {
                            data_repo.y = (prevItem.y + prevItem.h - strip_width);
                        }
                        
                    } 
                    imgList.push(data_repo);
    
                }
            }
            // blend(img_p,random(0,img_p.width*0.5),random(0,img_p.height*0.5),imgList[i].w,imgList[i].h,imgList[i].x,imgList[i].y,imgList[i].w,imgList[i].h,OVERLAY);
            fill('#00ff44');
            noStroke();
            if (i%2!=0){
                if ((i+1)%4===0){
                    rect(imgList[i].x, imgList[i].y-stroke, imgList[i].w, stroke)

                    rect(imgList[i].x + imgList[i].w, imgList[i].y + stroke + strip_width, stroke, imgList[i].h - strip_width)

                    rect(imgList[i].x, imgList[i].y + imgList[i].h, imgList[i].w, stroke)

                    rect(imgList[i].x - stroke, imgList[i].y - stroke, stroke, imgList[i].h - strip_width)
                } else {

                    rect(imgList[i].x, imgList[i].y-stroke, imgList[i].w, stroke)

                    rect(imgList[i].x + strip_width, imgList[i].y - stroke, stroke, imgList[i].h - strip_width)

                    rect(imgList[i].x, imgList[i].y + imgList[i].h, imgList[i].w, stroke)

                    rect(imgList[i].x - stroke, imgList[i].y + stroke + strip_width, stroke, imgList[i].h - strip_width)
                }
                
               
            } else {
                
                rect(imgList[i].x,imgList[i].y-stroke,imgList[i].w,stroke)
                rect(imgList[i].x,imgList[i].y+imgList[i].h,imgList[i].w,stroke)
            }
            image(img_p,imgList[i].x,imgList[i].y,imgList[i].w,imgList[i].h,random(0,img_p.width*0.5),random(0,img_p.height*0.5),imgList[i].w,imgList[i].h);
            
        }

    }
    

}