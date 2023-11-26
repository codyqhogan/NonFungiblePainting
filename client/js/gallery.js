const paintings = [
  "C41:SD4Argb(208,196,241)P54%Brgb(49,226,249)P59%2:rgb(104,77,198)",
  "C21:SD3Argb(195,156,23)P61%Brgb(77,129,32)P75%2:rgb(96,46,242)",
  "C31:SD1Argb(125,136,21)P61%Brgb(57,175,22)P75%2:rgb(94,46,142)",
  "R21:rgb(92,103,129)2:rgb(36,250,161)3:rgb(72,122,251)4:SD5Argb(80,48,232)P5%Brgb(61,68,129)P41%",
  "R41:rgb(47,99,175)2:SD8Argb(91,213,243)P43%Brgb(237,184,186)P59%3:SD4Argb(34,237,142)P20%Brgb(237,145,247)P35%4:SD4Argb(210,217,92)P7%Brgb(7,127,226)P72%",
  "E41:SD2Argb(37,104,226)P14%Brgb(33,236,140)P47%2:rgb(156,205,157)3:SD8Argb(18,59,85)P7%Brgb(234,33,49)P42%4:SD3Argb(108,33,136)P5%Brgb(78,163,101)P11%5:SD3Argb(92,93,232)P11%Brgb(99,245,20)P15%6:rgb(26,127,68)7:SD1Argb(48,185,39)P31%Brgb(30,231,120)P62%8:rgb(29,160,188)9:SD4Argb(210,12,13)P-1%Brgb(95,199,207)P2%",
  "L41:SD8Argb(147,150,94)P7%Brgb(1,108,251)P72%2:SD8Argb(247,139,192)P9%Brgb(185,54,192)P75%3:SD3Argb(110,121,116)P17%Brgb(36,10,126)P24%4:SD6Argb(94,1,224)P11%Brgb(149,86,245)P75%5:SD2Argb(140,85,121)P46%Brgb(109,242,251)P64%6:rgb(167,174,228)7:SD5Argb(201,233,73)P-1%Brgb(188,145,52)P5%8:SD4Argb(29,59,148)P10%Brgb(194,21,7)P26%9:rgb(95,239,39)10:SD1Argb(230,204,209)P55%Brgb(215,166,94)P59%11:SD4Argb(234,206,6)P16%Brgb(1,185,99)P20%12:rgb(221,185,108)13:rgb(8,103,198)",
  "Q51:SD3Argb(235,192,44)P30%Brgb(107,58,34)P46%2:rgb(132,225,34)3:rgb(100,233,206)4:rgb(62,174,87)5:SD8Argb(55,226,52)P-1%Brgb(66,97,59)P5%6:SD3Argb(141,144,33)P5%Brgb(93,200,206)P9%7:SD2Argb(245,199,184)P-1%Brgb(240,68,155)P16%8:SD7Argb(149,22,128)P0%Brgb(158,13,219)P9%9:SD1Argb(33,49,147)P15%Brgb(162,98,102)P80%10:SD6Argb(234,242,159)P52%Brgb(191,200,123)P57%11:SD5Argb(185,110,84)P0%Brgb(180,57,220)P8%12:SD4Argb(196,4,213)P22%Brgb(146,115,85)P85%13:SD4Argb(12,179,199)P33%Brgb(250,124,24)P84%14:SD1Argb(179,51,243)P5%Brgb(229,79,244)P8%15:SD4Argb(233,181,234)P30%Brgb(221,141,242)P35%16:SD4Argb(10,166,27)P0%Brgb(184,89,92)P2%17:SD7Argb(243,67,142)P3%Brgb(37,48,171)P19%18:SD2Argb(186,201,131)P5%Brgb(4,224,127)P28%19:SD1Argb(39,97,148)P13%Brgb(243,59,130)P26%20:SD2Argb(193,33,62)P20%Brgb(80,12,161)P39%21:SD4Argb(1,5,64)P70%Brgb(203,40,192)P98%",
  "A31:SD2Argb(159,72,248)P0%Brgb(26,25,169)P14%c(4,3)r(3,9)2:SD5Argb(32,61,34)P12%Brgb(9,240,114)P17%c(4,4)r(9,8)3:SD8Argb(45,124,110)P17%Brgb(226,99,218)P46%c(9,8)r(11,2)4:SD2Argb(104,111,33)P15%Brgb(178,94,25)P61%c(11,9)r(6,5)5:SD3Argb(31,223,57)P40%Brgb(74,115,225)P43%c(5,1)r(2,6)6:SD2Argb(118,185,16)P56%Brgb(11,100,24)P94%c(5,4)r(7,9)7:SD5Argb(32,57,37)P3%Brgb(136,119,13)P44%c(3,9)r(7,5)8:SD7Argb(200,21,173)P14%Brgb(199,16,242)P39%c(1,10)r(7,9)9:SD2Argb(40,114,103)P0%Brgb(127,170,17)P11%c(11,7)r(1,11)10:SD7Argb(250,240,203)P21%Brgb(155,52,74)P26%c(11,6)r(8,4)11:SD5Argb(207,222,49)P10%Brgb(99,44,6)P72%c(6,3)r(1,3)12:SD8Argb(8,89,164)P1%Brgb(26,69,81)P39%c(2,3)r(5,10)13:SD2Argb(116,118,125)P2%Brgb(12,95,139)P88%c(11,1)r(11,6)14:SD6Argb(127,103,24)P68%Brgb(210,130,240)P94%c(9,6)r(5,9)15:SD2Argb(206,66,184)P12%Brgb(41,159,189)P42%c(7,8)r(8,2)16:SD1Argb(203,185,143)P15%Brgb(65,121,201)P43%c(4,4)r(3,7)17:SD7Argb(76,152,173)P1%Brgb(134,232,228)P28%c(1,10)r(10,3)18:SD2Argb(62,110,49)P45%Brgb(209,77,139)P48%c(5,1)r(9,5)19:SD2Argb(181,164,39)P11%Brgb(13,164,231)P63%c(8,1)r(9,3)20:SD8Argb(212,39,91)P32%Brgb(17,42,162)P84%c(6,10)r(3,3)21:SD2Argb(122,140,158)P17%Brgb(48,137,221)P36%c(6,8)r(6,9)22:SD7Argb(93,214,19)P2%Brgb(227,133,61)P77%c(8,1)r(3,9)23:SD5Argb(236,248,3)P15%Brgb(57,230,216)P18%c(3,5)r(3,8)24:SD1Argb(40,114,186)P2%Brgb(188,32,137)P13%c(1,5)r(1,1)25:SD4Argb(205,20,238)P31%Brgb(215,154,195)P51%c(9,3)r(6,5)",
]; //NOTE: This will be the result of the query, storing all user painting strings
const gallery_wall = document.getElementById("gallery_wall");
let count = 0;

