let cmt = document.getElementById('comment');
let result=document.getElementById('res');
let edtTxt=document.getElementById('editedtxt');
let result1=document.getElementById('res1');
let p;
function displayText(e){
    e.preventDefault();
    result.innerHTML = result.innerHTML + " "+cmt.value ;
    p=result.innerHTML;
    console.log(p);
}
function resetText(){
    result.innerHTML="";
    result1.innerHTML="";
}
function editText(){
    // result1.innerHTML = cmt.value;
    result1.innerHTML = p;
    
}
function newValue(){
    result.innerHTML = result1.value;
}
