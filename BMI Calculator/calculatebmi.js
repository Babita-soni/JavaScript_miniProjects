const form = document.querySelector('form');

//This use case will give you empty value.
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault(); //to prevent submitting the form
    const height = parseInt(document.querySelector('#height').value) // the value will be in string so we will have to convert it into integer
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('.results')

    function getBmiMessage(bmi){
        if(bmi < 18.6){
            return "Underweight";
        }
        else if(bmi > 24.9){
            return "Overweight"
        }
        else{
            return "Normal"
        }
    }

    if(height == '' || height < 0 || isNaN(height)){
        results.innerHTML = "please give a valid height"
    } else if(weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "please give a valid weight"
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        const message = getBmiMessage(bmi);
        
        results.innerHTML = `<span>${bmi}(${message})</span>`;
    }
})