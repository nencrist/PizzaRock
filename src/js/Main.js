let screen;
let loginScreen;
let homeScreen;
let goHome;
let goS
//let searchScreen
let goR;
let registerScreen;
let drawSignUpLine;
let searchScreen;


function setup(){
    createCanvas (375,812);
    screen = "login";
    loginScreen = new Login();
    homeScreen = new Home();
    searchScreen= new Search();
    registerScreen= new SingUp();
    

}

function draw(){
    background(255);
    text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
    switch(screen){
        case "login": 
            loginScreen.drawLoginScreen();
            if(drawSignUpLine){
                fill (0);
                line (138,683,235,683);
            }
        break;
        case "signUp":
            registerScreen.drawRegisterScreen();
        break;
        case "search":
               searchScreen.drawSearchScreen();
        break;
        case "home":
            homeScreen.drawHomeScreen();
        break;

    }
    
    
}

 function mouseClicked(){
    if(mouseX>100&mouseX<250&mouseY>500&mouseY<540){
        console.log("holas")
        screen = "home";
    }

    if(mouseX>138&mouseX<235&mouseY>670&mouseY<680){
        console.log("register")
        screen = "signUp";
    }
}

function mouseMoved(){
    if(screen == "login" && mouseX>138&mouseX<235&mouseY>670&mouseY<680){
        drawSignUpLine = true;
    
    }else{
        drawSignUpLine = false;
    }

}
function keyPressed() {
    if (key != "Backspace") {
       loginScreen.writeTextInput(key)
        
    } else {
        loginScreen.eraseTextInput();
    }
}
function mousePressed() {
   loginScreen.focusInputs(mouseX,mouseY);
}

