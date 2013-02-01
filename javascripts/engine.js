$(document).ready(function() {

	var canvas = oCanvas.create({
		canvas: "#canvas"
	});

	var ground = canvas.display.line({
		name: "ground",
		start: { x: 30, y: 300 },
		end: { x: 480, y: 300 },
		stroke: "5px #0aa",
		cap: "round"
	});

	var object = canvas.display.rectangle({
		name: "object",
		x: ground.start.x + 20,
		y: ground.start.y - 100,
		width: 100,
		height: 100,
		fill: "#838B8B"
	});


	// var dragOptions = { changeZindex: true };

	/*
	canvas.setLoop(function () {
		pentagon.rotation--;
	});
	*/

	$("#draw-ground").click(function() {

		canvas.addChild(ground);

		/*
		if (canvas.timeline.running) {
			canvas.timeline.stop();
		} 
		else {
			canvas.timeline.start();
		}
		*/

	});

	$("#draw-object").click(function() {

		var groundDrawn = false;
		for (var i=0; i<canvas.children.length; i++){
			if (canvas.children[i].name === "ground"){
				groundDrawn = true;
				break;
			}
		}

		if (groundDrawn){
			// var mass = prompt("What should the object's mass be?", "Your name");
			canvas.addChild(object);
		}
		else alert("Draw the ground first, you dumbfuck!");

	});

});