function convert() {
  const temp = parseFloat(document.getElementById("temp").value);
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerText = "Please enter a valid number.";
    return;
  }

  let converted;
  if (unit === "C") {
    converted = (temp * 9/5) + 32;
    result.innerText = `${temp}°C = ${converted.toFixed(2)}°F`;
  } else {
    converted = (temp - 32) * 5/9;
    result.innerText = `${temp}°F = ${converted.toFixed(2)}°C`;
  }
}
