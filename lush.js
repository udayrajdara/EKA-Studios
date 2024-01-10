window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;

        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');

        }
    }
}


let nihaoTitle = document.getElementById('nihao-title');
let matterTitle =document.getElementById('matter-title');



function nihaoZoomIn(){
    nihaoTitle.style.transform = 'scale(1)';
    nihaoTitle.style.fontSize = '3.5rem';
    matterTitle.style.transform = 'scale(1.2)';
    matterTitle.style.fontSize = '3rem'
}