// // langBtn = document.querySelector(".language-btn");
// console.log(langBtn);
// document.querySelector("#language-id").addEventListener("focus", (e) => {
//   e.target.style.borderWidth = "3px";
// });
let answers = document.querySelectorAll(".accordian");
answers.forEach((e) => {
  // console.log(e.childNodes);
  const child = e.childNodes;
  const icon = child[1].childNodes[3];
  // console.log(icon);
  const ans = child[3];
  e.addEventListener("click", () => {
    ans.classList.toggle("active");
    icon.classList.toggle("fa-xmark");
    icon.classList.toggle("fa-plus");
    console.log(icon);
  });
});