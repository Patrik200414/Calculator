let state = {
    currentNumber : null,
    currentOperator : null,
    upperNum: null,
    total: null,
    keys : [],
    operators: []
}

//delete and clear buttons
document.querySelector('#delBtn').addEventListener('click', () => {
    document.querySelector('#upper').textContent = '';
    document.querySelector('#lower').textContent = '';
    state.currentNumber = null;
    state.currentOperator = null;
    state.total = null
});

document.querySelector('#clrBtn').addEventListener('click', () => {
    if(state.currentNumber !== null){
        let curNum = state.currentNumber.toString();
        let curNumArr = [...curNum];
        curNumArr.pop();
        let rtnNum = Number(curNumArr.join(''));
        state.currentNumber = rtnNum;
        Render();
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
            Render();
        }
        else{
            state.currentOperator = event.target.value;
            check();
            Render();
        }
    })
}

for(let item of buttons){
    if(item.value == '-' || item.value == '+' || item.value == '*' || item.value == '/' || item.value == '='){
        state.operators.push(item.value);
    }
    else{
        state.keys.push(item.value);
    }
}

/* */
document.querySelector('body').addEventListener('keypress', (event) => {
    if(state.keys.indexOf(event.key) != -1){
        if(state.currentNumber !== null){
            state.currentNumber += event.key;
        }
        else{
            state.currentNumber = event.key;
        }
        check();
        Render();
    }
    else if(state.operators.indexOf(event.key) != -1){
        state.currentOperator = event.key;
    }
})



//render
function Render(){
    document.querySelector('#lower').textContent = state.currentNumber;
}



//Check the operator function
function check(){
    let op = state.currentOperator;
    if(state.currentOperator !== null){
        if(state.total === null){
            state.total = state.currentNumber;
            state.currentNumber = null;
        }
        else{
            state.currentNumber = null;
            //Do the arithmetics
        }
    }
}