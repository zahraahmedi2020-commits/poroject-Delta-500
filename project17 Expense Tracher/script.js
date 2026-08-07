let Trackers =JSON.parse(localStorage.getItem("Trackers"))||[];
let currenttype="";
let editindex=-1;
function empty(){
  if(Trackers.length==0){
    alert("not exist Transaction ");
    mainmenu();
  }
}
function validationt(){
  let title=document.getElementById("inputt");
   let am=document.getElementById("inputam");
    if(am.value<0){
          alert("Amount Not Could Negetive");
         return;
     }else if(title.value.trim()==""){
          alert("Title is required");
         return;
     }

}
function addt(){ 
  document.getElementById("dadd").style.display="block";
  document.getElementById("dedit").style.display="none";
  document.getElementById("dshow").style.display="none";
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
     }else if(title.value.trim()==""){
          alert("Title is required");
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
  document.getElementById("dadd").style.display="none";
  document.getElementById("dshow").style.display="none";

  document.getElementById("del").style.display="none";
  document.getElementById("dela").style.display="none";

}
function findeditt(){
  let ide=Number(document.getElementById("eidt").value); 
  let tinput=document.getElementById("inputt");
  let aminput=document.getElementById("inputam");
  let typeinput=document.getElementById("type");
  empty();
 
  let found=false;
  for(let i=0; i<Trackers.length; i++){ 
    if(Trackers[i].IdT==ide){
      document.getElementById("dedit").style.display="none";
      document.getElementById("dshow").style.display="none";
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
function createtable(){
  let table=document.createElement("table");
  let caption=document.createElement("caption");
  caption.innerHTML="Resoult Table Transcations";
  table.appendChild(caption);
  
  console.log(table);
  return table;
}
function createheader(table){
  let headingT=new Array("Id","title","Amount","type","Date Transcation");
  let hrow=document.createElement("tr");
  for(i=0;i<headingT.length;i++){
    let th=document.createElement("th");
    th.innerHTML+=headingT[i];
    hrow.appendChild(th);}
    table.appendChild(hrow); 
  }

function createRow(table){
  for(i=0;i<Trackers.length;i++){
    let hrow=document.createElement("tr");
    let th1=document.createElement("th");
    th1.innerHTML+=Trackers[i].IdT;
    hrow.appendChild(th1);
    let th2=document.createElement("th");
    th2.innerHTML+=Trackers[i].title;
    hrow.appendChild(th2);
    let th3=document.createElement("th");
    th3.innerHTML+=Trackers[i].amount;
    hrow.appendChild(th3);
    let th4=document.createElement("th");
    th4.innerHTML+=Trackers[i].type;
    hrow.appendChild(th4);
    let th5=document.createElement("th");
    th5.innerHTML+=Trackers[i].Date;
    hrow.appendChild(th5);
    table.appendChild(hrow);
  }
}
function appendTable(table){
  let r=document.getElementById("rshow");
  r.appendChild(table);
}

function showt(){
 document.getElementById("dshow").style.display="block"; 
   document.getElementById("dadd").style.display="none";
  document.getElementById("dedit").style.display="none";
 document.getElementById("dsearch").style.display="none"; 
 document.getElementById("dadd").style.display="none";   
 document.getElementById("CounterT").innerHTML=Number(Trackers.length);
 summary();
 empty();
  let table=createtable();
   createheader(table);
   createRow(table);
   appendTable(table);
  
}
function summary(){
  let SumI=0;
  let SumE=0;
   for(i=0;i<Trackers.length;i++){
    if(Trackers[i].type=="income"){
     SumI=SumI+Number(Trackers[i].amount);
    }else if(Trackers[i].type=="expense"){
    SumE=SumE+Number(Trackers[i].amount);
    }
   } console.log("in:",SumI,"ex:",SumE);
   let Balance=SumI-SumE;
   document.getElementById("TotalIn").innerHTML=SumI;
   document.getElementById("TotalEx").innerHTML=SumE;
   if(Balance>0){
  document.getElementById("Balance").style.color="green";
}else {document.getElementById("Balance").style.color="red"; }
   document.getElementById("Balance").innerHTML=Balance;
}
