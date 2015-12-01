window.onload = function() {
	var background = chrome.extension.getBackgroundPage();
	var playerData = document.createElement("tr");
	var data1 = document.createElement("td");
	data1.appendChild(document.createTextNode("You"));
	var data2 = document.createElement("td");
	var change = background.getBet();
	var score = Number(background.getScore());
	if (background.retrieve().length > 0) {
		score = score - Number(change);
		change = "-$" + change;
	}
	else {
		score = score + Number(change);
		change = "$"+change;
	}
	background.setScore(score);	
	score = "$" + String(score);
	data2.appendChild(document.createTextNode(change));
	var data3 = document.createElement("td");
	data3.appendChild(document.createTextNode(score));
	playerData.appendChild(data1);
	playerData.appendChild(data2);
	playerData.appendChild(data3);
	document.getElementById("scores").appendChild(playerData);

	var all_scores = background.getScores();
	var all_players = background.getPlayers();
	for (var i=1; i<all_scores.length; i++) {
		var day = background.getDay();
		var win_chance = 2;
		if (day%3==0) {
			win_chance += day/3;
		}

		if (all_scores[i]==0) {
			background.setPlayerScore(i, 100);
			all_scores[i] = 100;
		}
		var td2 = document.createElement("td");
		var bet = Math.floor(Math.random() * (all_scores[i]+1));
		var win = Math.floor(Math.random()*win_chance);
		console.log(win_chance);
		var score;
		if (win==0) {
			score = all_scores[i] - bet;
			td2.appendChild(document.createTextNode("-$"+bet));
		}
		else {
			score = all_scores[i] + bet;
			td2.appendChild(document.createTextNode("$"+bet));
		}
		background.setPlayerScore(i, score);

		var row = document.createElement("tr");
		var td1 = document.createElement("td");
		var td3 = document.createElement("td");
		td1.appendChild(document.createTextNode(all_players[i]));
		td3.appendChild(document.createTextNode("$" +all_scores[i]));
		row.appendChild(td1);
		row.appendChild(td2);
		row.appendChild(td3);
		document.getElementById("scores").appendChild(row);
	}

    document.getElementById("continue").onclick = function(e) {
    e.preventDefault();
    if (background.getScore()==0) {
    	window.location.href="lost.html";
    	chrome.browserAction.setPopup({
    		popup:"lost.html"
    	})
    }
    else {
    	background.setDay();
    	   window.location.href="begin.html";
    chrome.browserAction.setPopup({
    popup: 'begin.html'
  	});
    }

	}

}