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

