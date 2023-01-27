'use strict'

const userform = new UserForm();

userform.onclick = () => userform.loginFormCallback ((data) => {

    ApiConnector.login({data}, response => {

        if (response === false) {
            alert ("Ошибка авторизации");
        } else location.reload();
    });
});





userForm.registerFormCallback = data => console.log(data);

location.reload();


