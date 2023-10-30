console.log("top");
function calculateIdealWeight() {
  const height = document.getElementById("height").value;
  const age = document.getElementById("age").value;
  const bodyType = document.getElementById("bodyType").value;

  let regel;

  if (bodyType === "zierlich") {
    regel = (height - 100 + age / 10) * 0.9 * 0.9;
  } else if (bodyType === "breit") {
    regel = (height - 100 + age / 10) * 0.9 * 1.1;
  }

  document.getElementById("result").textContent = regel.toFixed(2) + "kg";
}
