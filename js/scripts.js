var menu = document.querySelector('.mobile-nav');

menu.style.transform = 'translateY(-100%)';

function toggleNav(){


    if(menu.style.transform == 'translateY(-100%)'){
        menu.style.transform = 'translateY(0)';
    } else   { 
        menu.style.transform = 'translateY(-100%)';
    }
}