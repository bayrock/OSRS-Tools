function setAlert(str) {resetError(); $("#alertBox").html(str)}
function setError(str) {resetAlert(); $("#errorBox").html(str)}
function resetAlert() {$("#alertBox").html("")}
function resetError() {$("#errorBox").html("")}

function getPlural(str, int) {return int > 0 ? int + " " + (int > 1 ? str + "s" : str) : ""}