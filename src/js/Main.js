 //screen variables
let screen, loginScreen, homeScreen, searchScreen1, registerScreen, favoritesScreen, recentsScreen, tuCarritoScreen, haPizzaScreen, chiPizzaScreen, vegePizzaScreen, euPizzaScreen, checkOutScreen1, checkOutScreen2, adressScreen, addAdressScreen, cancelOrderScreen, cardScreen, addCardScreen, onWayScreen;
let homeMenuScreen, searchMenuScreen, favoritesMenuScreen, recentsMenuScreen, tuCarritoMenuScreen, pizzaMenuScreen, checkOutMenuScreen;
//other variables
let drawSignUpLine, drawForgotMyPassWordLine, drawChiAddEllipse, drawCheAddEllipse, drawBaAddEllipse, drawCoAddEllipse, drawBoAddEllipse, drawCocaAddEllipse, drawTeLemonAddEllipse, drawTePeaAddEllipse;
let drawChiAddEllipse1, drawCheAddEllipse1, drawBaAddEllipse1, drawCoAddEllipse1, drawBoAddEllipse1, drawCocaAddEllipse1, drawTeLemonAddEllipse1, drawTePeaAddEllipse1;
let drawChiAddEllipse2, drawCheAddEllipse2, drawBaAddEllipse2, drawCoAddEllipse2, drawBoAddEllipse2, drawCocaAddEllipse2, drawTeLemonAddEllipse2, drawTePeaAddEllipse2;
let drawChiAddEllipse3, drawCheAddEllipse3, drawBaAddEllipse3, drawCoAddEllipse3, drawBoAddEllipse3, drawCocaAddEllipse3, drawTeLemonAddEllipse3, drawTePeaAddEllipse3;
//on off variables
let actChiPizzaMenu, actEuPizzaMenu, actHaPizzaMenu, actVegePizzaMenu, actHaPizzaFa, actHaPizzaFa2, actChiPizzaFa, actChiPizzaFa2, actVegePizzaFa, actVegePizzaFa2, actEuPizzaFa, actEuPizzaFa2;
//user variables
let userArrays = [];
//favorites images variables
let haPizzaFa, chiPizzaFa,vegePizzaFa, euPizzaFa;
//car images variables & activate
let vegCar, chCar, euCar, hawCar;
let actVeg, actCh, actEu, actHaw;
//check images variables
let checkHaw,checkCh, checkEu,checkVeg

