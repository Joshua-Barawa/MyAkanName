

$(document).ready(function(){

    var person = {
        year: document.getElementById('year').val(),
        month: document.getElementById('month').val(),
        date: document.getElementById('date').val()
       
       }
       
      $('btn').click(function(){
           console.log(person)
         });


});

