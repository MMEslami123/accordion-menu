const div = document.getElementById("delegation");
div.addEventListener("click", (event) => {
  let target = event.target;
  let p = event.target.nextElementSibling;
  target.classList.toggle("active");
  if (p.style.maxHeight) {
    p.style.maxHeight = "";
  } else {
    p.style.maxHeight = p.scrollHeight + "px";
  }
});
