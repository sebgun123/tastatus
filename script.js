function activetast(htmlelement){
    let letterPressed = htmlelement.innerHTML;
    document.getElementById('input').value += letterPressed;
}
function activemellomrom(){
    document.getElementById('input').value += ' ';

}
function activeslett(){
    let alreadyInput = document.getElementById('input');
    let value = alreadyInput.value;
    document.getElementById('input').value = value.slice(0, -1)
}