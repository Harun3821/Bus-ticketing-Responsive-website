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