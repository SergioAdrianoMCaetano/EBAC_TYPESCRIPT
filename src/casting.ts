// - CRIANDO CASTING
// 	* Dominar as técnicas de conversão de tipos no TypeScrip;
// 	* Evitar erros de conversão de tipos e problemas de segurança.
namespace casting{
    let idade: any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x =>{
        console.log(x);
    });

    let nome : string = 35 as unknown as string;
}