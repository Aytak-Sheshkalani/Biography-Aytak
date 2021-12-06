// const getRandomColor = () => {
//   let r = Math.random();
//   const randomColor = Math.floor(r * 16777215).toString(16);
//   const complementRandomColor = Math.floor((1 - r) * 16777215).toString(16);
//   return ["#" + randomColor, "#" + complementRandomColor];
// };


function getRandomColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 3);
    }
    return color;
}
window.addEventListener("DOMContentLoaded", (event) => {
  let prjSections = document.querySelectorAll(".prj-section");
  for (let index = 0; index < prjSections.length; index += 1) {
    // let [color1,color2] = getRandomColor();
    let color= getRandomColor();
    prjSections[index].style.backgroundColor = color;
    // if (index + 1 < prjSections.length)
    //   prjSections[index + 1].style.backgroundColor = color2;
  }
  console.log("hey!");
});
