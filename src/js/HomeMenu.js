class HomeMenu{

    constructor(){

        this.homeMenuScreen = loadImage("./src/images/homeMenuScreen.png");

    }

    drawHomeMenuScreen(){
        image(this.homeMenuScreen,0,0,375,812);

    }
}