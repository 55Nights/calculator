 class Calculator{
     constructor(prevOperText,curOperText){
         this.prevOperText=prevOperText
         this.curOperText=curOperText
     }
     clear(){
        this.currentOperand=''
        this.previousOperand=''
        this.operation= undefined
        this.clear()
     }
     delete(){

     }
     appendNumber(number){
        this.currentOperand=number
     }
     chooseOperation(operation){

     }
     compute(){

     }
     updateDisplay(){
     this.curOperText.innerText=this.currentOperand
     }
 }

 
 const numButtons=document.querySelectorAll('[data-number]')
 const opButton=document.querySelectorAll('[data-operation]')
 const equalButton=document.querySelector('[data-equals]')
 const delButton=document.querySelector('[data-delet]')
 const allclear=document.querySelector('[data-all-clear]')
 const prevOperText=document.querySelector('[data-previous-operand]')
 const curOperText= document.querySelector('[data-current-operand]')
const calculator = new Calculator(prevOperText,curOperText)
numButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

/*

var n1=document.getElementById("num1");
var n2=document.getElementById("num2");
var n3=document.getElementById("num3");
var ball=document.getElementById("move");
var logo= document.getElementById("logo");
var themeSection=document.getElementById("theme");
var input=document.getElementById("answer");
var bar=document.getElementById("b");
var bdy=document.body;
var reset=document.getElementById("reset");
var submit=document.getElementById("submit");
 

n1.addEventListener("click",theme1);
function theme1() {
    
    ball.style.left="0em";
    ball.style.backgroundColor="var(--redback)";
    bdy.style.backgroundColor="var(--back)";
    logo.style.color="white";
    themeSection.style.color="var(--orange)";
    bar.style.backgroundColor="var(--keypad)";
    input.style.backgroundColor="var(--screen)";
    input.style.color="white";
    op.style.backgroundColor=" var(--keypad)";
   
    reset.style.backgroundColor="var(--keybac)";
    submit.style.backgroundColor="var(--red)";
    
}
n2.addEventListener("click",theme2);
function theme2() {

     ball.style.left="1.33em";
     ball.style.backgroundColor="var(--keyshd2)";
     bdy.style.backgroundColor="var( --back2)";
     logo.style.color="var(--text)";
     themeSection.style.color="var(--text)";
     bar.style.backgroundColor="var(--keypd2)";
     input.style.backgroundColor="var(--scren2)";
     input.style.color="var(--text)";
     op.style.backgroundColor=" var(--keypd2)";
    
    reset.style.backgroundColor="var(--keyback2)";
    submit.style.backgroundColor="var(--keyshd2)";
}
n3.addEventListener("click",theme3);
function theme3() {

    ball.style.left="3em";
    ball.style.backgroundColor="var(--Purecyan)";
    bdy.style.backgroundColor="var(--backgd)";
    logo.style.color="var(--Lightyellow)";
    themeSection.style.color="var(--Lightyellow)";
    bar.style.backgroundColor="var(--backgd)";
    input.style.backgroundColor="var(--screen3)";
    input.style.color="var(--Lightyellow)";
    op.style.backgroundColor=" var(--screen3)";
    
    reset.style.backgroundColor="var(--darkviolet)";
    submit.style.backgroundColor="var(--Purecyan)";
}
*/