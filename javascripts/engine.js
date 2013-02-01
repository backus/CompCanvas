$(document).ready(function() {

	var canvas = oCanvas.create({
		canvas: "#canvas"
	});


	var line = canvas.display.line({
		start: { x: 30, y: 300 },
		end: { x: 480, y: 300 },
		stroke: "5px #0aa",
		cap: "round"
	});

	var dragOptions = { changeZindex: true };

	canvas.setLoop(function () {
//		pentagon.rotation--;
	});

	$("#draw-ground").click(function() {

		canvas.addChild(line);


		/*if (canvas.timeline.running) {
			canvas.timeline.stop();
		} 
		else {
			canvas.timeline.start();
		}*/
	});

});