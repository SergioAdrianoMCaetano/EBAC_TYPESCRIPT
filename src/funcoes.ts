function calculaArea(base: number, altura: number): number{
    return base * altura;
}

//ARROW FUNCTION
const calculaArea2 = (base: number, altura: number): number => base * altura;

//REST
function somar(... numerosRest: number[]): void{
    // numerosRest.reduce((numerosRest1)=>);
    console.log(somar);
}

function teste(): string | number{
    if(10 > 4){
        return 'Dez é maior que 4';
    }else {
        return 4
    }
}

let resultatoTeste = teste();