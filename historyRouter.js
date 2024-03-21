window.addEventListener("DOMContentLoaded", Load);
window.addEventListener("popstate", PopChange);
let routeView = null;
function Load() {
  routeView = document.getElementById("route-view");
  PopChange();
  // 获取所有带 href 属性的 a 标签节点
  var aList = document.querySelectorAll("a[href]");
  // 遍历 a 标签节点数组，阻止默认事件，添加点击事件回调函数
  aList.forEach((aNode) =>
    aNode.addEventListener("click", function (e) {
      e.preventDefault(); //阻止a标签的默认事件
      var href = aNode.getAttribute("href");
      //  手动修改浏览器的地址栏
      history.pushState(null, "", href);
      // 通过 history.pushState 手动修改地址栏，
      // popstate 是监听不到地址栏的变化，所以此处需要手动执行回调函数 PopChange
      PopChange();
    })
  );
}
function PopChange() {
  console.log("location", location);
  switch (location.pathname) {
    case "/page1":
      routeView.innerHTML = "<h1>Page 1</h1>";
      break;
    case "/page2":
      routeView.innerHTML = "<h1>Page 2</h1>";
      break;
    default:
      routeView.innerHTML = "<h1>Page 1</h1>";
      break;
  }
}
