let iconSearch = document.querySelector('.iconSearch');
let search = document.querySelector('.search');
let clear = document.querySelector('.clear');
let filter = document.querySelector('.filter');

// let mysearch = document.querySelector('.mysearch');

search.onclick = function() {
    search.classList.toggle('active');
    clear.classList.toggle('active');
    filter.classList.toggle('active');

    // mysearch.focus();
}




