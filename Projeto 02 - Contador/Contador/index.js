/* Para iniciarmos o nosso contador, vamos antes buscar nossos arquivos dentro do HTML, para isso, vamos estar buscando seus ids usando o getElementById
*/

const value = document.getElementById('value')
const moreButton = document.getElementById('plus')
const anyButton = document.getElementById('any')
const reset = document.getElementById('reset')

/* Iremos criar duas variáveis 'let' para o contador e para o intervalo  de valores */

let count = 0
let intervalId = 0

/* Agora vamos criar uma função para atualizar o HTML do valor clicado na tela.
Vamos estar buscando o value e adicionando um innertHTML e fazer com que ele receba o valor de count
*/

const updateValue = () => {
    value.innerHTML = count
}

/* Vamos estar agora adicionando um evento ao botão com sinal de +.
Iremos adicionar o evento de 'mousedown' que entende que enquanto estivermos com o botão do mouse pressionado, estará sendo adicionado ao contador o valor de +1.
Logo em seguida, iremos chamar a função updateValue para o valor ser mostrado na tela.
Este mesmo evento pode ser adicionado ao botão de -, porem, precisamos estar atentos para alterar o nome da variavel e o sinal de += e -=.
Ao final, o setInterval será setado em 100 para que o evento de mouse ocorra em determinado tempo estipulado.
*/

moreButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1
        updateValue()
    }, 100)
})

anyButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1
        updateValue()
    }, 100)
})

/* Precisamos agora, criar uma função para que o javaScript entenda quando estaremos soltando mouse. Para isso, vamos criar mais um evento, desta vez será o 'mouseup' onde ele irá limpar todo o intervalo estipulado acima
*/

document.addEventListener('mouseup', () => clearInterval(intervalId));


/* Agora iremos criar a função para o botão de reset.
Ele será muito parecido com os outrs dois botões que acabamos de configurar, porém, ao inves de usarmos o evento 'mousedown', iremos utilizar o evento 'click'.
Vamos chamar a variável count para idicar que ela precisa retornar a contagem para 0, e por fim iremos chamar a função updateValue para exibirmos o valor
*/

reset.addEventListener('click', () => {
    count = 0
    updateValue()
})
