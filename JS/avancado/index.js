const Aluno = require("./orientada-a-objeto");

console.log("\nEXERCÍCIO 1");
//Instanciando a classe (agora temos Objetos Aluno)
const aluno1 = new Aluno(
  "181250969",
  "Gabriel Cecon Carlsen",
  [5.0, 3.0, 2.0, 4.5]
);

const aluno2 = new Aluno(
  "211250969",
  "João Silva Souza",
  [10.0, 9.0, 7.5, 5.0]
);

//Chamando a função para cálcular a média baseada nas notas do Objeto instanciado
aluno1.mediaAritmerica();
aluno2.mediaAritmerica();

//Utilizando encapsulamento
aluno1.setNome("Pedro Rocha"); //Setando um novo nome para o Objeto aluno1
aluno1.setNotas([10.0, 9.0, 7.0, 10.0]); //Setando um novo vetor de notas para o Objeto aluno1

console.log("Alterei dinâmicamente o nome do aluno 1 para:", aluno1.getNome());

console.log(
  "Alterei dinâmicamente as notas do aluno 1 para:",
  aluno1.getNotas()
);

aluno1.mediaAritmerica();
