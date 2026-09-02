
// ========================================
// FASE 1 - Sistema iniciado
// ========================================

console.log("Sistema iniciado!");


// ========================================
// FASE 2 - Variáveis
// ========================================

let nome = "João";
let idade = 16;
let curso = "Informática";

console.log(nome);
console.log(idade);
console.log(curso);


// Mostrando as informações na página
document.getElementById("nomeInfo").textContent = nome;
document.getElementById("idadeInfo").textContent = idade;
document.getElementById("cursoInfo").textContent = curso;


// ========================================
// FASE 4 - ARRAY
// ========================================

let alunos = [
    {
        nome: "João",
        idade: 16
    },
    {
        nome: "Maria",
        idade: 17
    }
];


// ========================================
// FASE 6 - Mostrar alunos
// ========================================

function mostrarAlunos() {

    let lista = document.getElementById("listaAlunos");

    lista.innerHTML = "";

    // FOR para percorrer o array
    for (let i = 0; i < alunos.length; i++) {

        let aluno = document.createElement("li");

        // ========================================
        // FASE 3 - IF / ELSE
        // ========================================

        let situacao;

        if (alunos[i].idade >= 18) {
            situacao = "Maior de idade";
        } else {
            situacao = "Menor de idade";
        }

        aluno.textContent =
            alunos[i].nome +
            " - " +
            alunos[i].idade +
            " anos (" +
            situacao +
            ")";

        lista.appendChild(aluno);
    }

    // Contador
    document.getElementById("totalAlunos").textContent =
        "Total de alunos: " + alunos.length;
}


// ========================================
// FASE 7 e 8 - FORMULÁRIO + FUNÇÃO
// ========================================

function cadastrarAluno() {

    // Pegando os valores digitados
    let nomeDigitado = document.getElementById("nome").value;
    let idadeDigitada = document.getElementById("idade").value;

    let mensagem = document.getElementById("mensagem");


    // ========================================
    // VALIDAÇÃO - IF / ELSE
    // ========================================

    if (nomeDigitado === "" || idadeDigitada === "") {

        mensagem.textContent = "Preencha todos os campos.";

        return;
    }


    // Transformando idade em número
    idadeDigitada = Number(idadeDigitada);


    // ========================================
    // PUSH - adicionando aluno
    // ========================================

    alunos.push({
        nome: nomeDigitado,
        idade: idadeDigitada
    });


    mensagem.textContent =
        "Aluno cadastrado com sucesso!";


    // Atualiza a lista
    mostrarAlunos();


    // Limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
}


// ========================================
// BOTÃO
// ========================================

document
    .getElementById("btnCadastrar")
    .addEventListener("click", cadastrarAluno);


// ========================================
// CARREGAR LISTA INICIAL
// ========================================

mostrarAlunos();
