function externalFunction(elementID, text, color) {
  var element = document.getElementById(elementID);
  element.innerHTML = text;
  element.style.color = color;
}
