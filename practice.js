function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}

const vnode = h("div", { id: "app" }, [
  h(
    "h1",
    {
      id: "h1",
      onClick: () => {
        alert("我是一号标题");
      },
    },
    "我是一号标题"
  ),
  h("h2", { id: "h2" }, "我是二号标题"),
]);

function mount(vnode, container) {
  if (typeof container === "string") {
    container = document.getElementById(container);
  }
  const el = document.createElement(vnode.tag);
  vnode.el = el;

  // props
  if (vnode.props) {
    for (const key in vnode.props) {
      // 判断是否是事件
      if (key.startsWith("on") && typeof vnode.props[key] === "function") {
        const eventType = key.slice(2).toLowerCase();
        el.addEventListener(eventType, vnode.props[key]);
        continue;
      }
      el.setAttribute(key, vnode.props[key]);
    }
  }

  // children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else if (vnode.children && vnode.children.length > 0) {
      vnode.children.forEach((child) => {
        mount(child, el);
      });
    }
  }

  container.appendChild(el);
}

function patch() {}
mount(vnode, document.getElementById("app"));
console.log(vnode);
