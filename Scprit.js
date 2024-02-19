function chakani(){
   
    document.getElementById('fa-bars').addEventListener('click', function(){
    document.getElementById('item-list').classList.toggle('hidden');
})
}
 

// -----PopUp----------//

function openPoupp(){
document.getElementById('Card-popup').style.display = 'block';
}
function closePopup(){
document.getElementById('Card-popup').style.display = 'none';
}


// --------coler section----------//

 const buttons = document.querySelectorAll('.btn');

   buttons.forEach(button => {
   button.addEventListener('click', () => {
    
     button.style.backgroundColor = '#22ff45'; 
   });
 });

// <!-----------------------//

function removeInputAndButton() {
  const inputField = document.getElementById('input-Field');
  const ApplyField = document.getElementById('Apply-Field');
  
  inputField.remove();
  ApplyField.remove();
}

// ---------------setNumber---------------------//
const buttonSet = document.querySelectorAll('.btn');
buttonSet.forEach(button => {
  button.addEventListener('click', function(){
  const currentText = document.getElementById('current-set');
  let currentValue = parseInt(currentText.innerText);
  currentValue -= 1;
  currentText.innerText = currentValue;
  })
})