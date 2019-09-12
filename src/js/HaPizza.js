
class HaPizza{

    constructor(){
        
        this.haPizzaScreen = loadImage("./src/images/haPizzaScreen.png");
        this.total=11500;

    }

    drawHaPizzaScreen(){
        image(this.haPizzaScreen,0,0,375,812);
        text(this.total,250,655);
        
        
     
    }
    
}