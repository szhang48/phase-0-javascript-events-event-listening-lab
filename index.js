function addingEventListener(){ 
    const input = document.getElementById('button');
    function clickAlert() {
        alert('I was clicked!');
      }
      
      input.addEventListener('click', clickAlert);

}

// const input = document.querySelector('#button');
// function clickAlert() {
//     alert('I was not clicked!')
// }
// input.addEventListener('click', clickAlert);
