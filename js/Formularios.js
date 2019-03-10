"use strict";
function Login(){
    return function(){
        //Sobre escribo el main
        var main = document.getElementById("div-main");
        removeChildren(main);
        //Creo el formulario
        var form = document.createElement("form");
        form.setAttribute("name", "login");
        form.setAttribute("id", "login");
        form.setAttribute("class", "form-horizontal");
        main.appendChild(form);
        //Elementos del formulario de login
        var formGroup1 = document.createElement("div");
        formGroup1.setAttribute("class","form-group group-login");
        form.appendChild(formGroup1);

        var userN = document.createElement("label");
        userN.appendChild(document.createTextNode("UserName:"));
        formGroup1.appendChild(userN);

        var input1 = document.createElement("input");
        input1.setAttribute("type", "text");
        input1.setAttribute("class", "form-control");
        input1.setAttribute("name", "userN");
        input1.setAttribute("id", "userN");
        input1.setAttribute("placeholder", "Enter UserName");
        formGroup1.appendChild(input1);

        var formGroup2 = document.createElement("div");
        formGroup2.setAttribute("class","form-group group-login");
        form.appendChild(formGroup2);

        var pass = document.createElement("label");
        pass.appendChild(document.createTextNode("Password:"));
        formGroup2.appendChild(pass);

        var input2 = document.createElement("input");
        input2.setAttribute("type", "password");
        input2.setAttribute("class", "form-control");
        input2.setAttribute("name", "pass");
        input2.setAttribute("id", "pass");
        input2.setAttribute("placeholder", "Enter Password");
        formGroup2.appendChild(input2);

        var btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("id", "btn-login");
        btn.setAttribute("class", "btn btn-default btnInfo")
        btn.appendChild(document.createTextNode("Submit"));
        btn.addEventListener("click", openSesion())
        form.appendChild(btn);
    }
}
function openSesion() {
    return function () {
        var user = document.forms["login"]["userN"].value;
        var pass = document.forms["login"]["pass"].value;

        var main = document.getElementById("div-main");
        var p = document.createElement("p");
        main.appendChild(p);

        if (user === "admin" && pass === "admin") {
            document.cookie = "username=admin";
            p.setAttribute("style", "color:green");
            p.appendChild(document.createTextNode("Inicio de sesión correcto"));
            window.location.href = 'http://localhost/Formularios-master/VideoStreaming.html';
        } else {
            p.setAttribute("style", "color:red");
            p.appendChild(document.createTextNode("Usuario o contraseña incorrectos."));
        }
    }
}
/*function closeSesion() {
    return function () {
        document.cookie = "username=; max-age=0";

        var main = document.getElementById("div-main");
        var p = document.createElement("p");
        main.appendChild(p);

        p.setAttribute("style", "color:green");
        p.innerHTML = "Cerrado Correctamente";
        window.location.href = 'http://localhost/FORMULARIOS';
    }
}*/
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function menuForm(){
    //Div para poder ir borrando el main pero no el menú
    var main = document.getElementById("nav-forms");
    removeChildren(main);
    var username = getCookie("username");
    //Para que solo pueda meterse el administrador 
    if (username === "admin") {
        var panel = document.createElement("div");
        panel.setAttribute("class", "panel-group");
        main.appendChild(panel);
        //Panel de categorías
        var pa1 = document.createElement("div");
        pa1.setAttribute("class", "panel panel-default");
        panel.appendChild(pa1);

        var paCat = document.createElement("div");
        paCat.setAttribute("class", "panel-heading");
        paCat.appendChild(document.createTextNode("Categorias"));
        pa1.appendChild(paCat);

        var paDeltCat = document.createElement("div");
        paDeltCat.setAttribute("class", "panel-body");
        pa1.appendChild(paDeltCat);

        var p = document.createElement("p");
        paDeltCat.appendChild(p);
        
        var aDeltCat = document.createElement("a");
        aDeltCat.setAttribute("href", "#");
        aDeltCat.appendChild(document.createTextNode("Eliminar Categoría"));
        aDeltCat.addEventListener("click", DeltCat());
        p.appendChild(aDeltCat);

        var paModiCat= document.createElement("div");
        paModiCat.setAttribute("class", "panel-body");
        pa1.appendChild(paModiCat);

        var aModiCat = document.createElement("a");
        aModiCat.appendChild(document.createTextNode("Modificar Categoría"));
        paModiCat.appendChild(aModiCat);
        
        var paCreateCat = document.createElement("div");
        paCreateCat.setAttribute("class", "panel-body");
        pa1.appendChild(paCreateCat);

        var aCreateCat = document.createElement("a");
        aCreateCat.appendChild(document.createTextNode("Crear Categoría"));
        aCreateCat.addEventListener("click", CreateCategory());
        paCreateCat.appendChild(aCreateCat);
        //Panel de Directores
        var pa2 = document.createElement("div");
        pa2.setAttribute("class", "panel panel-default");
        panel.appendChild(pa2);

        var paDir = document.createElement("div");
        paDir.setAttribute("class", "panel-heading");
        paDir.appendChild(document.createTextNode("Directores"));
        pa2.appendChild(paDir);

        var paDeltDir = document.createElement("div");
        paDeltDir.setAttribute("class", "panel-body");
        pa2.appendChild(paDeltDir);

        var p1 = document.createElement("p");
        paDeltDir.appendChild(p1);
        
        var aDeltDir = document.createElement("a");
        aDeltDir.setAttribute("href", "#");
        aDeltDir.appendChild(document.createTextNode("Eliminar Director"));
        aDeltDir.addEventListener("click", DeltDir());
        p1.appendChild(aDeltDir);

        var paMoDir= document.createElement("div");
        paMoDir.setAttribute("class", "panel-body");
        pa2.appendChild(paMoDir);

        var aMoDir = document.createElement("a");
        aMoDir.appendChild(document.createTextNode("Modificar Director"));
        paMoDir.appendChild(aMoDir);
        
        var paCreDir = document.createElement("div");
        paCreDir.setAttribute("class", "panel-body");
        pa2.appendChild(paCreDir);

        var aCreDir = document.createElement("a");
        aCreDir.appendChild(document.createTextNode("Crear Director"));
        aCreDir.addEventListener("click", CreateDirector());
        paCreDir.appendChild(aCreDir);
        //Panel de Actores
        var pa3 = document.createElement("div");
        pa3.setAttribute("class", "panel panel-default");
        panel.appendChild(pa3);

        var paAc = document.createElement("div");
        paAc.setAttribute("class", "panel-heading");
        paAc.appendChild(document.createTextNode("Actores"));
        pa3.appendChild(paAc);

        var paDeltAc = document.createElement("div");
        paDeltAc.setAttribute("class", "panel-body");
        pa3.appendChild(paDeltAc);

        var p2 = document.createElement("p");
        paDeltAc.appendChild(p2);
        
        var aDeltAc = document.createElement("a");
        aDeltAc.setAttribute("href", "#");
        aDeltAc.appendChild(document.createTextNode("Eliminar Actor"));
        aDeltAc.addEventListener("click", DeltAc());
        p2.appendChild(aDeltAc);

        var paModiAc= document.createElement("div");
        paModiAc.setAttribute("class", "panel-body");
        pa3.appendChild(paModiAc);

        var aModiAc = document.createElement("a");
        aModiAc.appendChild(document.createTextNode("Modificar Actor"));
        paModiAc.appendChild(aModiAc);
        
        var paCreateAc = document.createElement("div");
        paCreateAc.setAttribute("class", "panel-body");
        pa3.appendChild(paCreateAc);

        var aCreateAc = document.createElement("a");
        aCreateAc.appendChild(document.createTextNode("Crear Actor"));
        aCreateAc.addEventListener("click", CreateActor());
        paCreateAc.appendChild(aCreateAc);
        //Panel de Producciones
        var pa4 = document.createElement("div");
        pa4.setAttribute("class", "panel panel-default");
        panel.appendChild(pa4);

        var paPro = document.createElement("div");
        paPro.setAttribute("class", "panel-heading");
        paPro.appendChild(document.createTextNode("Producciones"));
        pa4.appendChild(paPro);

        var paDeltPro = document.createElement("div");
        paDeltPro.setAttribute("class", "panel-body");
        pa4.appendChild(paDeltPro);

        var p3 = document.createElement("p");
        paDeltPro.appendChild(p3);
        
        var aDeltPro = document.createElement("a");
        aDeltPro.setAttribute("href", "#");
        aDeltPro.appendChild(document.createTextNode("Eliminar Producción"));
        aDeltPro.addEventListener("click", DeltPro());
        p3.appendChild(aDeltPro);

        var paMoPro= document.createElement("div");
        paMoPro.setAttribute("class", "panel-body");
        pa4.appendChild(paMoPro);

        var aMoPro = document.createElement("a");
        aMoPro.appendChild(document.createTextNode("Modificar Producción"));
        paMoPro.appendChild(aMoPro);
        
        var paCrePro = document.createElement("div");
        paCrePro.setAttribute("class", "panel-body");
        pa4.appendChild(paCrePro);

        var aCrePro = document.createElement("a");
        aCrePro.appendChild(document.createTextNode("Crear Producción"));
        paCrePro.appendChild(aCrePro);
    }
}
//Todas las clases y métodos para eliminar
function DeltCat(){
    function deltCategory() {
        return function () {
            var form = document.forms["delt-cat"]["cat-delt"];
            var valueCat = form.value;

            if (valueCat == "") {
                throw new EmptyValueException();
            } else {
                var categorias = vs.categorias;
                var categoria = categorias.next();

                while (categoria.done !== true) {
                    if(valueCat === categoria.value.name){
                        vs.removeCategory(categoria.value);
                    }
                    categoria = categorias.next();
                }
            }
            form.options[form.options.selectedIndex].remove();
        }
    }

    return function(){
        var main = document.getElementById("div-main");
        removeChildren(main);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Eliminar categoría"));
        main.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "delt-cat");
        form.setAttribute("id", "delt-cat");
        form.setAttribute("class", "form-horizontal");
        main.appendChild(form);

        var formGroup1 = document.createElement("div");
        formGroup1.setAttribute("class","form-group group-login");
        form.appendChild(formGroup1);

        var label = document.createElement("label");
        label.setAttribute("class", "control-label col-sm-2");
        label.appendChild(document.createTextNode("Categoría a eliminar:"));
        formGroup1.appendChild(label);

        var div = document.createElement("div");
        div.setAttribute("class", "col-sm-5");
        formGroup1.appendChild(div);

        var select = document.createElement("select");
        select.setAttribute("class", "form-control");
        select.setAttribute("name", "cat-delt");
        div.appendChild(select);

        var categorias = vs.categorias;
        var categoria = categorias.next();

        while (categoria.done !== true) {
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(categoria.value.name));
            option.setAttribute("value", categoria.value.name);
            select.appendChild(option);

            categoria = categorias.next();
        }
        //Grupo para meter el botón
        var formGroup2 = document.createElement("div");
        formGroup2.setAttribute("class","form-group group-login");
        form.appendChild(formGroup2);

        var div1 = document.createElement("div");
        div1.setAttribute("class", "col-sm-offset-2 col-sm-4 div-btn-form");
        formGroup2.appendChild(div1);

        var btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("id", "btn-delt");
        btn.setAttribute("class", "btn btn-default btnInfo btn-form")
        btn.appendChild(document.createTextNode("Eliminar"));
        btn.addEventListener("click", deltCategory())
        div1.appendChild(btn);
    }
    
}
function DeltDir(){
    //Método para eliminar el director
    function deltDirector() {
        return function () {
            var form = document.forms["delt-dir"]["dir-delt"];
            var valueDir = form.value;

            if (valueDir == "") {
                throw new EmptyValueException();
            } else {

                var directores = vs.directores;
                var director = directores.next();

                while (director.done !== true){
                    if(valueDir === director.value.name){
                        vs.removeDirector(director.value);
                    }
                    director = directores.next();
                }
            }
            form.options[form.options.selectedIndex].remove();
        }
    }
    //Para escribir
    return function(){
        var main = document.getElementById("div-main");
        removeChildren(main);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Eliminar Director"));
        main.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "delt-dir");
        form.setAttribute("id", "delt-dir");
        form.setAttribute("class", "form-horizontal");
        main.appendChild(form);

        var formGroup1 = document.createElement("div");
        formGroup1.setAttribute("class","form-group group-login");
        form.appendChild(formGroup1);

        var label = document.createElement("label");
        label.setAttribute("class", "control-label col-sm-2");
        label.appendChild(document.createTextNode("Director a eliminar:"));
        formGroup1.appendChild(label);

        var div = document.createElement("div");
        div.setAttribute("class", "col-sm-5");
        formGroup1.appendChild(div);

        var select = document.createElement("select");
        select.setAttribute("class", "form-control");
        select.setAttribute("name", "dir-delt");
        div.appendChild(select);

        var directores = vs.directores;
        var director = directores.next();

        while (director.done !== true){
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname1));
            option.setAttribute("value", director.value.name );
            select.appendChild(option);

            director = directores.next();
        }
        //Grupo para meter el botón
        var formGroup2 = document.createElement("div");
        formGroup2.setAttribute("class","form-group group-login");
        form.appendChild(formGroup2);

        var div1 = document.createElement("div");
        div1.setAttribute("class", "col-sm-offset-2 col-sm-4 div-btn-form");
        formGroup2.appendChild(div1);

        var btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("id", "btn-delt");
        btn.setAttribute("class", "btn btn-default btnInfo btn-form")
        btn.appendChild(document.createTextNode("Eliminar"));
        btn.addEventListener("click", deltDirector())
        div1.appendChild(btn);
    }
    
}

