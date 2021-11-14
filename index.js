
$(document).ready(function(){

        var gender = $('#gender');
        var year = $('#year');
        var month = $('#month');
        var date = $('#date');



       

       
      $('#btn').click(function(){
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var day = week[new Date(year.val()+'/'+month.val()+'/'+date.val()).getDay()];
        var name;

    ////////////////Check AKAN NAME IF GENDER IS MALE/////////////
         if(gender.val() === "Male"){

           if(day === "Sunday"){
             name = "Kwasi"
           }
           else if(day === "Monday"){
               name="Kwadwo"
           }
           else if(day === "Tuesday"){
               name ="Kwabena"
                 }
        else if(day === "Wednesday"){
               name ="Kwaku"
                }
        else if(day === "Thursday"){
               name ="Yaw"
            }
        else if(day === "Friday"){
               name ="Kofi"
                   }
        else if(day === "Sarturday"){
               name="Kwame"
           }
          
         }

         /////////CHECK AKAN NAME IF GENDER IS FEMALE////////////////
         if(gender.val() === "Female"){

            if(day === "Sunday"){
              name = "Akosua"
            }
            else if(day === "Monday"){
                name="Adwoa"
            }
            else if(day === "Tuesday"){
                name ="Abenaa"
                  }
         else if(day === "Wednesday"){
                name ="Akua"
                 }
         else if(day === "Thursday"){
                name ="Yaa"
             }
         else if(day === "Friday"){
                name ="Afua"
                    }
         else if(day === "Sarturday"){
                name="Ama"
            }
           
          }

////////////////CHECK ERRORS IN FORM INPUTS//////////////////
          if(year.val() === ''){
            $('#y-error').html("Year is required!!");
        }
        else if(year.val().length > 4 || year.val().length < 4){
            $('#y-error').html("Year length cannot be less or greater than 4!!");
        }

         if(month.val() === ''){
            $('#m-error').html("Month is required!!");
        }
        else if(month.val() > 12 || month.val() < 1){
            $('#m-error').html("Month ranges between 1-12 !!");
        }

         if(date.val() === ''){
            $('#d-error').html("Date is required!!");
        }
        else if(date.val() > 31 || date.val() < 1){
            $('#d-error').html("Date ranges between 1-31 !!");
        }
        

else{
    $('#response').html('You were born on ' + day + ' and your AKAN name is ' + name);
    $('#response').css({'color':'white', 'font-weight':'bold'
                            , "background-color": "brown", "border-radius":"20px", "padding":"5px 0px"});
                            $('span').text('');
                            
    }

         });


});
