function go_straight () {
    cuteBot.motors(43, 45)
}
input.onSound(DetectedSound.Loud, function () {
    fut = !(fut)
})
let fut = false
fut = false
basic.forever(function () {
    if (fut) {
        go_straight()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        cuteBot.motors(0, 0)
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . # .
            # . . # .
            . # # . .
            `)
    }
})
