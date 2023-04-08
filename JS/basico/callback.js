//FUNÇÕES QUE SÃO PASSADAS COMO ARGUMENTOS PARA OUTRAS FUNÇÕES

let callback = function () {
  console.log("Done!");
};

setTimeout(callback, 1000);
