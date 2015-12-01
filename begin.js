    window.onload=function() {
    	var background = chrome.extension.getBackgroundPage();
    	document.getElementById("header").innerHTML = "You have $" + background.getScore(1, 1) + ".";

    	var list = background.retrieve("e");
    	var mod_list = "";
    	for (var i=0; i < list.length; i++){
    		mod_list += "<li>" + list[i] + "</li>";
    	}
    	document.getElementById("list").innerHTML = mod_list;

       
        document.getElementById("form").addEventListener("submit", function(e) {
            e.preventDefault();
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            var input = document.getElementById("new");
            // var button = document.createElement("button");
            // button.innerHTML = "dsfd";
            // button.class = "del";
            li.appendChild(document.createTextNode(input.value));
            // li.appendChild(button);
            ul.appendChild(li);
            background.update(input.value);
            document.getElementById("new").value = "";
        });

        document.getElementById("begin").onclick = function(e) {
            e.preventDefault();
            window.location.href="ongoing.html";
            chrome.browserAction.setPopup({
            popup: 'ongoing.html'
          });
        }


        // background.setBet(0);
        var betbox = document.getElementById("0");
        betbox.innerHTML = "$" + 0;
        var bet = 0;
        var cash = background.getScore();
        var hash = {};
        hash[1]=1;
        hash[2]=10;
        hash[3]=100;
        hash[4]=1000;
        hash[5]=-1;
        hash[6]=-10;
        hash[7]=-100;
        hash[8]=-1000;
        var buttons = document.getElementsByClassName("p");
        for (var i=0; i < buttons.length; i++) {
            var button = buttons[i];
            var id = buttons[i].id;
            buttons[i].onclick = function() {
                if (bet + hash[this.id] <= cash && bet + hash[this.id] >= 0) {
                    bet = bet + hash[this.id];
                    background.setBet(bet);
                    betbox.innerHTML = "$" + bet;
                }
            }
        }
        // document.getElementById("1").onclick = function() {
        //     console.log("clicked");
        //     if (bet + 1 <= cash) {
        //         bet = bet + 1;
        //         background.setBet(bet);
        //         betbox.innerHTML = "$" + bet;
        //     }
        // }

        
    }