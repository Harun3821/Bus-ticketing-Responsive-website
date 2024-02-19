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

 // Add click event listener to each button
 buttons.forEach(button => {
   button.addEventListener('click', () => {
     // Change background color on click
     button.style.backgroundColor = '#22ff45'; // Change this to whatever color you want
   });
 });


