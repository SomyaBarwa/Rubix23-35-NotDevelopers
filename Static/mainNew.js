
function update(){
const checkBox1=document.querySelector('#Checkbox1')
const checkBox2=document.querySelector('#Checkbox2')
const checkBox3=document.querySelector('#Checkbox3')
const checkBox4=document.querySelector('#Checkbox4')
const checkBox5=document.querySelector('#Checkbox5')

const progress=document.querySelector('#progress')
const score=document.querySelector('#userActivity')
let w=20;
let s=0;
function updateValue(s,width){
    score.textContent=`${s}/`;
    progress.style.width=w+"%";
}
if (checkBox1.checked == true)
{
    s++;
    updateValue(s,w);
    w+=20;
}
if (checkBox2.checked == true)
{
    s++;
    updateValue(s,w);
    w+=20;
}
if (checkBox3.checked == true)
{
    s++;
    updateValue(s,w);
    w+=20;
}
if (checkBox4.checked == true)
{
    s++;
    updateValue(s,w);
    w+=20;
}
if (checkBox5.checked == true)
{
    s++;
    updateValue(s,w);
    w+=20;
}

if(s==1)
  alert("Heyy you made the first move. Way to go:)");
if(s==2 || s==3)
  alert("Doing Well!!!");
if(s==4)
  alert("Close enough.. You can do it!!")
if(s==5)
  alert("You made it!!")

}