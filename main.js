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
//////НЕРЕАЛИЗОВАН ТАЙМЕР ИГРЫ


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

//const events = {
//    '2022': {
//        'СВО': '24 февраля Россия вероломно напала на УКраину.',
//        'Смерть Елизаветы': '8 сентября на 97 году жизни скончалась королева Велткобритании ЕлизаветаII',
//        'Маск и Твиттер': 'В конце октября американский миллиардер Илон Маск закрыл сделку по приобретению Twitter, заплатив за нее 44 иллиарда долларов'
//    },
//    '2021': {
//        'Реальный срок Навальному': 'Суд согласился с доводами ФСИН и заменил Навальному условный срок на реальные 2 года'
//    }
//}
//
//const inputNode = document.getElementById('input')
//const table = document.getElementById('table')
//
//inputNode.addEventListener('keydown', event => {
//    if (event.key === 'enter' && inputNode.value !== '2022') {
//        const eventKey = document.createElement('td')
//        const eventDescr = document.createElement('td')
//        eventKey.textContent = events[2022]['СВО']
//        table.appendChild(eventKey)
//    }
//})

//JS ДЛЯ ГОРОСКОПА
//const radio = document.querySelectorAll('.day')
//const select = document.querySelector('.select')
//
//window.addEventListener('click', () => {
//    let data = null;
//for (let i = 0; i < radio.length; i++) {
//    if (radio[i].checked) {
//        data = radio[i].value
//    }
//}
//})
//
//const signs = {
//    
//}

////САЙТ ПРЕДСКАЗАНИЙ
//const startBtn = document.querySelector('#start')
//const timer = document.querySelector('#timer')
//const stopBtn = document.querySelector('#stop')
//const container = document.querySelector('#parent')
//
//ОБЬЕКТ С ПРЕДСКАЗАНИЯМИ
//const wishes = {
//    0: 'хуй за щеку получишь скоро',
//    1: 'За твоей дверью уже стоит счастье',
//    2: 'Внимательно следи за своим здоровьем',
//    3: 'Интуиция не подведет тебя в этом году',
//    4: 'Совсем скоро ты встретишь интересного человека',
//    5: 'Твоя будущая любовь ждет своего часа',
//    6: 'Повезет в денежных вопросаx',
//    7: 'Будешь много плакать, но только от радости',
//    8: 'Тебя ожидает интересная поездка',
//    9: 'В любом начинании будет преследовать удача',
//}
//
//start.addEventListener('click', () => {
//
//    let randomizer = setInterval(() => {
//        let number = Math.floor(Math.random() * 10)
//        timer.textContent = number
//    }, 100)
//
//    startBtn.classList.remove('active')
//    stopBtn.classList.add('active')
//    
//    stopBtn.addEventListener('click', () => {
//    clearInterval(randomizer)
//    stopBtn.classList.remove('active')
//    const output = document.createElement('div')
//    output.textContent = wishes[timer.textContent]
//    container.appendChild(output)
//})
//})

