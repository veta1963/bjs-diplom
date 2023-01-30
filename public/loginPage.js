'use strict'

const userform = new UserForm();

this.loginFormCallback = data => {

    ApiConnector.login(data, response => {

       console.log(response);
        /* if (response === false) {
            alert ("Ошибка авторизации");
        } if {
            location.reload();
        };*/
    });
};





/*this.registerFormCallback = data => console.log(data);

location.reload();*/


