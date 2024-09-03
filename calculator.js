// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the shape div where the text will be displayed
    const shape = document.getElementById('shape');
    // Get all buttons with the id 'box'
    const buttons = document.querySelectorAll('button[id="box"]');

    // Add a click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the text content of the button (i.e., the number or symbol)
            const buttonText = this.textContent.trim();

            // Check if the clicked button is '='
            if (buttonText === '=') {
                try {
                    // Evaluate the expression and display the result
                    shape.textContent = eval(shape.textContent.trim());
                } catch (error) {
                    // Handle errors (e.g., if the expression is invalid)
                    shape.textContent = 'Error';
                }
            } else if (buttonText === 'C') {
                // Clear the display if 'C' button is clicked
                shape.textContent = '';
            } else if (buttonText === 'AC') {
                // Clear the display if 'AC' button is clicked
                shape.textContent = '';
            } else {
                // Append the button's text to the 'shape' div for other buttons
                shape.textContent += buttonText;
            }
        });
    });
});
