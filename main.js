document.querySelector("#entrar").addEventListener("click", function (){

    user = document.getElementById("login").value;
    password = document.getElementById("password").value; 

    if(user === "" || password === ""){
        alert("Campos vazios!");
    }else{
        
        if(user === localStorage.getItem("username") && password === localStorage.getItem("password"))
        {
            alert("Credenciais corretas");
        }
        else
        {
            alert("Login ou senha incorretos!!");
        }
    }
})