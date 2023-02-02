'use strict'

const userform = new UserForm();

userform.loginFormCallback = data => {
    ApiConnector.login(data, response => {
        const success;
        if (success === false) {
            return;
        } else {
            location.reload();
        };
    });
};





/*userform.registerFormCallback = data => console.log(data);

location.reload();*/