function DeltAc(){
    //Método para eliminar el actor
    function deltActor() {
        return function () {
            var form = document.forms["delt-ac"]["ac-delt"];
            var valueAc = form.value;

            if (valueAc == "") {
                throw new EmptyValueException();
            } else {

                var actors = vs.actors;
                var actor = actors.next();

                while (actor.done !== true){
                    if(valueAc === actor.value.name){
                        vs.removeActor(actor.value);
                    }
                    actor = actors.next();
                }
            }
            form.options[form.options.selectedIndex].remove();
        }
    }
    //Para escribir
    return function(){
        var main = document.getElementById("div-main");
        removeChildren(main);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Eliminar Actor"));
        main.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "delt-ac");
        form.setAttribute("id", "delt-ac");
        form.setAttribute("class", "form-horizontal");
        main.appendChild(form);

        var formGroup1 = document.createElement("div");
        formGroup1.setAttribute("class","form-group group-login");
        form.appendChild(formGroup1);

        var label = document.createElement("label");
        label.setAttribute("class", "control-label col-sm-2");
        label.appendChild(document.createTextNode("Actor a eliminar:"));
        formGroup1.appendChild(label);

        var div = document.createElement("div");
        div.setAttribute("class", "col-sm-5");
        formGroup1.appendChild(div);

        var select = document.createElement("select");
        select.setAttribute("class", "form-control");
        select.setAttribute("name", "ac-delt");
        div.appendChild(select);

        var actors = vs.actors;
        var actor = actors.next();

        while (actor.done !== true){
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));
            option.setAttribute("value", actor.value.name );
            select.appendChild(option);

            actor = actors.next();
        }
        //Grupo para meter el botón
        var formGroup2 = document.createElement("div");
        formGroup2.setAttribute("class","form-group group-login");
        form.appendChild(formGroup2);

        var div1 = document.createElement("div");
        div1.setAttribute("class", "col-sm-offset-2 col-sm-4 div-btn-form");
        formGroup2.appendChild(div1);

        var btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("id", "btn-delt");
        btn.setAttribute("class", "btn btn-default btnInfo btn-form")
        btn.appendChild(document.createTextNode("Eliminar"));
        btn.addEventListener("click", deltActor())
        div1.appendChild(btn);
    }
    
}
function DeltPro(){
    //Método para eliminar el director
    function deltDirector() {
        return function () {
            var form = document.forms["delt-pro"]["pro-delt"];
            var valuePro = form.value;

            if (valuePro == "") {
                throw new EmptyValueException();
            } else {

                var productions = vs.productions;
                var production = productions.next();

                while (production.done !== true) {
                    if(valuePro === production.value.name){
                        vs.removeProduction(production.value);
                        
                    }
                    production = productions.next();
                }
            }
            form.options[form.options.selectedIndex].remove();
        }
    }
    //Para escribir
    return function(){
        var main = document.getElementById("div-main");
        removeChildren(main);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Eliminar Producción"));
        main.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "delt-pro");
        form.setAttribute("id", "delt-pro");
        form.setAttribute("class", "form-horizontal");
        main.appendChild(form);

        var formGroup1 = document.createElement("div");
        formGroup1.setAttribute("class","form-group group-login");
        form.appendChild(formGroup1);

        var label = document.createElement("label");
        label.setAttribute("class", "control-label col-sm-2");
        label.appendChild(document.createTextNode("Producción a eliminar:"));
        formGroup1.appendChild(label);

        var div = document.createElement("div");
        div.setAttribute("class", "col-sm-5");
        formGroup1.appendChild(div);

        var select = document.createElement("select");
        select.setAttribute("class", "form-control");
        select.setAttribute("name", "pro-delt");
        div.appendChild(select);

        var productions = vs.productions;
        var production = productions.next();

        while (production.done !== true) {
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(production.value.title));
            option.setAttribute("value", production.value.title );
            select.appendChild(option);

            production = productions.next();
        }
        //Grupo para meter el botón
        var formGroup2 = document.createElement("div");
        formGroup2.setAttribute("class","form-group group-login");
        form.appendChild(formGroup2);

        var div1 = document.createElement("div");
        div1.setAttribute("class", "col-sm-offset-2 col-sm-4 div-btn-form");
        formGroup2.appendChild(div1);

        var btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("id", "btn-delt");
        btn.setAttribute("class", "btn btn-default btnInfo btn-form")
        btn.appendChild(document.createTextNode("Eliminar"));
        btn.addEventListener("click", deltDirector())
        div1.appendChild(btn);
    }
    
}
//Clases de Crear
function CreateCategory() {
    function newCategory() {
        return function () {
            var name = document.forms["catForm"]["name"].value;
            var description = document.forms["catForm"]["description"].value;
            var p = document.getElementById("result");

            if (name == "") {
                p.appendChild(document.createTextNode("Error al introducir la categoría"));
                p.setAttribute("style", "color:red");
                throw new EmptyValueException();
            } else {
                var newCat = new Category(name);
                if (description != "") {
                    cat.description = description;
                }

                vs.addCategory(newCat);
            }
            document.forms["catForm"].reset();
            p.appendChild(document.createTextNode("Guardado"));
            p.setAttribute("style", "color:green");
        }
    }

    return function () {
        var main = document.getElementById("div-main");

        removeChildren(main);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Añadir categoría"));
        main.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "catForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");
        main.appendChild(form);

        var formGroup1 = document.createElement("div");
        formGroup1.setAttribute("class","form-group");
        form.appendChild(formGroup1);

        var name = document.createElement("label");
        name.appendChild(document.createTextNode("Nombre*:"));
        name.setAttribute("class","control-label col-sm-2");
        formGroup1.appendChild(name);

        var div1 = document.createElement("div");
        div1.setAttribute("class","col-sm-10");
        formGroup1.appendChild(div1);

        var input1 = document.createElement("input");
        input1.setAttribute("type", "text");
        input1.setAttribute("class", "form-control");
        input1.setAttribute("name", "name");
        input1.setAttribute("id", "name");
        input1.setAttribute("placeholder", "Poner el nombre");
        div1.appendChild(input1);

        var formGroup2 = document.createElement("div");
        formGroup2.setAttribute("class","form-group");
        form.appendChild(formGroup2);

        var des = document.createElement("label");
        des.appendChild(document.createTextNode("Descripción:"));
        des.setAttribute("class","control-label col-sm-2");
        formGroup2.appendChild(des);

        var div2 = document.createElement("div");
        div2.setAttribute("class","col-sm-10");
        formGroup2.appendChild(div2);

        var area2 = document.createElement("textarea");
        area2.setAttribute("type", "text area");
        area2.setAttribute("class", "form-control");
        area2.setAttribute("name", "description");
        area2.setAttribute("id", "description");
        area2.setAttribute("placeholder", "Poner la descripción");
        div2.appendChild(area2);

        var div3 = document.createElement("div");
        div3.setAttribute("class","col-sm-10");
        form.appendChild(div3);

        var btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("id", "btn-login");
        btn.setAttribute("class", "btn btn-default btnInfo")
        btn.appendChild(document.createTextNode("Guardar"));
        btn.addEventListener("click", newCategory())
        div3.appendChild(btn);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        form.appendChild(p);

    }
}
function CreateDirector() {
    function newDirector() {
        return function () {
            var name = document.forms["dirForm"]["name"].value;
            var lastname = document.forms["dirForm"]["lastname1"].value;
            var born = document.forms["dirForm"]["born"].value;
            var image = document.forms["dirForm"]["image"].value;
            var imagePart = image.split("\\");
            var imageLoc = imagePart[imagePart.length-1];

            if (name == "" || lastname == "" || born == "") {
                throw new EmptyValueException();
            } else {
                var dir = new Person(name, lastname, born);
                if (image != ""){
                    dir.picture = "images/" + imageLoc;
                }else {
                    dir.picture = "images/default.jpg";
                }
                vs.addDirector(dir);
                //Productions Seleccionadas
                var producciones = document.getElementById("tbody").getElementsByTagName('input');
                var long = producciones.length;

                for (var x = 0; x < long; x++) {
                    var found = false;
                    if (producciones[x].checked) {

                        var productions = vs.productions;
                        var production = productions.next();

                        while (found !== true) {
                            if (production.value.title === producciones[x].value) {
                                vs.assignDirector(dir, production.value);
                                found = true;
                            }
                            production = productions.next();
                        }

                    }
                }
                resultForm(true);
            }
            document.forms["dirForm"].reset();
            //event.preventDefault();
        }
    }

    return function () {
        var main = document.getElementById("div-main");

        removeChildren(main);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Añadir director"));
        main.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "dirForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");
        main.appendChild(form);

        var formGroup1 = document.createElement("div");
        formGroup1.setAttribute("class","form-group");
        form.appendChild(formGroup1);

        var name = document.createElement("label");
        name.appendChild(document.createTextNode("Nombre*:"));
        name.setAttribute("class","control-label col-sm-2");
        formGroup1.appendChild(name);

        var div1 = document.createElement("div");
        div1.setAttribute("class","col-sm-10");
        formGroup1.appendChild(div1);

        var input1 = document.createElement("input");
        input1.setAttribute("type", "text");
        input1.setAttribute("class", "form-control");
        input1.setAttribute("name", "name");
        input1.setAttribute("id", "name");
        input1.setAttribute("placeholder", "Meter el nombre");
        div1.appendChild(input1);

        var formGroup2 = document.createElement("div");
        formGroup2.setAttribute("class","form-group");
        form.appendChild(formGroup2);

        var lastname1 = document.createElement("label");
        lastname1.appendChild(document.createTextNode("Primer apellido*:"));
        lastname1.setAttribute("class","control-label col-sm-2");
        formGroup2.appendChild(lastname1);

        var div2 = document.createElement("div");
        div2.setAttribute("class","col-sm-10");
        formGroup2.appendChild(div2);

        var input2 = document.createElement("input");
        input2.setAttribute("type", "text");
        input2.setAttribute("class", "form-control");
        input2.setAttribute("name", "lastname1");
        input2.setAttribute("id", "lastname1");
        input2.setAttribute("placeholder", "Meter el primer apellido");
        div2.appendChild(input2);

        var formGroup3 = document.createElement("div");
        formGroup3.setAttribute("class","form-group");
        form.appendChild(formGroup3);

        var born = document.createElement("label");
        born.appendChild(document.createTextNode("Fecha de nacimiento*:"));
        born.setAttribute("class","control-label col-sm-2");
        formGroup2.appendChild(born);

        var div3 = document.createElement("div");
        div3.setAttribute("class","col-sm-10");
        formGroup3.appendChild(div3);

        var date = document.createElement("date");
        date.setAttribute("type", "text");
        date.setAttribute("class", "form-control");
        date.setAttribute("name", "born");
        date.setAttribute("id", "born");
        //date.setAttribute("placeholder", "Meter el primer apellido");
        div3.appendChild(date);

        var formGroup4 = document.createElement("div");
        formGroup4.setAttribute("class","form-group");
        form.appendChild(formGroup4);

        var img = document.createElement("label");
        img.appendChild(document.createTextNode("Imagen:"));
        img.setAttribute("class","control-label col-sm-2");
        formGroup4.appendChild(img);

        var div4 = document.createElement("div");
        div4.setAttribute("class","col-sm-10");
        formGroup4.appendChild(div4);

        var input4 = document.createElement("input");
        input4.setAttribute("type", "text");
        input4.setAttribute("class", "form-control");
        input4.setAttribute("name", "img");
        input4.setAttribute("id", "img");
        input4.setAttribute("placeholder", "Meter la ruta de la imagen");
        div4.appendChild(input4);

        var formGroup5 = document.createElement("div");
        formGroup5.setAttribute("class","form-group");
        form.appendChild(formGroup5);

        var label = document.createElement("label");
        label.setAttribute("class", "control-label col-sm-2");
        label.appendChild(document.createTextNode("Producciones:"));
        formGroup5.appendChild(label);

        var dv1 = document.createElement("div");
        dv1.setAttribute("class", "col-sm-4");
        formGroup5.appendChild(dv1);

        var table = document.createElement("table");
        table.setAttribute("class", "table table-striped");
        dv1.appendChild(table);

        var tbody = document.createElement("tbody");
        tbody.setAttribute("class", "tbody");
        table.appendChild(tbody);

        var productions = vs.productions;
        var production = productions.next();

        while (production.done !== true) {
            console.log(production.value.title);
            var tr = document.createElement("tr");
            tbody.appendChild(tr);

            var td1 = document.createElement("td");
            td1.setAttribute("id", "producciones");
            tr.appendChild(td1);

            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("name", "produccion");
            check.setAttribute("value", production.value.title);
            td1.appendChild(check);

            var td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(production.value.title));
            tr.appendChild(td2);
            
            production = productions.next();
        }

        var div5 = document.createElement("div");
        div5.setAttribute("class","col-sm-10");
        form.appendChild(div5);

        var btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("id", "btn-login");
        btn.setAttribute("class", "btn btn-default btnInfo")
        btn.appendChild(document.createTextNode("Guardar"));
        btn.addEventListener("click", newDirector())
        div5.appendChild(btn);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        form.appendChild(p);

        
        //createInput("Imagen", "image", form, "Imagen del director", "", "I");
        //createTable("Producciones", "productions", form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        form.appendChild(p);

    }
}

