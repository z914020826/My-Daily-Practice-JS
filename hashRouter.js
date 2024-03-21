window.addEventListener("DOMContentLoaded", Load);
window.addEventListener("hashchange", HashChange);

let routeView = null;
function Load() {
  routeView = document.getElementById("route-view");
  HashChange();
}
function HashChange() {
  switch (location.hash) {
    case "#/page1":
      routeView.innerHTML = "<h1>Page 1</h1>";
      break;
    case "#/page2":
      routeView.innerHTML = "<h1>Page 2</h1>";
      break;
    default:
      routeView.innerHTML = "<h1>Page 1</h1>";
      break;
  }
}