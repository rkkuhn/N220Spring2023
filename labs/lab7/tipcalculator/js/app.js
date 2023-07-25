// Author Kelly Kuhn
// Date: July 25, 2023

/* Make a page with one input and one button (Seeing a trend?). When the 
 button is clicked (assuming the value typed into the input is numerical), 
 calculate both the tip and the full value of the bill to be paid. 
 Output both to the "console", formatted as such:

"Tip: $X. Total: $X" This is how it is seen from the console. */



document.getElementById("calculateButton").addEventListener("click", function(){
    // Get the value entered for the bill amount
    const billAmount = parseFloat(document.getElementById("billAmount").value);

    // Check if the input is a valid number
    if (isNaN(billAmount)){
        console.log("Please enter a valid numerical value.");
        return;
    }

    // Calculate the tip (let's assume 20% tip for this example)
    const tipAmount = billAmount * 0.20;

    // Calculate the total bill including the tip
    const totalAmount = billAmount + tipAmount;

    // Output the result to the "console"
    console.log("Tip: $" + tipAmount.toFixed(2) + ". Total: $" + totalAmount.toFixed(2));
});