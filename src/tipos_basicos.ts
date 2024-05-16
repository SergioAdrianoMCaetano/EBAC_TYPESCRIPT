//COMPREENDER OS TIPOS BÁSICOS DO TYPESCRIPT
let estaChovendo: boolean = false;

estaChovendo = true;

let idade: number = 38;

let altura: number = 1.82;

const nacionalidade: string = 'Brasileira';

console.log(estaChovendo);
console.log(idade);
console.log(altura);
console.log(nacionalidade);

//ARRAY
const colegas: string[] = ['Paula', 'Rubem', 'Rodolfo', 'Biah'];
const tecnologias: Array<string> = ['html', 'css', 'js', 'ts'];
const numeros: ReadonlyArray<number> = [10, 7, 18, 23, 15, 40];

console.log(colegas);
console.log(tecnologias);
console.log(numeros);

//TUPLA
const lista:[nome:string, aprovado:boolean, numero:number ] = ['Adriano', true, 7];

console.log(lista);

//UNIONTYPE
let idadeAna: number | string = 20;

//ANY
let dadosAPI: any;
dadosAPI = 10;
dadosAPI = true;
dadosAPI = 'false';
dadosAPI = [34, 56, 8];