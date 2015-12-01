var curr_score=-1;
var td_list = [];
var curr_bet;
var players = ["You", "James", "Daisy", "Goofy", "Princess", "Mario", "Mom", "Tony", "Dad", "Francis"];
var scores = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
var day;

function getScore(c, more) {

	if (curr_score==-1) {
	curr_score = 100;
	day=1;
	}
	return curr_score;
}

function setScore(s) {
	curr_score = s;
}

function update(item) {
	td_list.push(item);
}

function retrieve(e) {
	return td_list;
}

function unpush(item) {
	var index = td_list.indexOf(item);
	if (index != -1)
		td_list.splice(index, 1);
}

function setBet(bet) {
	curr_bet = bet;
}

function getBet() {
	if (!curr_bet)
		return 0;
	return curr_bet;
}

function getPlayers() {
	return players;
}

function getScores() {
	return scores;
}

function setPlayerScore(n, score) {
	scores[n] = score;
}

function setDay() {
	day += 1;
}

function getDay() {
	return day;
}