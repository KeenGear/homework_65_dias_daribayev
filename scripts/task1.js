const arr = ['milk', 'beer', 'beer', 'milk', 'milk'];
const resultDiv = document.getElementById('results');

function displayResults() {
  let resultString = '';
  for (let product = 0; product < arr.length; product++) {
    switch(arr[product]) {
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
