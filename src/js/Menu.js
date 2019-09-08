class Menu{

    constructor(){

        this.menuScreen = loadImage("./src/images/menuScreen.png");

    }

    drawMenuScreen(){
        image(this.menuScreen,0,0,375,812);

    }
}