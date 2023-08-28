function basicArithmeticOperation(s) {
    // Remove leading/trailing spaces and split the string into components
    s = s.trim();
    console.log(s)
    const [num1, operator, num2] = s.split(" ");
    // Convert the numbers to integers
    const num1Int = parseInt(num1, 10);
    const num2Int = parseInt(num2, 10);
  
    // Perform the arithmetic operation based on the operator
    if (operator === "+") {
      return num1Int + num2Int;
    } else if (operator === "-") {
      return num1Int - num2Int;
    } else if (operator === "*") {
      return num1Int * num2Int;
    } else if (operator === "/") {
      if (num2Int === 0) {
        return -1;
      }
      return num1Int / num2Int;
    } else {
      throw new Error("Invalid operator");
    }
  }
  
  // Test cases
  console.log(basicArithmeticOperation("12 + 24"));   // Output: 36
  console.log(basicArithmeticOperation("23 - 21"));   // Output: 2
  console.log(basicArithmeticOperation("12 / 12"));   // Output: 1
  console.log(basicArithmeticOperation("12 * 21"));   // Output: 252
  console.log(basicArithmeticOperation("10 / 0"));    // Output: -1
  