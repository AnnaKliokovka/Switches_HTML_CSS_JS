let heart = document.getElementById("heart");
//let cat = document.getElementById("cat");

heart.addEventListener("click", async () => {
    clicked_on_heart();
});

function clicked_on_heart() {
    //Переключаем switcher
    $('.heart-btn').click(function () {
        $(this).toggleClass('switch-on');
    });
  }
