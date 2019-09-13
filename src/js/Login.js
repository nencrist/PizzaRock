var arrayInputs=[];
var sizeArray;
let incrementPosY = 0;

class Login {
    
    constructor (){
        this. loginScreen=loadImage("./src/images/loginScreen.png");
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
        
        //inputs
        for (let i = 0; i < arrayInputs.length; i++) {
          arrayInputs[0].paint();
          arrayInputs[1].muestraContra();
      }
    
    }
   

   // login(user, password){
     //   if(user.includes(getUserName()) && password.includes(getPassword())){
       //     return true;
        //}
        //home.paint();
  //  }

  focusInputs(mouseX,mouseY) {
   
   /* for (let i = 0; i < arrayInputs.length; i++) {

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
    }*/
// primer input
    if (mouseX >= 90 && mouseX <= 290
    && mouseY <= 580 &&mouseY>550 ) {
    arrayInputs[0].setFocus(true);
    console.log(arrayInputs[0]);
  
    }
  else{
    arrayInputs[0].setFocus(false);
  }
  //segundo input
  if (mouseX >= 90 && mouseX <= 290
     && mouseY <= 630 &&mouseY>600 ) {
    arrayInputs[1].setFocus(true);
    console.log(arrayInputs[1]);
  
    }
  else{
    arrayInputs[1].setFocus(false);
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

getUserName(){
  return arrayInputs[0].getText();
}


getUserPassword(){
  return arrayInputs[1].getText()

}
}


