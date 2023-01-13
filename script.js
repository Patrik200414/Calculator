let state = {
    currentNumber : 1,
    currentOperator : null,
    upperNum: null,
    total: null
}

document.querySelector('#delBtn').addEventListener('click', () => {
    document.querySelector('#upper').textContent = '';
    document.querySelector('#lower').textContent = '';
    state.currentNumber = null;
});

document.querySelector('#clrBtn').addEventListener('click', () => {
    if(state.currentNumber !== null){
        let curNum = state.currentNumber.toString();
        let curNumArr = [...curNum];
        curNumArr.pop();
        let rtnNum = Number(curNumArr.join(''));
        state.currentNumber = rtnNum;
        console.log(state.currentNumber);
    }
    else{
        return;
    }
    
})