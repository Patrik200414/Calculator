let state = {
    currentNumber : null,
    currentOperator : null,
    total: null
}

document.querySelector('#delBtn').addEventListener('click', () => {
    document.querySelector('#upper').textContent = '';
    document.querySelector('#lower').textContent = '';
});

document.querySelector('#clrBtn').addEventListener('click', () => {
    let curNum = state.currentNumber.toString();
    let curNumArr = [...curNum];
    curNumArr.pop();
    let rtnNum = Number(curNumArr.join(''));
    state.currentNumber = rtnNum;
    console.log(state.currentNumber);
})