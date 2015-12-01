window.onload = function() {
	var background = chrome.extension.getBackgroundPage();
	background.setScore(100);

	document.getElementById("again").onclick = function(e) {
    e.preventDefault();

    window.location.href="begin.html";
    chrome.browserAction.setPopup({
    popup: 'begin.html'
  	});
    

	}
}