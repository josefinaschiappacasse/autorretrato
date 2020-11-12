//para este dibujo me base en la revisión del trabajo de Francisca Ortega durante la clase de ie
let sketch;

function setup() {
  sketch = createCanvas(450, 450);
  sketch.parent("p5");
}

function draw() {
  background(255);
  drawBlob();
  noStroke();
}

function mousePressed() {
  print("vertex(" + mouseX + "," + mouseY + ");");
}

function drawBlob() {
  //cara-medio
  fill(170, 100, 50);
  beginShape();
  vertex(92, 149);
  vertex(128, 146);
  vertex(144, 96);
  vertex(158, 77);
  vertex(175, 54);
  vertex(181, 52);
  vertex(235, 54);
  vertex(277, 108);
  vertex(253, 158);
  vertex(196, 214);
  vertex(192, 283);
  vertex(155, 322);
  vertex(154, 327);
  vertex(143, 329);
  vertex(121, 327);
  vertex(109, 316);
  vertex(114, 294);
  vertex(107, 284);
  vertex(112, 276);
  vertex(108, 271);
  vertex(100, 247);
  vertex(99, 232);
  vertex(92, 228);
  vertex(88, 218);
  vertex(88, 216);
  vertex(96, 198);
  vertex(95, 184);
  vertex(93, 166);
  vertex(92, 147);
  endShape(CLOSE);



  //caraclaro
  fill(255, 190, 150);
  beginShape();
  vertex(154, 321);
  vertex(192, 284);
  vertex(196, 216);
  vertex(254, 158);
  vertex(277, 110);
  vertex(296, 174);
  vertex(317, 194);
  vertex(305, 231);
  vertex(296, 227);
  vertex(280, 276);
  vertex(248, 293);
  vertex(229, 304);
  vertex(190, 316);
  vertex(155, 328);
  vertex(155, 324);
  vertex(190, 284);
  endShape(CLOSE);



  //claro2
  fill(255, 190, 150);
  beginShape();
  vertex(94, 150);
  vertex(128, 146);
  vertex(147, 94);
  vertex(164, 69);
  vertex(184, 51);
  vertex(156, 58);
  vertex(128, 67);
  vertex(106, 90);
  vertex(97, 122);
  vertex(94, 133);
  vertex(92, 151);
  vertex(103, 148);
  vertex(127, 146);
  endShape(CLOSE);



  //nariz-oscuro
  fill(100, 50, 10);
  beginShape();
  vertex(86, 210);
  vertex(96, 196);
  vertex(106, 182);
  vertex(110, 174);
  vertex(124, 162);
  vertex(126, 146);
  vertex(128, 145);
  vertex(123, 147);
  vertex(102, 147);
  vertex(91, 150);
  vertex(92, 143);
  vertex(100, 141);
  vertex(127, 145);
  vertex(132, 153);
  vertex(132, 161);
  vertex(126, 172);
  vertex(112, 195);
  vertex(110, 215);
  vertex(98, 211);
  vertex(89, 214);
  endShape(CLOSE);


  //frente-oscuro
  fill(100, 50, 10);
  beginShape();

  vertex(154, 140);
  vertex(155, 145);
  vertex(197, 138);
  vertex(215, 140);
  vertex(200, 156);
  vertex(204, 159);
  vertex(196, 171);
  vertex(154, 173);
  vertex(142, 186);
  vertex(131, 215);
  vertex(129, 227);
  vertex(145, 233);
  vertex(168, 225);
  vertex(196, 215);
  vertex(252, 157);
  vertex(276, 107);
  vertex(242, 62);
  vertex(196, 76);
  vertex(190, 83);
  vertex(180, 104);
  vertex(174, 121);
  vertex(168, 136);
  vertex(154, 140);
  vertex(152, 146);
  vertex(155, 146);
  endShape(CLOSE);

  //pelo
  //ceja-izquierda
  fill(60, 30, 10);
  beginShape();
  vertex(90, 150);
  vertex(102, 147);
  vertex(122, 146);
  vertex(126, 144);
  vertex(100, 140);
  vertex(92, 142);
  vertex(90, 150);
  endShape(CLOSE);

  //ceja-derecha
  beginShape();
  vertex(152, 145);
  vertex(197, 137);
  vertex(212, 141);
  vertex(214, 138);
  vertex(194, 130);
  vertex(167, 135);
  vertex(154, 139);
  vertex(152, 145);
  endShape(CLOSE);

  //peluca
  beginShape();
  vertex(180, 52);
  vertex(231, 54);
  vertex(273, 109);
  vertex(294, 172);
  vertex(314, 194);
  vertex(322, 228);
  vertex(321, 302);
  vertex(345, 345);
  vertex(368, 326);
  vertex(394, 293);
  vertex(420, 244);
  vertex(414, 112);
  vertex(394, 71);
  vertex(345, 32);
  vertex(311, 22);
  vertex(257, 16);
  vertex(200, 20);
  vertex(177, 21);
  vertex(142, 32);
  vertex(114, 50);
  vertex(104, 90);
  vertex(129, 66);
  vertex(180, 52);
  endShape(CLOSE);

  //peluca2
  beginShape();
  vertex(100, 240);
  vertex(99, 246);
  vertex(104, 258);
  vertex(105, 262);
  vertex(108, 270);
  vertex(112, 276);
  vertex(107, 284);
  vertex(114, 292);
  vertex(109, 314);
  vertex(120, 326);
  vertex(142, 328);
  vertex(154, 326);
  vertex(160, 325);
  vertex(188, 314);
  vertex(168, 323);
  vertex(175, 348);
  vertex(179, 364);
  vertex(186, 394);
  vertex(188, 416);
  vertex(172, 448);
  vertex(149, 472);
  vertex(134, 492);
  vertex(92, 496);
  vertex(81, 390);
  vertex(71, 326);
  vertex(88, 266);
  endShape(CLOSE);

  //cuello-oscuro
  fill(170, 100, 50);
  beginShape();
  vertex(167, 322);
  vertex(182, 381);
  vertex(184, 389);
  vertex(186, 412);
  vertex(200, 392);
  vertex(184, 322);
  vertex(210, 316);
  vertex(260, 291);
  vertex(280, 275);
  vertex(296, 230);
  vertex(296, 232);
  vertex(304, 229);
  vertex(317, 208);
  vertex(314, 196);
  vertex(305, 224);
  vertex(296, 226);
  vertex(278, 273);
  vertex(230, 302);
  vertex(178, 319);
  vertex(166, 322);
  endShape(CLOSE);

  //cuello-claro
  fill(255, 190, 150);
  beginShape();
  vertex(184, 321);
  vertex(200, 391);
  vertex(185, 411);
  vertex(186, 414);
  vertex(186, 414);
  vertex(173, 441.33333587646484);
  vertex(148, 470.33333587646484);
  vertex(134, 493.33333587646484);
  vertex(441, 483.33333587646484);
  vertex(430, 427.33333587646484);
  vertex(404, 379.33333587646484);
  vertex(344, 343.33333587646484);
  vertex(320, 301.33333587646484);
  vertex(322, 227.33333587646484);
  vertex(316, 207.33333587646484);
  vertex(303, 228.33333587646484);
  vertex(295, 229.33333587646484);
  vertex(279, 274.33333587646484);
  vertex(260, 290.33333587646484);
  vertex(234, 303.33333587646484);
  vertex(210, 315.33333587646484);
  vertex(184, 321.33333587646484);
  endShape(CLOSE);

  //sombra oreja
  fill(170, 100, 50);
  beginShape();
  vertex(302, 180);
  vertex(310, 189);
  vertex(304, 202);
  vertex(296, 190);
  vertex(299, 177);
  vertex(310, 189);
  endShape(CLOSE);

  fill(60, 30, 10)
  beginShape();
  vertex(300, 180);
  vertex(300, 186);
  vertex(305, 193);
  vertex(308, 187);
  vertex(300, 178);
  endShape(CLOSE);

  //sombras nariz
  beginShape();
  vertex(86, 210);
  vertex(87, 218);
  vertex(91, 226);
  vertex(98, 230);
  vertex(106, 231);
  vertex(94, 226);
  vertex(90, 222);
  vertex(88, 213);
  vertex(86, 210)
  endShape(CLOSE);

  beginShape();
  vertex(116, 228);
  vertex(119, 227);
  vertex(122, 223);
  vertex(120, 216);
  vertex(120, 223);
  vertex(116, 228);
  endShape(CLOSE);

  beginShape();
  vertex(106, 226);
  vertex(98, 222);
  vertex(99, 220);
  vertex(108, 222);
  vertex(114, 226);
  vertex(106, 226);
  endShape(CLOSE);

  beginShape();
  vertex(107, 232);
  vertex(106, 250);
  vertex(109, 252);
  vertex(113, 246);
  vertex(107, 231);
  endShape(CLOSE);

  fill(60, 30, 10);
  beginShape();
  vertex(151, 148);
  vertex(161, 154);
  vertex(159, 162);
  vertex(162, 172);
  vertex(154, 172);
  vertex(148, 160);
  vertex(151, 148);
  endShape(CLOSE);

  beginShape();
  vertex(90, 150);
  vertex(104, 145);
  vertex(125, 145);
  vertex(123, 160);
  vertex(112, 157);
  vertex(93, 164);
  vertex(91, 155);
  vertex(91, 150);
  endShape(CLOSE);

  beginShape();
  vertex(104, 258);
  vertex(106, 252);
  vertex(110, 255);
  vertex(116, 252);
  vertex(128, 263);
  vertex(118, 256);
  vertex(111, 260);
  vertex(106, 256);
  vertex(107, 264);
  vertex(110, 272);
  vertex(112, 273);
  vertex(125, 272);
  endShape(CLOSE);

  beginShape();
  vertex(110, 271);
  vertex(113, 276);
  vertex(106, 283);
  vertex(112, 290);
  vertex(120, 292);
  vertex(128, 285);
  vertex(115, 288);
  vertex(108, 283);
  vertex(112, 276);
  vertex(122, 274);
  vertex(131, 270);
  vertex(135, 274);
  vertex(140, 272);
  vertex(142, 269);
  vertex(136, 272);
  vertex(122, 269);
  vertex(110, 272);
  endShape(CLOSE);

  //ropa
  fill(50, 100, 80);
  beginShape();
  vertex(164, 448);
  vertex(184, 413);
  vertex(272, 397);
  vertex(344, 342);
  vertex(404, 379);
  vertex(430, 428);
  vertex(434, 450);
  vertex(166, 450);
  endShape(CLOSE);

  /*ojos
  fill("white")
  beginShape();
  vertex(161, 171);
  vertex(178, 170);
  vertex(195, 163);
  vertex(200, 155);
  vertex(186, 148);
  vertex(177, 148);
  vertex(168, 148);
  vertex(159, 152);
  vertex(156, 160);
  vertex(161, 170);
  endShape(CLOSE);

  beginShape();
  vertex(90, 158);
  vertex(111, 152);
  vertex(123, 158);
  vertex(124, 159);
  vertex(113, 172);
  vertex(107, 172);
  vertex(100, 173);
  vertex(94, 172);
  vertex(92, 160);
  endShape(CLOSE);

  fill(10, 10, 10);
  beginShape();
  vertex(159, 152);
  vertex(156, 159);
  vertex(161, 170);
  vertex(170, 169);
  vertex(173, 161);
  vertex(174, 155);
  vertex(170, 151);
  vertex(167, 148);
  vertex(158, 151);
  endShape(CLOSE);

  beginShape();
  vertex(91, 157);
  vertex(92, 166);
  vertex(94, 173);
  vertex(103, 172);
  vertex(103, 162);
  vertex(99, 157);
  vertex(110, 153);
  vertex(123, 160);
  vertex(123, 158);
  vertex(111, 150);
  vertex(91, 157);
  endShape(CLOSE);
  
//contornoojo
  beginShape();
  vertex(161, 150);
  vertex(168, 149);
  vertex(186, 151);
  vertex(193, 154);
  vertex(186, 162);
  vertex(171, 166);
  vertex(159, 170);
  vertex(181, 169);
  vertex(195, 162);
  vertex(199, 152);
  vertex(186, 147);
  vertex(168, 146);
  vertex(159, 149);
  endShape(CLOSE);*/




}
