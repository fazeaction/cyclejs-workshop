import Rx from 'rx';

function main(){
    return Rx.Observable.timer(0, 1000)
        .map(i => `Seconds elapsed ${i}`)
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

const sink = main();

DOMEffect(sink)
consoleLogffect(sink)
