class RecentsMenu{

    constructor(){

        this.recentsMenuScreen = loadImage("./src/images/recentsMenuScreen.png");

    }

    drawRecentsMenuScreen(){
        image(this.recentsMenuScreen,0,0,375,812);

    }
}