let x = document.getElementById("text1")

function cancel() {
    x.value = " "
}

function del() {
    x.value = x.value.slice(0, - 1)
}

function num(number) {
    x.value += number
}

function num1() {
    x.value = Math.pow(x.value, 2)
}

function num2() {
    x.value /= 100
}

function num3() {
    x.value = 1 / x.value
}

function root() {
    x.value = Math.sqrt(x.value)
}

function solve() {
    if (x.value.includes('+')) {
        let operands = x.value.split('+')
        x.value = Number(operands[0]) + Number(operands[1]);
    }
    else if (x.value.includes('-')) {
        let operands = x.value.split('-')
        x.value = Number(operands[0]) - Number(operands[1])
    }

    else if (x.value.includes('/')) {
        let operands = expression.split('/')
        x.value = Number(operands[0]) / Number(operands[1])
    }

    else if (x.value.includes('*')) {
        let operands = x.value.split('*')
        x.value = Number(operands[0]) * Number(operands[1])
    }

}

let btn = document.getElementById('button')
let change = true
document.getElementById('first')

function button() {
    if (change == true) {
        btn.innerText = 'off'
        btn.style.backgroundColor = 'white'
        document.getElementById('text1').value = ''
        document.getElementById('text1').style.display = 'block'
        change = false
    }

    else if (change == false) {

        btn.innerText = 'on'
        btn.style.backgroundColor = ' green'
        document.getElementById('text1').value = ''
        document.getElementById('text1').style.display = 'none'
        change = true
    }
}