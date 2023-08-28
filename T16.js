const decimalNumber = "42";
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(binaryRepresentation); // Output: "101010"

function decimalToBinary(decimalNumber) {
    // Parse the input string to an integer
    let decimalValue = parseInt(decimalNumber, 10);
    console.log(decimalValue);
    // Check if the input is a valid number
    if (isNaN(decimalValue)) {
        throw new Error("Invalid input. Please provide a valid decimal number.");
    }
    // Handle the special case for 0
    if (decimalValue === 0) {
        return "0";
    }
    // Convert decimal to binary
    let binaryValue = "";
    let remainder;
    while (decimalValue > 0) {
        remainder = decimalValue % 2;
        // console.log(remainder)
        binaryValue = remainder + binaryValue;
        console.log(binaryValue)
        decimalValue = Math.floor(decimalValue / 2);
    }
    return binaryValue;
}
