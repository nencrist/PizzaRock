class CardScreen{

    constructor(){
        
        this.cardScreen = loadImage("./src/images/cardScreen.png");

    }

    drawCardScreen(){
        image(this.cardScreen,0,0,375,812);
        
     
    }
    
}