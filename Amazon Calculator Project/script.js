//let isSubscribed = false;
function calculateTotal(){
  const inputElement = document.getElementById('js-cost-input');
  let cost = Number(inputElement.value);
  if (cost <= 0){
    cost = 0;
  } else if (cost < 40){
    /*if (isSubscribed === true){
      cost = cost;
    } else {
      cost += 10;
    }
    */
    cost += 10;
  } else{
    /*if(isSubscribed === true){
      cost -= 10;
    } else {}
    */
  }
  
  const total = truncate2DecimalPlaces(cost);
  document.getElementById('result').innerHTML = `$${total}`;
}

function truncate2DecimalPlaces(num){
  return Math.trunc(num * 100) / 100;
}

function handleEnter(){
  if(event.key === 'Enter'){
    calculateTotal();
  }
}

function subscribe(){
  const buttonElement = document.getElementById('js-subscribe-button');
  if (buttonElement.innerHTML === 'Subscribe'){
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
    //isSubscribed = true;
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
    //isSubscribed = false;
  }
}
