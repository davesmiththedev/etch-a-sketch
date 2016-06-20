numColumns = 0;
numRows = 0;
brushColor = "blue";
colors = ["white", "blue", "red", "green", "yellow"];

$(document).ready(function () {	
		newGrid();		

});

function setColumnsRows(gridSize) {
		if (gridSize > 0 && gridSize < 101) {
			numColumns = gridSize;
		}else {
			alert("Choose a grid size from 1-100")
			numColumns = 0;	
		}
		numRows = numColumns;
}

function setDivDimensions() {
	totalWidth = (960 - (numColumns * 2));
	singleSide = totalWidth / numColumns;
	side = singleSide + "px";
	
	$(".square").css({"width": side, "height": side});
}

function showGridCheck() {
	if (document.getElementById("showGrid").checked) {
		$(".square").css("border","thin solid black");
	}else {
		$(".square").css("border","none");	
	}
}
cert
function setColor(brushColorSelected) {
	if (brushColorSelected == "random") {	
		brushColor = colors[Math.floor(Math.random()*3)+1];	
	}else{
		brushColor = brushColorSelected;
	}
}

function removeSquares() {
	$(".square").remove();
}

function newGrid() {
	removeSquares();	
	
	setColumnsRows(document.getElementById("gridSize").value);		
		
	totalBoxes = numColumns * numRows;	
	for (i = 1; i <= totalBoxes; i++) {	
		$("#sketchpad").append("<div class=\"square\"></div>");		
	};
		
	setDivDimensions();
		
	showGridCheck();
		
	setColor($("#brushColor :selected").text());

	$(".square").hover(function () {
		$(this).css("background", brushColor);		
	});
}
