
$(document).ready(function(){

        var gender = $('#gender');
        var year = $('#year');
        var month = $('#month');
        var date = $('#date');
       

       
      $('#btn').click(function(){
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var day = week[new Date(year.val()+'/'+month.val()+'/'+date.val()).getDay()];
        var name;

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





         $('#response').html('Your AKAN name is:' + name);
        $('#response').css({'color':'brown', 'font-weight':'bold'});


      
         });


});
