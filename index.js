$(document).ready(() => {

    const data = [
        {
            "category": "Reaction",
            "score": 80,
            "icon": "./assets/images/icon-reaction.svg"
        },
        {
            "category": "Memory",
            "score": 92,
            "icon": "./assets/images/icon-memory.svg"
        },
        {
            "category": "Verbal",
            "score": 61,
            "icon": "./assets/images/icon-verbal.svg"
        },
        {
            "category": "Visual",
            "score": 72,
            "icon": "./assets/images/icon-visual.svg"
        }
    ];

    let scoreTotal = 0;
    data.forEach((datum) => {
        scoreTotal += datum.score;
    });
    const scoreAverage = Math.round(scoreTotal / data.length);
    $(".results-card__score").text(scoreAverage);

    for (let row = 0; row <= 3; row++) {
        $(`.summary-card__img--${row}`).attr("src", data[row].icon);
        $(`.summary-card__category--${row}`).text(data[row].category);
        $(`.summary-card__grade--${row}`).text(data[row].score);
    }

});