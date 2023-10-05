// Get the Celsius and Fahrenheit input fields
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

// Get the convert button
const convertButton = document.getElementById('convert-button');

// Add an event listener to the convert button
convertButton.addEventListener('click', function() {
  // Convert the Celsius temperature to Fahrenheit
  const fahrenheit = celsiusInput.value * 9 / 5 + 32;

  // Convert the Fahrenheit temperature to Celsius
  const celsius = (fahrenheitInput.value - 32) * 5 / 9;

  // Set the Fahrenheit input field to the converted value
  fahrenheitInput.value = fahrenheit;

  // Set the Celsius input field to the converted value
  celsiusInput.value = celsius;
});
