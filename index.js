$(document).ready(function () {
  // Зображення для зміни
  const images = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  ];

  // Функція для зміни фону в залежності від часу доби
  function updateBackgroundColor() {
    const hours = new Date().getHours();

    if (hours >= 6 && hours < 12) {
      $("body").css("background-color", "#FFFAE3");
      $("body").css(
        "background-image",
        "linear-gradient(to top, #FFFAE3, #B3D9FF)"
      );
    } else if (hours >= 12 && hours < 18) {
      $("body").css("background-color", "#B3E0FF");
      $("body").css(
        "background-image",
        "linear-gradient(to top, #B3E0FF, #D9F5FF)"
      );
    } else if (hours >= 18 && hours < 21) {
      $("body").css("background-color", "#F7B7B3");
      $("body").css(
        "background-image",
        "linear-gradient(to top, #F7B7B3, #D9A1C0)"
      );
    } else {
      $("body").css("background-color", "#2C3E50");
      $("body").css(
        "background-image",
        "linear-gradient(to top, #2C3E50, #34495E)"
      );
    }
  }

  // Викликаємо функцію для зміни фону під час завантаження сторінки
  updateBackgroundColor();

  // Показуємо модальне вікно під час завантаження сторінки
  let currentIndex = 0;

  $(".modal-overlay").show();
  $(".modal").show();

  $("#start-button").click(function () {
    let intervalInSeconds = parseInt($("#interval-input").val());
    if (isNaN(intervalInSeconds) || intervalInSeconds <= 0) {
      alert("Будь ласка, введіть правильний інтервал!");
      return;
    }

    let intervalInMilliseconds = intervalInSeconds * 1000;

    $(".modal-overlay").hide();
    $(".modal").hide();

    intervalId = setInterval(function () {
      currentIndex = (currentIndex + 1) % images.length;
      $("#image-display").attr("src", images[currentIndex]);
    }, intervalInMilliseconds);
  });

  $(".modal-overlay").click(function () {
    $(".modal-overlay").hide();
    $(".modal").hide();
  });
});

$(document).ready(function () {
  $("#generate").click(function () {
    const min = parseInt($("#min").val());
    const max = parseInt($("#max").val());

    if (isNaN(min) || isNaN(max) || min >= max) {
      alert("Введіть коректний діапазон чисел.");
      return;
    }

    const $table = $("<table></table>");

    for (let i = 0; i < 10; i++) {
      const $row = $("<tr></tr>");
      for (let j = 0; j < 10; j++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const $cell = $("<td></td>").text(randomNumber);

        // Додати клас для шахового оформлення
        if ((i + j) % 2 === 0) {
          $cell.addClass("light");
        } else {
          $cell.addClass("dark");
        }

        $row.append($cell);
      }
      $table.append($row);
    }

    $("#table-container").empty().append($table);
  });
});
