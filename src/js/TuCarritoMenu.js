class TuCarritoMenu{

    constructor(){

        this.tuCarritoMenuScreen = loadImage("./src/images/tuCarritoMenuScreen.png");

    }

    drawTuCarritoMenuScreen(){
        image(this.tuCarritoMenuScreen,0,0,375,812);

    }
}