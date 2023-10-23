
let button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
  let cName = document.getElementById("colorName").value;
  document.body.style.backgroundColor = cName;
})
