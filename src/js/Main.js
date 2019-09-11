//screen variables
let screen, loginScreen, homeScreen, searchScreen1, registerScreen, menuScreen, favoritesScreen, recentsScreen, tuCarritoScreen, haPizzaScreen, chiPizzaScreen, vegePizzaScreen, euPizzaScreen;
//other variables
let drawSignUpLine, drawForgotMyPassWordLine;

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
    tuCarritoScreen = new TuCarrito();
    haPizzaScreen = new HaPizza();
    chiPizzaScreen = new ChiPizza();
    vegePizzaScreen = new VegePizza();
    euPizzaScreen = new EuPizza();


    

}

function draw(){
    background(255);
    
    switch(screen){
        case "login": 
            loginScreen.drawLoginScreen();
            if(drawSignUpLine){
                fill (0);
                line (150,718,222,718);
            }
            if(drawForgotMyPassWordLine){
                fill(0);
                line (124,800,247,800);
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
        case "tuCarrito":
            tuCarritoScreen.drawTuCarritoScreen();
        break;
        case "haPizza":
            haPizzaScreen.drawHaPizzaScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
        break;
        case "chiPizza":
            chiPizzaScreen.drawChiPizzaScreen();
        break;
        case "vegePizza":
            vegePizzaScreen.drawVegePizzaScreen();
        break;
        case "euPizza":
            euPizzaScreen.drawEuPizzaScreen();
        break;

    }

  
    
}

 function mouseClicked(){
    // mouseClicked interactions on login screen 
    if(screen==="login"&&mouseX>100&&mouseX<250&&mouseY>500&&mouseY<540){
        screen = "home";
    }

    if(screen==="login"&mouseX>138&&mouseX<235&&mouseY>670&&mouseY<680){
        screen = "signUp";
    }
    //mouseClicked interactions on signUp screen
    if(screen==="signUp"&mouseX>125&mouseX<250&mouseY>680&mouseY<705){
        screen = "home";
    }
    // mouseClicked interactions on home screen
    if(screen === "home" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        screen = "menu";
    }
    if(screen === "home" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        screen = "favorites";
    }
    if(screen === "home" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        screen = "search";
    }
    if(screen === "home" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        screen = "recents";
    }
    if(screen === "home" && mouseX > 304 && mouseX < 335 && mouseY > 28 && mouseY < 60){
        screen = "tuCarrito";
    }
    if(screen === "home" && mouseX > 10 && mouseX < 345 && mouseY > 97 && mouseY < 254){
        screen = "haPizza";
    }
    if(screen === "home" && mouseX > 10 && mouseX < 345 && mouseY > 261 && mouseY < 418){
        screen = "chiPizza";
    }
    /*if(screen === "home" && mouseX > 10 && mouseX < 345 && mouseY > 430 && mouseY < 586){
        console.log("register")
        screen = "vegePizza";
    }*/
    if(screen === "home" && mouseX > 10 && mouseX < 345 && mouseY > 597 && mouseY < 740){
        screen = "euPizza";
    }
    // mouseClicked interactions on favorites screen
    if(screen === "favorites" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        screen = "menu";
    }
    if(screen === "favorites" && mouseX > 304 && mouseX < 335 && mouseY > 28 && mouseY < 60){
        screen = "tuCarrito";
    }
    if(screen === "favorites" && mouseX > 34 && mouseX < 68 && mouseY > 761 && mouseY < 790){
        screen = "home";
    }
    if(screen === "favorites" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        screen = "search";
    }
    if(screen === "favorites" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        screen = "recents";
    }
    // mouseClicked interactions on recents screen
    if(screen === "recents" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        screen = "menu";
    }
    if(screen === "recents" && mouseX > 304 && mouseX < 335 && mouseY > 28 && mouseY < 60){
        screen = "tuCarrito";
    }
    if(screen === "recents" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        screen = "favorites";
    }
    if(screen === "recents" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        screen = "search";
    }
    if(screen === "recents" && mouseX > 34 && mouseX < 68 && mouseY > 761 && mouseY < 790){
        screen = "home";
    }
    //mouseClicked interactions on search screen
    if(screen === "search" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        screen = "menu";
    }
    if(screen === "search" && mouseX > 304 && mouseX < 335 && mouseY > 28 && mouseY < 60){
        screen = "tuCarrito";
    }
    if(screen === "search" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        screen = "favorites";
    }
    if(screen === "search" && mouseX > 34 && mouseX < 68 && mouseY > 761 && mouseY < 790){
        screen = "home";
    }
    if(screen === "search" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        screen = "recents";
    }
    //mouseClicked interaction on haPizza screen
    if(screen === "haPizza" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        screen = "favorites";
    }
    if(screen === "haPizza" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        screen = "search";
    }
    if(screen === "haPizza" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        screen = "recents";
    }
    if(screen === "haPizza" && mouseX > 304 && mouseX < 335 && mouseY > 28 && mouseY < 60){
        screen = "tuCarrito";
    }
    if(screen === "haPizza" && mouseX > 22 && mouseX < 39 && mouseY > 715 && mouseY < 731){
        screen = "home";
    }
    //mouseClicked interactions on chiPizzaScreen
    if(screen === "chiPizza" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        screen = "favorites";
    }
    if(screen === "chiPizza" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        screen = "search";
    }
    if(screen === "chiPizza" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        screen = "recents";
    }
    if(screen === "chiPizza" && mouseX > 304 && mouseX < 335 && mouseY > 28 && mouseY < 60){
        screen = "tuCarrito";
    }
    if(screen === "chiPizza" && mouseX > 22 && mouseX < 39 && mouseY > 715 && mouseY < 731){
        screen = "home";
    }
    //mouseClicked interactions on vegePizzaScreen
    if(screen === "vegePizza" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        screen = "favorites";
    }
    if(screen === "vegePizza" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        screen = "search";
    }
    if(screen === "vegePizza" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        screen = "recents";
    }
    if(screen === "vegePizza" && mouseX > 304 && mouseX < 335 && mouseY > 28 && mouseY < 60){
        screen = "tuCarrito";
    }
    if(screen === "vegePizza" && mouseX > 22 && mouseX < 39 && mouseY > 715 && mouseY < 731){
        screen = "home";
    }
    //mouseClicked interactions on euPizzaScreen
    if(screen === "euPizza" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        screen = "favorites";
    }
    if(screen === "euPizza" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        screen = "search";
    }
    if(screen === "euPizza" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        screen = "recents";
    }
    if(screen === "euPizza" && mouseX > 304 && mouseX < 335 && mouseY > 28 && mouseY < 60){
        screen = "tuCarrito";
    }
    if(screen === "euPizza" && mouseX > 22 && mouseX < 39 && mouseY > 715 && mouseY < 731){
        screen = "home";
    }
    
}

function mouseMoved(){
    if(screen === "login" && mouseX > 150 && mouseX < 222 && mouseY > 705 && mouseY < 715){
        drawSignUpLine = true;
    
    }else{
        drawSignUpLine = false;
    }

    if(screen === "login" && mouseX > 124 && mouseX < 247 && mouseY > 790 && mouseY < 796){
        drawForgotMyPassWordLine = true;
    
    }else{
        drawForgotMyPassWordLine = false;
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
function mouseReleased(){
      if(screen === "home" && mouseX > 10 && mouseX < 345 && mouseY > 430 && mouseY < 586){
        screen = "vegePizza";
    }
}

