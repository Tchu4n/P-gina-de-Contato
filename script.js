const form = document.getElementById("form");
const primeironome = document.getElementById("primeironome");
const sobrenome= document.getElementById("sobrenome");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const texto = document.getElementById("texto");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Exemplo de uso das variáveis declaradas:
  // const dados = { nome: primeironome.value, email: email.value };
  
  alert("Your inquiry has been sent.");
});