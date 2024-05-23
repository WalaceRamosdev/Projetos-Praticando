/* Para iniciarmos o nosso carrossel automático, devemos buscar todas as nossas ids e classes no nosso HTML. 
Vamos buscá-los através do document.getElementById e também através do querySelectorAll...
*/

const imgs = document.getElementById('img')

/* Esta constante irá buscar os itens que estão dentro de determinada id ou class, que no caso, são as imagens definidas pela tag <img> */

const img = document.querySelectorAll("#img img")

/* Aqui vamos estar definindo uma variável para selecionar o inicio do carrossel */

let idx = 0

/* Esta é a function responsável por todo o funcionamento do carrossel */

const carrossel = () => {

    /* Aqui estamos dizendo que algo está sendo adicionado para a variável */

    idx++;

    /* Esta condição esta dizendo o seguinte : Se a variável for maior que img - 1, então ele deve retornar ao ponto inicial, ou para nossa primeira imagem */

    if(idx > img.length - 1) {
        idx = 0
    }

    /* Aqui estamos passando a forma com que as imagens devem se comportar, ou seja, de qual forma elas devem passar de uma para outra e a forma com que se deve reiniciar o processo */

    imgs.style.transform = `translateX(${-idx * 500}px)`

}

/* Este será o intervalo de tempo em milisegundos que cada imagem será exibida, um tempo aconselhável é entre 1800 - 2500
*/ 

setInterval(carrossel, 2500)