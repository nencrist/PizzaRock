class PizzaMenu{

    constructor(){

        this.pizzaMenuScreen = loadImage("./src/images/pizzaMenuScreen.png");

    }

    drawPizzaMenuScreen(){
        image(this.pizzaMenuScreen,0,0,375,812);

    }
}