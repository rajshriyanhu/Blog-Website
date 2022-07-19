const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
    
}

$(document).ready(function(){
    $nav=$('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })


    //click to go to top

    $('.move span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })


    AOS.init();
})

//owl-car

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:responsive
    });
  });

