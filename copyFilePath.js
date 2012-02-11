function copyfilePath(e) {
  if (e.target.tagName == "A") {
    var hrefAttribute = e.target.getAttribute('href');
    if (hrefAttribute.indexOf("file:") == 0) {
      console.log(hrefAttribute);
      chrome.extension.sendRequest({url: hrefAttribute}, function(response) {
        // console.log("send");
      });
    }
  }
}

document.addEventListener("dblclick", copyfilePath, true);