////АВТОЗАПОЛНЕНИЕ
//const userInput = document.getElementById('elem')
//const countries = [
//	"Afghanistan",
//	"Albania",
//	"Algeria",
//	"American Samoa",
//	"Andorra",
//	"Angola",
//	"Anguilla",
//	"Antarctica",
//	"Antigua and Barbuda",
//	"Argentina",
//	"Armenia",
//	"Aruba",
//	"Australia",
//	"Austria",
//	"Azerbaijan",
//	"Bahamas (the)",
//	"Bahrain",
//	"Bangladesh",
//	"Barbados",
//	"Belarus",
//	"Belgium",
//	"Belize",
//	"Benin",
//	"Bermuda",
//	"Bhutan",
//	"Bolivia (Plurinational State of)",
//	"Bonaire, Sint Eustatius and Saba",
//	"Bosnia and Herzegovina",
//	"Botswana",
//	"Bouvet Island",
//	"Brazil",
//	"British Indian Ocean Territory (the)",
//	"Brunei Darussalam",
//	"Bulgaria",
//	"Burkina Faso",
//	"Burundi",
//	"Cabo Verde",
//	"Cambodia",
//	"Cameroon",
//	"Canada",
//	"Cayman Islands (the)",
//	"Central African Republic (the)",
//	"Chad",
//	"Chile",
//	"China",
//	"Christmas Island",
//	"Cocos (Keeling) Islands (the)",
//	"Colombia",
//	"Comoros (the)",
//	"Congo (the Democratic Republic of the)",
//	"Congo (the)",
//	"Cook Islands (the)",
//	"Costa Rica",
//	"Croatia",
//	"Cuba",
//	"Curaçao",
//	"Cyprus",
//	"Czechia",
//	"Côte d'Ivoire",
//	"Denmark",
//	"Djibouti",
//	"Dominica",
//	"Dominican Republic (the)",
//	"Ecuador",
//	"Egypt",
//	"El Salvador",
//	"Equatorial Guinea",
//	"Eritrea",
//	"Estonia",
//	"Eswatini",
//	"Ethiopia",
//	"Falkland Islands (the) [Malvinas]",
//	"Faroe Islands (the)",
//	"Fiji",
//	"Finland",
//	"France",
//	"French Guiana",
//	"French Polynesia",
//	"French Southern Territories (the)",
//	"Gabon",
//	"Gambia (the)",
//	"Georgia",
//	"Germany",
//	"Ghana",
//	"Gibraltar",
//	"Greece",
//	"Greenland",
//	"Grenada",
//	"Guadeloupe",
//	"Guam",
//	"Guatemala",
//	"Guernsey",
//	"Guinea",
//	"Guinea-Bissau",
//	"Guyana",
//	"Haiti",
//	"Heard Island and McDonald Islands",
//	"Holy See (the)",
//	"Honduras",
//	"Hong Kong",
//	"Hungary",
//	"Iceland",
//	"India",
//	"Indonesia",
//	"Iran (Islamic Republic of)",
//	"Iraq",
//	"Ireland",
//	"Isle of Man",
//	"Israel",
//	"Italy",
//	"Jamaica",
//	"Japan",
//	"Jersey",
//	"Jordan",
//	"Kazakhstan",
//	"Kenya",
//	"Kiribati",
//	"Korea (the Democratic People's Republic of)",
//	"Korea (the Republic of)",
//	"Kuwait",
//	"Kyrgyzstan",
//	"Lao People's Democratic Republic (the)",
//	"Latvia",
//	"Lebanon",
//	"Lesotho",
//	"Liberia",
//	"Libya",
//	"Liechtenstein",
//	"Lithuania",
//	"Luxembourg",
//	"Macao",
//	"Madagascar",
//	"Malawi",
//	"Malaysia",
//	"Maldives",
//	"Mali",
//	"Malta",
//	"Marshall Islands (the)",
//	"Martinique",
//	"Mauritania",
//	"Mauritius",
//	"Mayotte",
//	"Mexico",
//	"Micronesia (Federated States of)",
//	"Moldova (the Republic of)",
//	"Monaco",
//	"Mongolia",
//	"Montenegro",
//	"Montserrat",
//	"Morocco",
//	"Mozambique",
//	"Myanmar",
//	"Namibia",
//	"Nauru",
//	"Nepal",
//	"Netherlands (the)",
//	"New Caledonia",
//	"New Zealand",
//	"Nicaragua",
//	"Niger (the)",
//	"Nigeria",
//	"Niue",
//	"Norfolk Island",
//	"Northern Mariana Islands (the)",
//	"Norway",
//	"Oman",
//	"Pakistan",
//	"Palau",
//	"Palestine, State of",
//	"Panama",
//	"Papua New Guinea",
//	"Paraguay",
//	"Peru",
//	"Philippines (the)",
//	"Pitcairn",
//	"Poland",
//	"Portugal",
//	"Puerto Rico",
//	"Qatar",
//	"Republic of North Macedonia",
//	"Romania",
//	"Russian Federation (the)",
//	"Rwanda",
//	"Réunion",
//	"Saint Barthélemy",
//	"Saint Helena, Ascension and Tristan da Cunha",
//	"Saint Kitts and Nevis",
//	"Saint Lucia",
//	"Saint Martin (French part)",
//	"Saint Pierre and Miquelon",
//	"Saint Vincent and the Grenadines",
//	"Samoa",
//	"San Marino",
//	"Sao Tome and Principe",
//	"Saudi Arabia",
//	"Senegal",
//	"Serbia",
//	"Seychelles",
//	"Sierra Leone",
//	"Singapore",
//	"Sint Maarten (Dutch part)",
//	"Slovakia",
//	"Slovenia",
//	"Solomon Islands",
//	"Somalia",
//	"South Africa",
//	"South Georgia and the South Sandwich Islands",
//	"South Sudan",
//	"Spain",
//	"Sri Lanka",
//	"Sudan (the)",
//	"Suriname",
//	"Svalbard and Jan Mayen",
//	"Sweden",
//	"Switzerland",
//	"Syrian Arab Republic",
//	"Taiwan",
//	"Tajikistan",
//	"Tanzania, United Republic of",
//	"Thailand",
//	"Timor-Leste",
//	"Togo",
//	"Tokelau",
//	"Tonga",
//	"Trinidad and Tobago",
//	"Tunisia",
//	"Turkey",
//	"Turkmenistan",
//	"Turks and Caicos Islands (the)",
//	"Tuvalu",
//	"Uganda",
//	"Ukraine",
//	"United Arab Emirates (the)",
//	"United Kingdom of Great Britain and Northern Ireland (the)",
//	"United States Minor Outlying Islands (the)",
//	"United States of America (the)",
//	"Uruguay",
//	"Uzbekistan",
//	"Vanuatu",
//	"Venezuela (Bolivarian Republic of)",
//	"Viet Nam",
//	"Virgin Islands (British)",
//	"Virgin Islands (U.S.)",
//	"Wallis and Futuna",
//	"Western Sahara",
//	"Yemen",
//	"Zambia",
//	"Zimbabwe",
//	"Åland Islands"
//];
//const list = document.getElementById('list')
//
//userInput.addEventListener('input', () => {
////    ОТСЕВ СТРАН
//    let filtCtrs = countries.filter(country => country.toUpperCase().startsWith(userInput.value.toUpperCase()))
//    list.innerHTML = ''
////    ЦИКЛ С ДОБАВЛЕНИЕМ ОТСОРТИРОВАННЫХ СТРАН НА HTML
//    for (let i = 0; i < filtCtrs.length; i++) {
//        let el = document.createElement('li')
//        el.textContent = filtCtrs[i]
//        
//        list.appendChild(el)
//    }
////    ОБРАБОТЧИК СОБЫТИЯ ПО КЛИКУ (ВЫБОР НУЖНОЙ СТРАНЫ)
//    list.addEventListener('click', e => {
//        userInput.value = e.target.textContent
//        list.innerHTML = ''
//    })
//})

