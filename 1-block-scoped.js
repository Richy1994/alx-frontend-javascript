export default function taskBlock(trueOrFalse){
    var var task = false;
    var task2 = true;

    if (trueOrFalse){
        var task = true;
    var task2 = false;
    }

    document.getElementsByName("demo").innerHTML += task;
