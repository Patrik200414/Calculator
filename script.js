let state = {
    currentNumber : null,
    currentOperator : null,
    upperNum: null,
    total: null
}

//delete and clear buttons
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

//numbers and operators
let buttons = document.querySelectorAll('.btn');
for(let item of buttons){
    item.addEventListener('click', (event) => {
        if( event.target.classList.length !== 2){
            if(state.currentNumber !== null){
                state.currentNumber += event.target.value;
            }
            else{
                state.currentNumber = event.target.value;
            }
        }
        else{
            state.currentOperator = event.target.value;
        }
        console.log(state.currentNumber);
    })
}