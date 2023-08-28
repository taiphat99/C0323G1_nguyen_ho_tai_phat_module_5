import { createStore } from 'https://cdn.skypack.dev/redux';

const initState = 0;

function reducer(state = initState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state
    }
}

const store = window.store = createStore(reducer);
console.log(store);

const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

deposit.onclick = function() {
    store.dispatch(actionDeposit(10));  
}

withdraw.onclick = () => {
    store.dispatch(actionWithdraw(10));
}


function actionDeposit(payload) {
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload) {
    return {
        type: 'WITHDRAW',
        payload
    }
}





function render() {
    const output = document.querySelector('#output');
    output.innerText = store.getState;
}