let Trackers =JSON.parse(localStorage.getItem("Trackers"))||[];
let currenttype="";
let editindex=-1;
function empty(){
  if(Trackers.length==0){
    alert("not exist Transaction ");
  }
}

function addt(){ 
  document.getElementById("dadd").style.display="block";
  document.getElementById("dedit").style.display="none";
  document.getElementById("dshow").style.display="none";
  document.getElementById("update").style.display="none";
  document.getElementById("save").style.display="block";
  document.getElementById("inputt").innerText=" ";
  document.getElementById("inputam").innerText=" ";

}
function getDate(inputd){return new Date(inputd).toLocaleString();}
function savet(){ 
  let title=document.getElementById("inputt");
  let am=document.getElementById("inputam");
  let type=document.getElementById("type");
  let inputd=document.getElementById("inputD");
  let id= 1;
  if(Trackers.length>0){
    id=Math.max(...Trackers.map(item=>item.IdT))+1;   
  }else{id=1;}
   console.log(inputd.value);
   if(am.value<0){
    alert("Amount Not Could Negetive");
    return;
    }else if(title.value.trim()==""){
      alert("Title is required");
      return;
    }else{
     let Transaction={IdT:id,title:title.value,amount:am.value,type:type.value,
     Date:getDate(inputd.value),Datesort:new Date(inputd.value).getTime()};
     Trackers.push(Transaction);
     localStorage.setItem("Trackers",JSON.stringify(Trackers));
     alert("successfuly Transaction");
     title.value=" ";
     am.value=0;
     console.log(Transaction);}
     showt();
    }

function editt(){
  document.getElementById("dedit").style.display="block";
  document.getElementById("dadd").style.display="none";
  document.getElementById("dshow").style.display="none";
  document.getElementById("searche").style.display="block";
  document.getElementById("del").style.display="none";
  document.getElementById("dela").style.display="none";
  document.getElementById("heade").innerText="Edit transcation";
  document.getElementById("eidt").innerHTML=" ";


}
function outputDateDisplay(date){
  let datee=new Date(date);
  let manth=datee.getMonth()+1
  manth=manth.toString().padStart(2,"0");
 let outputdate=datee.getFullYear()+"-"+ manth +"-"+datee.getDate().toString().padStart(2,"0");
 console.log("date edit:"+ outputdate);
 return outputdate;
}
function findeditt(){
  let ide=Number(document.getElementById("eidt").value); 
  let tinput=document.getElementById("inputt");
  let aminput=document.getElementById("inputam");
  let typeinput=document.getElementById("type");
  let inputd=document.getElementById("inputD");
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
      inputd.value= outputDateDisplay(Trackers[editindex].Datesort);
      console.log(Trackers[i].Datesort+"input date:"+outputDateDisplay(Trackers[editindex].Datesort));
      console.log(Trackers[i]);
      found=true;}
    }if(!found)alert("not found Transaction whtih this ID .");
     }

function updateedit(editindex){
 let tinput=document.getElementById("inputt");
 let aminput=document.getElementById("inputam");
 let typeinput=document.getElementById("type"); 
 let inputd=document.getElementById("inputD");

  if(aminput.value<0){
          alert("Amount Not Could Negetive");
         return;
     }else if(tinput.value.trim()==""){
          alert("Title is required");
         return;
     }else{
 Trackers[editindex].title=tinput.value;
 Trackers[editindex].amount=aminput.value;
 Trackers[editindex].type=typeinput.value;
 Trackers[editindex].Date=getDate(inputd.value);
 Trackers[editindex].Datesort=new Date(inputd.value).getTime();
 localStorage.setItem("Trackers",JSON.stringify(Trackers));
 alert("susseccfully update Trackers");
 document.getElementById("dadd").style.display="none";
  console.log(Trackers[editindex]);}
  showt();
}
function createtable(){
  let table=document.createElement("table");
  let caption=document.createElement("caption");
  caption.innerHTML="Resoult Table Transcations";
  table.appendChild(caption);
  return table;
}
function createheader(table){
  let headingT=new Array("Id","title","Amount","type","Date Transcation","Action");
  let hrow=document.createElement("tr");
  for(i=0;i<headingT.length;i++){
    let th=document.createElement("th");
    th.innerHTML+=headingT[i];
    hrow.appendChild(th);}
    table.appendChild(hrow); 
  }
 function creatrowlist(list,table){

  for(let i=0;i<list.length;i++){
    let hrow=document.createElement("tr");
    let th1=document.createElement("th");
    th1.innerHTML+=list[i].IdT;
    hrow.appendChild(th1);
    if(list[i].type=="income"){hrow.classList.add("bgrowincome");}else if(list[i].type=="expense"){hrow.classList.add("bgrowexpense");}
    let th2=document.createElement("th");
    th2.innerHTML+=list[i].title;
    hrow.appendChild(th2);
    let th3=document.createElement("th");
    th3.innerHTML+=list[i].amount;
    hrow.appendChild(th3);
    let th4=document.createElement("th");
    th4.innerHTML+=list[i].type;
    hrow.appendChild(th4);
    let th5=document.createElement("th");
    th5.innerHTML+=list[i].Date;
    hrow.appendChild(th5);
    let th6=document.createElement("th");
     let newBD = document.createElement('button'); 
    newBD.innerHTML='Delete'; 
    th6.appendChild(newBD);
    newBD.onclick=function(){
                    if(confirm("Are you sure you went to delete this transcation?")){
                    document.getElementById("eidt").value=list[i].IdT;
                    finddeletet();
                    table.removeChild(hrow);}};
    let newBe = document.createElement('button'); 
    newBe.innerHTML='Edit'; 
    th6.appendChild(newBe);
    newBe.onclick=function(){
      document.getElementById("eidt").value=list[i].IdT; 
      findeditt();};
    hrow.appendChild(th6);
    
    table.appendChild(hrow);}
}

