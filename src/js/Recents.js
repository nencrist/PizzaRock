class Recents{

    constructor(){

        this.recentsScreen = loadImage("./src/images/recentsScreen.png");

    }

    drawRecentsScreen(){
        image(this.recentsScreen,0,0,375,812);

    }
}