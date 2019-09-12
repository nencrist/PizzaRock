class SearchMenu{

    constructor(){

        this.searchMenuScreen = loadImage("./src/images/searchMenuScreen.png");

    }

    drawSearchMenuScreen(){
        image(this.searchMenuScreen,0,0,375,812);

    }
}