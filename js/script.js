// ------   

const menutoggle = document.querySelector(".menutoggle");

const navbar = document.querySelector(".navbar");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");
     
    navbar.classList.toggle("active");

})

//   ------- slider testimonial

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
autoplay:true,
dots:false,
autoplayTimeout:1800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// -------- owl carosoul 2

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })


$('.loop').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:1
        },
        1000:{
            items:1
        }

    }
});

// -----  AOS

// ----isotope jquery

// $('.Portfolio-item').isotope({
//     // options
//     itemSelector: '.item',
//     layoutMode: 'fitRows'
// });




// $(document).ready(function(){

// $('.list').click(function(){

//     const value = $(this).attr('data-filter');

// if (value == 'all'){

//     $('.item').show('1000');
// }
// else{
//  $('.item').not('.'+value).hide('1000');
//     $('.item').filter('.' + value).shoe('1000');

// }
   
// })

//     $('.list').click(function () {
    
//         $(this).addClass('.active').siblings().removeClass('active');

// })

// })




// $('.worknav ul li').click(function(){

//     $('.worknav ul li').removeClass('.active');

//     $(this).addClass('active');

// var selector = $(this).attr('data-filter'); 

//     $('.Portfolio-item').isotope({

//         filter:selector
//     });

// return false;

// });



























