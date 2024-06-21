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


////ЭКРАННАЯ КЛАВИАТУРА
//const wrapperBlock = document.getElementById('wrapperBlock')
//const inputNode = document.querySelector('.output')
////ЗАПОЛНЯЕМ РОД. БЛОК ДОЧЕРНИМИ КНОПКАМИ С БУКВАМИ
//window.onload = function(){
//    const alphabet = 'qwertyuiopasdfghjklzxcvbnm,.- ?!:;[]{}&'
//    let array = alphabet.split('').map(item => {
//if (item === '&') return ''
//        else return item
//    })
//    for(let i=0; i<39; i++) {
//    let square = document.createElement("div");
//    square.classList.add("square");
//    square.classList.add(`char_${i}`)
//    square.innerText =`${array[i]}`;
//    wrapperBlock.appendChild(square);
//  }
//}
////СЛУШАТЕЛЬ СОБЫТИЯ ПЕЧАТАЮЩИЙ ВВОД В ДИВЕ АУТПУТ
//wrapperBlock.addEventListener('click', event => {
//console.log(event.target.textContent)
//    if (event.target.textContent == '') inputNode.style.textTransform = 'uppercase'
//    inputNode.textContent += event.target.textContent
//})


//РЕАЛИЗАЦИЯ КАКОГО_ТО ВСРАТОГО КАЛЕНДАРЯ, ТЗ НЕ ПОНЯЛ. ТАК ЧТО МОЖНО ЗАБИТЬ БОЛТ
//const month = document.querySelector('.month')
//
//window.onload = function() {
//for (let i = 1; i < 32; i++) {
//    let day = document.createElement('li')
//    day.classList.add(`day${i}`)
//    day.textContent = `${i}`
//    month.appendChild(day)
//}
//}

//ПОСКОВИК ПО ТЕГАМ
//const userInput = document.querySelector('.search')
//const btn = document.querySelector('.button')
//const output = document.querySelector('.result')
//ОБЬЕКТ ДЛЯ ХРАНЕНИЯ ОПИСАНИЙ ТЕГОВ
//const tags = {
//    html: 'Указывает программе просмотра страниц, что это HTML документ.',
//    head: 'Определяет место, где помещается различная информация не отображаемая в теле документа. Здесь располагается тег названия документа и теги для поисковых машин.',
//    body: 'Определяет видимую часть документа',
//    title: 'Помещает название документа в оглавление программы просмотра страниц',
//}
//
////ОБРАБОТЧИК СОБЫТИЯ ВЫВОДЯЩИЙ ОПИСАНИЕ ТЕГА
//btn.addEventListener('click', event => {
//    if (userInput.value == '') output.textContent = 'Вы ничего не ввели' 
//    else output.textContent = tags[userInput.value]
//})

const events = {
    '2022': {
        'СВО': '24 февраля Россия вероломно напала на УКраину.',
        'Смерть Елизаветы': '8 сентября на 97 году жизни скончалась королева Велткобритании ЕлизаветаII',
        'Маск и Твиттер': 'В конце октября американский миллиардер Илон Маск закрыл сделку по приобретению Twitter, заплатив за нее 44 иллиарда долларов'
    },
    '2021': {
        'Реальный срок Навальному': 'Суд согласился с доводами ФСИН и заменил Навальному условный срок на реальные 2 года'
    }
}

const inputNode = document.getElementById('input')
const table = document.getElementById('table')

inputNode.addEventListener('keydown', event => {
    if (event.key === 'enter' && inputNode.value !== '2022') {
        const eventKey = document.createElement('td')
        const eventDescr = document.createElement('td')
        eventKey.textContent = events[2022]['СВО']
        table.appendChild(eventKey)
    }
})