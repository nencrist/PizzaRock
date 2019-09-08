class Favorites{

    constructor(){

        this.favoritesScreen= loadImage("./src/images/favoritesScreen.png");

    }

    drawFavoritesScreen(){
        image(this.favoritesScreen,0,0,375,812);

    }
}