//function to make sound by clicks
var AllBtnNum = document.querySelectorAll(".drum").length;

for (i=0; i < AllBtnNum; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(event) {
         var key = this.innerHTML;
         makeSound(key);
         animate(key);
     });
}  


//function to decide the right sound
function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
        
    
        default:
            alert("not a valid key")
            break;
    }
    
}


//function to play sound with keyboard
document.addEventListener("keypress", function(event){

    makeSound(event.key)
     animate(event.key)
    /* alert("a key was pressed") */
 });


    function animate(currentKey){
        document.querySelector("."+currentKey).classList.add("pressed");
        /* alert(currentKey+" was pressed and it's sound was played"); */
        setTimeout(function(){document.querySelector("."+currentKey).classList.remove("pressed")}, 100)
    }



