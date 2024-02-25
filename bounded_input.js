var min = 1;
var max = 100;


window.addEventListener("load", function() {
    var select = document.getElementById("rarity");
    select.dispatchEvent(new Event("change"));
});

document.getElementById("rarity").addEventListener("change", function(event){
    let value = event.target.value;

    if(value === "common"){
        min = 1;
        max = 30;
        document.getElementById("ab3").disabled = true;
        document.getElementById("gl3").disabled = true;
        document.getElementById("ab2").disabled = true;
        document.getElementById("gl2").disabled = true;
        document.getElementById("ab1").disabled = false;
        document.getElementById("gl1").disabled = false;
    }

    if(value === "uncommon"){
        min = 30;
        max = 50;
        document.getElementById("ab3").disabled = true;
        document.getElementById("gl3").disabled = true;
        document.getElementById("ab2").disabled = false;
        document.getElementById("gl2").disabled = false;
        document.getElementById("ab1").disabled = false;
        document.getElementById("gl1").disabled = false;
    }
    
    if(value === "rare"){
        min = 50;
        max = 70;
        document.getElementById("ab3").disabled = true;
        document.getElementById("gl3").disabled = true;
        document.getElementById("ab2").disabled = false;
        document.getElementById("gl2").disabled = false;
        document.getElementById("ab1").disabled = false;
        document.getElementById("gl1").disabled = false;
    }
    
    if(value === "legendary"){
        min = 70;
        max = 90;
        document.getElementById("ab3").disabled = false;
        document.getElementById("gl3").disabled = false;
        document.getElementById("ab2").disabled = false;
        document.getElementById("gl2").disabled = false;
        document.getElementById("ab1").disabled = false;
        document.getElementById("gl1").disabled = false;
    }

    if(value === "divine"){
        min = 90;
        max = 100;
        document.getElementById("ab3").disabled = false;
        document.getElementById("gl3").disabled = false;
        document.getElementById("ab2").disabled = false;
        document.getElementById("gl2").disabled = false;
        document.getElementById("ab1").disabled = false;
        document.getElementById("gl1").disabled = false;
    }

    document.getElementById("ab1").dispatchEvent(new Event("blur"));
    document.getElementById("gl1").dispatchEvent(new Event("blur"));
    document.getElementById("ab2").dispatchEvent(new Event("blur"));
    document.getElementById("gl2").dispatchEvent(new Event("blur"));
    document.getElementById("ab3").dispatchEvent(new Event("blur"));
    document.getElementById("gl3").dispatchEvent(new Event("blur"));
});

document.getElementById("ab1").addEventListener("blur", function(event){
    let value = event.target.value;
    if (value === '') return;
    if (value < min) event.target.value = min;
    if (value > max) event.target.value = max;
});

document.getElementById("gl1").addEventListener("blur", function(event){
    let value = event.target.value;
    if (value === '') return;
    if (value < min) event.target.value = min;
    if (value > max) event.target.value = max;
});

document.getElementById("ab2").addEventListener("blur", function(event){
    let value = event.target.value;
    if (value === '') return;
    if (value < min) event.target.value = min;
    if (value > max) event.target.value = max;
});

document.getElementById("gl2").addEventListener("blur", function(event){
    let value = event.target.value;
    if (value === '') return;
    if (value < min) event.target.value = min;
    if (value > max) event.target.value = max;
});

document.getElementById("ab3").addEventListener("blur", function(event){
    let value = event.target.value;
    if (value === '') return;
    if (value < min) event.target.value = min;
    if (value > max) event.target.value = max;
});

document.getElementById("gl3").addEventListener("blur", function(event){
    let value = event.target.value;
    if (value === '') return;
    if (value < min) event.target.value = min;
    if (value > max) event.target.value = max;
});