function appendTable(table){
  let r=document.getElementById("rshow");
  r.appendChild(table);
}
function TableFilter(list){
 let table1=createtable();
  createheader(table1);
  creatrowlist(list,table1);
  appendTable(table1);
}
function showt(){
 document.getElementById("dshow").style.display="block"; 
 document.getElementById("dadd").style.display="none";
 document.getElementById("dedit").style.display="none";
 document.getElementById("dsearch").style.display="none"; 
 document.getElementById("dadd").style.display="none"; 
 document.getElementById("rshow").innerHTML="";
 document.getElementById("CounterT").innerHTML=Number(Trackers.length);
 summary();
 empty();
  TableFilter(Trackers);
  
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
function searcht(type){
   document.getElementById('inputtype').innerHTML=" ";
  document.getElementById("dsearch").style.display="block";
 if(type=="1"){
    document.getElementById("headingshow").innerHTML="Search by ID";
   }else if(type=="2"){
    document.getElementById("headingshow").innerHTML="Search by Title";
 }
}

function searchTran(currenttype,value){ 
    document.getElementById("rshow").innerHTML=" ";
   
    console.log({type:currenttype,value:value}); 
 if(currenttype=="1"){   
  if(Trackers.find(item=>item.IdT==value)){
    let list=Trackers.find(item=>item.IdT==value);
    TableFilter([list]);
   console.log("list:",list);
  }else alert("not found Transcation");
    }else if(currenttype=="2"){
      let t=value.toLowerCase();
     list= Trackers.filter(item=>item.title.toLowerCase()==t);
     TableFilter(list);
     console.log("title transcation",list);  
    }
}
function sortt(type){
  document.getElementById("dsearch").style.display="none";
 if(type==1){
         Trackers.sort((a,b)=>a.amount-b.amount);
   }else if(type==2){
      Trackers.sort((a,b)=>a.Datesort-b.Datesort);
   }else if(type==3){
       Trackers.sort((a,b)=>b.Datesort-a.Datesort);
   }
 showt();
}

function filtert(type){
  document.getElementById("dsearch").style.display="none";
  document.getElementById("rshow").innerHTML=" ";
  let list;
 if(type==1){
  list= Trackers.filter(item=>item.type==="income");
   TableFilter(list);
  console.log("income",list);
   }else if(type==2){
  list=Trackers.filter(item=>item.type==="expense");
    TableFilter(list);
  console.log("expense",list);
   }else if(type==3){
  list=Trackers.filter(item=>item.type==="expense" || item.type==="income");
  TableFilter(list);
console.log("income& expense",list);
   }
}
function deletet(){
  document.getElementById("dedit").style.display="block";
  document.getElementById("dadd").style.display="none";
  document.getElementById("dshow").style.display="none";
  document.getElementById("searche").style.display="none";
  document.getElementById("dela").style.display="block";
  document.getElementById("del").style.display="block";
  document.getElementById("heade").innerText="Deleted transcation";
  document.getElementById("eidt").innerHTML=" ";
}
function finddeletet(){
let ide=Number(document.getElementById("eidt").value); 
    empty();
    let found=false;
    for(let i=0; i<Trackers.length; i++){ 
      if(Trackers[i].IdT==ide){
       if(confirm("Are you sure you went to deleted this transcation?")){
         Trackers.splice(i,1);
         localStorage.setItem("Trackers",JSON.stringify(Trackers));
        console.log("succesfully deleted id:",ide,Trackers,JSON.parse(localStorage.getItem("Trackers")).length)}
        found=true; }
      }if(!found)alert("not found transction whtih this ID .");  
}
function deleteall(){
if(confirm("Are you sure you went to deleted all students?")){
 localStorage.removeItem("trackers");
 Trackers=[];}
}
