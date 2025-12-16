const num = document.getElementById('numInput');
    const countBtn = document.getElementById('countBtn');  // Fixed button ID
    const clearCountBtn = document.getElementById('clearCount');  // For the clear button
    const resultDiv = document.getElementById('countResult');

    countBtn.addEventListener('click', () => {
        const n = Number(num.value);

        // Check if the input is valid
        if (isNaN(n) || n < 1 || n > 1000) {
            console.error('Please enter a valid positive number (1-1000)');
            resultDiv.textContent = 'Please enter a valid number (1-1000)';
            resultDiv.style.color = 'crimson';
            return;
        }

        let output = "";  // Create the output string

        // Loop through numbers from 1 to n
        for (let i = 1; i <= n; i++) {
            output += `Counting ${i}<br>`;  // Dynamically output "Counting 1", "Counting 2", etc.
        }

        resultDiv.innerHTML = output;  // Update the result
        resultDiv.style.color = 'black';
    });

    // Clear the count result when "Clear" button is clicked
    clearCountBtn.addEventListener('click', () => {
        resultDiv.innerHTML = '';  // Clear the result
        num.value = '';  // Optionally clear the input field as well
        num.focus();  // Focus on the input field again
    });
