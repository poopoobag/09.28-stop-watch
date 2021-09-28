// query selector
// const title = document.querySelector("#title");
// const title1 = document.querySelector("#title1");
// const title2 = document.querySelector("#title2");
// const title3 = document.querySelector("#title3");
// const title4 = document.querySelector("#title4");


// function changeStyle(){
//     title.classList.toggle("update"),
//     title1.classList.toggle("first"),
//     title2.classList.toggle("second"),
//     title3.classList.toggle("third"),
//     title4.classList.toggle("fourth")
// }


// get elements by class name => getElementsByClassName("class ner shud bichne") => [arr orno]
// getElementById("id") - DOM element bna
// const title = document.querySelectorAll(".text")

// const title = document.querySelectorAll(".garchig");
// function changeStyle(){
//     for(let i = 0; i < title.length; i++){
//         title[i].classList.toggle("update--" + i)
//     }
// }

// 2-r jishee
// const boxes = document.querySelectorAll(".box");
// for(let i = 0; i < boxes.length; i++){
//     boxes[i].onclick = function(){
//         removeActive();
//         boxes[i].classList.add("active")
//     }
// }

// function removeActive(){
//     for(let i = 0; i < boxes.length; i++){
//         boxes[i].classList.remove("active")
//     }
    
// }




// setInterval()
// callback function, hugatsaa
// let i = 0;
// setInterval(function(){
//     console.log(i);
//     i++;
// }, 1000)

const boxes = document.querySelectorAll(".box");
for(let doli = 0; i < boxes.length; doli++){
    boxes[i].onclick = function(){
        boxes[doli].classList.add("active")
    }
}

doli = 0;
second = 0;
minute = 0;
hour = 0;
setInterval(function(){
    boxes[2].innerText = hour + " : " + minute + " : " + second + " : " + doli
    doli++;
    if(doli === 100){
        doli = 0;
        second++;
    } 
    if(second === 60){
        second = 0;
        minute++;
    }
    if(minute === 60){
        minute = 0;
        hour++;
    }
}, 10)




