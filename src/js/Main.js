
let loginScreen;
let homeScreen;
let goHome;
let goS
//let searchScreen
let goR;
let registerScreen;

function setup(){
    createCanvas (375,812);
    loginScreen = new Login();
    homeScreen = new Home();
    //searchScreen= new Search();
    registerScreen= new SingUp();
}

function draw(){
    background(255);
    loginScreen.drawLoginScreen();

    if(goR==true){

        registerScreen.drawRegisterScreen();
     }
   
   
    if(goHome==true){

       homeScreen.drawHomeScreen();
    }
    
    


    text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY )
    
    
}

 function mouseClicked(){
    if(mouseX>100&mouseX<250&mouseY>500&mouseY<540){
        console.log("holas")
        goHome=true;
    }

    if(mouseX>138&mouseX<235&mouseY>670&mouseY<680){
        console.log("register")
        goR=true;
    }
}

