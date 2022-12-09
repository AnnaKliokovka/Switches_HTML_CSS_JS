let b = document.getElementById("btn");

b.addEventListener("click", async () => {
    clicked_on_heart();
});

function clicked_on_heart() {
    //Переключаем switcher
    $('.botton-btn').click(function () {
        $(this).toggleClass('switch-btn-off');
    });
   $('.heart-btn').click(function () {
        $(this).toggleClass('switch-heart-off');
    });
   $('.cat-btn').click(function () {
        $(this).toggleClass('switch-cat-off');
    });
  $('.letter-btn').click(function () {
        $(this).toggleClass('switch-letter-off');
    });
  }