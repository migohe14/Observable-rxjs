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
button.addEventListener('click', (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    console.log(count)
    lastClick = Date.now();
  }
});

// create observer
var observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    }, 1000);
  });

// console.log('just before subscribe');
// observable.subscribe({
//   next: x => console.log('got value ' + x),
//   error: err => console.error('something wrong occurred: ' + err),
//   complete: () => console.log('done'),
// });
// console.log('just after subscribe');