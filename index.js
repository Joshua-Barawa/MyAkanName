
$(document).ready(function(){

        var gender = $('#gender');
        var year = $('#year');
        var month = $('#month');
        var date = $('#date');
       

       
      $('#btn').click(function(){
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var day = week[new Date(year.val()+'/'+month.val()+'/'+date.val()).getDay()];

        $('#response').html('Your AKAN name is:' + day);
        $('#response').css({'color':'brown', 'font-weight':'bold'});
      
         });


});
