
function Calculator(operator){ let heading= document.getElementById("R");
                      let box1=document.getElementById("one").value;
                      let box2=document.getElementById("tow").value;
                      let sum;
                  switch (operator){
                      case "+":
                                sum= Number(box1) + Number(box2);
                                break;
                      case "-":
                                sum= Number(box1) - Number(box2);
                                break;
                      case "*":
                               sum= Number(box1) * Number(box2);
                               break;
                      case "/":
                               sum= Number(box1) / Number(box2);
                               break;
                     default:
                              alert('invalid operator');
 }

                heading.innerText= sum;

 }
