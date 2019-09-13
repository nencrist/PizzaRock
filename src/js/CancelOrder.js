class CancelOrder{

    constructor(){
        
        this.cancelOrderScreen = loadImage("./src/images/cancelOrderScreen.png");

    }

    drawCancelOrderScreen(){
        image(this.cancelOrderScreen,0,0,375,812);
        
     
    }
    
}