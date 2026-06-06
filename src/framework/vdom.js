function h(tag, props, children) {
  return { tag, props, children };
}

function mount(vnode, container) {
  if (typeof container === "string") {
    container = document.getElementById(container);
  }

  const el = document.createElement(vnode.tag);
  vnode.el = el;

  if (vnode.props) {
    for (const key in vnode.props) {
      if (key.startsWith("on") && typeof vnode.props[key] === "function") {
        const eventType = key.slice(2).toLowerCase();
        el.addEventListener(eventType, vnode.props[key]);
        continue;
      }
      el.setAttribute(key, vnode.props[key]);
    }
  }

  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else if (Array.isArray(vnode.children)) {
      vnode.children.forEach((child) => {
        mount(child, el);
      });
    }
  }

  container.appendChild(el);
}

export { h, mount };
