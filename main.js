document.querySelector("#entrar").addEventListener("click", function (){

    user = document.querySelector("login");
    password = document.querySelector("password"); 
    
    alert(document.querySelector("login"));    
    
    if(user === localStorage.getItem("username") && password === localStorage.getItem("password"))
    {
        alert("Credenciais corretas");
    }
    else
    {
        alert("Login ou senha incorretos!!");
    }
})