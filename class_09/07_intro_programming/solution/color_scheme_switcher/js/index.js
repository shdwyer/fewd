document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('pizza').onclick = switchRed;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
  
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

function switchBlue() {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
  document.getElementById('pizza').style.color = 'white';
}

function switchRed() {
	document.getElementById('pizza').style.color = 'red';
}






