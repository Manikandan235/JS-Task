do {
  const choice = prompt(
    "Choose an operation:\n1) Add\n2) Subtract\n3) Multiply\n4) Divide\n5) Exit"
  );

  if (choice === "5") {
    break;
  }

  const a = parseFloat(prompt("Enter the first number:"));
  const b = parseFloat(prompt("Enter the second number:"));

  if (isNaN(a) || isNaN(b)) {
    alert("Invalid input. Please enter valid numbers.");
    continue;
  }

  switch (choice) {
    case "1":
      alert("Result: " + (a + b));
      break;
    case "2":
      alert("Result: " + (a - b));
      break;
    case "3":
      alert("Result: " + a * b);
      break;
    case "4":
      if (b === 0) {
        alert("Cannot divide by zero.");
      } else {
        alert("Result: " + a / b);
      }
      break;
    default:
      alert("Invalid choice. Please select a valid option.");
      continue;
  }
} while (true);
