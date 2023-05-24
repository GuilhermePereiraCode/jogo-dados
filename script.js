let dados = ['imagens/dice1.png', 'imagens/dice2.png', 'imagens/dice3.png', 'imagens/dice4.png', 'imagens/dice5.png', 'imagens/dice6.png']

let n1 = Math.floor(Math.random() * 6)
let n2 = Math.floor(Math.random() * 6)

let dadoJ1 = dados[n1]
let dadoJ2 = dados[n2]

document.getElementById('dadoJogador1').setAttribute('src', dadoJ1)
document.getElementById('dadoJogador2').setAttribute('src', dadoJ2)

if (n2 > n1){
    document.querySelector('h1').textContent = "Jogador 2 ganhou"
}else if (n2 === n1){
    document.querySelector('h1').textContent = "Empate"
    document.querySelector('h1').classList.add('empate')
}
