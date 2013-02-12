// Main loop consists of the following three steps, repeated until 
// minutes are over:
// 1) a minute of a new or continuing song sung (and singing history updated)
// 2) changes (presumably new entries on the signup list) Note that the signup list can chnange as of step 1
// 3) the "rotation list" gets recomputed

// There are 2 objects in the state:
// 1) the history of who sung what sung at what minutes (array of SongItems)
// 3) the current state of the future rotation (array of SongItems)
//
// There are 2 functions that an algorithm "defines" -- they are basically 
// called once for each minute for the 3 steps above:
// f1 - modifies the history and rotation (if a new song is sung) - f1 is basically responsible for determining how the "next song" is selected if needed. Thus, it can modify the history and rotation
// f2 modifies the rotation based on people signing up, dropping out, changes to the rotation

// for each minute, record who is singing, and who signs up and drops out

function SongItem(song, singer) {
	this.song=song;
	this.singer=singer;
	return this;
}

function HistoryItem(song, signups, dropouts) {
	this.song=song; // a single songitem (may repeat across minutes)
	this.signups=signups; // list of songitems
	this.dropouts=dropouts; // list of singers	

function History() {
	this.minutes= new Array();
	this.addMinute(historyitem) {
		// probably add a convenience where if the historyitem
		// doesn't have a song, then get the "current" song from 
		// the last minute
		this.minutes.push(historyitem);
	}
}
function State() {
	this.length = minutes;
	this.history=new History();
	this.rotation=new Array();
}

function mainLoop(minutes, f1, f2) {
	var state=new State();
	
}
