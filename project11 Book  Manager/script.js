var currentIndex = 0
let books=[];
function mainmenu(){
document.getElementById("body").style.display="block";
document.getElementById("showb").style.display="none";
document.getElementById("deletb").style.display="none";
document.getElementById("showb").style.display="none";
document.getElementById("searchb").style.display="none";
document.getElementById("averageP").style.display="none";
document.getElementById("rsearch").innerHTML="";
document.getElementById("result").innerHTML="";
document.getElementById("idb").value="";
document.getElementById("tib").value="";
}
function addb(){
document.getElementById("body").style.display="none";
document.getElementById("addb").style.display="block";}
function saveb(){
let t=document.getElementById("inputTb");
let au=document.getElementById("inputAub");
let id=currentIndex+1;
let p=document.getElementById("inputP");
let book={title:t.value,idb:id,price:p.value};
books.push(book);
currentIndex++;
alert("New Book save successfully");
t.value="";
au.value="";
p.value=0;
document.getElementById("addb").style.display="none";
document.getElementById("body").style.display="block";}
function showb(){
document.getElementById("body").style.display="none";
document.getElementById("showb").style.display="block";   

if(books.length==0){
    alert("no Book show");
    document.getElementById("showb").style.display="none";
    document.getElementById("body").style.display="block"
}else{
    for(let i=0; i<books.length; i++){ 
    let r = document.getElementById("result");
    let d =document.createElement("div");
    d.innerHTML ="Title Book: " + books[i].title + ",  ID Book:" + books[i].idb + ",   Price:" + books[i].price  + "<br>"; 
     r.appendChild(d);
    }}
}
function deletb(){
document.getElementById("body").style.display="none";
document.getElementById("deletb").style.display="block";
}
function finddeletb(){ 
if(books.length==0){
    alert("No Book deleted");
    document.getElementById("deletb").style.display="none";
    document.getElementById("body").style.display="block";
}else{
    let id=Number(document.getElementById("didb").value);
    let found=false;
            for(let i=0; i<books.length; i++){  
                if(books[i].idb==id){
                    books.splice(i,1); 
                     found = true;
                     alert("Book Deleted");
                     break;
                }
             }if(!found)alert("not fund Book whtih this ID .");
     }
}
function searchb(){
    document.getElementById("body").style.display="none";
    document.getElementById("searchb").style.display="block";
}
 function findb(){
   if(books.length==0){
         alert("No Book deleted");
         document.getElementById("searchb").style.display="none";
         document.getElementById("body").style.display="block"; 
    }else{
        let id=Number(document.getElementById("sidb").value);
        let t=document.getElementById("stib").value;
        let found=false;    
             for(let i=0; i<books.length; i++){   
                if(books[i].idb==id ||books[i].title==t ){
                        let r = document.getElementById("rsearch");
                        r.innerHTML+= "<br>"+" Title book:" + books[i].title + ",  ID Book:" + books[i].idb + ",  Price:" + books[i].price + "<br>"; 
                        found=true; 
                        break;  
                    }
             }if(!found)alert("Not fund Book whtih this ID .");
         }
}
function avgPrice(){
     document.getElementById("body").style.display="none";
     document.getElementById("averageP").style.display="block";
    let sum=0;
    for(let i=0;i<books.length;i++){
        sum=Number(books[i].price)+sum;}
 let avg=sum/books.length;
 let r=document.getElementById("havgp");
 r.innerText=avg; 
}
