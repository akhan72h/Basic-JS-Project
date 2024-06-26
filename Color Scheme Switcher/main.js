
const Buttons = document.querySelectorAll('.button');

//console.log(Buttons);

const Body = document.querySelector("body");

Buttons.forEach((button)=>{
 
    button.addEventListener("click", (e)=>{  //e = event passing to eventListener callBack function
      
       // console.log(e);

       // console.log(e.target);

       if(e.target.id === 'yellow'){

        Body.style.background = e.target.id
        
       }
       if(e.target.id === 'red'){

        Body.style.background = e.target.id

       }
       if(e.target.id === 'blue'){

        Body.style.background = e.target.id

       }
       if(e.target.id === 'greenyellow'){

        Body.style.background = e.target.id

       }
    //    if(e.target.id === 'orange'){

    //     Body.style.background = e.target.id

    //    }
   
    })

})

// if we want to add more button we need to compare same like above 
