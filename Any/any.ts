const a:string = '888';
const b:string[] = ['Pedro'];

const result = a + b;
console.log(result);

// exemplo 2: quando o tipo any é inferido implicitamente
let frase;
frase = "Isso é uma string agora.";
console.log(frase);

//exemplo 3: quando devemos usar o tipo any

const formulario:{[campoFormulario: string]:any} = {
    nome: "Pedro",
    idade: 20,
    profissao: "Desenvolvedor"

};


console.log(formulario);

const pessoa: {[dadosPessoais:string]: any} = {
    nome : 'joao',
    idade :32,
    sobrenome : 'silva'
}

const contaBancaria: {[dadosConta:string]: any} = {
    agencia : '0001',
    conta : '123456-7',
    saldo : 1000
}

pessoa.contaBancaria = contaBancaria;
contaBancaria.saldo += 500;

console.log(pessoa);

