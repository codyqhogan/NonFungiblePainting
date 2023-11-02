const lucky_cat = document.querySelector("#lucky_cat_img");
const painting_popup = document.querySelector(".painting_popup");
const close_popup = document.querySelector(".click_off_popup");
const common = document.querySelector(".common");
const rare = document.querySelector(".rare");
const epic = document.querySelector(".epic");
const legendary = document.querySelector(".legendary");
const question = document.querySelector(".question");
const amalgam = document.querySelector(".amalgam");

lucky_cat.addEventListener("mouseout", function () {
  document.getElementById("lucky_cat_img").src = "../images/nfp_lucky_eyes.png";
});

lucky_cat.addEventListener("mouseover", function () {
  document.getElementById("lucky_cat_img").src = "../images/nfp_lucky.png";
});

lucky_cat.addEventListener("click", function () {
  let paint_string = "";
  let rarity = Math.floor(Math.random() * 100 + 1);
  let zones = 2;
  if (rarity < 40) {
    zones = 2;
    rarity = "common";
    paint_string = paint_string + "C";
  } else if (rarity < 70 && rarity > 39) {
    zones = 4;
    rarity = "rare";
    paint_string = paint_string + "R";
  } else if (rarity < 90 && rarity > 69) {
    zones = 9;
    rarity = "epic";
    paint_string = paint_string + "E";
  } else if (rarity < 100 && rarity > 89) {
    zones = 13;
    rarity = "legendary";
    paint_string = paint_string + "L";
  } else if (rarity === 100) {
    let metamorphosis = Math.floor(Math.random() * 10 + 1);
    if (metamorphosis < 7) {
      zones = 21;
      rarity = "question";
      paint_string = paint_string + "Q";
    } else {
      zones = 25;
      rarity = "amalgam";
      paint_string = paint_string + "A";
    }
  }
  let stars = Math.floor(Math.random() * 100 + 1);
  let gradients = 2;
  if (stars < 40) {
    gradients = 0;
    stars = 1;
  } else if (stars < 70 && stars > 39) {
    gradients = Math.ceil(zones * 0.25);
    stars = 2;
  } else if (stars < 90 && stars > 69) {
    gradients = Math.ceil(zones * 0.5);
    stars = 3;
  } else if (stars < 100 && stars > 89) {
    gradients = Math.floor(zones * 0.75);
    stars = 4;
  } else if (stars === 100) {
    gradients = zones;
    stars = 5;
  }
  let gradient_opts = [];
  if (gradients !== zones) {
    for (let i = 1; i <= zones; i++) {
      gradient_opts.push(i);
    }
    for (let i = 0; i < gradients; i++) {
      let pick = Math.floor(Math.random() * gradient_opts.length + 1);
      gradient_opts.splice(pick - 1, 1);
    }
  }

  console.log(rarity + ", " + stars + " star(s).");
  for (let index = 1; index <= zones; index++) {
    paint_string = paint_string + index.toString(10);
    let zone_name = "." + rarity + "_" + index.toString(10);
    let zone = document.querySelector(zone_name);
    if (gradient_opts.includes(index)) {
      let rgb_color = "rgb(";
      for (let i = 0; i < 3; i++) {
        let color = Math.floor(Math.random() * 255 + 1);
        rgb_color = rgb_color + color.toString(10);
        if (i !== 2) {
          rgb_color = rgb_color + ",";
        } else {
          rgb_color = rgb_color + ")";
        }
      }
      zone.style.setProperty("background-image", "");
      zone.style.setProperty("background-color", rgb_color);
      paint_string = paint_string + rgb_color;
    } else {
      let direction = Math.floor(Math.random() * 8 + 1);
      switch (direction) {
        case 1:
          direction = "top";
          paint_string = paint_string + "SD1";
          break;
        case 2:
          direction = "bottom";
          paint_string = paint_string + "SD5";
          break;
        case 3:
          direction = "left";
          paint_string = paint_string + "SD7";
          break;
        case 4:
          direction = "right";
          paint_string = paint_string + "SD3";
          break;
        case 5:
          direction = "top right";
          paint_string = paint_string + "SD2";
          break;
        case 6:
          direction = "top left";
          paint_string = paint_string + "SD8";
          break;
        case 7:
          direction = "bottom right";
          paint_string = paint_string + "SD4";
          break;
        case 8:
          direction = "bottom left";
          paint_string = paint_string + "SD6";
          break;
      }
      let color_1 = "rgb(";
      for (let i = 0; i < 3; i++) {
        let color = Math.floor(Math.random() * 255 + 1);
        color_1 = color_1 + color.toString(10);
        if (i !== 2) {
          color_1 = color_1 + ",";
        } else {
          color_1 = color_1 + ")";
        }
      }
      let color_2 = "rgb(";
      for (let i = 0; i < 3; i++) {
        let color = Math.floor(Math.random() * 255 + 1);
        color_2 = color_2 + color.toString(10);
        if (i !== 2) {
          color_2 = color_2 + ",";
        } else {
          color_2 = color_2 + ")";
        }
      }
      let percent_2 = Math.floor(Math.random() * 100 + 1);
      let percent_1 = Math.floor(Math.random() * percent_2 - 1);

      zone.style.setProperty(
        "background-image",
        "linear-gradient(to " +
          direction +
          ", " +
          color_1 +
          " " +
          percent_1 +
          "%, " +
          color_2 +
          " " +
          percent_2 +
          "%)",
      );
      paint_string = paint_string + "A" + color_1 + "P" + percent_1 + "%";
      paint_string = paint_string + "B" + color_2 + "P" + percent_2 + "%";
      zone.style.setProperty("background-color", "white");
    }

    if (rarity === "amalgam") {
      let start_col = Math.floor(Math.random() * 11 + 1);
      let end_col = Math.floor(Math.random() * 11 + 1);
      let start_row = Math.floor(Math.random() * 11 + 1);
      let end_row = Math.floor(Math.random() * 11 + 1);
      zone.style.setProperty("grid-column-start", start_col.toString(10));
      zone.style.setProperty("grid-column-end", end_col.toString(10));
      zone.style.setProperty("grid-row-start", start_row.toString(10));
      zone.style.setProperty("grid-row-end", end_row.toString(10));
      paint_string =
        paint_string +
        "c(" +
        start_col.toString(10) +
        "," +
        end_col.toString(10) +
        ")";
      paint_string =
        paint_string +
        "r(" +
        start_row.toString(10) +
        "," +
        end_row.toString(10) +
        ")";
    }
    // CHECK IF PAINTING IS IN PAINTINGS TABLE, IF SO REPEAT PROCESS
  }
  painting_popup.style.display = "block";
  switch (rarity) {
    case "common":
      common.style.display = "grid";
      rare.style.display = "none";
      epic.style.display = "none";
      legendary.style.display = "none";
      question.style.display = "none";
      amalgam.style.display = "none";
      break;
    case "rare":
      common.style.display = "none";
      rare.style.display = "grid";
      epic.style.display = "none";
      legendary.style.display = "none";
      question.style.display = "none";
      amalgam.style.display = "none";
      break;
    case "epic":
      common.style.display = "none";
      rare.style.display = "none";
      epic.style.display = "grid";
      legendary.style.display = "none";
      question.style.display = "none";
      amalgam.style.display = "none";
      break;
    case "legendary":
      common.style.display = "none";
      rare.style.display = "none";
      epic.style.display = "none";
      legendary.style.display = "grid";
      question.style.display = "none";
      amalgam.style.display = "none";
      break;
    case "question":
      common.style.display = "none";
      rare.style.display = "none";
      epic.style.display = "none";
      legendary.style.display = "none";
      question.style.display = "grid";
      amalgam.style.display = "none";
      break;
    case "amalgam":
      common.style.display = "none";
      rare.style.display = "none";
      epic.style.display = "none";
      legendary.style.display = "none";
      question.style.display = "none";
      amalgam.style.display = "grid";
      break;

    default:
      break;
  }
  console.log(paint_string);
});

close_popup.addEventListener("click", function () {
  painting_popup.style.display = "none";
});
