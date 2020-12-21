
let patchData
function calculatePetChance() {
    const selector = document.getElementById("patchSelector")
    const lvl = document.getElementById("lvl").value ?? 0
    
    let base
    if  (selector.selectedIndex == 0)
        base = 0
    else
        base = patchData[selector.value].baseChance ?? 0

    //console.log(`The base chance of ${selector.value} is ${base}!`)
    //console.log(`The level input is ${lvl}!`)

    if (base == 0)
        setError('Input not valid, check it and try again.. derp!')
    else
        setAlert(`Your chance is 1 out of ${getChance(base, lvl)} attempts..`)
}

function setAlert(str) {resetError(); $("#alertBox").html(str)}
function setError(str) {resetAlert(); $("#errorBox").html(str)}
function resetAlert() {$("#alertBox").html('')}
function resetError() {$("#errorBox").html('')}

function getChance(baseChance, level) {return baseChance - (level * 25)}

function addPatchSelections(patches) {
    const selector = document.getElementById("patchSelector")

    let option
    patches.forEach(entry => {
        option = document.createElement("option")
        option.text = entry.produce
        option.value = entry.produce.toLowerCase()

        selector.add(option)
    });
}

$.getJSON("patches.json", (data) => {
    if (patchData == null || patchData == undefined)
        patchData = {}

    data.forEach(entry => {
        patchData[entry.produce.toLowerCase()] = entry
    })
    addPatchSelections(data)
})

$(document).ready(() => { // Document is fully parsed
    $("#farmingForm").submit(e => {
        calculatePetChance()
        e.preventDefault()
    })
})
