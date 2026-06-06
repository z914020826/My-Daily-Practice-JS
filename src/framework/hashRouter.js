class HashRouter {
  constructor(routes) {
    this.routes = routes;
    this.routeView = null;
    this._init();
  }

  _init() {
    window.addEventListener("DOMContentLoaded", () => this._onRouteChange());
    window.addEventListener("hashchange", () => this._onRouteChange());
  }

  _onRouteChange() {
    if (!this.routeView) {
      this.routeView = document.getElementById("route-view");
    }
    const hash = location.hash || "#/";
    const route = this.routes[hash] || this.routes["#/"];
    if (route && this.routeView) {
      this.routeView.innerHTML = route;
    }
  }
}

export default HashRouter;
