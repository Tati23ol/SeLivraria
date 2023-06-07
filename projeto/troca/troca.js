const btn_login = document.querySelector(".btn_login");
const btn_forum = document.querySelector(".btn_forum")
const btn_home = document.querySelector(".btn_home")
const btn_trocas = document.querySelector(".btn_trocas")


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

function irtrocas() {
    window.open("/troca/troca.html");
  }
  
btn_trocas.addEventListener('click', irtrocas);

const btn_enviar = document.querySelector('.btn_enviar');
const chatContainer = document.querySelector('.chat');

btn_enviar.addEventListener('click', function(event) {
  event.preventDefault();

  const mensagem = document.querySelector("#mensagem").value;
  escreverChat("Você", mensagem);
  document.querySelector("#mensagem").value = '';
});

function escreverChat(remetente, mensagem) {
  const divMessage = document.createElement("div");
  divMessage.className = "message";

  const divSender = document.createElement("div");
  divSender.className = "sender";
  divSender.textContent = remetente;

  const divContent = document.createElement("div");
  divContent.className = "content";
  divContent.textContent = mensagem;

  divMessage.appendChild(divSender);
  divMessage.appendChild(divContent);

  chatContainer.appendChild(divMessage);
}
