class TuCarrito{

    constructor(){
        
        this.tuCarritoScreen = loadImage("./src/images/tuCarritoScreen.png");

    }

    drawTuCarritoScreen(){
        image(this.tuCarritoScreen,0,0,375,812);
        
     
    }
    
}