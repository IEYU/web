$(document).ready(function() {
    console.log("page is loaded");
    $(window).scroll(function() {
        console.log('Scroll event fired');
        if ($(window).scrollTop() + $(window).height() >= $(document).height() + 10) {
            setTimeout(function() {
                window.location = "main";
            }, 300);
        }
    });
});