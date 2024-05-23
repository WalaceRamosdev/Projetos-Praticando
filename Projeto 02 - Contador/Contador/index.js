const moreButton = document.getElementById('plus')
const anyButton = document.getElementById('any')
const reset = document.getElementById('reset')
const value = document.getElementById('value')

let count = 0
let interval = 0

const updateValue = () => {
    value.innerHTML = count
}

moreButton.addEventListener('mousedown', () => {
    interval = setInterval(() => {
        count += 1
        updateValue()
    }, 55)
})

anyButton.addEventListener('mousedown', () => {
    interval = setInterval(() => {
        count -= 1
        updateValue()
    }, 55)
})

reset.addEventListener('click', () => {
    count = 0
    updateValue()
})

document.addEventListener('mouseup', () => clearInterval(interval))