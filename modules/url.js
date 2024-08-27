import url from "url";

const urlString = "https://codeit.com.np/search-course?q=Node+js";

const urlObject = new URL(urlString);

// console.log(urlObject)
// console.log(url.format(urlObject))

const params = new URLSearchParams(urlObject.search);
console.log(params);

params.set("q", "Value changed");
console.log(params);

params.append("key", "New value arrived")
console.log(params);

