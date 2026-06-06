class HistoryRouter {
  constructor(routes) {
    this.routes = routes;
    this.routeView = null;
    this._init();
  }

  _init() {
    window.addEventListener("DOMContentLoaded", () => this._onRouteChange());
    window.addEventListener("popstate", () => this._onRouteChange());

    document.addEventListener("click", (e) => {
      const target = e.target.closest("a[href]");
      if (target) {
        e.preventDefault();
        const href = target.getAttribute("href");
        history.pushState(null, "", href);
        this._onRouteChange();
      }
    });
  }

  _onRouteChange() {
    if (!this.routeView) {
      this.routeView = document.getElementById("route-view");
    }
    const path = location.pathname;
    const route = this.routes[path] || this.routes["/"];
    if (route && this.routeView) {
      this.routeView.innerHTML = route;
    }
  }
}

export default HistoryRouter;
