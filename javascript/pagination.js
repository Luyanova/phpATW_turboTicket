let linkPage = document.getElementsByClassName('linkPage');
let currentValue = 1;

function activeLink(){
    for(l of linkPage){
        l.classList.remove('active');

        event.target.classList.add('active');
        currentValue = event.target.currentValue;
    }

}

// function backBtn() {
//     if(currentValue > 1) {
//         for(l of linkPage){
            
    
            
//         }
//         currentValue--;
//         linkPage[currentValue-1].classList.add('active')
//     }
// }
