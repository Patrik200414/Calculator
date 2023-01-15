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
            check();
            Render();
            state.currentOperator = event.target.value;
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
        Render();
    }
    else if(state.operators.indexOf(event.key) != -1){
        state.currentOperator = event.key;
        check();
        Render();
    }
})



//render
function Render(){
    document.querySelector('#lower').textContent = state.currentNumber;
    if(state.total !== null){
        document.querySelector('#upper').textContent = state.total + ' ' + state.currentOperator;
    }
    else{
        document.querySelector('#upper').textContent = '';
    }
    
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
            //Do the arithmetics
            switch(state.currentOperator){
                case '+':
                    add();
                    break;
                case '-':
                    sub();
                    break;
                case '*':
                    times();
                    break;
                case '/':
                    dev();
                    break;
            }

            state.currentNumber = null;
        }
    }
}



//Arithmetic functions
function add(){
    state.total = Number(state.total) + Number(state.currentNumber);
    Render();
}
function sub(){
    state.total = Number(state.total) - Number(state.currentNumber);
    Render();
}
function times(){
    state.total = Number(state.total) * Number(state.currentNumber);
    Render();
}
function dev(){
    state.total = Number(state.total) / Number(state.currentNumber);
    Render();
}