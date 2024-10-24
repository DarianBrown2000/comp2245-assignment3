document.addEventListener('DOMContentLoaded', function() {
    // Selects all divs inside the #board element
    const squares = document.querySelectorAll('#board div');

    // Loops through each div and add the 'square' class
    squares.forEach(function(square) {
        square.classList.add('square');
    });
});