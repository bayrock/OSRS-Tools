
let patchData
function calculatePetChance() {
    const selector = document.getElementById("patchSelector")
    const level = document.getElementById("lvl").value ?? 0
    
    let base
    if  (selector.selectedIndex == 0)
        base = 0
    else
        base = patchData[selector.value].baseChance ?? 0

    //console.log(`The base chance of ${selector.value} is ${base}!`)
    //console.log(`The level input is ${level}!`)

    if (base == 0)
        setError('Input not valid, check it and try again.. derp!')
    else
        setAlert(`Tangleroot chance is 1 out of ${getChance(base, level)} per patch..`)
}

function getChance(baseChance, level) {return baseChance - (level * 25)}

function addPatchSelections(patches) {
    const selector = document.getElementById("patchSelector")

    let option
    patches.forEach(entry => {
        option = document.createElement("option")
        option.text = entry.produce
        option.value = entry.produce.toLowerCase()

        selector.add(option)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("data/patches.json").then(res => {
        if (!res.ok)
            throw new Error("HTTP error " + res.status)
        return res.json()
    }).then(data => {
        if (patchData == null || patchData == undefined)
            patchData = {}
    
        data.forEach(entry => {
            patchData[entry.produce.toLowerCase()] = entry
        })
        addPatchSelections(data)
    }).catch((e) => {
        console.warn(e)
        setError("Error loading JSON data!")
    })

    const farmform = document.getElementById("farmingForm")
    farmform.addEventListener("submit", e => {
        calculatePetChance()
        e.preventDefault()
    })
})