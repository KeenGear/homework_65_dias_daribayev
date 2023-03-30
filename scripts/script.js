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

