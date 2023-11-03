const URL = 'https://jservice.io/api';
const NUM_CATEGORIES = 6;
const NUM_QUESTIONS_PER_CAT = 5;

// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]


let categories = [];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

// document.onload function
function getCategoryIds() {
    let selectCategory = axios.get('${URL}/categories', {
        params: { count: "100", offset: 20 },
    });

    let randomCategory = _.samesize(selectCategory.data, NUM_CATEGORIES);
    let categoryIds = randomCategory.map((item) => {
        return item.id;
    });

    return categoryIds;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
    let selectCategory = axios.get('${URL}/clues', {
        params: { category: catId },
    });

    let clues = _.sampleSize(selectCategory.data, NUM_QUESTIONS_PER_CAT);

    let questionAnswerArray = clues.map((arr) => {
        return {
            question: arr.question,
            answer: arr.answer,
            display: null,
        };
    });

    let clueObj = {
        title: clues[0].category.title,
        clues: questionAnswerArray,
    };
    return clueObj;
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    let categoryRow = $("<tr>");
    $("thead").append(categoryRow);

    for (let i = 0; i < NUM_CATEGORIES; i++) {
        $("<td>Cat</td>").appendTo(categoryRow);
    }

    for (let y = 0; y < NUM_QUESTIONS_PER_CAT; y++) {
        let questionRow = $("<tr>");
        $("tbody").append(questionRow);
        for (let x = 0; x < NUM_CATEGORIES; x++) {
            let question = $("<td>").text("?").attr("id", '${x}-${y}');
            question.appendTo(questionRow);
        }
    }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO