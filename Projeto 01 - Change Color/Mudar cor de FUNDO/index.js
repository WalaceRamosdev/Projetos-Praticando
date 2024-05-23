const colors = ['Red', 'Blue', 'Grey', 'Yellow', 'Green', 'Cyan' , 'Orange', 'Pink', 'Purple', 'Brown', 'Aqua', 'Aquamarine']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

const getRandomColor = () => {
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener('click', () => {
    const randomColor = getRandomColor()
    document.body.style.background = colors [randomColor]
    color.textContent = colors [randomColor]
})