$('.nav-item .nav-link').click(function () {
            
    // alert("D")
    $('.nav-item .nav-link').removeClass('text-primary');   // it remove all the active links
    $(this).addClass('text-primary');    // it adds active class to the current link you have opened
})