
let input = document.querySelector('input')

input.addEventListener('keydown', addTask)

function addTask(event) {
    if (event.key === 'Enter' && event.target.value.length > 0) {
        let divTask = document.createElement('div')
        divTask.className = ('taskBox')
        divTask.innerHTML = ('<input type="checkbox"><span class=textTask></span>')
        document.body.appendChild(divTask)
        divTask.querySelector('.textTask').innerText = event.target.value
        event.target.value = ''

        divTask.addEventListener('click', changeText)

        if (document.body.querySelectorAll('button').length < 1) {
            let remBut = document.createElement('button')
            let editBut = document.createElement('button')
            editBut.innerText = ('Edit')
            editBut.className = ('edit')
            remBut.innerText = ('Remove all')
            document.querySelector('.toDolist').appendChild(remBut)
            document.querySelector('.toDolist').appendChild(editBut)
            remBut.addEventListener('click', remAll)

            editBut.addEventListener('click', editArr)
        }
    }
}

function changeText() {
    this.lastElementChild.classList.toggle('line')
    if (!this.firstElementChild.checked){
        this.firstElementChild.setAttribute('checked','checked')
    } else this.firstElementChild.removeAttribute('checked')
}

function remAll() {
    for(key of document.querySelectorAll('.taskBox')) {
        key.outerHTML = ''
    }
        this.nextElementSibling.outerHTML = '';

    this.outerHTML = '';
}

function editArr() {
    let arr = []
    let whichTask = prompt('Which task do you want to edit? (1, 2, 3, 4 ....)');


    for(elem of document.querySelectorAll('.textTask')) {
        arr.push(elem)
    }
    if (whichTask > arr.length) {
        alert('no')
    } else {
        let newTask = prompt(arr[whichTask - 1].innerText)
    arr[whichTask - 1].innerText = newTask
    }
}   