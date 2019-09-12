var arrayInputsS=[];
let incrementPosYS = 0;
class Search{

    constructor(){
        
        this.searchScreen1 = loadImage("./src/images/searchScreen1.png");
        arrayInputsR = [1];
       
        
        for (let i = 0; i < 1; i++) {
            arrayInputsS[i] = new Input(90, 100+incrementPosYS);
            incrementPosYS += 50;
        }

    }

    drawSearchScreen1(){
        image(this.searchScreen1,0,0,375,812);


        
        for (let i = 0; i < arrayInputsS.length; i++) {
            arrayInputsS[i].paint();
        }
     
    }

    focusInputs(mouseX,mouseY) {
        // primer input
    if (mouseX >= 90 && mouseX <= 290
        && mouseY <= 130 && mouseY>100) {
        arrayInputsS[0].setFocus(true);
        console.log(arrayInputsR[0]);
      
        }
      else{
        arrayInputsS[0].setFocus(false);
      }
    }


    writeTextInput(key) {
        for (let i = 0; i < arrayInputsS.length; i++) {
            if (arrayInputsS[i].getFocus() && arrayInputsS[i].getText().length < 15) {
                arrayInputsS[i].setText(arrayInputsS[i].getText() + key);
            }
        }
      }
      
      eraseTextInput() {
      
        for (let i = 0; i < arrayInputsS.length; i++) {
            if (arrayInputsS[i].getFocus() && arrayInputsS[i].getText().length - 1 >= 0) {
                let indice = arrayInputsS[i].getText().length - 1;
                arrayInputsS[i].setText(arrayInputsS[i].getText().substring(0, indice));
            }
        }
      
      }
    
}