function get_values() {
  //will perform necessary queries and assign initial variables
  try {
    sessionID = sessionStorage.getItem("nfp_sessionSTR_uniq");
    if (sessionID == null) {
      alert(
        "No Account Logged In!\nClick OK to return to the Home Page and Login.",
      );
      window.location.href = "index.html";
    }
  } catch (e) {
    alert(
      "No Account Logged In!\nClick OK to return to the Home Page and Login.",
    );
    window.location.href = "index.html";
  }
}

class Zone {
  constructor(star, dir, c1, p1, c2, p2, rs, re, cs, ce) {
    this.star = star;
    this.c1 = c1;
    this.p1 = p1;
    this.c2 = c2;
    this.p2 = p2;
    this.rs = rs;
    this.re = re;
    this.cs = cs;
    this.ce = ce;

    switch (dir) {
      case "1":
        this.dir = "top";
        break;
      case "5":
        this.dir = "bottom";
        break;
      case "7":
        this.dir = "left";
        break;
      case "3":
        this.dir = "right";
        break;
      case "2":
        this.dir = "top right";
        break;
      case "8":
        this.dir = "top left";
        break;
      case "4":
        this.dir = "bottom right";
        break;
      case "6":
        this.dir = "bottom left";
        break;
    }
  }

  get is_star() {
    return this.star;
  }
  get what_dir() {
    return this.dir;
  }
  get c1_str() {
    return this.c1;
  }
  get p1_str() {
    return this.p1;
  }
  get c2_str() {
    return this.c2;
  }
  get p2_str() {
    return this.p2;
  }
  get rs_val() {
    return this.rs;
  }
  get re_val() {
    return this.re;
  }
  get cs_val() {
    return this.cs;
  }
  get ce_val() {
    return this.ce;
  }
}