////СПОЙЛЕРЫ
//const link = document.querySelector('.toggle')
//const spoiler = document.querySelector('.spoiler')
//
////ПО КЛИКУ НА ССЫЛКУ МЫ НАКИДЫВАЕМ ТОГГЛ НА СПОЙЛЕР ВКЛЮЧАЯ И ОТКЛЮЯЧАЯ ЕГО
//link.addEventListener('click', () => {
//    spoiler.classList.toggle('active')
//})

//JS ВКЛАДОК
//const btns = document.querySelectorAll('a')
//const tabs = document.querySelectorAll('tab')
//
//for (let i = 0; i < btns.length; i++) {
//
//    btns[i].addEventListener('click', e => {
//            console.log(btns)
//            Array.from(btns).forEach(link => {
//                    if (link.classList.contains('active')) link.classList.remove('active')
//                }
//                btns[i].classList.add('active')
//            })
//    }
////НЕ ДОДЕЛАЛ

//ИГРА В ГОРОДА
//let field = document.querySelector('#field');
//let message = document.querySelector('#message');
//const btn = document.querySelector('.button');
//let townsArray = [];
//const townsCpuList = ['Архангельск', 'Антананариву', 'Борисов', "Бруней", "Верхние Луховицы", "Иллинойс", "Иристон", "Кейптаун", "Киото"]
//let lastChar = '';
//let town = '';
//let players = [
//    {
//        name: 'user'
//    },
//    {
//        name: 'CPU'
//    }
//]
////ДОРАБОТАТЬ ФУНКЦИЮ ОТВЕТА КОМПА
//function cpuMove() {
//    let list = townsCpuList.filter(city => city.startsWith(`${lastChar.toUpperCase()}`) && !townsArray.includes(city.toUpperCase()))
//    let answer = list[Math.floor(Math.random() * list.length)]
//    message.textContent = answer;
//    townsArray.push(answer.toUpperCase())
//    lastChar = answer[answer.length - 1]
//    console.log(townsArray)
//}
////ИГРА ДВУХ ИГРОКОВ
////btn.addEventListener('click', event => {
////    let town = field.value;
////    if (town[0].toLowerCase() !== lastChar && townsArray.length > 0) {
////        message.textContent = `Ваш город должен начинаться с буквы "${lastChar}"`
////        field.value = ''
////    } else if (townsArray.includes(town.toUpperCase())) {
////        message.textContent = "Такой город уже был"
////    } else {
////        townsArray.push(town.toUpperCase())
////        message.textContent = `Назван город ${town}. Вам нужно назвать город на букву ${town[town.length - 1].toUpperCase()}`
////        field.value = ''
////        lastChar = town[town.length - 1]
////    }
////
////})
//
////ИГРА С КОМПОМ
////ДОРАБОТАТЬ ОТВЕТ ПОЛЬЗОВАТЕЛЯ НА ПРЕДМЕТ ПОВТОРЕНИЯ И СОВПАДЕНИЯ ПЕРВОЙ БУКВЫ ОТВЕТА С ПОСЛЕДНЕЙ БУКВОЙ,
//btn.addEventListener('click', () => {
//town = field.value
//if (townsArray.includes(town.toUpperCase())) {
//    message.textContent = "Такой город уже был"
//} else {
//    townsArray.push(town.toUpperCase())
//    field.value = ''
//    lastChar = town[town.length - 1]
//    console.log(lastChar)
//}
//    cpuMove()
//})

