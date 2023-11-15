const numOfCategories = 6;
const numOfQuestions = 5

async function getCategoryIds() {
    let response = await axios.get(`http://jservice.io/api/random?count=${numOfCategories}`)
    return response.data.map(obj => obj.category.id)
}

async function loadCategories(categoryIds) {
    categoryPromises = [...categoryIds]
        .map(id => (
            axios.get(`http://jservice.io/api/category?id=${id}`)
        )
        )
    let loadCategories = await Promise.all(categoryPromises)
    return loadCategories.map(res => res.data)
}

async function fillTable(categories, thead, tbody) {
    let firstRow = document.createElement('tr');
    for (let category of categories) {
        const categoriesTd = document.createElement('td');
        categoriesTd.innerText = category.title
        firstRow.append(categoriesTd);
    }
    thead.append(firstRow);

    for (let row = 0; row < numOfQuestions; row++) {
        let TR = document.createElement('tr');
        for (let col = 0; col < numOfCategories; col++) {
            let TD = document.createElement('td')
            let clue = categories[col].clues[row]
            TD.innerText = '?'
            TD.id = `question-${row + 1}-${col + 1}`
            TD.dataset.question = clue.question
            TD.dataset.answer = stripHtml(clue.answer)
            TD.classList.add('not-clicked');
            TR.append(TD);
        }
        tbody.append(TR)
    }
}


let initialState = "one"
function handleClickOnTbody(evt) {
    let td = evt.target
    let state = td.dataset.state
    if (!state) {
        td.dataset.state = 'question'
        td.innerText = td.dataset.question
    } else if (state === 'question') {
        td.dataset.state = 'answer'
        td.innerText = td.dataset.answer

    } else if (state === 'answer') {
        return
    }

}

async function newGame() {
    const oldGameContainer = document.getElementById('jeopardyGame')
    const newGameContainer = document.createElement('div')
    newGameContainer.id = 'jeopardyGame'
    const table = document.createElement('table');
    table.id = "jeopardy";
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody');
    tbody.addEventListener('click', handleClickOnTbody)
    table.append(thead, tbody);
    let catIds = await getCategoryIds()
    console.log('catids array', catIds)
    let loadedCategories = await loadCategories(catIds)
    console.log('loaded', loadedCategories)
    await fillTable(loadedCategories, thead, tbody)
    newGameContainer.append(table)
    oldGameContainer.replaceWith(newGameContainer)

}

const button = document.querySelector('#restart')
button.addEventListener('click', newGame)
window.addEventListener('DOMContentLoaded', newGame);

function stripHtml(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

let swap = (arr, index1, index2) => (
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
)

function shuffleMutate(arr) {
    for (let index = arr.length - 1; index >= 0; index--) {
        let randIndex = Math.floor(Math.random() * (index + 1))
        swap(arr, index, randIndex)
    }
    return arr
}