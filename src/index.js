import _ from "lodash";
import moment from "moment";
import React from 'react';
import ReactDOM from 'react-dom';



setInterval(function() {
    const myColor = document.getElementById("notice");
    let className = myColor.getAttribute("class");
    if (className === "color1") {
      myColor.setAttribute("class","color2");
    } else {
      myColor.setAttribute("class","color1");
    }
}, 2000);

  

let numItems = document.getElementById("num-items");
let total = document.getElementById("total");


function calculateTotal(a,b) {
return "$" + Math.round(a*78.80 + b*298.80);
};


let ringfitNum = document.getElementById("ringfit-num");
let switchNum = document.getElementById("switch-num");



// ringfit

document.addEventListener('turbolinks:load', () => {
    const addbtn_ringfit = document.getElementById("ringfit-add");
    addbtn_ringfit.addEventListener("blur", () => {
        let i = parseInt(ringfitNum.innerHTML);
        ringfitNum.innerHTML = i+1;
        console.log("ringfitNum",ringfitNum.innerHTML);
        let x = parseInt(ringfitNum.innerHTML);
        let y = parseInt(switchNum.innerHTML);
        numItems.innerText =  x + y;
        total.innerText = calculateTotal(x, y);
    });
});

document.addEventListener('turbolinks:load', () => {
    const minusbtn_ringfit = document.getElementById("ringfit-minus");
    minusbtn_ringfit.addEventListener("blur", ()=>{
        let i = parseInt(ringfitNum.innerHTML);
        if (i > 1) {
            ringfitNum.innerHTML = i-1;
        } else {
            ringfitNum.innerHTML = 0;
        };
        let x = parseInt(ringfitNum.textContent);
        let y = parseInt(switchNum.textContent);
        numItems.innerText =  x + y;
        total.innerText = calculateTotal(x, y);
    });
});


// switch
document.addEventListener('turbolinks:load', () => {
    const addbtn_switch = document.getElementById("switch-add");
    // addbtn_switch.addEventListener("click", addItems);
    addbtn_switch.addEventListener("blur",()=>{
    let i = parseInt(switchNum.textContent);
    switchNum.textContent = i+1;
    console.log("switchNum",switchNum.textContent);
    // numItems.innerText = parseInt(ringfitNum.textContent) + parseInt(switchNum.textContent);
    let x = parseInt(ringfitNum.textContent);
    let y = parseInt(switchNum.textContent);
    numItems.innerText =  x + y;
    total.innerText = calculateTotal(x, y);
    });
});
document.addEventListener('turbolinks:load', () => {
    const minusbtn_switch = document.getElementById("switch-minus");
    minusbtn_switch.addEventListener("blur",()=>{
    let i = parseInt(switchNum.textContent);
    if (i > 1) {
        switchNum.textContent = i-1;
    } else {
        switchNum.textContent = 0;
    };
});

// numItems.innerText = parseInt(ringfitNum.textContent) + parseInt(switchNum.textContent);
let x = parseInt(ringfitNum.textContent);
let y = parseInt(switchNum.textContent);
numItems.innerText =  x + y;
total.innerText = calculateTotal(x, y);
});


// close notice
let myNotice = document.getElementById("notice");

myNotice.addEventListener("blur", (event)=>{
console.log('notice clicked')
console.log("target id:", event.target.id);
if (event.target.id === "close"){
    console.log(myNotice);
    myNotice.style.display = "none";
};
});
// document.addEventListener('turbolinks:load', () => {
//     let myNotice = document.getElementById("notice");

//     myNotice.addEventListener("blur", (event)=>{
//     console.log('notice clicked')
//     console.log("target id:", event.target.id);
//     if (event.target.id === "close"){
//         console.log(myNotice);
//         myNotice.style.display = "none";
//     };
//     });
// });



// promotion

let promotionDate = moment("2021-03-10 00:00:00");
// console.log(promotionDate);
var now = moment();
var diff = "Only " + promotionDate.diff(now, 'days') + " days away!!!";
// console.log(diff);

document.getElementById("promotion").innerHTML = "Final Sale!!! " + diff;
