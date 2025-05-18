const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

let mensagemOriginal = "It doesn’t matter if you love him, or capital H-I-M, just put your paws up,’cause you were born this way, baby!";
let mensagemHover = " Não importa se você ama ele, ou Ele, apenas levante suas mãos, pois você nasceu desse jeito, querido!";

/* adiciona um escutador de evento de clique ao botão.*/
botao.addEventListener("click", function () {
  if (mensagem.style.display === "block") {
    mensagem.style.display = "none";
    botao.textContent = "Clique para ver uma mensagem!";
  } else {
    mensagem.style.display = "block";
    botao.textContent = "Clique para ocultar a mensagem";
  }
});

/* adiciona um escutador para verificar qual texto da mensagem exibir quando hover*/
mensagem.addEventListener("mouseover", function () {
    mensagem.textContent = mensagemHover;
  });

  mensagem.addEventListener("mouseout", function () {
    mensagem.textContent = mensagemOriginal;
  });