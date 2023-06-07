const btn_login = document.querySelector(".btn_login");
const btn_forum = document.querySelector(".btn_forum")
const btn_home = document.querySelector(".btn_home")
const btn_troca = document.querySelector(".btn_troca")
const mensagem = document.querySelector("#mensagem")
const comentarios = document.querySelector(".comentarios")
const nome = document.querySelector("#nome")
const trocas = document.querySelector("#btn_trocar")



function irPraTroca(){
  window.open("/troca/troca.html");
}

trocas.addEventListener('click', irPraTroca)


function criarComentario(nome, mensagem) {

  var comentario = document.createElement("div");
  comentario.className = "comentario";

  var avatar = document.createElement("img");
  avatar.src = "img2/avatar1.png";
  avatar.alt = "Avatar";
  avatar.className = "avatar";

  var conteudo = document.createElement("div");
  conteudo.className = "conteudo";

  var titulo = document.createElement("h3");
  titulo.textContent = nome;

  var texto = document.createElement("p");
  texto.textContent = mensagem;

  conteudo.appendChild(titulo);
  conteudo.appendChild(texto);

  comentario.appendChild(avatar);
  comentario.appendChild(conteudo);

  var comentarios = document.querySelector(".comentarios");
  comentarios.prepend(comentario);
}

var btn_enviar = document.getElementById('btn_enviar');
btn_enviar.addEventListener('click', function(event) {
  event.preventDefault();
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  criarComentario(nome, mensagem);
});


function irLogin() {
  window.open("/login/login2.html");
}

btn_login.addEventListener('click', irLogin);


function irforum() {
  window.open("/forum/forum.html");
}

btn_forum.addEventListener('click', irforum);

function irHome() {
    window.open("/home/pag.html");
  }
  
btn_home.addEventListener('click', irHome);

function irtroca() {
    window.open("/troca/troca.html");
  }
  
btn_troca.addEventListener('click', irtroca);

