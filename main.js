for(let i = 0; i < 1024; i++){
    document.querySelector(".app").innerHTML += '<div></div>';
}
document.body.addEventListener('click', event => {
    event.target.style.backgroundColor = '#fff';
    event.target.style.border = '1 px solid #000';
})
document.addEventListener('keydown', event => {
    if(event.key === 'l'){
        document.querySelector(".app").style.backgroundColor = '#0f0';
    }
    if(event.key === 'a'){
        document.querySelector(".app").style.backgroundColor = '#0e0';
    }
    if(event.key === 'u'){
        document.querySelector(".app").style.backgroundColor = '#0d0';
    }
    if(event.key === 'r'){
        document.querySelector(".app").style.backgroundColor = '#0c0';
    }
    if(event.key === 'e'){
        document.querySelector(".app").style.backgroundColor = '#0b0';
    }
    if(event.key === 'n'){
        document.querySelector(".app").style.backgroundColor = '#0a0';
    }
})
document.querySelector('.clear').addEventListener('click', event =>{
    window.location = window.location;
})
document.body.addEventListener('click', event => {
    if(event.ctrlKey){
        event.target.innerText = document.querySelector('#text').Value;
        event.target.style.backgroundColor= 'rgb(0,'+ green + ',0)';
    }
})