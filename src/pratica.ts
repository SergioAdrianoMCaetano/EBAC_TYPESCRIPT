//- PRATICA

// • Utilizando o TypeScript e a digitação escreva duas funções: uma função de multiplicação que deve receber como resultados dois números e retornar a multiplicação deles, e uma função de saudação que deve receber um nome e retornar a concatenação “Olá “ + nome;

// • No repositório do curso crie uma branch chamada exercicio_ts e armaze o código TS escrito nesta branch, nos envie o link através da plataforma.

function multiplicar(n1: number, n2: number){
    return n1 * n2;
};

function dizSaudacao(nome: string){
    return () => `Olá, ${nome}`;
};