function setMenuFixed() {
  let btn = document.getElementById("btn-collapsed").classList;
  let header = document.getElementById("header").classList;
  if (!btn.contains("collapsed")) {
    header.add("header-fixed");
    btn.add("btn-fixed");
  } else if (header.contains("header-fixed")) {
    header.remove("header-fixed");
    btn.remove("btn-fixed");
  }
}
