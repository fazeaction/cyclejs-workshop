import Rx from 'rx';

function main(){
    return {
        DOM:Rx.Observable.timer(0, 1000)
            .map(i => `Seconds elapsed ${i}`),
        Log:Rx.Observable.timer(0, 2000)
            .map(i => 2*i),
    }
}

function DOMDriverEffect (text$){
    text$.subscribe(text => {
        const container = document.querySelector('#app');
        container.textContent = text;
    })
}

function consoleLogDriver (msg$){
    msg$.subscribe(msg => {
        console.log(msg);
    })
}

function run(mainFn,effects){
    const sinks = mainFn();
    Object.keys(effects).forEach(key => {
        effects[key](sinks[key]);
    })
}

const drivers ={
    DOM:DOMDriverEffect,
    Log:consoleLogDriver
}

run(main,drivers);


