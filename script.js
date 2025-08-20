const $ = s => document.querySelector(s);

$("#ano").textContent = new Date().getFullYear();

$("#form").addEventListener("submit", e => {
  e.preventDefault();
  $("#msg").textContent = "Mensagem enviada com sucesso!";
  e.target.reset();
});