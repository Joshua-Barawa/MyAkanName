

$(document).ready(function(){

   
        var year = $('#year');
        var month = $('#month');
        var date = $('#date');
       

       
      $('#btn').click(function(){
        var dayOfWeek =  (((year.val().slice(0, 2)/4) -2*year.val().slice(0, 2)-1) + ((5*year.val().slice(2, 4)/4) ) + ((26*(month.val()+1)/10)) + date.val() )%7;

         console.log(dayOfWeek);
    
         });


});

