import Rx from 'rx';

function main(){
    return {
        DOM:Rx.Observable.timer(0, 1000)
        .map(i => `Seconds elapsed ${i}`),
        Log:Rx.Observable.timer(0, 2000)
            .map(i => 2*i),
    }
}

function DOMEffect (text$){
    text$.subscribe(text => {
        const container = document.querySelector('#app');
        container.textContent = text;
    })
}

function consoleLogffect (msg$){
    msg$.subscribe(msg => {
        console.log(msg);
    })
}

const sinks = main();

DOMEffect(sinks.DOM)
consoleLogffect(sinks.Log)
