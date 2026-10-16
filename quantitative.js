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
 let qEl = document.getElementById("question") || document.getElementById("question2") || document.getElementById("question1");
 if(qEl) qEl.innerText = qquestions[currentQ].q;

 let o = qquestions[currentQ].options;
 let ids = [["q1","v1","opt1","option1"], ["q2","v2","opt2","option2"], ["q3","v3","opt3","option3"], ["q4","v4","opt4","option4"]];
 ids.forEach((list, i)=>{
  for(let id of list){
   let el = document.getElementById(id);
   if(el){ el.innerText = o[i]; el.textContent = o[i]; break; }
  }
 });
 let fb = document.getElementById("feedback") || document.getElementById("feedback2");
 if(fb) fb.innerText = "";
}

function checkQ(n){
 let fb = document.getElementById("feedback") || document.getElementById("feedback2");
 if(!fb) return;
 if(n === qquestions[currentQ].answer){
  fb.innerText = "Correct!";
 } else {
  fb.innerText = "Wrong, try again!";
 }
}

function nextQ(){
 currentQ++;
 if(currentQ < qquestions.length){
  loadQ();
 } else {
  let qEl = document.getElementById("question") || document.getElementById("question2");
  if(qEl) qEl.innerText = "Finished Quantitative! Well Done!";
 }
}

loadQ();