const perguntas = [
    {
        pergunta: "Quem é o sucessor do profeta Elias?",
        respostas: [
            "Samuel",
            "Eliseu",
            "Saul"
        ],
        correta: 1
    },
    {
        pergunta: "Mulher por quem Sansão se apaixonou?",
        respostas: [
            "Ana",
            "Raquel",
            "Dalila"
        ],
        correta: 2
    },
    {
        pergunta: "Neto de Arão que traspassou Zinri e Cosbi com uma lança, por ‘não tolerar rivalidade para com Jeová’?",
        respostas: [
            "Josué",
            "Absalão",
            "Finéias"
        ],
        correta: 2
    },
    {
        pergunta: "Qual Profeta de Jeová incentivou os israelitas a ‘rasgar os corações e não as vestes, e retornar a Jeová’?",
        respostas: [
            "Samuel",
            "Joel",
            "Habacuque"
        ],
        correta: 1
    },
    {
        pergunta: "Primeiro juiz citado por nome depois de Josué?",
        respostas: [
            "Sansão",
            "Davi",
            "Otniel"
        ],
        correta: 2
    },
    {
        pergunta: "Uma das esposas de Abraão, mãe de seis filhos?",
        respostas: [
            "Agar",
            "Quetura",
            "Midiã"
        ],
        correta: 1
    },
    {
        pergunta: "Profissional egípcio morto durante a celebração de aniversário de Faraó?",
        respostas: [
            "Cozinheiro",
            "Copeiro",
            "Padeiro"
        ],
        correta: 2
    },
    {
        pergunta: " Primeira cidade cananéia conquistada pelos israelitas?",
        respostas: [
            "Sodoma",
            "Caná",
            "Jericó"
        ],
        correta: 2
    },
    {
        pergunta: "Serva de Raquel e esposa secundária de Jacó?",
        respostas: [
            "Léia",
            "Bila",
            "Miriã"
        ],
        correta: 1
    },
    {
        pergunta: "Rei de Israel, avô de Atalia?",
        respostas: [
            "Itai",
            "Acazias",
            "Onri"
        ],
        correta: 2
    },
];



const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de ' + totalDePerguntas


// loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        //seleciona 1 resposta de cada pergunta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

            // Verifica se todas as respostas estão corretas
            if (corretas.size === totalDePerguntas) {
                startConfettiAnimation();
            }
        }


        quizItem.querySelector('dl').appendChild(dt)



    }

    quizItem.querySelector('dl dt').remove()


    // coloca a pergunta na tela
    quiz.appendChild(quizItem)


}

function startConfettiAnimation() {
    var confetti = document.getElementById('confetti');
    confetti.innerHTML = '';
    var colors = ['#29088A', '#0431B4', '#0174DF', '#01A9DB', '#088A85', '#04B486', '#CECEF6', '#CEE3F6']; // Lista de cores para os quadradinhos

    for (var i = 0; i < 200; i++) {
        var confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Escolhe uma cor aleatória da lista
        confettiPiece.style.animationDelay = Math.random() * 8 + 's';
        confetti.appendChild(confettiPiece);
    }
}








