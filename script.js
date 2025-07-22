const maoComputador = ["TESOURA", "PEDRA", "PAPEL", "TESOURA"];

// Adiconar cada item (pedra,papel, tesoura), adicionar um event listener em cada um.
// A pedra vai imprimir: "jogou pedra" no console
// Quando clicar na pedra vai imprimir: "JOGOU PEDRA"

// addEventListener - É uma função do elemtento HTML para escutar um escutador de evento.
// addEventListener () - primeira propriedade é o tipo do evento
//                     - sedunda propriedade é a função que execute toda vez que o evento acontecer
// EventeListner, é uma função para usar com um elemento
// ()=>  - Arrow function - Cria uma função sem nome
// setTimeout - É uma função que recebe dois argumentos. Primeiro - Função. Segundo - Tempo

const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");
const pedraComputador = document.getElementById("pedraComputador");
const papelComputador = document.getElementById("papelComputador");
const tesouraComputador = document.getElementById("tesouraComputador");
const modal = document.getElementById("modal");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

const mostrarModal = (situacao) => {
  modal.style.opacity = "1";
  modal.innerText = situacao;
  setTimeout(() => {
    modal.style.opacity = "0";
  }, 1000);
};

const jogar = (mao) => {
  console.log("JOGADOR JOGOU " + mao);
  const aleatorio = maoComputador[Math.ceil(Math.random() * 3)];
  if (aleatorio === "PEDRA") {
    console.log("COMPUTADOR JOGOU PEDRA");
    pedraComputador.style.color = "oklch(81% 0.117 11.638)";
  } else if (aleatorio === "PAPEL") {
    console.log("COMPUTADOR JOGOU PAPEL");
    papelComputador.style.color = "oklch(81% 0.117 11.638)";
  } else {
    console.log("COMPUTADOR JOGOU TESOURA");
    tesouraComputador.style.color = "oklch(81% 0.117 11.638)";
  }

  if (mao === aleatorio) {
    mostrarModal("EMPATE");
  } else if (mao === "PEDRA" && aleatorio === "TESOURA") {
    mostrarModal("GANHOU");
    playerScore.innerText++;
  } else if (mao === "PAPEL" && aleatorio === "PEDRA") {
    mostrarModal("GANHOU");
    playerScore.innerText++;
  } else if (mao === "TESOURA" && aleatorio === "PAPEL") {
    mostrarModal("GANHOU");
    playerScore.innerText++;
  } else {
    mostrarModal("PERDEU");
    computerScore.innerText++;
  }

  setTimeout(() => {
    pedra.style.color = "#8596a6";
    papel.style.color = "#8596a6";
    tesoura.style.color = "#8596a6";
    pedraComputador.style.color = "#8596a6";
    papelComputador.style.color = "#8596a6";
    tesouraComputador.style.color = "#8596a6";

    pedra.disabled = false;
    papel.disabled = false;
    tesoura.disabled = false;
  }, 1000);
};

pedra.addEventListener("click", () => {
  pedra.style.color = "oklch(81% 0.117 11.638)";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  jogar("PEDRA");
});

papel.addEventListener("click", () => {
  papel.style.color = "oklch(81% 0.117 11.638)";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  jogar("PAPEL");
});

tesoura.addEventListener("click", () => {
  tesoura.style.color = "oklch(81% 0.117 11.638)";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  jogar("TESOURA");
});
