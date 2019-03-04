(() => {

	// // set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		// generates the thumbnail under to the drop zone 
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	let dropZones = document.querySelectorAll('.drop-zone');

	//funtion in the middle 
	function createPuzzlePieces(pictureIndex) {
		//generate puzzle pieces for the puzzle
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img draggable id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`
			
			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(images/background${pictureIndex}.jpg)`
		
		initDrag();
	}

	// drag n drop function from left to right
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('dragging..')

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	//listener for drag and drop 
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('you dragged here!');
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped me like i was hot');


			//allows the drop using - e data transfer -
 			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});


	function resetPuzzlePieces() {
		// empty the container!!! dont fill it up too much :(
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref);
		    var images = document.getElementsByClassName("puzzle-image");
    			while(images.length > 4){
        		images[4].parentNode.removeChild(images[4]);
    }
}

	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));
	createPuzzlePieces(0);
	
})();