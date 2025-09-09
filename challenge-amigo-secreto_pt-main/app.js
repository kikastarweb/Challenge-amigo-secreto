// Lista que vai armazenar os nomes adicionados
let amigos = [];

// Função para adicionar nomes
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome == "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

// Atualiza a lista de nomes na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    // Copiamos o array para sortear
    let sorteio = [...amigos];

    // Embaralha o array (Fisher-Yates Shuffle)
    for (let i = sorteio.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
    }

    // Garante que ninguém tire a si mesmo
    let valido = true;
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] == sorteio[i]) {
            valido = false;
            break;
        }
    }

    if (!valido) {
        return sortearAmigo(); // Refaz o sorteio se der conflito
    }

    // Mostra o resultado na tela
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${amigos[i]} → ${sorteio[i]}`;
        resultado.appendChild(li);
    }
}