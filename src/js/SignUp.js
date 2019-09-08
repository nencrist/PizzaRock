class SingUp{

    constructor(){

        this.registerScreen = loadImage("./src/images/register.png");

    }

    drawRegisterScreen(){
        image(this.registerScreen,0,0,375,812);

    }
}