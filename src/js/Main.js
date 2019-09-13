//screen variables
let screen, loginScreen, homeScreen, searchScreen1, registerScreen, favoritesScreen, recentsScreen, tuCarritoScreen, haPizzaScreen, chiPizzaScreen, vegePizzaScreen, euPizzaScreen, checkOutScreen1, checkOutScreen2, adressScreen, addAdressScreen, cancelOrderScreen, cardScreen;
let homeMenuScreen, searchMenuScreen, favoritesMenuScreen, recentsMenuScreen, tuCarritoMenuScreen, pizzaMenuScreen, checkOutMenuScreen;
//other variables
let drawSignUpLine, drawForgotMyPassWordLine, drawChiAddEllipse, drawCheAddEllipse, drawBaAddEllipse, drawCoAddEllipse, drawBoAddEllipse, drawCocaAddEllipse, drawTeLemonAddEllipse, drawTePeaAddEllipse;
//on off variables
let actChiPizzaMenu, actEuPizzaMenu, actHaPizzaMenu, actVegePizzaMenu;

function setup(){
    createCanvas (375,812);
    screen = "home";
    loginScreen = new Login();
    homeScreen = new Home();
    searchScreen1 = new Search();
    registerScreen = new SingUp();
    homeMenuScreen = new HomeMenu();
    recentsMenuScreen = new RecentsMenu();
    favoritesMenuScreen = new FavoritesMenu();
    searchMenuScreen = new SearchMenu();
    pizzaMenuScreen = new PizzaMenu();
    checkOutScreen1 = new CheckOut1();
    checkOutScreen2 = new CheckOut2();
    checkOutMenuScreen = new CheckOutMenu();
    tuCarritoMenuScreen = new TuCarritoMenu();
    favoritesScreen = new Favorites();
    recentsScreen = new Recents();
    tuCarritoScreen = new TuCarrito();
    haPizzaScreen = new HaPizza();
    chiPizzaScreen = new ChiPizza();
    vegePizzaScreen = new VegePizza();
    euPizzaScreen = new EuPizza();
    adressScreen = new AdressScreen();
    addAdressScreen = new AddAdress();
    cancelOrderScreen = new CancelOrder();
    cardScreen = new CardScreen();

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
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );

        break;
        case "searchMenu":
            searchMenuScreen.drawSearchMenuScreen();
        break;
        case "home":
            homeScreen.drawHomeScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
        break;
        case "homeMenu":
            homeMenuScreen.drawHomeMenuScreen();
            textSize(10);
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );

        break;
        case "favorites":
            favoritesScreen.drawFavoritesScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );

        break;
        case "favoritesMenu":
            favoritesMenuScreen.drawFavoritesMenuScreen();
        break;
        case "recents":
            recentsScreen.drawRecentsScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );

        break;
        case "recentsMenu":
            recentsMenuScreen.drawRecentsMenuScreen();
        break;
        case "tuCarrito":
            tuCarritoScreen.drawTuCarritoScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );

        break;
        case "tuCarritoMenu":
            tuCarritoMenuScreen.drawTuCarritoMenuScreen();
        break;
        case "checkOut1":
            checkOutScreen1.drawCheckOutScreen1();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
        break;
        case "checkOut2":
            checkOutScreen2.drawCheckOutScreen2();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
        break;
        case "checkOutMenu":
            checkOutMenuScreen.drawCheckOutMenuScreen();
        break;
        case "adressScreen":
            adressScreen.drawAdressScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
        break;
        case "addAdress":
            addAdressScreen.drawAddAdressScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
        break;
        case "cancelOrder":
            cancelOrderScreen.drawCancelOrderScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
        break;
        case "cardScreen":
            cardScreen.drawCardScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
        break;
        case "haPizza":
            haPizzaScreen.drawHaPizzaScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
            if(drawChiAddEllipse){
                fill(1,198,85);
                noStroke ();
                ellipse (268,361,8,8);
            }
            if(drawCheAddEllipse){
                fill(1,198,85);
                noStroke ();
                ellipse (268,379,8,8);
            }
            if(drawBaAddEllipse){
                fill(1,198,85);
                noStroke ();
                ellipse (268,399,8,8);
            }
            if(drawCoAddEllipse){
                fill(1,198,85);
                noStroke ();
                ellipse (268,418,8,8);
            }
            if( drawBoAddEllipse){
                fill(1,198,85);
                noStroke ();
                ellipse (268,466,8,8);
            }
            if( drawCocaAddEllipse){
                fill(1,198,85);
                noStroke ();
                ellipse (268,485,8,8);
            }
            if( drawTeLemonAddEllipse){
                fill(1,198,85);
                noStroke ();
                ellipse (268,505,8,8);
            }
            if( drawTePeaAddEllipse){
                fill(1,198,85);
                noStroke ();
                ellipse (268,525,8,8);
            }

            if(actHaPizzaMenu){
                pizzaMenuScreen.drawPizzaMenuScreen();
            }
        break;
        case "chiPizza":
            chiPizzaScreen.drawChiPizzaScreen();
            if(actChiPizzaMenu){
                pizzaMenuScreen.drawPizzaMenuScreen();
            }
        break;
        case "vegePizza":
            vegePizzaScreen.drawVegePizzaScreen();
            if(actVegePizzaMenu){
                pizzaMenuScreen.drawPizzaMenuScreen();
            }
        break;
        case "euPizza":
            euPizzaScreen.drawEuPizzaScreen();
            if(actEuPizzaMenu){
                pizzaMenuScreen.drawPizzaMenuScreen();
            }
        break;

    }

  
    
}

 function mouseClicked(){
    // mouseClicked interactions on login screen 
    if(screen==="login"&&mouseX>128&&mouseX<245&&mouseY>671&&mouseY<700){
        screen = "home";
    }

    if(screen==="login"&mouseX>152&&mouseX<222&&mouseY>707&&mouseY<716){
        screen = "signUp";
    }
    //mouseClicked interactions on signUp screen
    if(screen==="signUp"&mouseX>125&mouseX<250&mouseY>680&mouseY<705){
        screen = "home";
    }
    // mouseClicked interactions on home screen
    if(screen === "home" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        screen = "homeMenu";
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
    //mouseClicked interactions on home menu screen
    if(screen === "homeMenu" && mouseX > 344 && mouseX < 356 && mouseY > 278 && mouseY < 298){
        screen = "home";
    }
    
    // mouseClicked interactions on favorites screen
    if(screen === "favorites" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        screen = "favoritesMenu";
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
    // mouseClicked interactions on favorites menu Screen
    if(screen === "favoritesMenu" && mouseX > 344 && mouseX < 356 && mouseY > 278 && mouseY < 298){
        screen = "favorites";
    }
    // mouseClicked interactions on recents screen
    if(screen === "recents" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        screen = "recentsMenu";
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
    //mouseClicked interactions on recents menu screen
    if(screen === "recentsMenu" && mouseX > 344 && mouseX < 356 && mouseY > 278 && mouseY < 298){
        screen = "recents";
    }
    //mouseClicked interactions on search screen
    if(screen === "search" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        screen = "searchMenu";
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
    //mouseClicked interactions on search menu screen
    if(screen === "searchMenu" && mouseX > 344 && mouseX < 356 && mouseY > 278 && mouseY < 298){
        screen = "search";
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
    if(screen === "haPizza" && mouseX > 261 && mouseX < 273 && mouseY > 355 && mouseY < 367){
        drawChiAddEllipse = true;
        haPizzaScreen.total+=3500;
        
    }
    if(screen === "haPizza" && mouseX > 261 && mouseX < 273 && mouseY > 374 && mouseY < 386){
        drawCheAddEllipse = true;
        haPizzaScreen.total+=4200;
    }
    if(screen === "haPizza" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        actHaPizzaMenu = true;
        
    }
    if(screen === "haPizza" && mouseX > 261 && mouseX < 273 && mouseY > 392 && mouseY < 406){
        drawBaAddEllipse = true;
        haPizzaScreen.total+=5000;
    }
        if(screen === "haPizza" && mouseX > 261 && mouseX < 273 && mouseY > 415 && mouseY < 423){
            drawCoAddEllipse = true;
            haPizzaScreen.total+=3000;
        }
        if(screen === "haPizza" && mouseX > 261 && mouseX < 273 && mouseY > 461 && mouseY < 471){
            drawBoAddEllipse = true;
            haPizzaScreen.total+=5400;
        }
        if(screen === "haPizza" && mouseX > 261 && mouseX < 273 && mouseY > 477 && mouseY < 489){
            drawCocaAddEllipse = true;
            haPizzaScreen.total+=5400;
        }
        if(screen === "haPizza" && mouseX > 261 && mouseX < 273 && mouseY > 498 && mouseY < 509){
            drawTeLemonAddEllipse = true;
            haPizzaScreen.total+=5400;
        }
        if(screen === "haPizza" && mouseX > 261 && mouseX < 273 && mouseY > 520 && mouseY < 530){
            drawTePeaAddEllipse = true;
            haPizzaScreen.total+=5400;
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
    //login
    if (key != "Backspace") {
       loginScreen.writeTextInput(key)
        
    } else {
        loginScreen.eraseTextInput();
    }

    //register
    if (key != "Backspace") {
        registerScreen.writeTextInput(key)
         
     } else {
         registerScreen.eraseTextInput();
     }

     //search
     if (key != "Backspace") {
        searchScreen1.writeTextInput(key)
         
     } else {
         searchScreen1.eraseTextInput();
     }




}
function mousePressed() {

    //login
  if(screen==="login"){ 
      loginScreen.focusInputs(mouseX,mouseY);
}
//register
if(screen==="signUp"){ 
    registerScreen.focusInputs(mouseX,mouseY);
}

//search
if(screen==="search"){ 
    searchScreen1.focusInputs(mouseX,mouseY);
}


}
function mouseReleased(){

    //mouseClicked interccion on homeScreen 
      if(screen === "home" && mouseX > 10 && mouseX < 345 && mouseY > 430 && mouseY < 586){
        screen = "vegePizza";
    }
    if(screen === "home" && mouseX > 10 && mouseX < 345 && mouseY > 597 && mouseY < 740){
        screen = "euPizza";
    }
    //mouseClicked interactions on tuCarritoScreen
    if(screen === "tuCarrito" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        screen = "favorites";
    }
    if(screen === "tuCarrito" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        screen = "search";
    }
    if(screen === "tuCarrito" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        screen = "recents";
    }
    if(screen === "tuCarrito" && mouseX > 34 && mouseX < 68 && mouseY > 761 && mouseY < 790){
        screen = "home";
    }
    if(screen === "tuCarrito" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        screen = "tuCarritoMenu";
    }
    //checkout buttom (tuCarrito)
    if(screen === "tuCarrito" && mouseX > 43 && mouseX < 327 && mouseY > 704 && mouseY < 734){
        screen = "checkOut1";
    }
    //mouseClicked interactions on tuCarrito menu screen
    if(screen === "tuCarritoMenu" && mouseX > 344 && mouseX < 356 && mouseY > 278 && mouseY < 298){
        screen = "tuCarrito";
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
    if(screen === "chiPizza" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        actChiPizzaMenu = true;
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
    if(screen === "vegePizza" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        actVegePizzaMenu = true;
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
    if(screen === "euPizza" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        actEuPizzaMenu = true;
    }
        //mouseClicked interactions on PizzaMenu screens
        if(screen === "haPizza" && mouseX > 344 && mouseX < 356 && mouseY > 278 && mouseY < 298){
            actHaPizzaMenu = false;
        }
        if(screen === "chiPizza" && mouseX > 344 && mouseX < 356 && mouseY > 278 && mouseY < 298){
            actChiPizzaMenu = false;
        }
        if(screen === "vegePizza" && mouseX > 344 && mouseX < 356 && mouseY > 278 && mouseY < 298){
            actVegePizzaMenu = false;
        }
        if(screen === "euPizza" && mouseX > 344 && mouseX < 356 && mouseY > 278 && mouseY < 298){
            actEuPizzaMenu = false;
        }
    //add to car buttom
    if(screen === "haPizza" && mouseX > 106 && mouseX < 267 && mouseY > 570 && mouseY < 596){
    console.log("agrego hawaina");
    }
    if(screen === "chiPizza" && mouseX > 106 && mouseX < 267 && mouseY > 570 && mouseY < 596){
    console.log("agrego chicken");
    }
    if(screen === "vegePizza" && mouseX > 106 && mouseX < 267 && mouseY > 570 && mouseY < 596){
    console.log("agrego vegetariana");
    }
    if(screen === "euPizza" && mouseX > 106 && mouseX < 267 && mouseY > 570 && mouseY < 596){
    console.log("agrego europea");
    }
    //clean buttom
    if(screen === "recents" && mouseX > 43 && mouseX < 327 && mouseY > 704 && mouseY < 734){
        console.log("se vacio el historial");
    }
    //mouseClicked interactions Checkout Screen
    if(screen === "checkOut1" && mouseX > 131 && mouseX < 164 && mouseY > 763 && mouseY < 790){
        screen = "favorites";
    }
    if(screen === "checkOut1" && mouseX > 306 && mouseX < 335 && mouseY > 762 && mouseY < 790){
        screen = "search";
    }
    if(screen === "checkOut1" && mouseX > 220 && mouseX < 250 && mouseY > 760 && mouseY < 790){
        screen = "recents";
    }
    if(screen === "checkOut1" && mouseX > 37 && mouseX < 62 && mouseY > 760 && mouseY < 787){
        screen = "home";
    }
    if(screen === "checkOut1" && mouseX > 42 && mouseX < 75 && mouseY > 30 && mouseY < 53){
        screen = "checkOutMenu";
    }
    if(screen === "checkOut1" && mouseX > 40 && mouseX < 58 && mouseY > 692 && mouseY < 710){
        screen = "tuCarrito";
    }
    if(screen === "checkOut1" && mouseX > 177 && mouseX < 329 && mouseY > 686 && mouseY < 716){
        screen = "checkOut2";
    }
    if(screen === "checkOut1" && mouseX > 115 && mouseX < 258 && mouseY > 606 && mouseY < 627){
    
    }
    //mouseclicked interactions on checkout menu Screen
    if(screen === "checkOutMenu" && mouseX > 344 && mouseX < 356 && mouseY > 278 && mouseY < 298){
        screen = "checkOut1";
    }
    //mouseClicked interactions on checkout screen 2
    if(screen === "checkOut2" && mouseX > 25 && mouseX < 52 && mouseY > 27 && mouseY < 57){
        screen = "checkOut1";
    }
    if(screen === "checkOut2" && mouseX > 38 && mouseX < 160 && mouseY > 756 && mouseY < 789){
        screen = "cancelOrder";
    }
    if(screen === "checkOut2" && mouseX > 230 && mouseX < 340 && mouseY > 756 && mouseY < 789){
        screen = "onWay";
    }
    //mouseClicked interactions on cancel order screen
    if(screen === "cancelOrder" && mouseX > 67 && mouseX < 153 && mouseY > 343 && mouseY < 371){
        screen = "home";
    }
    if(screen === "cancelOrder" && mouseX > 208 && mouseX < 294 && mouseY > 343 && mouseY < 371){
        screen = "checkOut2";
    }

    
}

