var arrayInputsR=[];
let incrementPosYR = 0;
class SingUp{

    constructor(){

        this.registerScreen = loadImage("./src/images/register.png");
        //inputs
        arrayInputsR = [5];
       
        
        for (let i = 0; i < 5; i++) {
            arrayInputsR[i] = new Input(90, 400+incrementPosYR);
            incrementPosYR += 50;
        }

    }

    drawRegisterScreen(){
        image(this.registerScreen,0,0,375,812);
        text("Nombre de usuario",100,395);
        text("Contraseña",100,445);
        text("Confirmar contraseña",100,495);
        text("Correo electronico",100,545);
        text("Dirección de entrega",100,595);

//inputs

        for (let i = 0; i < arrayInputsR.length; i++) {
          arrayInputsR[0].paint();
          arrayInputsR[1].muestraContra();
          arrayInputsR[2].muestraContra();
          arrayInputsR[3].paint();
          arrayInputsR[4].paint();


        }

    }

    focusInputs(mouseX,mouseY) {
        // primer input
    if (mouseX >= 90 && mouseX <= 290
        && mouseY <= 430 &&mouseY>400 ) {
        arrayInputsR[0].setFocus(true);
        console.log(arrayInputsR[0]);
      
        }
      else{
        arrayInputsR[0].setFocus(false);
      }

      
      //segundo input
      if (mouseX >= 90 && mouseX <= 290
         && mouseY <= 480 &&mouseY>450 ) {
        arrayInputsR[1].setFocus(true);
        console.log(arrayInputsR[1]);
      
        }
      else{
        arrayInputsR[1].setFocus(false);
      }
      //tercer input
      if (mouseX >= 90 && mouseX <= 290
         && mouseY <= 530 &&mouseY>500 ) {
        arrayInputsR[2].setFocus(true);
        console.log(arrayInputsR[1]);
      
        }
      else{
        arrayInputsR[2].setFocus(false);
      }
      //cuarto input
      if (mouseX >= 90 && mouseX <= 290
        && mouseY <= 580 &&mouseY>550 ) {
        arrayInputsR[3].setFocus(true);
        console.log(arrayInputsR[1]);
      
        }
      else{
        arrayInputsR[3].setFocus(false);
      }
      //quinto input
      if (mouseX >= 90 && mouseX <= 290
        && mouseY <= 630 &&mouseY>600 ) {
        arrayInputsR[4].setFocus(true);
        console.log(arrayInputsR[1]);
      
        }
      else{
        arrayInputsR[4].setFocus(false);
      }


    }

    writeTextInput(key) {
        for (let i = 0; i < arrayInputsR.length; i++) {
            if (arrayInputsR[i].getFocus() && arrayInputsR[i].getText().length < 15) {
                arrayInputsR[i].setText(arrayInputsR[i].getText() + key);
            }
        }
      }
      
      eraseTextInput() {
      
        for (let i = 0; i < arrayInputsR.length; i++) {
            if (arrayInputsR[i].getFocus() && arrayInputsR[i].getText().length - 1 >= 0) {
                let indice = arrayInputsR[i].getText().length - 1;
                arrayInputsR[i].setText(arrayInputsR[i].getText().substring(0, indice));
            }
        }
      
      }


      getUserName(){
        return arrayInputsR[0].getText();
      }
      
      
      getUserPassword(){
        return arrayInputsR[1].getText()
      
      }





}