document.getElementById("switchTheme").onclick = function () {
  //Khi nút switchButton được ấn
  //Tìm tất cả các element có id là " switchTheme " 
  //Thêm class "theme-dark" vào những element đó
  document.getElementById("changeTheme").classList.toggle("theme-dark");
  //dựa vào class theme-dark này để css cho các thẻ con có nền màu đen
};
