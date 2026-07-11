var currentIndex = 0
let score = 0
let questions = new Array("Which  of the following are most similar in content to certificates?","Which of the following allow you to automatically implement restrictions on operating system components?","Which type of policy should define the use of cell phones within an organization?"); 
let option = [["1.Password policies","2.Device access policies","3.Datagrams","4.Logical tokens"],["1.Group policies","2.Access control lists","3.SIDs","4.DNS"],[" 1.Information retention policy","2.Configuration management policy","3.Change documentation","4.Acceptable use policy"]];
let anser = [4,1,4];
let useranser = [,,];
function Quize(){ 
let list = document.getElementsByTagName('div')[0];
let q = document.getElementById("Quiz");
let bnq = document.getElementById("bn");
let tinput = document.getElementById("Tinput");
if(currentIndex <questions.length){
     q.innerText=questions[currentIndex];
     bnq.innerText="Next Question";
       for(let i=0;i<4;i++){ 
          let Top = document.createElement('h1'); 
          let TexTop = document.createTextNode(option[currentIndex][i]); 
          Top.appendChild(TexTop);
          q.appendChild(Top); }

tinput.innerText='enter selection your option:';
let Ainput= document.createElement('input'); 
Ainput.id="anser input";
tinput.appendChild(Ainput);
bnq.onclick=nextQuestion;

}else{list.innerText="end Quize    score:"+ score+" of 3";};
}
 
function nextQuestion(){
let input= document.getElementById("anser input");
useranser[currentIndex]= input.value;
if(anser[currentIndex]==useranser[currentIndex]){score++};
currentIndex++
Quize(); 
}