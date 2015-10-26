var myWinWidth, myWinHeight;

function setup(){
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");

    myWinHeight = 250;
    myWinWidth = 100;

    var colWidth = 160;
    var rowHeight = 290;

    var x = 0;
    var y = 0;

    for(var i=0; i<100; i++){
        drawWindow(x,y);
        x += colWidth;

        if(x > width-myWinWidth){
            x = 0;
            y += rowHeight;
        }
    }
}

function drawWindow(startX, startY){

    fill('purple');

    stroke('silver');


    rect(startX, startY,myWinWidth,myWinHeight);


    var x1,x2,y1,y2;


    x1 = startX+myWinWidth/2;
    y1 = startY;
    x2 = startX+myWinWidth/2;
    y2 = startY + myWinHeight;
    line(x1,y1,x2,y2 );


    x1 = startX;
    y1 = startY+myWinHeight*.333;
    x2 = startX+myWinWidth;
    y2 = y1;
    line(x1,y1,x2,y2 );


    x1 = startX;
    y1 = startY+myWinHeight*.666;
    x2 = startX+myWinWidth;
    y2 = y1;
    line(x1,y1,x2,y2 );


    x1 = startX - 20;
    y1 = startY + myWinHeight;
    rect(x1,y1,myWinWidth+40, 20);





}


