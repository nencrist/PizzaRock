var arrayInputs=[];
var sizeArray;
let incrementPosY = 0;

class Login {
    
    constructor (){
        this. loginScreen=loadImage("./src/images/login.png");
        //inputs
        arrayInputs = [2];
       sizeArray = 2;
        
        for (let i = 0; i < 2; i++) {
            arrayInputs[i] = new Input(90, 550+incrementPosY);
            incrementPosY += 50;
        }
      
        
    }

    drawLoginScreen(){
      
        image(this.loginScreen,0,0,375,812);
        rect(100,500,150,40);
        //inputs
        for (let i = 0; i < arrayInputs.length; i++) {
          arrayInputs[i].paint();
      }
    
    }
   

   // login(user, password){
     //   if(user.includes(getUserName()) && password.includes(getPassword())){
       //     return true;
        //}
        //home.paint();
  //  }

  focusInputs(mouseX,mouseY) {
    for (let i = 0; i < arrayInputs.length; i++) {

        //console.log("1",mouseX >= arrayInputs[i].getPosX() && mouseX <= arrayInputs[i].getPosX() + 200);
       // console.log("2",mouseY >= arrayInputs[i].getPosY() && mouseY <= arrayInputs[i].getPosY() + 30);

        //console.log(mouseY);
        if (mouseX >= arrayInputs[i].getPosX() && mouseX <= arrayInputs[i].getPosX() + 200
            && mouseY >= arrayInputs[i].getPosY() && mouseY <= arrayInputs[i].getPosY() + 30) {
            arrayInputs[i].setFocus(true);
            console.log(arrayInputs[i]);

        } else {
            arrayInputs[i].setFocus(false);
            console.log(arrayInputs[i]);
        }
    }
}

writeTextInput(key) {
  for (let i = 0; i < arrayInputs.length; i++) {
      if (arrayInputs[i].getFocus() && arrayInputs[i].getText().length < 15) {
          arrayInputs[i].setText(arrayInputs[i].getText() + key);
      }
  }
}

eraseTextInput() {

  for (let i = 0; i < arrayInputs.length; i++) {
      if (arrayInputs[i].getFocus() && arrayInputs[i].getText().length - 1 >= 0) {
          let indice = arrayInputs[i].getText().length - 1;
          arrayInputs[i].setText(arrayInputs[i].getText().substring(0, indice));
      }
  }

}

}


