

/* De inicio, precisamos definir uma variável que vai estar guardando todas as cores que irão aparecer na página de nosso site, afinal, o javascript não irá criar uma cor do nada, precisamos deixar elas definidas para que assim possamos estar utilizando elas quando quisermos */

const colors = ['Red', 'Blue', 'Grey', 'Yellow', 'Green', 'Cyan' , 'Orange', 'Pink', 'Purple', 'Brown', 'Aqua', 'Aquamarine']

/* Agora iremos criar uma variável para o botão que será peça fundamental para mudança das cores na nossa página */

const btn = document.getElementById('btn')

/* Logo abaixo, teremos a variável que será responsável por enviar o nome da cor selecionada.
Ela fará com que a cor que for gerada tenha seu nome associado e apresentado no HTML */

const color = document.querySelector('.color')

/* Nesta parte, iremos dar sentido para o button de nossa página, faremos com que ele aguarde um evento dentro do HTML para assim, estar fazendo o que lhe é proposto, que é trocar a cor de fundo da nossa página. Para isso, vamos estar adicionando um eventListener a ele com a variavel de cores que listamos mais acima.
Esse processo ocorrerá sempre que um click for feito no botão da página */

btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.background = colors [randomColor]

    /* Aqui iremos chamar a variável color para que o nome da cor seja associada e enviada para a parte principal da página */

    color.textContent = colors[randomColor]
})

/* Aqui iremos criar uma fuction que será chamada logo acima no nosso código para estar gerando assim, uma cor aleatória.
Para isso, iremos criar a nossa function que irá retornar a cor aleatória, para isso, iremos utilizar o método Math.random, mas iremos usá-lo dentro de outro Math, que é o Math.floor...
O Math.random irá nos retornar números fracionados, que não é interessante para nosso uso, aqui, precisamos de números inteiros, por isso devemos usá-lo dentro de Math.floor 

Logo após definirmos nossos métodos, precisamos retornar todas as cores que irão ser selecionandas aleatóriamente, para isso, logo após o Math.random, iremos multiplá-lo pela variável colors.lenght, que dirá a quantidade exata de objetos dentro da variável colors.

*/

function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}