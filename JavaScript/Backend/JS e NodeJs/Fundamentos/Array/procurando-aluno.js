const alunos = ["João", "Juliana", "Ana", "Caio"];

const medias = [10, 7, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(alunos){
    if (listaDeAlunosEMedias[0].includes(alunos)) {

        const indice = listaDeAlunosEMedias[0].indexOf(alunos);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice]

        console.log(`${alunos} tem a média ${mediaDoAluno}`);

    } else {
        console.log("Aluno não encontrado")
    }
};

exibeNomeENota("João");
exibeNomeENota("Ana");