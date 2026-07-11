var currentIndex = 0
let score = 0
let questions = new Array("Which  of the following are most similar in content to certificates?","Which of the following allow you to automatically implement restrictions on operating system components?","Which type of policy should define the use of cell phones within an organization?"); 
let option = [["1.Password policies","2.Device access policies","3.Datagrams","4.Logical tokens"],["1.Group policies","2.Access control lists","3.SIDs","4.DNS"],[" 1.Information retention policy","2.Configuration management policy","3.Change documentation","4.Acceptable use policy"]];
let anser = [4,1,4];
let useranser = [,,];
function Quize(){ 
document.getElementById("wellcome").style.display="none";
document.getElementById("body").style.display="block";
let q = document.getElementById("Quiz");
let bnq = document.getElementById("bn");
let op1=document.getElementById("op1");
let op2=document.getElementById("op2");
let op3=document.getElementById("op3");
let op4=document.getElementById("op4");

if(currentIndex <questions.length){
     q.innerText=questions[currentIndex];
     bnq.innerText="Next Question";
     op1.innerText= option[currentIndex][0];
     op2.innerText= option[currentIndex][1];
     op3.innerText= option[currentIndex][2];
     op4.innerText= option[currentIndex][3];
     bnq.onclick=nextQuestion;
}else{document.getElementById("body").innerText="end Quize    score:"+ score+" of 3";};
}

function nextQuestion(){
var res=document.getElementsByName("op");
for(let i=0;i<res.length;i++){
if(res[i].checked){useranser [currentIndex]=res[i].value;}
}
if(anser[currentIndex]==useranser[currentIndex]){score++};
currentIndex++

Quize(); 
}