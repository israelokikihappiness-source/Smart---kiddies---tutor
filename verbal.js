const vquestions = [
 { q: "Opposite of HAPPY?", options: ["Sad","Big","Tall","Fast"], answer: 1 },
 { q: "Cat is to Kitten as Dog is to?", options: ["Puppy","Cub","Calf","Child"], answer: 1 },
 { q: "Odd one: Apple, Orange, Car, Banana?", options: ["Apple","Orange","Car","Banana"], answer: 3 }
];
let currentV = 0;
function loadV(){
 document.getElementById("question2").innerText = vquestions[currentV].q;
 document.getElementById("v1").innerText = vquestions[currentV].options[0];
 document.getElementById("v2").innerText = vquestions[currentV].options[1];
 document.getElementById("v3").innerText = vquestions[currentV].options[2];
 document.getElementById("v4").innerText = vquestions[currentV].options[3];
 document.getElementById("feedback2").innerText = "";
}
function checkV(n){
 if(n === vquestions[currentV].answer){
  document.getElementById("feedback2").innerText = "Correct!";
 } else {
  document.getElementById("feedback2").innerText = "Wrong, try again!";
 }
}
function nextV(){
 currentV++;
 if(currentV < vquestions.length){ loadV(); }
 else {
  document.getElementById("question2").innerText = "Finished Verbal! Great!";
  document.getElementById("quiz-box").style.display = "none";
 }
}
loadV();