function CreateActor() {
    function newActor() {
        return function () {
            var name = document.forms["actForm"]["name"].value;
            var lastname = document.forms["actForm"]["lastname1"].value;
            var born = document.forms["actForm"]["born"].value;
            var image = document.forms["actForm"]["image"].value;
            var imagePart = image.split("\\");
            var imageLoc = imagePart[imagePart.length-1];

            if (name == "" || lastname == "" || born == "") {
                throw new EmptyValueException();
            } else {
                var actor = new Person(name, lastname, born);
                if (image != ""){
                    actor.picture = "images/" + imageLoc;
                }else {
                    actor.picture = "images/default.jpg";
                }
                vs.addActor(actor);
                //Productions Seleccionadas
                var producciones = document.getElementById("tbody").getElementsByTagName('input');
                var long = producciones.length;

                for (var x = 0; x < long; x++) {
                    var found = false;
                    if (producciones[x].checked) {

                        var productions = vs.productions;
                        var production = productions.next();

                        while (found !== true) {
                            if (production.value.title === producciones[x].value) {
                                vs.assignActor(actor, production.value);
                                found = true;
                            }
                            production = productions.next();
                        }

                    }
                }
                resultForm(true);
            }
            document.forms["actForm"].reset();
            //event.preventDefault();
        }
    }

    return function () {
        var main = document.getElementById("div-main");

        removeChildren(main);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Añadir actor"));
        main.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "actForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");
        main.appendChild(form);

        var formGroup1 = document.createElement("div");
        formGroup1.setAttribute("class","form-group");
        form.appendChild(formGroup1);

        var name = document.createElement("label");
        name.appendChild(document.createTextNode("Nombre*:"));
        name.setAttribute("class","control-label col-sm-2");
        formGroup1.appendChild(name);

        var div1 = document.createElement("div");
        div1.setAttribute("class","col-sm-10");
        formGroup1.appendChild(div1);

        var input1 = document.createElement("input");
        input1.setAttribute("type", "text");
        input1.setAttribute("class", "form-control");
        input1.setAttribute("name", "name");
        input1.setAttribute("id", "name");
        input1.setAttribute("placeholder", "Meter el nombre");
        div1.appendChild(input1);

        var formGroup2 = document.createElement("div");
        formGroup2.setAttribute("class","form-group");
        form.appendChild(formGroup2);

        var lastname1 = document.createElement("label");
        lastname1.appendChild(document.createTextNode("Primer apellido*:"));
        lastname1.setAttribute("class","control-label col-sm-2");
        formGroup2.appendChild(lastname1);

        var div2 = document.createElement("div");
        div2.setAttribute("class","col-sm-10");
        formGroup2.appendChild(div2);

        var input2 = document.createElement("input");
        input2.setAttribute("type", "text");
        input2.setAttribute("class", "form-control");
        input2.setAttribute("name", "lastname1");
        input2.setAttribute("id", "lastname1");
        input2.setAttribute("placeholder", "Meter el primer apellido");
        div2.appendChild(input2);

        var formGroup3 = document.createElement("div");
        formGroup3.setAttribute("class","form-group");
        form.appendChild(formGroup3);

        var born = document.createElement("label");
        born.appendChild(document.createTextNode("Fecha de nacimiento*:"));
        born.setAttribute("class","control-label col-sm-2");
        formGroup2.appendChild(born);

        var div3 = document.createElement("div");
        div3.setAttribute("class","col-sm-10");
        formGroup3.appendChild(div3);

        var date = document.createElement("date");
        date.setAttribute("type", "text");
        date.setAttribute("class", "form-control");
        date.setAttribute("name", "born");
        date.setAttribute("id", "born");
        //date.setAttribute("placeholder", "Meter el primer apellido");
        div3.appendChild(date);

        var formGroup4 = document.createElement("div");
        formGroup4.setAttribute("class","form-group");
        form.appendChild(formGroup4);

        var img = document.createElement("label");
        img.appendChild(document.createTextNode("Imagen:"));
        img.setAttribute("class","control-label col-sm-2");
        formGroup4.appendChild(img);

        var div4 = document.createElement("div");
        div4.setAttribute("class","col-sm-10");
        formGroup4.appendChild(div4);

        var input4 = document.createElement("input");
        input4.setAttribute("type", "text");
        input4.setAttribute("class", "form-control");
        input4.setAttribute("name", "img");
        input4.setAttribute("id", "img");
        input4.setAttribute("placeholder", "Meter la ruta de la imagen");
        div4.appendChild(input4);

        var formGroup5 = document.createElement("div");
        formGroup5.setAttribute("class","form-group");
        form.appendChild(formGroup5);

        var label = document.createElement("label");
        label.setAttribute("class", "control-label col-sm-2");
        label.appendChild(document.createTextNode("Producciones:"));
        formGroup5.appendChild(label);

        var dv1 = document.createElement("div");
        dv1.setAttribute("class", "col-sm-4");
        formGroup5.appendChild(dv1);

        var table = document.createElement("table");
        table.setAttribute("class", "table table-striped");
        dv1.appendChild(table);

        var tbody = document.createElement("tbody");
        tbody.setAttribute("class", "tbody");
        table.appendChild(tbody);

        var productions = vs.productions;
        var production = productions.next();

        while (production.done !== true) {
            console.log(production.value.title);
            var tr = document.createElement("tr");
            tbody.appendChild(tr);

            var td1 = document.createElement("td");
            td1.setAttribute("id", "producciones");
            tr.appendChild(td1);

            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("name", "produccion");
            check.setAttribute("value", production.value.title);
            td1.appendChild(check);

            var td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(production.value.title));
            tr.appendChild(td2);
            
            production = productions.next();
        }

        var div5 = document.createElement("div");
        div5.setAttribute("class","col-sm-10");
        form.appendChild(div5);

        var btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("id", "btn-login");
        btn.setAttribute("class", "btn btn-default btnInfo")
        btn.appendChild(document.createTextNode("Guardar"));
        btn.addEventListener("click", newActor())
        div5.appendChild(btn);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        form.appendChild(p);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        form.appendChild(p);

    }
}
function CreateProduction() {
    function newProduction() {
        return function () {
            var title = document.forms["proForm"]["title"].value;
            var publication = document.forms["proForm"]["publication"].value;
            var nationality = document.forms["proForm"]["nationality"].value;
            var synopsis = document.forms["proForm"]["synopsis"].value;
            var image = document.forms["proForm"]["image"].value;
            var imagePart = image.split("\\");
            var imageLoc = imagePart[imagePart.length-1];

            var select = document.forms["proForm"]["selectPrin"];
            var id = select.value;
            $('form').validator();

            if (title == "" || publication == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var pro = new Movie(title, publication);
                if (nationality != "") {
                    pro.nationality = nationality;
                }
                if (synopsis != "") {
                    pro.synopsis = synopsis;
                }

                if (image != ""){
                    pro.image = "images/" + imageLoc;
                }else {
                    pro.image = "images/pDefault.jpg";
                }
                videosystem.addProduction(pro);

                //Director
                var directors = videosystem.directors;
                var director = directors.next();
                var aux = -1;

                while (director.done !== true) {
                    if (director.value.name + " " + director.value.lastname === id) {
                        aux = director.value;
                    }
                    director = directors.next();
                }
                videosystem.assignDirector(aux, pro);
                //
                //Categorias Seleccionadas
                var categorias = document.getElementById("tbody").getElementsByTagName('input');
                var long = categorias.length;

                for (var x = 0; x < long; x++) {
                    var found = false;
                    if (categorias[x].checked) {
                        var cs = videosystem.categories;
                        var category = cs.next();

                        while (found !== true) {
                            if (category.value.name === categorias[x].value) {
                                videosystem.assignCategory(category.value, pro);
                                found = true;
                            }
                            category = cs.next();
                        }

                    }
                }
                //
                //Actores Seleccionados
                var actores = document.getElementById("tbody2").getElementsByTagName('input');
                var long = actores.length;

                for (var x = 0; x < long; x++) {
                    var found = false;
                    if (actores[x].checked) {
                        var actors = videosystem.actors;
                        var actor = actors.next();

                        while (found !== true) {
                            if (actor.value.name + " " + actor.value.lastname === actores[x].value) {
                                videosystem.assignActor(actor.value, pro);
                                found = true;
                            }
                            actor = actors.next();
                        }

                    }
                }
                //
                resultForm(true);
            }
            document.forms["proForm"].reset();
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Añadir producción"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("id", "form");
        form.setAttribute("name", "proForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");

        createInput("Título", "title", form, "Titulo de la producción", "required");
        createDate("F. Publicacion", "publication", form, "required");
        createInput("Imagen", "image", form, "Imagen de la producción", "", "I");
        createInput("Nacionalidad", "nationality", form, "Ej. 'ES'", "", "D");
        createInput("Sinopsis", "synopsis", form, "Resumen de la producción");
        createSelect(form, "Directors", "selectPrin", "Director");
        createTable("Categorias", "categories", form);
        createTable("Actores", "actors", form);
        createButton(addProduction, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}