'use strict'

const userform = new UserForm();

userform.loginFormCallback = data => {
    ApiConnector.login(data, response => {
        if (success === false) {
            return error;
        } else {
            location.reload();
        };
    });
};





/*userform.registerFormCallback = data => console.log(data);

location.reload();*/


