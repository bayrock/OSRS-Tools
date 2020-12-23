
const wednesday = 3
function getDelta() {
    const now = new Date()
    const day = now.getDay()
    const hours = 23 - now.getHours()
    const minutes = 60 - now.getMinutes()
    const seconds = 60 - now.getSeconds()

    let  days
    if (day < wednesday)
        days = wednesday - (day + 1)
    else if (day > wednesday)
        days = day + (wednesday - 1)
    else
        days = 0 // it's Wednesday my dudes!

    return [getPlural("day", days),
            getPlural("hour", hours),
            getPlural("minute", minutes), 
            getPlural("second", seconds)].join(" ")
}

$(document).ready(() => {
    $("#clock").html(`${getDelta()}<br><i>left until reset</i>`)
})