function display_paintings() {
  get_values();
  for (let i = 0; i < paintings.length; i++) {
    let painting = painting_split(paintings[i]);
    append_html(painting);
  }
}

function append_html(painting) {
  count += 1;
  let rarity = "";
  var num_stars = painting[1];
  switch (painting[0]) {
    case "C":
      gallery_wall.innerHTML +=
        '<div class="painting_gallery" style="display: block; align-self: center; margin-bottom: 0;"><div class="common painting_container" style="display: grid;"><div class="common_1 common_z1' +
        count +
        '"></div><div class="common_2 common_z2' +
        count +
        '"></div></div></div>';
      rarity = "common";
      break;
    case "R":
      gallery_wall.innerHTML +=
        '<div class="painting_gallery" style="display: block; align-self: center; center; margin-bottom: 0;"><div class="rare painting_container" style="display: grid;"><div class="rare_1 rare_z1' +
        count +
        '"></div><div class="rare_2 rare_z2' +
        count +
        '"></div><div class="rare_3 rare_z3' +
        count +
        '"></div><div class="rare_4 rare_z4' +
        count +
        '"></div></div></div>';
      rarity = "rare";
      break;
    case "E":
      gallery_wall.innerHTML +=
        '<div class="painting_gallery" style="display: block; align-self: center; center; margin-bottom: 0;"><div class="epic painting_container" style="display: grid;"><div class="epic_1 epic_z1' +
        count +
        '"></div><div class="epic_2 epic_z2' +
        count +
        '"></div><div class="epic_3 epic_z3' +
        count +
        '"></div><div class="epic_4 epic_z4' +
        count +
        '"></div><div class="epic_5 epic_z5' +
        count +
        '"></div><div class="epic_6 epic_z6' +
        count +
        '"></div><div class="epic_7 epic_z7' +
        count +
        '"></div><div class="epic_8 epic_z8' +
        count +
        '"></div><div class="epic_9 epic_z9' +
        count +
        '"></div></div></div>';
      rarity = "epic";
      break;
    case "L":
      gallery_wall.innerHTML +=
        '<div class="painting_gallery" style="display: block; align-self: center; center; margin-bottom: 0;"><div class="legendary painting_container" style="display: grid;"><div class="legendary_1 legendary_z1' +
        count +
        '"></div><div class="legendary_2 legendary_z2' +
        count +
        '"></div><div class="legendary_3 legendary_z3' +
        count +
        '"></div><div class="legendary_4 legendary_z4' +
        count +
        '"></div><div class="legendary_5 legendary_z5' +
        count +
        '"></div><div class="legendary_6 legendary_z6' +
        count +
        '"></div><div class="legendary_7 legendary_z7' +
        count +
        '"></div><div class="legendary_8 legendary_z8' +
        count +
        '"></div><div class="legendary_9 legendary_z9' +
        count +
        '"></div><div class="legendary_10 legendary_z10' +
        count +
        '"></div><div class="legendary_11 legendary_z11' +
        count +
        '"></div><div class="legendary_12 legendary_z12' +
        count +
        '"></div><div class="legendary_13 legendary_z13' +
        count +
        '"></div></div></div>';
      rarity = "legendary";
      break;
    case "Q":
      gallery_wall.innerHTML +=
        '<div class="painting_gallery" style="display: block; align-self: center; center; margin-bottom: 0;"><div class="question painting_container" style="display: grid;"><div class="question_1 question_z1' +
        count +
        '"></div><div class="question_2 question_z2' +
        count +
        '"></div><div class="question_3 question_z3' +
        count +
        '"></div><div class="question_4 question_z4' +
        count +
        '"></div><div class="question_5 question_z5' +
        count +
        '"></div><div class="question_6 question_z6' +
        count +
        '"></div><div class="question_7 question_z7' +
        count +
        '"></div><div class="question_8 question_z8' +
        count +
        '"></div><div class="question_9 question_z9' +
        count +
        '"></div><div class="question_10 question_z10' +
        count +
        '"></div><div class="question_11 question_z11' +
        count +
        '"></div><div class="question_12 question_z12' +
        count +
        '"></div><div class="question_13 question_z13' +
        count +
        '"></div><div class="question_14 question_z14' +
        count +
        '"></div><div class="question_15 question_z15' +
        count +
        '"></div><div class="question_16 question_z16' +
        count +
        '"></div><div class="question_17 question_z17' +
        count +
        '"></div><div class="question_18 question_z18' +
        count +
        '"></div><div class="question_19 question_z19' +
        count +
        '"></div><div class="question_20 question_z20' +
        count +
        '"></div><div class="question_21 question_z21' +
        count +
        '"></div></div></div>';
      rarity = "question";
      break;
    case "A":
      gallery_wall.innerHTML +=
        '<div class="painting_gallery" style="display: block; align-self: center; center; margin-bottom: 0;"><div class="amalgam painting_container" style="display: grid;"><div class="amalgam_1 amalgam_z1' +
        count +
        '"></div><div class="amalgam_2 amalgam_z2' +
        count +
        '"></div><div class="amalgam_3 amalgam_z3' +
        count +
        '"></div><div class="amalgam_4 amalgam_z4' +
        count +
        '"></div><div class="amalgam_5 amalgam_z5' +
        count +
        '"></div><div class="amalgam_6 amalgam_z6' +
        count +
        '"></div><div class="amalgam_7 amalgam_z7' +
        count +
        '"></div><div class="amalgam_8 amalgam_z8' +
        count +
        '"></div><div class="amalgam_9 amalgam_z9' +
        count +
        '"></div><div class="amalgam_10 amalgam_z10' +
        count +
        '"></div><div class="amalgam_11 amalgam_z11' +
        count +
        '"></div><div class="amalgam_12 amalgam_z12' +
        count +
        '"></div><div class="amalgam_13 amalgam_z13' +
        count +
        '"></div><div class="amalgam_14 amalgam_z14' +
        count +
        '"></div><div class="amalgam_15 amalgam_z15' +
        count +
        '"></div><div class="amalgam_16 amalgam_z16' +
        count +
        '"></div><div class="amalgam_17 amalgam_z17' +
        count +
        '"></div><div class="amalgam_18 amalgam_z18' +
        count +
        '"></div><div class="amalgam_19 amalgam_z19' +
        count +
        '"></div><div class="amalgam_20 amalgam_z20' +
        count +
        '"></div><div class="amalgam_21 amalgam_z21' +
        count +
        '"></div><div class="amalgam_22 amalgam_z22' +
        count +
        '"></div><div class="amalgam_23 amalgam_z23' +
        count +
        '"></div><div class="amalgam_24 amalgam_z24' +
        count +
        '"></div><div class="amalgam_25 amalgam_z25' +
        count +
        '"></div></div></div>';
      rarity = "amalgam";
      break;
  }
  let zone_num = 1;
  for (let i = 2; i < painting.length; i++) {
    var zone_obj = create_zone_obj(painting, rarity, i);
    let zone = document.querySelector("." + rarity + "_z" + zone_num + count);
    add_colors(zone, zone_obj, rarity);
    zone_num += 1;
    if (zone_obj.is_star) {
      i += 4;
    }
    if (rarity == "amalgam") {
      i += 2;
    }
  }
  if (rarity == "question") {
    rarity = "???";
  }
  gallery_wall.innerHTML +=
    "<div style='display: flex;'><h1 style='margin: auto; margin-top: -10px; border: 10px solid black; padding: 10px; width: 300px; text-align: center; border-bottom: 0;'>" +
    rarity.toUpperCase() +
    "</h1></div>";
  switch (num_stars) {
    case "1":
      gallery_wall.innerHTML +=
        "<div style='display: flex; justify-content: center;'><img src='../images/nfp_1star.png' style='width: 300px; border: 10px solid black; padding: 10px; border-bottom-right-radius: 40px; border-bottom-left-radius: 40px; border-top: 0;'/></div>";
      break;
    case "2":
      gallery_wall.innerHTML +=
        "<div style='display: flex; justify-content: center;'><img src='../images/nfp_2star.png' style='width: 300px; border: 10px solid black; padding: 10px; border-bottom-right-radius: 40px; border-bottom-left-radius: 40px; border-top: 0;'/></div>";
      break;
    case "3":
      gallery_wall.innerHTML +=
        "<div style='display: flex; justify-content: center;'><img src='../images/nfp_3star.png' style='width: 300px; border: 10px solid black; padding: 10px; border-bottom-right-radius: 40px; border-bottom-left-radius: 40px; border-top: 0;'/></div>";
      break;
    case "4":
      gallery_wall.innerHTML +=
        "<div style='display: flex; justify-content: center;'><img src='../images/nfp_4star.png' style='width: 300px; border: 10px solid black; padding: 10px; border-bottom-right-radius: 40px; border-bottom-left-radius: 40px; border-top: 0;'/></div>";
      break;
    case "5":
      gallery_wall.innerHTML +=
        "<div style='display: flex; justify-content: center;'><img src='../images/nfp_5star.png' style='width: 300px; border: 10px solid black; padding: 10px; border-bottom-right-radius: 40px; border-bottom-left-radius: 40px; border-top: 0;'/></div>";
      break;
  }
}

