$(document).ready(function(){
    $('.js--scroll-to-faetures').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-faetures').offset().top}, 1000);
    
    });
    $('.js--scroll-to-skills').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-skills').offset().top}, 1000);
    
    });
    $('.js--scroll-to-exp').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-exp').offset().top}, 1000);
    
    });
    $('.js--scroll-to-con').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-con').offset().top}, 1000);
    
    });

    $('.js--section-faetures').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px;'
    });
});

