function darkmode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

let string = "";
let buttons = document.querySelectorAll('.button1, .button2, .button3');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string;
            document.querySelector('input-details').value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string;
            document.querySelector('input-details').value = "";
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})