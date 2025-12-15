enum Idiomas {
    Portugues,
    Espanhol,
    Frances,
    Ingles
}

console.log(Idiomas)

// exemplo 2 - String Enums

enum Cores {
    VERMELHO = "Vermelho",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo"
}

// exemplo 3 - como podemos acessar um valor de enum com uma chave (const)

const enum Comida {
    LASANHA = "Lasanha",
    PIZZA = "Pizza",
    HAMBURGUER = "Hamburguer"   
}

function comida(comida: Comida){
    return 'comidas muito apetitosas';

}

console.log(comida(Comida.LASANHA));

// exemplo 4 - quando usar enum

enum Tarefa {
    PENDENTE,
    EM_ANDAMENTO,
    CONCLUIDA,
    CANCELADA
}

const tarefaConcluida = {
    id: 1,
    status: Tarefa.CONCLUIDA,
    descricao: "Finalizar o relatório mensal"
};

if(tarefaConcluida.status === Tarefa.EM_ANDAMENTO){
    console.log(`A tarefa ${tarefaConcluida.id} está EM_ANDAMENTO.`);
}