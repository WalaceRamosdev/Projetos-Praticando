/* Para iniciarmos, devemos definir quais cores irão fazer parte do nosso projeto. Elas serão postas dentro de uma array */

const colors = ['Red', 'Blue', 'Grey', 'Yellow', 'Green', 'Cyan' , 'Orange', 'Pink', 'Purple', 'Brown', 'Aqua', 'Aquamarine']

/* Aqui abaixo iremos puxar os itens que iremos trabalhar dentro do nosso HTML através do JavaScript.
Iremos puxa-los através de seus id e sua classe */

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

/* Esta function será responsavel por toda a seleção aleatória das cores que serão passadas para o backgroun.
Iremos utilizar dois Math para termos o resultado desejado */

/* Caso usassemos apenas o Math.random teriamos o retorno de números fracionados o que não é interessante para nós, para resvolermos isto, iremos utilizar ele dentro de outro math, o Math.floor, que irá forçar o retorno de números inteiros...logo após iremos puxar as cores selecionadas na nossa primeira const, puxadas as cores, iremos usar o 
.length para usarmos todas as cores que estão dentro da array */

const getRandomColor = () => {
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener('click', () => {
    const randomColor = getRandomColor()
    document.body.style.background = colors [randomColor]
    color.textContent = colors [randomColor]
})