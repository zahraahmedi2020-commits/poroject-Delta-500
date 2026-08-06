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
