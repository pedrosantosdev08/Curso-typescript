// 1. Array de strings (método comum)
let frutas: string[] = ["Maçã", "Laranja", "Banana"];

// 2. Array de números (usando a sintaxe genérica)
let idades: Array<number> = [25, 30, 22];

// 3. Array de tipos mistos (string ou número)
let valoresMistos: (string | number)[] = ["Texto", 10, "Outro Texto", 20];

// 4. Array de objetos (com uma classe ou interface)
interface Pessoa {
  nome: string;
  idade: number;
}
let pessoas: Pessoa[] = [
  { nome: "Ana", idade: 28 },
  { nome: "Carlos", idade: 35 }
];

// 5. Array vazio (você pode especificar o tipo)
let listaVazia: string[] = [];

// 6. Array somente leitura (readonly)
const cores: readonly string[] = ["Vermelho", "Verde"];
// cores.push("Azul"); // Isso geraria um erro, pois é somente leitura [15].

// 7 adicionar e remover elementos a um array

let livros: string[] = ["Livro A", "Livro B"];
console.log(livros);
// Adicionar um elemento
livros.push("Livro C"); // livros agora é ["Livro A", "Livro B", "Livro C"]
console.log(livros);

// Remover o último elemento
const ultimoLivro = livros.pop(); // ultimoLivro é "Livro C", livros agora é ["Livro A", "Livro B"]
console.log(livros);