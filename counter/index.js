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


var count = 0;
var rate = 1000;
var lastClick = Date.now() - rate;
var button = document.getElementById('JSButton');
button.addEventListener('click', (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    console.log(count)
    lastClick = Date.now();
  }
});

var button = document.getElementById('RxJSButton');
Rx.Observable.fromEvent(button, 'click')
  .throttle(1000)
  .map(event => event.clientX)
  .scan((count, clientX) => count + clientX, 0)
  .subscribe(count => console.log(count));