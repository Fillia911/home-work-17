// const test = prompt('test');

// console.log(test);

// ''
// '   '
// null


const sumInput = prompt('Enter sum. Example: 100');
const tipsInput = prompt('Enter tips. Example: 25');

if (sumInput === null || tipsInput === null) {
    alert('Canceled.');
} else {
    const sum = sumInput.trim() === '' ? NaN : Number(sumInput);
    const tips = tipsInput.trim() === '' ? NaN : Number(tipsInput);

    const isValidSum = Number.isFinite(sum) && sum > 0;
    const isValidTips = Number.isFinite(tips) && (tips >= 0 && tips <= 100);

    if (isValidSum && isValidTips) {
        const resultTips = (sum * tips) / 100;
        const resultSum = sum + resultTips;

        alert(`Check sum: ${sum}\nTip: ${tips}%\nTip amount: ${resultTips}\nTotal sum to pay: ${resultSum}`);
    } else {
        alert('Invalid input data');
    }
}