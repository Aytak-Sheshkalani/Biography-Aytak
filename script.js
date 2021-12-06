function getRandomColor() {
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 3);
  }
  return color;
}
window.addEventListener("DOMContentLoaded", (event) => {
  // for project page
  let prjSections = document.querySelectorAll(".prj-section");
  for (let index = 0; index < prjSections.length; index += 1) {
    let color = getRandomColor();
    prjSections[index].style.backgroundColor = color;
  }

  //   for posts2 page
  let slideImgs = document.getElementsByClassName("slide-img");
  for (let index = 0; index < slideImgs.length; index += 1) {
      console.log(slideImgs[index])
    slideImgs[index].onclick=() => {
        console.log('clieckedas')
      changeTheSlide(slideImgs[index]);
    };
  }
});

function changeTheSlide(imgs) {
    console.log(imgs)
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
