var inputContainer = Rx.Observable.fromEvent(document.getElementById("inputContainer"), 'keyup');
var txt = document.getElementById("txt");

inputContainer.subscribe((e) => {
    txt.innerHTML=e.srcElement.value
});
