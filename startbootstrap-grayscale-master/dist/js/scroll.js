$( document ).ready( function() {

    $( window ).scroll( function() {

        if ( $( this ).scrollTop() > 10 ) {

            $('#mainNav').fadeOut();


        } 

        else { 

            $('#mainNav').fadeIn(); 


        } 

    });

});