function copyfilePath(e) {
  if (e.target.tagName == "A") {
    var hrefAttribute = e.target.getAttribute('href');
    if (hrefAttribute.indexOf("file:") == 0) {
      var filePath = hrefAttribute.substr(5);
      filePath = filePath.replace("///", "");
      filePath = filePath.replace(/\//g, "\\");
      chrome.extension.sendRequest({path: filePath}, function(response) {
        // console.log("send");
      });
    }
  }
}
document.addEventListener("dblclick", copyfilePath, true);
