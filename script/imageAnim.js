(() => {
	console.log('fired');


	// set up the puzzle pieces and boards
	//need a reference to each piece that we want to create
	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"]

	//get a reference to the drag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");

	//get a refence to the buttons at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	//reference to drop area
	let dropZones = document.querySelectorAll(".drop-zone");

	//functions go in the middle
	function createPuzzlePieces(pictureIndex) {
		//generate images here -> need to make 4 (top left, right bottom left, right)
		//debugger;
		//
		//Loop through the images ref and generate one for each
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle pieces" draggable>`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});

		initDrag();

		}

	//drag and drop functionality
	//
	function initDrag(){
		piecesBoard.querySelectorAll('img').forEach(img =>{
			img.addEventListener("dragstart", function(e){
				console.log('dragging..');
				e.dataTransfer.setData('text/plain', this.id);
			});
		});

	}

	//coding drop
	//
	dropZones.forEach(zone =>{
		zone.addEventListener("dragover", function(e){
			e.preventDefault();
			console.log('dragged over me!');
		});

		zone.addEventListener("drop", function(e){
			e.preventDefault();
			console.log('dropped!');

			let piece = e.dataTransfer.getData('text/plain');
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});

	function resetPuzzlePieces(){
		//change current puzzle , regenerate the pieces
		//debugger;
		//
		// cleanout the puzzle pieces 
		piecesBoard.innerHTML= "";

		//event handline goes here
		createPuzzlePieces(this.dataset.puzzleref);

	}
	//event handling goes here
	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));

	

	//Call this function to set up / generate the piece on load
	createPuzzlePieces(0);




})();
