class Login {
    
    constructor (){
        this. loginScreen=loadImage("./src/images/login.png");
      
        
    }

    drawLoginScreen(){
      
        image(this.loginScreen,0,0,375,812);
        rect(100,500,150,40);
    
    }
   

   // login(user, password){
     //   if(user.includes(getUserName()) && password.includes(getPassword())){
       //     return true;
        //}
        //home.paint();
  //  }

}


