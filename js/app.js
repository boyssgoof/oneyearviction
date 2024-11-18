window.addEventListener("load", () => {
  var btns = document.querySelectorAll("body button");
  for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    btn.removeAttribute("href");
    btn.classList.add("open");
  }
});
