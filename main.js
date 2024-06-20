//const numb1 = document.querySelector('.first-number')
//const numb2 = document.querySelector('.sec-number')
//const btn = document.querySelector('.result')
//const resArea = document.querySelector('.resArea')
//
//function getDivisors(a) {
//    let array = []
//    for (let i = 1; i <= a; i++) {
//     if (a % i === 0) array.push(i)
//    }
//    return array
//}
//
//btn.addEventListener('click', () => {
//    let firstNumDivis = getDivisors(numb1.value)
//    let secNumDivis = getDivisors(numb2.value)
//    let resArray = []
//
//    let similars = firstNumDivis.forEach(item => secNumDivis.includes(item) ? resArray.push(item) : false
//    )
//    
//    resArea.textContent = Math.max(...resArray)
//})

//ИГРА УГАДАЙ ЧИСЛО
//const number = Math.floor(Math.random() * 100)
//
//const userInput = document.querySelector('.user-text')
//const btn = document.querySelector('.btn')
//const outputNode = document.querySelector('.output')
//
//btn.addEventListener('click', () => {
//    console.log(number)
//    if (userInput.value === '') outputNode.textContent = 'Ты не ввел число'
//    if (userInput.value > number) outputNode.textContent = 'Введи число поменьше'
//    if (userInput.value < number) outputNode.textContent = 'Введи число побольше'
//    if (userInput.value == number) outputNode.textContent = 'Верно!!!!'
//})

////ДОСТАЕМ РОДИТЕЛЬСКИЙ БЛОК
//const wrapperBlock = document.getElementById("wrapperBlock");
////ПОЛУЧАЕМ МАССИВ РАНДОМНЫХ ЯЧЕЕК
//function getRandCell() {
//    let cellsArr = []
//    for(let i = 0; i < 3; i++) {
//        cellsArr.push(Math.floor(Math.random() * 100))
//    }
//    return cellsArr.map(item => `number${item}`)
//}
////ЗАПОЛНЯЕМ РОДИТЕЛЬСКИЙ БЛОК СТА ДОЧЕРНИМИ ЯЧЕЙКАМИ
//window.onload = function(){
//  for(let i=1; i<=100; i++){
//    let square = document.createElement("div");
//    square.classList.add("square");
//      square.classList.add(`number${i}`)
//    square.innerText =" ";
//    
//    wrapperBlock.appendChild(square);
//  }  
//}
////СОХРАНЯЕМ В ПЕРЕМЕННУЮ МАССИВ ЯЧЕЕК И ОБЬЯВЛЯЕМ СЧЕТЧИК ПРАВИЛЬНЫХ ОТВЕТОВ
//let cells = getRandCell()
//let counter = 0
////ДОБАВЛЯЕМ СЛУШАТЕЛЬ, ВНУТРИ ПРОВЕРЯЕМ ЯЧЕЙКУ НА НАЛИЧИЕ КЛАССА, В ЗАВИСМОСТИ ОТ ЭТОГО ДОБАВЛЯЕМ КЛАСС
//wrapperBlock.addEventListener('click', event => {
//    console.log(event.target.classList)
//    console.log(cells)
//    for(let i = 0; i < cells.length; i++ ) {
//        if (event.target.classList.contains(`${cells[i]}`)) {
//            event.target.classList.add('green')
//            counter++
//        } else event.target.classList.add('red')
//    }
//})
////НЕРЕАЛИЗОВАН ТАЙМЕР ИГРЫ

const wrapperBlock = document.getElementById('wrapperBlock')
const inputNode = document.querySelector('.output')

window.onload = function(){
    const alphabet = 'qwertyuiopasdfghjklzxcvbnm,.- ?!:;[]{}&'
    let array = alphabet.split('').map(item => {
if (item === '&') return ''
        else return item
    })
    for(let i=0; i<39; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.classList.add(`char_${i}`)
    square.innerText =`${array[i]}`;
    wrapperBlock.appendChild(square);
  }
}

wrapperBlock.addEventListener('click', event => {
console.log(event.target.textContent)
    if (event.target.textContent == '') inputNode.style.textTransform = 'uppercase'
    inputNode.textContent += event.target.textContent
    
    
})