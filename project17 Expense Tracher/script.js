let Trackers =JSON.parse(localStorage.getItem("Trackers"))||[];
let currenttype="";
let editindex=-1;
function empty(){
  if(Trackers.length==0){
    alert("not exist Transaction ");
    mainmenu();
  }
}
function addt(){ 
  document.getElementById("dadd").style.display="block";
  document.getElementById("update").style.display="none";
}
function getcurrentDate(){return new Date().toLocaleString();}
function savet(){ 
  let id= 1;
  if(Trackers.length>0){
    id=Math.max(...Trackers.map(item=>item.IdT))+1;
   let title=document.getElementById("inputt");
   let am=document.getElementById("inputam");
   let type=document.getElementById("type");
    if(am.value<0){
          alert("Amount Not Could Negetive");
         return;
     }else{
     
       let Transaction={IdT:id,title:title.value,amount:am.value,
        type:type.value,
        Date:getcurrentDate(),Datesort:new Date().getTime()};
       Trackers.push(Transaction);
       localStorage.setItem("Trackers",JSON.stringify(Trackers));
       alert("successfuly Transaction");
       title.value="";
       am.value="";
      console.log(Transaction);}
  }else{
    let title=document.getElementById("inputt");
   let am=document.getElementById("inputam");
   let type=document.getElementById("type");
    if(am.value<0){
          alert("Amount Not Could Negetive");
         return;
     }else{
     
       let Transaction={IdT:id,title:title.value,amount:am.value,
        type:type.value,
        Date:getcurrentDate(),Datesort:new Date().getTime()};
       Trackers.push(Transaction);
       localStorage.setItem("Trackers",JSON.stringify(Trackers));
       alert("successfuly Transaction");
       title.value="";
       am.value="";
       console.log(Transaction);}
       }
}

function editt(){
  document.getElementById("dedit").style.display="block";
  document.getElementById("del").style.display="none";
  document.getElementById("dela").style.display="none";

}
function findeditt(){
  let ide=Number(document.getElementById("eidt").value); 
  let tinput=document.getElementById("inputt");
  let aminput=document.getElementById("inputam");
  let typeinput=document.getElementById("type");
  empty();
  if(aminput.value<0){
          alert("Amount Not Could Negetive");
         return;
     }else{
  let found=false;
  for(let i=0; i<Trackers.length; i++){ 
    if(Trackers[i].IdT==ide){
      document.getElementById("dedit").style.display="none";
      document.getElementById("dadd").style.display="block";
      document.getElementById("save").style.display="none";
      document.getElementById("update").style.display="block";
      editindex=i;
      
      tinput.value= Trackers[editindex].title;
      aminput.value= Trackers[editindex].amount;
      typeinput.value=Trackers[editindex].type;
      Trackers[i].Date=getcurrentDate();
      console.log(Trackers[i]);
      found=true;}
    }if(!found)alert("not found Transaction whtih this ID .");
     }
}
function updateedit(editindex){
 let tinput=document.getElementById("inputt");
 let aminput=document.getElementById("inputam");
 let typeinput=document.getElementById("type");
 Trackers[editindex].title=tinput.value;
 Trackers[editindex].amount=aminput.value;
 Trackers[editindex].type=typeinput.value;
 localStorage.setItem("Trackers",JSON.stringify(Trackers));
 alert("susseccfully update Trackers");
 document.getElementById("dadd").style.display="none";
  console.log(Trackers[editindex]);
}

