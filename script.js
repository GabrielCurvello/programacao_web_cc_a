let elementoemail = document.getElementById("email").value; 
let entrar = document.getElementById("entrar");

entrar.addEventListener("click", submeter);

function submeter() {
    let elementoemail = document.getElementById("email").value;
    let elementosenha = documento.getElementById("senha").value;
    console.log(elementoemail);
    console.log(elementosenha);

    console.log(validaemail(elementoemail));
}

function validaemail(email){
    return /^[\w]+@[\w]+.[a-zA-Z]+$/.test(email)
}