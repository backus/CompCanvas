$(document).ready(function() {
	var canvas = oCanvas.create({
		canvas: "#canvas"
	});

	var arc = canvas.display.arc({
		x: canvas.width / 3.5,
		y: canvas.width / 5 + 150,
		radius: 60,
		start: 40,
		end: 260,
		fill: "#079",
		pieSection: true
	});
	var pentagon = canvas.display.polygon({
		x: canvas.width / 1.5,
		y: arc.y,
		sides: 5,
		radius: 60,
		fill: "#18a"
	});
	var hexagon = pentagon.clone({ sides: 6, x: arc.x, y: pentagon.y + 180, fill: "#29b" });
	var heptagon = pentagon.clone({ sides: 7, x: pentagon.x, y: hexagon.y, fill: "#3ac" });

	canvas.addChild(arc);
	canvas.addChild(pentagon);
	canvas.addChild(hexagon);
	canvas.addChild(heptagon);

	var dragOptions = { changeZindex: true };

	arc.dragAndDrop(dragOptions);
	pentagon.dragAndDrop(dragOptions);
	hexagon.dragAndDrop(dragOptions);
	heptagon.dragAndDrop(dragOptions);

	canvas.setLoop(function () {
		arc.rotation++;
		pentagon.rotation--;
		hexagon.rotation++;
		heptagon.rotation--;
	});

	$("#rotate-toggle").click(function() {
		if (canvas.timeline.running) {
			canvas.timeline.stop();
		} else {
			canvas.timeline.start();
		}
	});
});