function setup(){
    createCanvas (400,812);
    screen = "tuCarrito";
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
    addCardScreen = new AddCardScreen();
    onWayScreen = new OnWay();
    //User Array
    userArrays[0]= new User("nicolas","123");
    haPizzaFa = loadImage("./src/images/haPizzaFa.png");
    chiPizzaFa = loadImage("./src/images/chiPizzaFa.png");
    vegePizzaFa = loadImage("./src/images/vegePizzaFa.png");
    euPizzaFa = loadImage("./src/images/euPizzaFa.png");

    //car images & activation
    vegCar =loadImage("./src/images/VegCar.png");
    chCar=loadImage("./src/images/ChCar.png");
    euCar=loadImage("./src/images/EuCar.png");
    hawCar=loadImage("./src/images/HawCar.png");

    //check images
    checkCh=loadImage("./src/images/checkChi.png")
    checkHaw=loadImage("./src/images/checkHaw.png")
    checkEu=loadImage("./src/images/checkEu.png")
    checkVeg=loadImage("./src/images/checkVeg.png")
    


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
            console.log(userArrays.length)
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
            if(actHaPizzaFa){
            image(haPizzaFa,9,98,356,157);
            }
            if(actChiPizzaFa){
            image(chiPizzaFa,9,262,356,157);
            }
            if(actVegePizzaFa){
            image(vegePizzaFa,9,429,356,157);
            }
            if(actEuPizzaFa){
            image(euPizzaFa,9,598,356,157);
            }
        break;
        case "homeMenu":
            homeMenuScreen.drawHomeMenuScreen();
            textSize(10);
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );

        break;
        case "favorites":
            favoritesScreen.drawFavoritesScreen();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
            if(actHaPizzaFa2){
            image(haPizzaFa,9,98,356,157);
            }
            if(actChiPizzaFa2){
            image(chiPizzaFa,9,262,356,157);
            }
            if(actVegePizzaFa2){
            image(vegePizzaFa,9,429,356,157);
            }
            if(actEuPizzaFa2){
            image(euPizzaFa,9,598,356,157);
            }
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
           if(actCh){ image(chCar,10,120,300,120);
            text(chiPizzaScreen.total,210,160)
           }
            if(actHaw){image(hawCar,10,250,300,120);
            text(haPizzaScreen.total,230,290)
            }
            if(actEu){
            image(euCar,10,380,300,120);
            text(euPizzaScreen.total,230,425)
            }
            if(actVeg){
            image(vegCar,10,510,300,120);
            text(vegePizzaScreen.total,230,555)
            }

        break;
        case "tuCarritoMenu":
            tuCarritoMenuScreen.drawTuCarritoMenuScreen();
        break;
        case "checkOut1":
            checkOutScreen1.drawCheckOutScreen1();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
            if(actCh){ image(checkCh,0,0,400,812);
                text(chiPizzaScreen.total,140,150)
               }
                if(actHaw){image(checkHaw,0,0,400,812);
                text(haPizzaScreen.total,140,150)
                }
                if(actEu){
                image(checkEu,0,0,400,812);
                text(euPizzaScreen.total,140,150)
                }
                if(actVeg){
                image(checkVeg,0,0,400,812);
                text(vegePizzaScreen.total,140,150)
                }

            
        break;
        case "checkOut2":
            checkOutScreen2.drawCheckOutScreen2();
            text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY );
            if(actCh){ 
                text(chiPizzaScreen.total,150,626)
               }
                if(actHaw){
                text(haPizzaScreen.total,150,626)
                }
                if(actEu){
             
                text(euPizzaScreen.total,150,626)
                }
                if(actVeg){
               
                text(vegePizzaScreen.total,150,626)
                }
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
        case "addCardScreen":
            addCardScreen.drawAddCardScreen();
        break;
        case "onWay":
            onWayScreen.drawOnWayScreen();
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
            //aqui
            // addition points of the chicken screen
            if(drawChiAddEllipse1){
                fill(1,198,85);
                noStroke ();
                ellipse (268,378,8,8);
            }
            if(drawCheAddEllipse1){
                fill(1,198,85);
                noStroke ();
                ellipse (268,396,8,8);
            }
            if(drawBaAddEllipse1){
                fill(1,198,85);
                noStroke ();
                ellipse (268,416,8,8);
            }
            if(drawCoAddEllipse1){
                fill(1,198,85);
                noStroke ();
                ellipse (268,435,8,8);
            }
            if( drawBoAddEllipse1){
                fill(1,198,85);
                noStroke ();
                ellipse (268,483,8,8);
            }
            if( drawCocaAddEllipse1){
                fill(1,198,85);
                noStroke ();
                ellipse (268,502,8,8);
            }
            if( drawTeLemonAddEllipse1){
                fill(1,198,85);
                noStroke ();
                ellipse (268,522,8,8);
            }
            if( drawTePeaAddEllipse1){
                fill(1,198,85);
                noStroke ();
                ellipse (268,543,8,8);
            }
        break;
        case "vegePizza":
            vegePizzaScreen.drawVegePizzaScreen();
            if(actVegePizzaMenu){
                pizzaMenuScreen.drawPizzaMenuScreen();
            }

            //aqui
            // addition points of veg pizza
            if(drawChiAddEllipse2){
                fill(1,198,85);
                noStroke ();
                ellipse (268,378,8,8);
            }
            if(drawCheAddEllipse2){
                fill(1,198,85);
                noStroke ();
                ellipse (268,396,8,8);
            }
            if(drawBaAddEllipse2){
                fill(1,198,85);
                noStroke ();
                ellipse (268,416,8,8);
            }
            if(drawCoAddEllipse2){
                fill(1,198,85);
                noStroke ();
                ellipse (268,435,8,8);
            }
            if( drawBoAddEllipse2){
                fill(1,198,85);
                noStroke ();
                ellipse (268,483,8,8);
            }
            if( drawCocaAddEllipse2){
                fill(1,198,85);
                noStroke ();
                ellipse (268,502,8,8);
            }
            if( drawTeLemonAddEllipse2){
                fill(1,198,85);
                noStroke ();
                ellipse (268,522,8,8);
            }
            if( drawTePeaAddEllipse2){
                fill(1,198,85);
                noStroke ();
                ellipse (268,543,8,8);
            }
        break;
        case "euPizza":
            euPizzaScreen.drawEuPizzaScreen();
            if(actEuPizzaMenu){
                pizzaMenuScreen.drawPizzaMenuScreen();
            }
            //aqui
             // addition points of the european pizza
             if(drawChiAddEllipse3){
                fill(1,198,85);
                noStroke ();
                ellipse (268,378,8,8);
            }
            if(drawCheAddEllipse3){
                fill(1,198,85);
                noStroke ();
                ellipse (268,396,8,8);
            }
            if(drawBaAddEllipse3){
                fill(1,198,85);
                noStroke ();
                ellipse (268,416,8,8);
            }
            if(drawCoAddEllipse3){
                fill(1,198,85);
                noStroke ();
                ellipse (268,435,8,8);
            }
            if( drawBoAddEllipse3){
                fill(1,198,85);
                noStroke ();
                ellipse (268,483,8,8);
            }
            if( drawCocaAddEllipse3){
                fill(1,198,85);
                noStroke ();
                ellipse (268,502,8,8);
            }
            if( drawTeLemonAddEllipse3){
                fill(1,198,85);
                noStroke ();
                ellipse (268,522,8,8);
            }
            if( drawTePeaAddEllipse3){
                fill(1,198,85);
                noStroke ();
                ellipse (268,543,8,8);
            }
        break;

    }

  
    
}

 function mouseClicked(){
    // mouseClicked interactions on login screen 
    if(screen==="login"&&mouseX>128&&mouseX<245&&mouseY>671&&mouseY<700){
       
//verification
        for (let i = 0; i < userArrays.length; i++) {

            if(loginScreen.getUserName()===userArrays[i].getUserName()&&loginScreen.getUserPassword()===userArrays[i].getPassword()){
                screen = "home";
            }
        }
        console.log(registerScreen.getUserName())
        console.log(loginScreen.getUserName())
    }

    if(screen==="login"&mouseX>152&&mouseX<222&&mouseY>707&&mouseY<716){
        screen = "signUp";
    }
    //mouseClicked interactions on signUp screen
    if(screen==="signUp"&mouseX>125&mouseX<250&mouseY>680&mouseY<705){

        //console.log(registerScreen.getUserName())
        //console.log(registerScreen.getUserPassword())
       
        //add new user an password from register screen
        userArrays[1]= new User(registerScreen.getUserName(),registerScreen.getUserPassword());
        

       // userArrays.push("hola","123");

        screen = "login";
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
    if(screen === "home" && mouseX > 10 && mouseX < 317 && mouseY > 97 && mouseY < 254){
        screen = "haPizza";
    }
    if(screen === "home" && mouseX > 10 && mouseX < 317 && mouseY > 261 && mouseY < 418){
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
        //aqui
        //mouseClicked interaction on chiPizza screen
        if(screen === "chiPizza" && mouseX > 261 && mouseX < 273 && mouseY > 371 && mouseY < 383){
            drawChiAddEllipse1 = true; 
            chiPizzaScreen.total+=3500;
        }
        if(screen === "chiPizza" && mouseX > 261 && mouseX < 273 && mouseY > 390 && mouseY < 400){
            drawCheAddEllipse1 = true;
            chiPizzaScreen.total+=4200;
        }
        if(screen === "chiPizza" && mouseX > 261 && mouseX < 273 && mouseY > 410 && mouseY < 420){
            drawBaAddEllipse1 = true;
            chiPizzaScreen.total+=5000;
        }
            if(screen === "chiPizza" && mouseX > 261 && mouseX < 273 && mouseY > 430 && mouseY < 440){
                drawCoAddEllipse1 = true;
                chiPizzaScreen.total+=3000;
            }
            if(screen === "chiPizza" && mouseX > 261 && mouseX < 273 && mouseY > 478 && mouseY < 489){
                drawBoAddEllipse1 = true;
                chiPizzaScreen.total+=5400;
            }
            if(screen === "chiPizza" && mouseX > 261 && mouseX < 273 && mouseY > 497 && mouseY < 508){
                drawCocaAddEllipse1 = true;
                chiPizzaScreen.total+=5400;
            }
            if(screen === "chiPizza" && mouseX > 261 && mouseX < 273 && mouseY > 516 && mouseY < 528){
                drawTeLemonAddEllipse1 = true;
                chiPizzaScreen.total+=5400;
            }
            if(screen === "chiPizza" && mouseX > 261 && mouseX < 273 && mouseY > 537 && mouseY < 549){
                drawTePeaAddEllipse1 = true;
                chiPizzaScreen.total+=5400;
            }
            //mouseClicked interaction on vegePizza screen
        if(screen === "vegePizza" && mouseX > 261 && mouseX < 273 && mouseY > 371 && mouseY < 383){
            drawChiAddEllipse2 = true; 
            vegePizzaScreen.total+=3500;
        }
        if(screen === "vegePizza" && mouseX > 261 && mouseX < 273 && mouseY > 390 && mouseY < 400){
            drawCheAddEllipse2 = true;
            vegePizzaScreen.total+=4200;
            
        }
        if(screen === "vegePizza" && mouseX > 261 && mouseX < 273 && mouseY > 410 && mouseY < 420){
            drawBaAddEllipse2 = true;
            vegePizzaScreen.total+=5000;
        }
            if(screen === "vegePizza" && mouseX > 261 && mouseX < 273 && mouseY > 430 && mouseY < 440){
                drawCoAddEllipse2 = true;
                vegePizzaScreen.total+=3000;
            }
            if(screen === "vegePizza" && mouseX > 261 && mouseX < 273 && mouseY > 478 && mouseY < 489){
                drawBoAddEllipse2 = true;
                vegePizzaScreen.total+=5400;
            }
            if(screen === "vegePizza" && mouseX > 261 && mouseX < 273 && mouseY > 497 && mouseY < 508){
                drawCocaAddEllipse2 = true;
                vegePizzaScreen.total+=5400;
            }
            if(screen === "vegePizza" && mouseX > 261 && mouseX < 273 && mouseY > 516 && mouseY < 528){
                drawTeLemonAddEllipse2 = true;
                vegePizzaScreen.total+=5400;
            }
            if(screen === "vegePizza" && mouseX > 261 && mouseX < 273 && mouseY > 537 && mouseY < 549){
                drawTePeaAddEllipse2 = true;
                vegePizzaScreen.total+=5400;
            }
            //mouseClicked interaction on euPizza screen
        if(screen === "euPizza" && mouseX > 261 && mouseX < 273 && mouseY > 371 && mouseY < 383){
            drawChiAddEllipse3 = true; 
            euPizzaScreen.total+=3500;
        }
        if(screen === "euPizza" && mouseX > 261 && mouseX < 273 && mouseY > 390 && mouseY < 400){
            drawCheAddEllipse3 = true;
            euPizzaScreen.total+=4200;
        }
        if(screen === "euPizza" && mouseX > 261 && mouseX < 273 && mouseY > 410 && mouseY < 420){
            drawBaAddEllipse3 = true;
            euPizzaScreen.total+=5000;
        }
            if(screen === "euPizza" && mouseX > 261 && mouseX < 273 && mouseY > 430 && mouseY < 440){
                drawCoAddEllipse3 = true;
                euPizzaScreen.total+=3000;
            }
            if(screen === "euPizza" && mouseX > 261 && mouseX < 273 && mouseY > 478 && mouseY < 489){
                drawBoAddEllipse3 = true;
                euPizzaScreen.total+=5400;
            }
            if(screen === "euPizza" && mouseX > 261 && mouseX < 273 && mouseY > 497 && mouseY < 508){
                drawCocaAddEllipse3 = true;
                euPizzaScreen.total+=5400;
            }
            if(screen === "euPizza" && mouseX > 261 && mouseX < 273 && mouseY > 516 && mouseY < 528){
                drawTeLemonAddEllipse3 = true;
                euPizzaScreen.total+=5400;
            }
            if(screen === "euPizza" && mouseX > 261 && mouseX < 273 && mouseY > 537 && mouseY < 549){
                drawTePeaAddEllipse3 = true;
                euPizzaScreen.total+=5400;
            }
             //checkout buttom (tuCarrito)
    if(screen === "tuCarrito" && mouseX > 43 && mouseX < 327 && mouseY > 704 && mouseY < 734){
        screen = "checkOut1";
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
      if(screen === "home" && mouseX > 10 && mouseX < 317 && mouseY > 430 && mouseY < 586){
        screen = "vegePizza";
    }
    if(screen === "home" && mouseX > 10 && mouseX < 317 && mouseY > 597 && mouseY < 740){
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
    actHaw = true;
    screen="tuCarrito"
    }
    if(screen === "chiPizza" && mouseX > 106 && mouseX < 267 && mouseY > 570 && mouseY < 596){
    console.log("agrego chicken");
    actCh = true;
    screen="tuCarrito"
    }
    if(screen === "vegePizza" && mouseX > 106 && mouseX < 267 && mouseY > 570 && mouseY < 596){
    console.log("agrego vegetariana");
    actVeg = true;
    screen="tuCarrito"
    }
    if(screen === "euPizza" && mouseX > 106 && mouseX < 267 && mouseY > 570 && mouseY < 596){
    console.log("agrego europea");
    actEu = true;
    screen="tuCarrito"
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
        screen = "tuCarrito";
    }
    if(screen === "cancelOrder" && mouseX > 208 && mouseX < 294 && mouseY > 343 && mouseY < 371){
        screen = "checkOut2";
    }
    //all menu card and adress interactions
        //home
    if(screen === "homeMenu" && mouseX > 83 && mouseX < 145 && mouseY > 173 && mouseY < 187){
        screen = "cardScreen";
    }
    if(screen === "cardScreen" && mouseX > 38 && mouseX < 334 && mouseY > 697 && mouseY < 726){
        screen = "addCardScreen";
    }
    if(screen === "homeMenu" && mouseX > 75 && mouseX < 163 && mouseY > 236 && mouseY < 248){
        screen = "adressScreen";
    }
    if(screen === "cardScreen" && mouseX > 26 && mouseX < 48 && mouseY > 96 && mouseY < 119){
        screen = "homeMenu";
    }
    if(screen === "adressScreen" && mouseX > 340 && mouseX < 360 && mouseY > 616 && mouseY < 634){
        screen = "homeMenu";
    }
        //favorites
        if(screen === "favoritesMenu" && mouseX > 83 && mouseX < 145 && mouseY > 173 && mouseY < 187){
            screen = "cardScreen";
        }
        if(screen === "favoritesMenu" && mouseX > 75 && mouseX < 163 && mouseY > 236 && mouseY < 248){
            screen = "adressScreen";
        }
        if(screen === "cardScreen" && mouseX > 26 && mouseX < 48 && mouseY > 96 && mouseY < 119){
            screen = "favoritesMenu";
        }
        //search
        if(screen === "searchMenu" && mouseX > 83 && mouseX < 145 && mouseY > 173 && mouseY < 187){
            screen = "cardScreen";
        }
        if(screen === "searchMenu" && mouseX > 75 && mouseX < 163 && mouseY > 236 && mouseY < 248){
            screen = "adressScreen";
        }
        if(screen === "cardScreen" && mouseX > 26 && mouseX < 48 && mouseY > 96 && mouseY < 119){
            screen = "searchMenu";
        }
        //recents
        if(screen === "recentsMenu" && mouseX > 83 && mouseX < 145 && mouseY > 173 && mouseY < 187){
            screen = "cardScreen";
        }
        if(screen === "recentsMenu" && mouseX > 75 && mouseX < 163 && mouseY > 236 && mouseY < 248){
            screen = "adressScreen";
        }
        if(screen === "cardScreen" && mouseX > 26 && mouseX < 48 && mouseY > 96 && mouseY < 119){
            screen = "recentsMenu";
        }
        //tuCarrito
        if(screen === "tuCarritoMenu" && mouseX > 83 && mouseX < 145 && mouseY > 173 && mouseY < 187){
            screen = "cardScreen";
        }
        if(screen === "tuCarritoMenu" && mouseX > 75 && mouseX < 163 && mouseY > 236 && mouseY < 248){
            screen = "adressScreen";
        }
        if(screen === "cardScreen" && mouseX > 26 && mouseX < 48 && mouseY > 96 && mouseY < 119){
            screen = "tuCarritoMenu";
        }
    //add to favorites interactions
    if(screen === "home" && mouseX > 334 && mouseX < 352 && mouseY > 109 && mouseY < 126){
        actHaPizzaFa = true;
        actHaPizzaFa2 = true;
    }
    if(screen === "home" && mouseX > 334 && mouseX < 352 && mouseY > 274 && mouseY < 292){
        actChiPizzaFa = true;
        actChiPizzaFa2 = true;
    }
    if(screen === "home" && mouseX > 334 && mouseX < 352 && mouseY > 443 && mouseY < 459){
        actVegePizzaFa = true;
        actVegePizzaFa2 = true;
    }
    if(screen === "home" && mouseX > 334 && mouseX < 352 && mouseY > 611 && mouseY < 629){
        actEuPizzaFa = true;
        actEuPizzaFa2 = true;
    }
    
}

