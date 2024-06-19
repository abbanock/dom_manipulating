const numb1 = document.querySelector('.first-number')
const numb2 = document.querySelector('.sec-number')
const btn = document.querySelector('.result')
const resArea = document.querySelector('.resArea')

function getDivisors(a) {
    let array = []
    for (let i = 1; i <= a; i++) {
     if (a % i === 0) array.push(i)
    }
    return array
}

btn.addEventListener('click', () => {
    let firstNumDivis = getDivisors(numb1.value)
    let secNumDivis = getDivisors(numb2.value)
    let resArray = []

    let similars = firstNumDivis.forEach(item => secNumDivis.includes(item) ? resArray.push(item) : false
    )
    
    resArea.textContent = resArray
})