//ЧЕКЛИСТ

//const input = document.querySelector('#input');
//const list = document.querySelector('#list');
//
//function addButtons(el) {
//    let doneBtn = document.createElement('button');
//    doneBtn.textContent = "Сделано";
//    
//    let deleteBtn = document.createElement('button');
//    deleteBtn.textContent = "Удалить";
//    el.appendChild(doneBtn)
//    el.appendChild(deleteBtn)
//}
//
//input.addEventListener('keypress', function(event) {
//	if (event.key == 'Enter') {
//		let li = document.createElement('li')
//        li.textContent = input.value;
//        addButtons(li);
//        list.appendChild(li)
//        
//        input.value = ''
//	}
//});
//
//list.addEventListener('click', event => {
//    if (event.target.textContent === "Удалить") {
//        let li = event.target.parentElement;
//        list.removeChild(li)
//    }
//    
//    if (event.target.textContent === "Сделано") {
//        let li = event.target.parentElement;
//        li.style.textDecoration = 'line-through'
//    }
//    })

////КАЛЬКУЛЯТОР ТОВАРОВ
//
//const NAME = document.querySelector('.name')
//const PRICE = document.querySelector('.price')
//const AMOUNT = document.querySelector('.amount')
//const btn = document.querySelector('.add')
//const TABLE = document.querySelector('#itemsTable')
//let array = []
//
////ДОБАВЛЕНИЕ СТРОЧКИ С ИНФОЙ ПРОДУКТА
//function addRow(tab, arr) {
//    let row = document.createElement('tr')
//
//    for (let i = 0; i < 5; i++) {
//        let tableCell = document.createElement('td');
//        
//        if (i == 3) {
//            tableCell.textContent = arr[1] * arr[2];
//            tableCell.classList.add('cost')
//        } else if (i == 4) {
//            tableCell.textContent = "Удалить"
//            tableCell.style.textDecoration = "underline"
//            tableCell.style.color = "blue"
//            tableCell.style.cursor = "pointer"
//        } else tableCell.textContent = arr[i];
//        
//        row.appendChild(tableCell)
//    }
//    array = []
//    tab.appendChild(row)
//}
//
////НЕРЕАЛИЗОВАННАЯ ФУНКЦИЯ ПОДСЧЕТА СУММЫ ТОВАРОВ
//function costSum() {
//    let costs = document.getElementsByClassName('cost')
//    console.log(costs)
//}
////ОБРАБОТЧИК ПО НАЖАТИЮ КНОПКИ
//btn.addEventListener('click', () => {
//    if (NAME.value !== '') {
//        array.push(NAME.value, PRICE.value, AMOUNT.value)
//    }
//    
//    addRow(TABLE, array);
//   costSum()
//    NAME.value = ''
//    PRICE.value = ''
//    AMOUNT.value = ''
//})
//
////ОБРАБОТЧИК ПО НАЖАТИЮ КНОПКИ УДАЛИТЬ
//TABLE.addEventListener('click', e => {
//    if (e.target.textContent == "Удалить") {
//        let el = e.target.parentElement;
//        TABLE.removeChild(el)
//    }
//})

//const INPUT_FIRST = document.querySelector('.quest1')
//const INPUT_SECOND = document.querySelector('.quest2')
//const INPUT_THIRD = document.querySelector('.quest3')

////ВИКТОРИНА
//let answersArray = ['Жираф', 'Кожа', 'Бразилия']
//const userAnswers = document.getElementsByTagName('input')
//const btn = document.querySelector('.check')
//
//btn.addEventListener('click', e => {
//    Array.from(userAnswers).forEach((item, idx) => {
//        item.classList.remove('wrong')
//        item.classList.remove('right')
//        if (item.value ===  answersArray[idx]) item.classList.add('right')
//        else item.classList.add('wrong')
//    })
//})

//СЛАЙДЕР
//const LEFT = document.querySelector('#left');
//const RIGHT = document.querySelector('#right');
//const IMG = document.querySelector('#slider')
//
//let i = 0
//const CLUBS = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg'];
//
//RIGHT.addEventListener('click', e => {
//    i = (i + 1) % CLUBS.length;
//    IMG.setAttribute('src', `imgs/${CLUBS[i]}`) 
//})
//
//LEFT.addEventListener('click', e => {
//    i = (i - 1 + CLUBS.length) % CLUBS.length;
//    IMG.setAttribute('src', `imgs/${CLUBS[i]}`) 
//})

//КРЕСТИКИ НОЛИКИ



let cells = document.querySelectorAll('#field td');

function start(x) {
    cells.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e.target)
        })
    })
}
start(cells);

function start(x) {
    cells.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e.target)
        })
    })
}
start(cells);