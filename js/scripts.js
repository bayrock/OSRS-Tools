
let patchData
function calculatePetChance() {
    // return the chance to the end user
}

function addPatches(patches) {
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
    patchData = data
    addPatches(data)
})
