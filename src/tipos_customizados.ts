type aluno = {
    nome: string;
    curso?: string[];
    idade: number;
};

const alunos : aluno[] = [
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

const novoAluno : aluno = {
    nome: 'Lucas Veríssimo',
    idade: 32,
};

function exibeAluno(aluno : aluno){
    console.log(aluno.nome);
};

alunos.push({
    nome: 'Julia Cunha',
    curso: ['HTML', 'CSS'],
    idade: 19,
});

