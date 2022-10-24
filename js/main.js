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
// header change size when scoll down
let headerSize = document.getElementById("mainHeader");
window.onscroll = function() {
  changeNavbarSize()
}
function changeNavbarSize () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    headerSize.style.padding = "10px 0 9px 0"
    headerSize.style.boxShadow = "0 1px 4px 0 #696969"
  } else {
    headerSize.style.padding = "16px 0 15px 0"
    headerSize.style.boxShadow = "none"
  }
}