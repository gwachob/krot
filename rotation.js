function SongItem(song, singer) {
	this.song=song;
	this.singer=singer;
}

function HistoryItem() {
	this.adds=null; // list of songitems
	this.drops=null; // list of singers	
	this.newrotation=null; // a flag to indicate top of a new rotation
	this.currentrotation=null; // a snapshot of the current rotation 
}

function History() {
	this.slots= new Array();
	this.addSlot=function(historyitem) {
		this.slots.push(historyitem);
	};
	this.rewindToSlot=function(slot) {
		// TODO
	};
}

function State() {
	this.slotcount= 0;
	this.history=new History();
	this.rotation=new Array();
}

function SingerGenerator() {
	this.state= null;
	this.slotcount= 0;
	this.generateAddDrops=function(slot) {
		// Returns (adds, drops)
	};
}

function RotationAlgorithm() {
	this.state=null;
	this.isNewRotation  = function(slot) {
		// Returns true/false to determine if there's a new rotation
	}
	this.updateRotation = function(slot, adds, drops) {
		// After add/drops list has been collected, update the rotation
	};
}

function runCompletely(slotcount, generator, algorithm) {
	var state=new State();
	state.slotcount=slotcount;
	algorithm.state=state;
	generator.slotcount=slotcount;
	generator.state=state;
	var songitem = null;
	var historyitem = new HistoryItem();


	for (slot=0; slot < slotcount; slot++) {
		console.log("Slot", slot);
		var nextad = generator.generateAddDrops(slot);
		var adds=nextad[0];
		var drops=nextad[1];
		historyitem.adds=adds;
		historyitem.drops=drops;
		if(algorithm.isNewRotation(slot)) {
			// Update the rotation # and log this 
			// XXX: Stopped here
			historyitem.newrotation=true;
		}
		else { 
			historyitem.newrotation=false;
		}
		
		algorithm.updateRotation(slot, adds, drops); 
		historyitem.currentrotation=state.rotation.slice();
		// XXX ensure songitem to get from rotation then get it
		var songitem=state.rotation.pop(); // sing this song! 
		// XXX log songitem somewhere
		console.log("Adding history item",historyitem);	
		state.history.addSlot(historyitem);
	}		
	return state; 
}
