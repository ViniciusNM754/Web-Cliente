document.querySelector("#entrar").addEventListener("click", function (e){
    e.preventDefault();
    login = document.getElementById("login").value;
    password = document.getElementById("password").value; 

    if(login === "" || password === ""){
        alert("Campos vazios!");
    }else{
        for (let i = 0; i < localStorage.length; i++) {
            if(localStorage.key(i) === login){
                user = JSON.parse(localStorage.getItem(localStorage.key(i)));

                if(password === user.password)
                {
                    //alert("Credenciais corretas");
                    location.replace("C:/Users/cmpsg/Documentos/UTFPR/Periodo9/DesenvolvimentoWeb/Web-Cliente/index.html");
                }
                else
                {
                    alert("Login ou senha incorretos!!");
                }
            }
        }
    }
})