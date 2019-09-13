class VegePizza{

    constructor(){
        
        this.vegePizzaScreen = loadImage("./src/images/vegePizzaScreen.png");
        this.total=15200;

    }

    drawVegePizzaScreen(){
        image(this.vegePizzaScreen,0,0,375,812);
        text(this.total,250,655);
        
     
    }
    
}