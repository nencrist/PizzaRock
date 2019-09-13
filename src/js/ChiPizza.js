class ChiPizza{

    constructor(){
        
        this.chiPizzaScreen = loadImage("./src/images/chiPizzaScreen.png");
        this.total=20100;

    }

    drawChiPizzaScreen(){
        image(this.chiPizzaScreen,0,0,375,812);
        text(this.total,250,655);
        
     
    }
    
}