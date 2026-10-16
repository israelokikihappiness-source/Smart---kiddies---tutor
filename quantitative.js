const qquestions = [
 {
  q: "Find the missing number: 2, 4, 6, 8,?",
  options: ["10", "12", "9", "11"],
  answer: 1
 },
 {
  q: "10, 20, 30,?, 50",
  options: ["35", "40", "45", "60"],
  answer: 2
 },
 {
  q: "If 5 + 5 = 10, then 10 + 10 =?",
  options: ["15", "20", "25", "30"],
  answer: 2
 }
];

let currentQ = 0;

function loadQ(){
 document.getElementById("question").innerText = qquestions[currentQ].q;
 document.getElementById("q1").innerText = qquestions[currentQ].options[0];
 document.getElementById("q2").innerText = qquestions[currentQ].options[1];
 document.getElementById("q3").innerText = qquestions[currentQ].options[2];
 document.getElementById("q4").innerText = qquestions[currentQ].options[3];
 document.getElementById("feedback").innerText = "";
}

function checkQ(n){
 if(n === qquestions[currentQ].answer){
  document.getElementById("feedback").innerText = "Correct!";
 } else {
  document.getElementById("feedback").innerText = "Wrong, try again!";
 }
}

function nextQ(){
 currentQ++;
 if(currentQ < qquestions.length){
  loadQ();
 } else {
  document.getElementById("question").innerText = "Finished! Well Done!";
 }
}

loadQ();