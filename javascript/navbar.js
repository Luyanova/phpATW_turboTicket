let burgerButton = document.getElementById('burgerButton');
let iconBurger = document.getElementById('iconBurger');
let iconCross = document.getElementById('iconCross');
let navbar = document.getElementById('navbar');

iconBurger.onclick = function() {
    iconCross.classList.toggle('active');
    iconBurger.classList.remove('active');
    navbar.classList.toggle('active');
    
}

iconCross.onclick = function() {
    iconBurger.classList.toggle('active');
    iconCross.classList.remove('active');
    navbar.classList.remove('active');
    
}


