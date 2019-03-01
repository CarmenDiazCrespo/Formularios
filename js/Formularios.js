"use strict";
function Login(){
    return function(){
        //Sobre escribo el main
        var main = document.getElementById("div-main");
        removeChildren(main);
        //Creo el formulario
        var form = document.createElement("form");
        form.setAttribute("name", "login");
        form.setAttribute("class", "form-horizontal");
        main.appendChild(form);
        //Elementos del formulario de login
        var formGroup1 = document.createElement("div");
        formGroup1.setAttribute("class","form-group");
        main.appendChild(formGroup1);

        var userN = document.createElement("label");
        userN.appendChild(document.createTextNode("UserName"));
        formGroup1.appendChild(userN);

        var input1 = document.createElement("input");
        input1.setAttribute("type", "text");
        input1.setAttribute("class", "form-control");
        input1.setAttribute("name", "userN");
        formGroup1.appendChild(input1);
    }
}
