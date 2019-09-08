class Home{

    constructor(){

        this.homeScreen = loadImage("./src/images/home.png");

    }

    drawHomeScreen(){

        image(this.homeScreen,0,0,375,812);

    }
    
}