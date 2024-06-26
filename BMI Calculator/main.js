
const Form = document.querySelector('form');

Form.addEventListener('submit', function(e){

    e.preventDefault();

   // console.log(e);
    
const height = parseInt((document.querySelector('#height')).value);
const weight = parseInt((document.querySelector('#weight')).value);
const Result = document.querySelector('#result');

  // console.log(height);
  // console.log(weight);

if(height === "" || height < 0 || isNaN(height))
    {
        Result.innerHTML = `Please Enter a valid height ${height}`;
    } 
    else if(weight === "" || weight < 0 || isNaN(weight))
    {
        Result.innerHTML = `Please Enter a valid weight ${weight}`;
    }
    else{
       
        let result =  +(weight/((height*height)/10000)).toFixed(2);

        if(result < 18.6)
            {
                Result.innerHTML  =   `BMI = ${result} : Your BMI is Less than 18.6, You are Under Weighted `

            }
        else if(result >= 18.6 && result <= 24.9)
            {
                Result.innerHTML  =   `BMI = ${result} : Congratulations!... Your BMI is in Normal Range `
            }
        else if(result > 24.9)
            {
                Result.innerHTML  =   `BMI = ${result} : Your BMI is greater than 24.9, You are Over Weighted `
            }

    
     }
} );