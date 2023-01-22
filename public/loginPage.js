'use strict'
class UserForm {
   constructor () {
     this.userform = new UserForm();
   } 
   loginFormCallback(data) {
       const data = [login, password];
       if (data !== ApiConnector.login) {
           alert ("Неверный логин или пароль.");
       } else {
           alert ("Успешно");
       }
}


}




