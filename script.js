document.addEventListener('DOMContentLoaded' ,function(){


    document.querySelector('#password').onkeyup = () => {
        document.querySelector('#sup').disabled=false;
        var letters = /^[A-Za-z](?=.*\d)\w{7,20}$/;
      if (document.querySelector('#password').value.match(letters)){
            document.querySelector('#sup').disabled=false;
              document.querySelector('#verip').innerHTML="";
        
          
    }
     
    else{
             document.querySelector('#verip').innerHTML="username must be 8 characters or more, and must contain digit";
             document.querySelector('#sup').disabled=true;
    
             
    
    
             };
            };
    
    
    });
    
    