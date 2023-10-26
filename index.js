//code for footer
const icons=document.querySelectorAll(".msg");
const message=document.querySelectorAll(".message");
const fRepeatIcon=document.querySelectorAll(".fa-repeat");
const lineHeart=document.querySelectorAll(".line-heart");
const solidHeart=document.querySelectorAll(".solid-heart");
const fPlayButton=document.querySelector('.fa-play');
const fPauseButton=document.querySelector('.fa-pause');
const upChevron=document.querySelector('.fa-chevron-up');
const downChevron=document.querySelector('.fa-chevron-down');
const fSound=document.querySelector('.fa-volume-high');
const fNoSound=document.querySelector('.fa-volume-xmark');


for(let i=0; i<icons.length; i++)
{
    icons[i].addEventListener('mouseover',()=>{
           message[i].style.display="block";
    });

    icons[i].addEventListener('mouseout',()=>{
          message[i].style.display="none";
    });

    icons[i].addEventListener('click',changeColor);

    function changeColor(event)
    {
        let elem=event.target;        
        elem.classList.toggle("active");
    }
}

fRepeatIcon[0].addEventListener("click", changeColors);

function changeColors(event)
{
    let elem=event.target;
    elem.classList.toggle("active");
}

//switching chevron

upChevron.addEventListener("click", ()=>{
    upChevron.classList.toggle("active");
    downChevron.classList.toggle("active");
})

downChevron.addEventListener("click", ()=>{
    upChevron.classList.toggle("active");
    downChevron.classList.toggle("active");
})

//switching heart on click

lineHeart[0].addEventListener('click',()=>{
    lineHeart[0].classList.toggle("active");
    solidHeart[0].classList.toggle("active");
});

solidHeart[0].addEventListener('click',()=>{
    lineHeart[0].classList.toggle("active");
    solidHeart[0].classList.toggle("active");
});

//Play pause button

fPlayButton.addEventListener("click", ()=>{
    fPlayButton.classList.toggle("active");
    fPauseButton.classList.toggle("active");
})

fPauseButton.addEventListener("click", ()=>{
    fPlayButton.classList.toggle("active");
    fPauseButton.classList.toggle("active");
})

//toggling the sound icon

fSound.addEventListener("click", ()=>{
    fSound.classList.toggle("active");
    fNoSound.classList.toggle("active");
})

fNoSound.addEventListener("click", ()=>{
    fSound.classList.toggle("active");
    fNoSound.classList.toggle("active");
})

//----------------------Extra Functionalities----------------------


//Unfollow to Follow
function follow()
{
    let flag = document.getElementById('unfollow').innerHTML;
    if(flag == "Unfollow"){
        document.getElementById('unfollow').innerHTML = "Follow";
    }
    else{
        document.getElementById('unfollow').innerHTML = "Unfollow"
    }
}

//Hovering Effect

function Hover(text_id,flag){
    const translateX = 0; 
    const translateY = -10;  
    element = document.getElementById(text_id,flag);
    if(flag == false){
        element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
    else{
        element.style.transform = `translate(${translateX}px, ${-translateY}px)`;
    }
}

//show all and show less
function show(text_show,text_button){
    let dec = document.getElementById(text_show);
    if(dec.style.display == "grid"){
        dec.style.display = "none";
        document.getElementById(text_button).innerHTML = "<b>Show All</b>";
    }
    else{
        dec.style.display = "grid";
        document.getElementById(text_button).innerHTML = "<b>Show Less</b>";

    }
}

// updating footer according to music selection
function musicplay(text_img){
    let elem = document.getElementById(text_img);
    let old_img = elem.querySelector('img');

    let foot = document.getElementById('footerSong');
    let new_img = foot.querySelector('img');
    new_img.src = old_img.src;

    let songname = foot.querySelector('h2')
    songname.innerHTML = elem.querySelector('.card_title').innerHTML;
}
function play(){
    let flag=document.querySelector('play');
    if(flag.innerHTML=="Play"){
        flag.innerHTML="Pause";
    }
    else{
        flag.innerHTML="Play";
    }
}
