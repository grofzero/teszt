function go_straight () {
    cuteBot.motors(43, 45)
}
input.onButtonPressed(Button.A, function () {
    go_straight()
})
basic.forever(function () {
	
})
