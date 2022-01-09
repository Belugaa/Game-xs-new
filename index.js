// Lấy tên người dùng nhập vào

var getName1 = document.querySelectorAll('.name');

getName1[0].innerText = localStorage.getItem('namePlayer1');
getName1[1].innerText = localStorage.getItem('namePlayer2');


// số lượng xs là 1
if(localStorage.getItem('quantily') == 1){

  // random xs số 1 
  var random1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + random1 + ".png"; //dice1.png - dice6.png

  var randomImageSource1 = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource1);
  
  
  //random xs số 2
  var random2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + random2 + ".png";

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImageSource2);

  // Kết quả
  if (random1 > random2) {
    document.querySelector("h1").innerHTML = `🚩 ${localStorage.getItem('namePlayer1')} Win!`;
  }
  else if (random2 > random1) {
    document.querySelector("h1").innerHTML = `${localStorage.getItem('namePlayer2')} Win!  🚩`;
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}



// số lượng xs là 2
if(localStorage.getItem('quantily') == 2){

  // thêm thẻ ảnh
  var addElement = document.querySelectorAll('.add');

  addElement[0].innerHTML = '<img class="img1" src="images/dice6.png">'
  addElement[1].innerHTML = '<img class="img2" src="images/dice6.png">'

  // random xúc sắc số 1 của ng chơi 1
  var random1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + random1 + ".png"; //dice1.png - dice6.png

  var randomImageSource1 = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource1);


  // random xúc sắc số 1 của ng chơi 1
  var random11 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + random11 + ".png"; //dice1.png - dice6.png

  var randomImageSource11 = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  var image11 = document.querySelectorAll("img")[1];

  image11.setAttribute("src", randomImageSource11);



  // Random xúc sắc số 1 của ng chơi 2
  var random2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + random2 + ".png";

  var image2 = document.querySelectorAll("img")[2];

  image2.setAttribute("src", randomImageSource2);


  // Random xúc sắc số 2 của ng chơi 2
  var random22 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource22 = "images/dice" + random22 + ".png";

  var image22 = document.querySelectorAll("img")[3];

  image22.setAttribute("src", randomImageSource22);


  // Kết quả
  var P1 = random1 + random11;
  var P2 = random2 + random22;

  if (P1 > P2) {
    document.querySelector("h1").innerHTML = `🚩 ${localStorage.getItem('namePlayer1')} Win!`;
  }
  else if (P2 > P1) {
    document.querySelector("h1").innerHTML = `${localStorage.getItem('namePlayer2')} Win!  🚩`;
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
