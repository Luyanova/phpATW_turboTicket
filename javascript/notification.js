let buttonDeleteUserEvent = document.getElementById('buttonDeleteUserEvent');
let containerNotification = document.getElementById('containerNotification');
let notification1 = document.getElementById('notification1');
let notification2 = document.getElementById('notification2');

let yes1 = document.getElementById('yes1');
let no1 = document.getElementById('no1');
let no2 = document.getElementById('no2');

buttonDeleteUserEvent.onclick = function() {
    containerNotification.classList.toggle('active');
    notification1.classList.toggle('active');

    
    
}

yes1.onclick = function() {
    notification1.classList.remove('active');
    notification2.classList.toggle('active');

    
    
}

containerNotification.onclick = function() {
    containerNotification.classList.remove('active');
    notification1.classList.remove('active');
    notification2.classList.remove('active');

    
    
}

no1.onclick = function() {
    containerNotification.classList.remove('active');
    notification1.classList.remove('active');
    notification2.classList.remove('active');

    
    
}

no2.onclick = function() {
    containerNotification.classList.remove('active');
    notification1.classList.remove('active');
    notification2.classList.remove('active');

    
    
}



console.log(containerNotification)