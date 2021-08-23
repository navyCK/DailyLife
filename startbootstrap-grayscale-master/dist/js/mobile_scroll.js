var startX, startY, endX, endY;

$(window).on("touchstart", function (event) {
    startX = event.originalEvent.changedTouches[0].screenX;
    startY = event.originalEvent.changedTouches[0].screenY;
});

$(window).on("touchend", function (event) {
    endX = event.originalEvent.changedTouches[0].screenX;
    endY = event.originalEvent.changedTouches[0].screenY;

    if (startY - endY > 50) {
        $("#mainNav").fadeOut();
    } else if (endY - startY > 50) {
        $("#mainNav").fadeIn();
    } 
});
