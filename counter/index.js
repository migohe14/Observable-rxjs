// Impure function
let countJs = 0;
let button = document.getElementById("JSButton");

button.addEventListener('click', () => console.log(`JS click ${++countJs} times`));

// With RxJS
let buttonRxjs = document.getElementById("RxJSButton");

Rx.Observable.fromEvent(buttonRxjs, 'click')
    // initialize in 0 and add 1
    .scan(count => count + 1, 0)
    // Subcribe 
    .subscribe(count => console.log(`RxJS click ${count} times`));
