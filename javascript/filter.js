let filter2 = document.getElementById('filter');
let filterOverflow = document.getElementById('filterOverflow');

filter2.onclick = function() {
    filterOverflow.classList.toggle('active');
    filter2.classList.toggle('active2');
    
}

let carButton = document.getElementById('carButton');

carButton.onclick = function() {
    carButton.classList.toggle('active2');
    kartButton.classList.remove('active2');

}

let kartButton = document.getElementById('kartButton');

kartButton.onclick = function() {
    kartButton.classList.toggle('active2');
    carButton.classList.remove('active2');
}