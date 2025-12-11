let grayButtons = [];
/*Add the button's id to the list. If the amount
of elements exceeds 2, the oldest element
will be removed.
*/
function toggleButton(buttonId){
  const maxLength = 2;
  if (grayButtons.includes(buttonId)){
    grayButtons = grayButtons.filter(grayButtons => grayButtons !== buttonId);
  } else {
    grayButtons.push(buttonId);
    if (grayButtons.length > maxLength){
      grayButtons.shift();
    } 
  }
  console.log(grayButtons);
}
/*If a button's id is in the array grayButtons,
it'll be added to the 'isClick' class, which
makes it gray (selected).
*/
function updateColor(){
  const allButtons = document.querySelectorAll('.button');
  allButtons.forEach(button =>{
    const buttonId = button.id;
    const textId = `${button.id}` + '-description';
    const textElement = document.getElementById(textId);
    if (grayButtons.includes(buttonId)){
      button.classList.add('isClicked');
      textElement.innerHTML = 'selected';
    } else {
      button.classList.remove('isClicked');
      textElement.innerHTML = 'abandoned';
    }
  })
}
