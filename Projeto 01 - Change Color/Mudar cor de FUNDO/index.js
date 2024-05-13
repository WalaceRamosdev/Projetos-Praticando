/* Na nossa primeira variável, vamos estar adicionando as cores que vao ser selecionadas aleatoriamente pelo javascript */

const colors = ['Red', 'Blue', 'Grey', 'Yellow', 'Green', 'Cyan' , 'Orange', 'Pink', 'Purple', 'Brown', 'Aqua', 'Aquamarine']

/* Agora, iremos criar a variável para o botão da página puxando direto de sua id no nosso HTML */

const btn = document.getElementById('btn')

/* Por fim, vamos estar adicinando a ultima variável de nosso span, aonde aparecerá o nome da cor atul da página...usaremos a classe que está atribuida a ele no HTML, portando, utilizaremos o querySelector para isso 
*/

const color = document.querySelector('.color')

/* Aqui iremos criar no função responsável pela seleção aleatória das cores listas na nossa primeira variável. Utilizaremos dois métodos Math juntos, floor e random.
O método Math.random é responsável por retornar números aleatórios para a console.log, o que não é interessante para nosso uso no momento, ja que temos itens dentro de uma array na primeira variável, e o que precisamos é de números inteiros, aí que o método Math.floor é empregado. Quando utilizamos o Math.random dentro de Math.floor, nos é retornado números inteiros, agora para termos a quantidade exata de cores dentro da nossa array, iremos multiplicar o Math.random pela variável colors.length (length = é a quantidade de objetos ou itens dentro da array, por isso, caso alguma cor seja adicionada ou removida da array, automaticamente ela é informada a função que a quantidade foi alterada)
*/


function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}

/* Para que tudo aconteça, vamos finalmente integrar a função ao button da página, para isso, iremos adicinar um evento que vá acontecer com o button, ou seja, o javascript irá estar aguardando este evento para que possa rodar a função, neste caso, iremos adicionar o evento 'click' ao evento, logo ao lado iremos adicionar uma outra função para que as demais coisas venham rodar na página.
Iremos criar mais uma variável, que irá recebera function que criamos logo  acima, após isso, precisamos dizer o que essa função irá fazer, que no caso será ir até o documento da página HTML, encontrar o arquivo body que está dentro de style e assim chegarmos até o background que é o que será alterado. 
Para termos uma página mais dinâmica, iremos também enviar o nome da cor atual para ser exibida, e para isso, iremos utilizar a variável color que foi criada no inicio de do script, nela iremos adicionar o text.Content que irá receber também a variável 
colors [randomColor]
*/

btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors [randomColor]
    color.textContent = colors [randomColor]
})