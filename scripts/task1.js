function findAverage(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

const calculateBtn = document.querySelector('#calculate-btn');
const resultDiv = document.querySelector('#result');

calculateBtn.addEventListener('click', () => {
  const arr = [1, 5, 12, 4, 3]; // Change this to any array you want to calculate the average for
  const average = findAverage(arr);
  resultDiv.textContent = `The average is ${average}`;
});
