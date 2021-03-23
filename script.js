
let penColor = "black";
let mainTitle = document.getElementById('title')
let input = document.getElementById('input')
let allPixels = document.getElementsByClassName('pixel')

function setPixelColour(pixel) {
  pixel.style.backgroundColor = penColor;
}

function setPenColor(newColor) {
  penColor = newColor;
}

input.addEventListener('change', (event) => {
  mainTitle.innerHTML = event.target.value;
})

function resetGrid() {
  for(let i = 0; i < allPixels.length; i++){
      allPixels[i].style.backgroundColor = "white";
  }

}

