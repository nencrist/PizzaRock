class Home{

    constructor(){

        this.homeScreen = loadImage("./src/images/search.png");

    }

    drawHomeScreen(){

        image(this.homeScreen,0,0,375,812);

    }
    
}