let heart = document.getElementById("heart");

heart.addEventListener("click", async () => {
    clicked_on_heart();
});

function clicked_on_heart() {
    //Переключаем switcher
    $('.heart-btn').click(function () {
        $(this).toggleClass('switch-on');
    });
  }


let cat = document.getElementById("cat");

cat.addEventListener("click", async () => {
    clicked_on_cat();
});

function clicked_on_cat() {
    //Переключаем switcher
    $('.cat-btn').click(function () {
        $(this).toggleClass('switch_cat-on');
    });
  }