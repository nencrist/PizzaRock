class FavoritesMenu{

    constructor(){

        this.favoritesMenuScreen = loadImage("./src/images/favoritesMenuScreen.png");

    }

    drawFavoritesMenuScreen(){
        image(this.favoritesMenuScreen,0,0,375,812);

    }
}