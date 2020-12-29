
function getDelta() {
    const now = new Date()
    now.setHours(now.getHours() + 5) // EST to UTC compensation
    const day = now.getDay()
    const hours = 23 - now.getHours()
    const minutes = 60 - now.getMinutes()
    const seconds = 60 - now.getSeconds()

    let  days
    const wednesday = 3
    if (day < wednesday)
        days = wednesday - (day + 1)
    else if (day > wednesday)
        days = 6 - (day - wednesday)
    else
        days = 6 // it's Wednesday my dudes!

    return [getPlural("day", days),
            getPlural("hour", hours),
            getPlural("minute", minutes), 
            getPlural("second", seconds)].join(" ")
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clock").innerHTML = `<b>${getDelta()}</b><br><span class="lightgrey"><i>until reset (Wednesday 00:00 UTC)</i></span>`
})