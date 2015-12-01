    window.onload=function() {
    	var background = chrome.extension.getBackgroundPage();
    	document.getElementById("header").innerHTML = "You have $" + background.getScore(1, 1) + ".";

        var list = background.retrieve("hey");
        var mod_list = "";
        for (var i=0; i < list.length; i++){
            mod_list += "<label class = 'cb' id = '" + list[i] + "'><input type='checkbox' id=>"+ " "+list[i] + "</label><br>";
        }
        document.getElementById("list").innerHTML = mod_list;

        var checkboxes = document.getElementsByClassName("cb");
        for (var i=0; i < checkboxes.length; i++ ) {
            checkboxes[i].onclick = function() {
                this.style.color = "gray";
                background.unpush(this.id);
            }
            
        }
        document.getElementById("form").addEventListener("submit", function(e) {
            e.preventDefault();
            var label = document.createElement("label");
            label.class = 'cb';
            var input = document.getElementById("new");
            var cb = document.createElement("input");
            cb.type = "checkbox";
            label.id = input.value;
            cb.id = input.value;
            label.appendChild(cb);
            label.appendChild(document.createTextNode(" "+input.value));
            label.onclick = function() {
                this.style.color = "gray";
                background.unpush(this.id);
            }
            background.update(input.value);
            linebreak = document.createElement("br");
     
            document.getElementById("list").appendChild(label);
            document.getElementById("list").appendChild(linebreak);

            document.getElementById("new").value = "";
        });
        document.getElementById("bet-box").innerHTML = "$" + background.getBet();

        document.getElementById("end").onclick = function(e) {
            e.preventDefault();
            window.location.href="finish.html";
            chrome.browserAction.setPopup({
            popup: 'finish.html'
          });
        }

    }
           

