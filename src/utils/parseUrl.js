function parseUrl(url) {
  const obj = {};
  const query = url.split("?")[1];
  if (!query) return obj;

  query.split("&").forEach((item) => {
    const [key, value] = item.split("=");
    obj[key] = decodeURIComponent(value || "");
  });
  return obj;
}

export default parseUrl;
