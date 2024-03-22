function parseUrl(url) {
  const obj = {};
  let query = url.split("?")[1].split("&");
  query.forEach((item) => {
    let [key, value] = item.split("=");
    obj[key] = value;
  });
  return obj;
}
console.log(parseUrl("https://www.baidu.com?name=123&age=456"));
