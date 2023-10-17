const get_painting = document.querySelector("#lucky_paw");

get_painting.addEventListener("click", function () {
  let rarity = Math.floor(Math.random() * 100 + 1);
  let zones = 2;
  if (rarity < 40) {
    zones = 2;
    rarity = "common";
  } else if (rarity < 70 && rarity > 39) {
    zones = 4;
    rarity = "rare";
  } else if (rarity < 90 && rarity > 69) {
    zones = 9;
    rarity = "epic";
  } else if (rarity < 100 && rarity > 89) {
    zones = 13;
    rarity = "legendary";
  } else if (rarity === 100) {
    let metamorphosis = Math.floor(Math.random() * 10 + 1);
    if (metamorphosis < 7) {
      zones = 21;
      rarity = "question";
    } else {
      zones = 25;
      rarity = "amalgam";
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
    } else {
      let direction = Math.floor(Math.random() * 8 + 1);
      switch (direction) {
        case 1:
          direction = "top";
          break;
        case 2:
          direction = "bottom";
          break;
        case 3:
          direction = "left";
          break;
        case 4:
          direction = "right";
          break;
        case 5:
          direction = "top right";
          break;
        case 6:
          direction = "top left";
          break;
        case 7:
          direction = "bottom right";
          break;
        case 8:
          direction = "bottom left";
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
      zone.style.setProperty("background-color", "white");
      //   console.log(
      //   "background-image",
      //   "linear-gradient(to " +
      //     direction +
      //     ", " +
      //     color_1 +
      //     " " +
      //     percent_1 +
      //     "%, " +
      //     color_2 +
      //     " " +
      //     percent_2 +
      //     "%)",
      // );
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
    }
    // CHECK IF PAINTING IS IN PAINTINGS TABLE, IF SO REPEAT PROCESS
  }
});
