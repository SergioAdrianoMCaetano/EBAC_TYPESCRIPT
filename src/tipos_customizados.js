"use strict";
const alunos = [
    {
        nome: 'Caio Ribeiro',
        curso: ['Front-End', 'UX/UI'],
        idade: 59,
    },
    {
        nome: 'Maria Betânia',
        curso: ['Back-End', 'Python'],
        idade: 46,
    },
];
const novoAluno = {
    nome: 'Lucas Veríssimo',
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
;
alunos.push({
    nome: 'Julia Cunha',
    curso: ['HTML', 'CSS'],
    idade: 19,
});
