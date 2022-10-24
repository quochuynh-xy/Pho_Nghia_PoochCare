document.getElementById("switchTheme").onclick = function () {
  //Khi nút switchButton được ấn
  //Tìm tất cả các element có id là " switchTheme "
  //Thêm class "theme-dark" vào những element đó
  document.getElementById("changeTheme").classList.toggle("theme-dark");
  //dựa vào class theme-dark này để css cho các thẻ con có nền màu đen
};
// Back-to-top btn
// Get the button:
let backToTop = document.getElementById("backToTopBtn");
// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function () {
  showBackToTopBtn();
};
function showBackToTopBtn() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function backToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}