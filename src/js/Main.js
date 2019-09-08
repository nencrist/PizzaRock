//screen variables
let screen, loginScreen, homeScreen, searchScreen1, registerScreen, menuScreen, favoritesScreen, recentsScreen;
//go variables
let goHome, goS, goR
//other variables
let drawSignUpLine;


function setup(){
    createCanvas (375,812);
    screen = "login";
    loginScreen = new Login();
    homeScreen = new Home();
    searchScreen1 = new Search();
    registerScreen = new SingUp();
    menuScreen = new Menu();
    favoritesScreen = new Favorites();
    recentsScreen = new Recents();


    

}

function draw(){
    background(255);
    
    switch(screen){
        case "login": 
            loginScreen.drawLoginScreen();
            if(drawSignUpLine){
                fill (0);
                line (138,683,235,683);
            }
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
        break;
        case "signUp":
            registerScreen.drawRegisterScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
        break;
        case "search":
            searchScreen1.drawSearchScreen1();
        break;
        case "home":
            homeScreen.drawHomeScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
        break;
        case "menu":
            menuScreen.drawMenuScreen();
        break;
        case "favorites":
            favoritesScreen.drawFavoritesScreen();
        break;
        case "recents":
            recentsScreen.drawRecentsScreen();
        break;

    }

  
    
}

 function mouseClicked(){
    // mouseClicked interactions on login screen 
    if(screen==="login"&&mouseX>100&&mouseX<250&&mouseY>500&&mouseY<540){
        console.log("holas")
        screen = "home";
    }

    if(screen==="login"&mouseX>138&&mouseX<235&&mouseY>670&&mouseY<680){
        console.log("register")
        screen = "signUp";
    }
    //mouseClicked interactions on signUp screen
    if(screen==="signUp"&mouseX>125&mouseX<250&mouseY>680&mouseY<705){
        console.log("register")
        screen = "home";
    }
    // mouseClicked interactions on home screen
    if(screen === "home" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        console.log("register")
        screen = "menu";
    }
    if(screen === "home" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        console.log("register")
        screen = "favorites";
    }
    if(screen === "home" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        console.log("register")
        screen = "search";
    }
    if(screen === "home" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        console.log("register")
        screen = "recents";
    }
    // mouseClicked interactions on favorites screen
    if(screen === "favorites" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        console.log("register")
        screen = "menu";
    }
    if(screen === "favorites" && mouseX > 34 && mouseX < 68 && mouseY > 761 && mouseY < 790){
        console.log("register")
        screen = "home";
    }
    if(screen === "favorites" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        console.log("register")
        screen = "search";
    }
    if(screen === "favorites" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        console.log("register")
        screen = "recents";
    }
    // mouseClicked interactions on recents screen
    if(screen === "recents" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        console.log("register")
        screen = "menu";
    }
    if(screen === "recents" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        console.log("register")
        screen = "favorites";
    }
    if(screen === "recents" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        console.log("register")
        screen = "search";
    }
    if(screen === "recents" && mouseX > 34 && mouseX < 68 && mouseY > 761 && mouseY < 790){
        console.log("register")
        screen = "home";
    }
    //mouseClicked interactions on search screen
    if(screen === "search" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        console.log("register")
        screen = "menu";
    }
    if(screen === "search" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        console.log("register")
        screen = "favorites";
    }
    if(screen === "search" && mouseX > 34 && mouseX < 68 && mouseY > 761 && mouseY < 790){
        console.log("register")
        screen = "home";
    }
    if(screen === "search" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        console.log("register")
        screen = "recents";
    }

    
}

function mouseMoved(){
    if(screen === "login" && mouseX>138&mouseX<235&mouseY>670&mouseY<680){
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
  if(screen==="login"){ 
      loginScreen.focusInputs(mouseX,mouseY);
}
}

