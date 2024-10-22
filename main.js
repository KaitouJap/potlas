import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener("DOMContentLoaded", () => {
  let image = document.getElementById("app");
  let url = document.getElementById("url");
  url.addEventListener("change", () => {
    image.src = url.value;
  });
  let size = document.getElementById("size");
  size.addEventListener("input", () => {
    document.getElementById("szoveg").style.fontSize = size.value+"pt";
  });
  let spacing = document.getElementById("spacing");
  spacing.addEventListener("input", () => {
    document.getElementById("szoveg").style.lineHeight = spacing.value + "em";
  });
  let color = document.getElementById("color");
  color.addEventListener("input", () => {
    document.getElementById("szoveg").style.color = color.value;
  });

  let float = true;
  document.getElementById("button").addEventListener("click", () => {
    if(!float){
      image.classList.add("left");
      image.classList.remove("right");
    }else{
      image.classList.add("right");
      image.classList.remove("left");
    }
    float = !float;
  });
});