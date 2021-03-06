import _ from "lodash";
import moment from "moment";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
dom.i2svg();

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

const addbtn_ringfit = document.getElementById("ringfit-add");
addbtn_ringfit.addEventListener("click", () => {
    let i = parseInt(ringfitNum.textContent);
    ringfitNum.innerHTML = i+1;
    console.log("ringfitNum",ringfitNum.innerHTML);
    let x = parseInt(ringfitNum.innerHTML);
    let y = parseInt(switchNum.innerHTML);
    numItems.innerText =  x + y;
    total.innerText = calculateTotal(x, y);
});

const minusbtn_ringfit = document.getElementById("ringfit-minus");
minusbtn_ringfit.addEventListener("click", ()=>{
    let i = parseInt(ringfitNum.textContent);
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


// switch
const addbtn_switch = document.getElementById("switch-add");
addbtn_switch.addEventListener("click",()=>{
    let i = parseInt(switchNum.textContent);
    switchNum.textContent = i+1;
    console.log("switchNum",switchNum.textContent);
    let x = parseInt(ringfitNum.textContent);
    let y = parseInt(switchNum.textContent);
    numItems.innerText =  x + y;
    total.innerText = calculateTotal(x, y);
});

const minusbtn_switch = document.getElementById("switch-minus");
minusbtn_switch.addEventListener("click",()=>{
    let i = parseInt(switchNum.textContent);
    if (i > 1) {
        switchNum.textContent = i-1;
    } else {
        switchNum.textContent = 0;
    };

    let x = parseInt(ringfitNum.textContent);
    let y = parseInt(switchNum.textContent);
    numItems.innerText =  x + y;
    total.innerText = calculateTotal(x, y);
});


// close notice
let myNotice = document.getElementById("notice");

myNotice.addEventListener("click", (event)=>{
    console.log('notice clicked')
    console.log("target id:", event.target.id);
    if (event.target.id === "close"){
        console.log(myNotice);
        myNotice.style.display = "none";
    };
});




// promotion

let promotionDate = moment("2021-03-10 00:00:00");
// console.log(promotionDate);
var now = moment();
var diff = "Only " + promotionDate.diff(now, 'days') + " days away!!!";
// console.log(diff);

document.getElementById("promotion").innerHTML = "Final Sale!!! " + diff;


// function popup(form) {
//     window.open('', 'formpopup', 'width=400,height=200');
//     form.target = 'formpopup';
//     document.getElementById("message").value = "";
// }

document.getElementById("test").addEventListener('submit',(event)=>{
    window.open('', 'formpopup', 'width=400,height=200');
    event.target = 'formpopup';
    document.getElementById("message").value = "";
});

