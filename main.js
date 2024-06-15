const button = document.querySelector('.add_todo')
const list = document.querySelector('#toDo_list')
let counter = 0


button.textContent = "Добавить"

button.addEventListener('click', () => {
    
    const userAnswer = prompt('Что надо сделать?')
    addTodo(userAnswer)
    
})

function addTodo(todo) {
    const newElem = document.createElement('div');
    newElem.textContent = todo;
    list.appendChild(newElem);
    
    counter++
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Удалить";
    deleteBtn.setAttribute('class', `${counter}`)
    newElem.appendChild(deleteBtn)
}

// остановились на том что думали как дать уникальный идентификатор/класс добавляемой кнопке удаления