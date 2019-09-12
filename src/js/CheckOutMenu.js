class CheckOutMenu{

    constructor(){

        this.checkOutMenuScreen = loadImage("./src/images/checkOutMenuScreen.png");

    }

    drawCheckOutMenuScreen(){
        image(this.checkOutMenuScreen,0,0,375,812);

    }
}