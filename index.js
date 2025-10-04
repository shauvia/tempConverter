function convertToCelcius(tempFahr) {
  if (tempFahr === null || tempFahr.trim() === "") {
    alert("Please enter a number!");
    return;
  }

  let num = Number(tempFahr);
  if (isNaN(num)) {
    alert("Number! Enter a valid number!");
    return;
  } else {
    return Math.floor(((tempFahr - 32) * 5) / 9);
  }
}

function describeTemperature(tempFahr) {
  let tempCels = convertToCelcius(tempFahr);

  if (tempCels === undefined) {
    return "I said: Number! Enter a valid number";
  }
  let description;
  if (tempCels < 0) {
    description =
      "very cold. It means you need to start figthing with a polar bear for food";
  } else if (tempCels < 20) {
    description = "cold. It means you need to start mushroom foraging";
  } else if (tempCels < 30) {
    description = "warm. Enjoy your swimming with dolphins";
  } else if (tempCels < 40) {
    description = "hot. You will boil with dolphins";
  } else {
    description = "very hot. It's too hot to think!";
  }

  return `${tempFahr} degrees Fahrenheit is ${tempCels} degrees Celsius, which is ${description}!`;
}

let fahrenheit = prompt("Enter Fahrenheit degrees");

alert(describeTemperature(fahrenheit));
