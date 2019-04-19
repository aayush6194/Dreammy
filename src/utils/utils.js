function setLocalStorage(key, value) {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  try {
    let obj = JSON.parse(localStorage.getItem(key));
    return obj;
  }
  catch(err) {
    return localStorage.getItem(key);
  }
}

const cloudinaryUrl = (function() {
  let prefixA = "https://res.cloudinary.com/dqklw4e9q/image/upload/";
  let prefixB = "https://res.cloudinary.com/dqklw4e9q/image/upload";

  return function(partialUrl) {
    if (!partialUrl)
      return "";
    let prefix = (partialUrl[0] === "/")? prefixB: prefixA;

    return prefix + partialUrl;
  }
})();

export { setLocalStorage, getLocalStorage, cloudinaryUrl };
