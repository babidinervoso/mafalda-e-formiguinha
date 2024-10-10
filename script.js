let continuar = true;
let tituloLivro = "";
let disponivel = true;

while (continuar) {
    // Solicita ao usuário uma opção
    let opcao = parseInt(prompt("Digite 1 para registrar um livro, 2 para emprestar o livro, 3 para devolver o livro, ou -1 para sair: "));

    // Estrutura condicional: switch
    switch (opcao) {
        case -1:
            // Caso o usuário digite -1, o loop é encerrado
            continuar = false;
            break;
        case 1:
            // Solicita o título do livro que o usuário deseja registrar
            tituloLivro = prompt("Digite o título do livro que deseja registrar: ");
            alert(`Livro registrado: ${tituloLivro}`);
            break;
        case 2:
            // Verifica se há um livro registrado
            if (tituloLivro === "") {
                alert("Nenhum livro registrado.");
            } else if (disponivel) {
                // Empresta o livro se estiver disponível
                disponivel = false;
                alert(`Você emprestou o livro: ${tituloLivro}`);
            } else {
                // Informa que o livro não está disponível
                alert(`O livro ${tituloLivro} não está disponível.`);
            }
            break;
        case 3:
            // Verifica se há um livro registrado
            if (tituloLivro === "") {
                alert("Nenhum livro registrado.");
            } else if (!disponivel) {
                // Devolve o livro se estiver emprestado
                disponivel = true;
                alert(`Você devolveu o livro: ${tituloLivro}`);
            } else {
                // Informa que o livro já está disponível
                alert(`O livro ${tituloLivro} já está disponível.`);
            }
            break;
        default:
            // Caso o usuário digite uma opção inválida
            alert("Opção inválida.");
    }
}

// Estrutura de repetição: do while
let i = 0;
do {
    // Exibe a lista de livros e sua disponibilidade
    if (tituloLivro !== "") {
        alert(`Livro: ${tituloLivro}, Disponível: ${disponivel}`);
    } else {
        alert("Nenhum livro registrado.");
    }
    i++;
} while (i < 1);

// Estrutura de repetição: for
for (let j = 0; j < 1; j++) {
    // Exibe a lista de livros e sua disponibilidade novamente
    if (tituloLivro !== "") {
        alert(`Livro: ${tituloLivro}, Disponível: ${disponivel}`);
    } else {
        alert("Nenhum livro registrado.");
    }
}
