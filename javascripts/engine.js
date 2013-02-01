$(document).ready(function() {

	var canvas = oCanvas.create({
		canvas: "#canvas"
	});

	var pentagon = canvas.display.polygon({
		x: canvas.width / 1.5,
		y: canvas.width / 1.5,
		sides: 5,
		radius: 60,
		fill: "#18a"
	});

	var line = canvas.display.line({
		start: { x: 80, y: 60 },
		end: { x: 280, y: 170 },
		stroke: "20px #0aa",
		cap: "round"
	});

	canvas.addChild(pentagon);

	var dragOptions = { changeZindex: true };

	pentagon.dragAndDrop(dragOptions);

	canvas.setLoop(function () {
		pentagon.rotation--;
	});

	$("#draw-ground").click(function() {

		canvas.addChild(line);

		if (canvas.timeline.running) {
			canvas.timeline.stop();
		} 
		else {
			canvas.timeline.start();
		}
	});

});