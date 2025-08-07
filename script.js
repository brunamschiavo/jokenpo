const maoComputador = [
  "TESOURA",
  "PEDRA",
  "PAPEL",
  "TESOURA",
  "SPOCK",
  "LIZARD",
];

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
const spock = document.getElementById("spock");
const lizard = document.getElementById("lizard");
const pedraComputador = document.getElementById("pedraComputador");
const papelComputador = document.getElementById("papelComputador");
const tesouraComputador = document.getElementById("tesouraComputador");
const spockComputador = document.getElementById("spockComputador");
const lizardComputador = document.getElementById("lizardComputador");
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
  const aleatorio = maoComputador[Math.ceil(Math.random() * 5)];
  if (aleatorio === "PEDRA") {
    console.log("COMPUTADOR JOGOU PEDRA");
    pedraComputador.style.color = "#B8DCD2";
  } else if (aleatorio === "PAPEL") {
    console.log("COMPUTADOR JOGOU PAPEL");
    papelComputador.style.color = "#B8DCD2";
  } else if (aleatorio === "SPOCK") {
    console.log("COMPUTADOR JOGOU SPOCK");
    spockComputador.style.color = "#B8DCD2";
  } else if (aleatorio === "LIZARD") {
    console.log("COMPUTADOR JOGOU LIZARD");
    lizardComputador.style.color = "#B8DCD2";
  } else {
    console.log("COMPUTADOR JOGOU TESOURA");
    tesouraComputador.style.color = "#B8DCD2";
  }

  if (mao === aleatorio) {
    mostrarModal("EMPATE");
  } else if (mao === "PEDRA" && aleatorio === "TESOURA") {
    mostrarModal("GANHOU");
    playerScore.innerText++;
  } else if (mao === "PAPEL" && aleatorio === "PEDRA") {
    mostrarModal("GANHOU");
    playerScore.innerText++;
  } else if (mao === "PEDRA" && aleatorio === "LIZARD") {
    mostrarModal("GANHOU");
    playerScore.innerText++;
  } else if (mao === "LIZARD" && aleatorio === "SPOCK") {
    mostrarModal("GANHOU");
  } else if (mao === "SPOCK" && aleatorio === "TESOURA") {
    mostrarModal("GANHOU");
  } else if (mao === "TESOURA" && aleatorio === "LIZARD") {
    mostrarModal("GANHOU");
  } else if (mao === "LAGARTO" && aleatorio === "PAPEL") {
    mostrarModal("GANHOU");
  } else if (mao === "PAPEL" && aleatorio === "SPOCK") {
    mostrarModal("GANHOU");
  } else if (mao === "SPOCK" && aleatorio === "PEDRA") {
    mostrarModal("GANHOU");
    playerScore.innerText++;
  } else {
    mostrarModal("PERDEU");
    computerScore.innerText++;
  }
  if (computerScore.innerText === "5" || playerScore.innerText === "5") {
    playerScore.innerText = "0";
    computerScore.innerText = "0";
  }

  setTimeout(() => {
    pedra.style.color = "#fd9860";
    papel.style.color = "#fd9860";
    tesoura.style.color = "#fd9860";
    spock.style.color = "#fd9860";
    lizard.style.color = "#fd9860";
    pedraComputador.style.color = "#f0cc51";
    papelComputador.style.color = "#f0cc51";
    tesouraComputador.style.color = "#f0cc51";
    spockComputador.style.color = "#f0cc51";
    lizardComputador.style.color = "#f0cc51";

    pedra.disabled = false;
    papel.disabled = false;
    tesoura.disabled = false;
    spock.disabled = false;
    lizard.disabled = false;
  }, 1000);
};

pedra.addEventListener("click", () => {
  pedra.style.color = "#B8DCD2";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  spock.disabled = true;
  lizard.disabled = true;
  jogar("PEDRA");
});

papel.addEventListener("click", () => {
  papel.style.color = "#B8DCD2";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  spock.disabled = true;
  lizard.disabled = true;
  jogar("PAPEL");
});

tesoura.addEventListener("click", () => {
  tesoura.style.color = "#B8DCD2";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  spock.disabled = true;
  lizard.disabled = true;
  jogar("TESOURA");
});

spock.addEventListener("click", () => {
  spock.style.color = "#B8DCD2";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  spock.disabled = true;
  lizard.disabled = true;
  jogar("SPOCK");
});

lizard.addEventListener("click", () => {
  lizard.style.color = "#B8DCD2";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  spock.disabled = true;
  lizard.disabled = true;
  jogar("LAGARTO");
});

papelComputador.addEventListener("click", () => {
  papel.style.color = "#B8DCD2";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  spock.disabled = true;
  lizard.disabled = true;
  jogar("PAPEL");
});

tesouraComputador.addEventListener("click", () => {
  tesoura.style.color = "#B8DCD2";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  spock.disabled = true;
  lizard.disabled = true;
  jogar("TESOURA");
});

spockComputador.addEventListener("click", () => {
  tesoura.style.color = "#B8DCD2";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  spock.disabled = true;
  lizard.disabled = true;
  jogar("SPOCK");
});

lizardComputador.addEventListener("click", () => {
  tesoura.style.color = "#B8DCD2";
  pedra.disabled = true;
  papel.disabled = true;
  tesoura.disabled = true;
  spock.disabled = true;
  lizard.disabled = true;
  jogar("LAGARTO");
});
