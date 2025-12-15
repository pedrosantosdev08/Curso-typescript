
//exemplo 1 - tupla
let usuario: string[] = ["Ana", "Bruno", "Carlos"];

console.log(usuario);

//exemplo 2 - tupla labeled
let usuario1: [string , string , string] = ["Bruno", "Bruno", "Carlos"];

console.log(usuario1);

// exemplo 3 - tupla com spread operator

let usuario2: [string, ...string[]] = ["Mayara", "Maysa", "Pedro"," Manu"];
console.log(usuario2);



// exemplo 4 - tupla com tipos diferentes

let usuario3: [number, boolean, ...string[]] = [2, false, ...usuario];
console.log(usuario3);

// exemplo 5 - tupla com função

function listarUsuarios(nomes: string[], idades: number[]){
    return [...nomes, ...idades];
}

let resultado = listarUsuarios(["Ana", "Bruno", "Carlos"], [23, 45, 32]);
console.log(resultado);

// exemplo 6 - labeled tuple com spread operator na função

type Nome =
 [primeiroNome: string, sobrenome:string]    |   [primeiroNome: string, nomeDoMeio:string, sobrenome:string];


function criarUsuario(...nome: Nome){
    return [...nome];
}

console.log(criarUsuario("Bruno", "Silva"));
console.log(criarUsuario("Bruno", "Costa", "Silva"));