function create_zone_obj(painting, rarity, i) {
  let star = false;
  let direction = 0;
  let c1, c2, p1, p2;
  if (painting[i].at(0) != "r") {
    //we have a direction
    star = true;
    direction = painting[i];
    c1 = painting[i + 1];
    p1 = painting[i + 2];
    c2 = painting[i + 3];
    p2 = painting[i + 4];
    i += 4;
  } else {
    c1 = painting[i];
  }
  if (rarity == "amalgam") {
    var corr = disect_se(painting[i + 1], painting[i + 2]);
  } else {
    corr = ["", "", "", ""];
  }
  return new Zone(
    star,
    direction,
    c1,
    p1,
    c2,
    p2,
    corr[0],
    corr[1],
    corr[2],
    corr[3],
  );
}

function add_colors(zone, zone_obj, rarity) {
  if (zone_obj.is_star) {
    zone.style.setProperty(
      "background-image",
      "linear-gradient(to " +
        zone_obj.what_dir +
        ", " +
        zone_obj.c1_str +
        " " +
        zone_obj.p1_str +
        ", " +
        zone_obj.c2_str +
        " " +
        zone_obj.p2_str +
        ")",
    );
  } else {
    zone.style.setProperty("background-color", zone_obj.c1_str);
  }
  if (rarity == "amalgam") {
    zone.style.setProperty("grid-column-start", zone_obj.cs_val.toString(10));
    zone.style.setProperty("grid-column-end", zone_obj.ce_val.toString(10));
    zone.style.setProperty("grid-row-start", zone_obj.rs_val.toString(10));
    zone.style.setProperty("grid-row-end", zone_obj.re_val.toString(10));
  }
}

