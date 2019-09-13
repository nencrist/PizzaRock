class EuPizza{

    constructor(){
        
        this.euPizzaScreen = loadImage("./src/images/euPizzaScreen.png");
        this.total=29200;

    }

    drawEuPizzaScreen(){
        image(this.euPizzaScreen,0,0,375,812);
        text(this.total,250,655);
        
     
    }
    
}