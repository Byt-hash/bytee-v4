input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . # . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . # . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . # . # .
            . # # # .
            . # . # .
            `)
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . # . . .
        `)
})
music.play(music.stringPlayable("D E F G A B C5 - ", 160), music.PlaybackMode.InBackground)
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    . . . . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    . . . . .
    . # # # .
    `)
basic.showIcon(IconNames.Silly)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    # # # # #
    . . . # #
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . .
    . # # . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
