const button = document.querySelector('.add_todo')
const list = document.querySelector('#toDo_list')


button.textContent = "Добавить"

button.addEventListener('click', () => {
    
    const userAnswer = prompt('Что надо сделать?')
    addTodo(userAnswer)
    
})

function addTodo(todo) {
    const newElem = document.createElement('div');
    newElem.textContent = todo;
    list.appendChild(newElem);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Удалить";
    deleteBtn.setAttribute('class', `${todo}`)
    newElem.appendChild(deleteBtn)
}

// остановились на том что думали как дать уникальный идентификатор/класс добавляемой кнопке удаления