function painting_split(painting) {
  let painting_arr = [painting.at(0), painting.at(1)];
  let rgb1A = "";
  let rgb1B = "";
  let per1A = "";
  let per1B = "";
  let rgb2 = "";
  let direction = "";
  for (let i = 1; i < painting.length; i++) {
    if (painting[i] == ":") {
      switch (
        painting[i + 1] //NOTE: these will need error handling for if i+1 is not there
      ) {
        case "S":
          let countS = 0;
          if (painting[i + 2] == "D") {
            direction = painting[i + 3];
            painting_arr.push(direction);
            i += 4;
          }
          if (painting[i] == "A") {
            if (painting[i + 1] == "r") {
              for (let j = i; j < painting.length; j++) {
                if (painting[j] == ")") {
                  break;
                }
                countS += 1;
              }
            }
            rgb1A = painting.substring(i + 1, i + 1 + countS);
            painting_arr.push(rgb1A);
            i += countS + 1;
            countS = 0;
          }
          if (painting[i] == "P") {
            for (let j = i; j < painting.length; j++) {
              if (painting[j] == "%") {
                break;
              }
              countS += 1;
            }
            per1A = painting.substring(i + 1, i + 1 + countS);
            painting_arr.push(per1A);
            i += countS + 1;
            countS = 0;
          }
          if (painting[i] == "B") {
            if (painting[i + 1] == "r") {
              for (let j = i; j < painting.length; j++) {
                if (painting[j] == ")") {
                  break;
                }
                countS += 1;
              }
            }
            rgb1B = painting.substring(i + 1, i + 1 + countS);
            painting_arr.push(rgb1B);
            i += countS + 1;
            countS = 0;
          }
          if (painting[i] == "P") {
            for (let j = i; j < painting.length; j++) {
              if (painting[j] == "%") {
                break;
              }
              countS += 1;
            }
            per1B = painting.substring(i + 1, i + 1 + countS);
            painting_arr.push(per1B);
            i += countS + 1;
            countS = 0;
          }
          break;
        case "r":
          let countr = 0;
          for (let j = i; j < painting.length; j++) {
            if (painting[j] == ")") {
              break;
            }
            countr += 1;
          }
          rgb2 = painting.substring(i + 1, i + countr + 1);
          painting_arr.push(rgb2);
          i += countr;
          break;
      }
      if (painting.at(0) == "A") {
        for (let n = 0; n < 2; n++) {
          let counta = 0;
          for (let j = i; j < painting.length; j++) {
            if (painting[j] == ")") {
              break;
            }
            counta += 1;
          }
          let corr = painting.substring(i + 1, i + counta + 1);
          painting_arr.push(corr);
          i += counta + 1;
        }
      }
    }
  }
  return painting_arr;
}

function disect_se(row, column) {
  var cs = "";
  var ce = "";
  var re = "";
  var rs = "";
  let count = 1;
  for (let i = 0; i < 2; i++) {
    for (let j = count; j < row.length; j++) {
      count += 1;
      if (row.at(j) == ")" || row.at(j) == ",") {
        break;
      }
      if (i == 0) {
        re += row.at(j);
      } else {
        rs += row.at(j);
      }
    }
  }
  count = 1;
  for (let i = 0; i < 2; i++) {
    for (let j = count; j < column.length; j++) {
      count += 1;
      if (column.at(j) == ")" || column.at(j) == ",") {
        break;
      }
      if (i == 0) {
        ce += column.at(j);
      } else {
        cs += column.at(j);
      }
    }
  }
  return [parseInt(cs), parseInt(ce), parseInt(rs), parseInt(re)];
}
