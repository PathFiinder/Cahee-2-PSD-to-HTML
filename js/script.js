//Navigation - burger

document.querySelector('i.fa-bars').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('.ul-list').classList.toggle('active');
})


//SCROLL
const headerPosTop = $('header').offset().top
const aboutUsPosTop = $('.about-us').offset().top
const ourServicesPosTop = $('.our-services').offset().top
const galleryPosTop = $('.gallery').offset().top
const subscribeUsPosTop = $('.subscribe-us').offset().top
const blogPosTop = $('.blog').offset().top
const contactPosTop = $('.contact').offset().top
const footerPosTop = $('footer').offset().top

const navHeight = $('nav').height()
let activeH = 0

//FLEX

const classLista = ['section.gallery', 'div.wrap-gallery', 'div.wrap-content-3', 'div.wrap-content-4'];

document.querySelector('.view-more').addEventListener('click', function () {
    for (let i = 0; i < classLista.length; i++) {
        document.querySelector(classLista[i]).classList.toggle("active");
    }
    if (document.querySelector('.wrap-gallery').classList.contains('active')) {
        document.querySelector('.view-more').textContent = "view less"
        activeH = 458

    } else {
        document.querySelector('.view-more').textContent = "view more"
        activeH = 0
    }

})

//SCROLL
function toScroll(PosTop, navH,activeH) {
    $('body, html').animate({
        scrollTop: PosTop - navH + activeH
    }, 1000)
    document.querySelector('nav').classList.remove('active');
    document.querySelector('.ul-list').classList.remove('active');
}

$('.a-home').on('click', function () {
    toScroll(headerPosTop, 0,activeH)
})

$('.a-about').on('click', function () {
    toScroll(aboutUsPosTop, navHeight,activeH)
})

$('.a-services').on('click', function () {
    toScroll(ourServicesPosTop, navHeight,activeH)
})

$('.a-gallery').on('click', function () {
    toScroll(galleryPosTop, navHeight,activeH)
})

$('.a-blog').on('click', function () {
    toScroll(blogPosTop, navHeight,activeH)
})

$('.a-contact').on('click', function () {
    toScroll(contactPosTop, navHeight,activeH)
})
