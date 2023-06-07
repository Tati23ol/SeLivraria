const btn_login = document.querySelector(".btn_login");
const btn_forum = document.querySelector(".btn_forum")
const btn_home = document.querySelector(".btn_home")
const btn_troca = document.querySelector(".btn_troca")

//MENU NAV BAR
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

// LIVROS

const livro1 = document.querySelector(".livro1")
const livro2 = document.querySelector(".livro2")
const livro3 = document.querySelector(".livro3")
const livro4 = document.querySelector(".livro4")
const livro5 = document.querySelector(".livro5")

function abrirLivro() {
  window.open("/livros/livro1.html");
}

function abrirLivro2() {
  window.open("/livros/livro2.html");
}

function abrirLivro3() {
  window.open("/livros/livro3.html");
}

function abrirLivro4() {
  window.open("/livros/livro4.html");
}

function abrirLivro5() {
  window.open("/livros/livro5.html");
}



livro1.addEventListener('click', abrirLivro);
livro2.addEventListener('click', abrirLivro2);
livro3.addEventListener('click', abrirLivro3);
livro4.addEventListener('click', abrirLivro4);
livro5.addEventListener('click', abrirLivro5);

