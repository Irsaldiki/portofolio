$('.js-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    stagePadding:50,
    margin:50,
    animateOut:'fadeOut',
    animateIn:'fadeIn',
    nav:true,
    autoplayHoverPause:true,
    items:3,
    navText: ["<span class='bi bi-chevron-left'</span>","<span class='bi bi-chevron-right'</span>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
});

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3,
//             loop:true
//         }
//     }
// });