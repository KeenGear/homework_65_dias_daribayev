const arr = ['milk', 'beer', 'beer', 'milk', 'milk'];
const resultDiv = document.getElementById('results');

function displayResults() {
    let resultString = '';
    for (let product = 0; product < arr.length; product++) {
        switch (arr[product]) {
            case 'milk':
                resultString += 'Хорошо<br>';
                break;
            case 'beer':
                resultString += 'Плохо<br>';
                break;
        }
    }
    resultDiv.innerHTML = resultString;
}


const task2 = [1, 5, 12, 4, 3];
const task2_1 = [2, 3, 4, 5, 6, 7, 8, 9, 10]
const task3_2 = [3, 10, 17]
const resultDiv2 = document.getElementById('result1');

function calculateAverage(arr) {
    let sum = 0;
    arr.forEach(function (num) {
        sum += num;
    });
    const average = sum / arr.length;
    resultDiv2.innerHTML = resultDiv2.innerHTML + " " + average + "<br>";
}

function task3Question() {
    const userAnswer = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало?");

    switch (userAnswer.toLowerCase()) {
        case "5":
        case "пять":
            alert("Ответ верный");
            break;
        default:
            alert("Ответ неверный");
            break;
    }
}


const duck = {
    name: "Дональд",
    color: "Белый",
    age: 1,
    toStr: function () {
        return `${this.name}, ${this.color}, ${this.age} год`;
    },
    say: function () {
        return "кря кря";
    }
};

function displayDuck() {
    const toStrResultDiv = document.getElementById("toStrResult");
    const sayResultDiv = document.getElementById("sayResult");
    const toStrResultString = duck.toStr();
    const sayResultString = duck.say();
    toStrResultDiv.innerHTML = toStrResultString;
    sayResultDiv.innerHTML = sayResultString;
}
