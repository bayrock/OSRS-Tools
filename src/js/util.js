function setAlert(str) {resetError(); document.getElementById("alertBox").innerHTML = str}
function setError(str) {resetAlert(); document.getElementById("errorBox").innerHTML = str}
function resetAlert() {document.getElementById("alertBox").innerHTML = ""}
function resetError() {document.getElementById("errorBox").innerHTML = ""}

function getPlural(str, int) {return int + " " + (int > 1 ? str + "s" : str)}