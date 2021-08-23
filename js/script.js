$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

});

AOS.init({
    delay:400,
    duration:1000
})

$('.portfolio .button-container .btn').click(function(){

    let filter = $(this).attr('data-filter');

    if(filter == 'all'){
        $('.portfolio .image-container .box').show('400')
    }else{
        $('.portfolio .image-container .box').not('.'+filter).hide('200')
        $('.portfolio .image-container .box').filter('.'+filter).show('400')
    }

});

