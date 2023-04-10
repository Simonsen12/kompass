let Grader = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        Grader = input.compassHeading()
        if (Grader > 340 && Grader < 25) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (Grader > 25 && Grader < 70) {
            basic.showLeds(`
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                # . . . .
                `)
        } else if (Grader > 70 && Grader < 115) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else if (Grader > 115 && Grader < 160) {
            basic.showLeds(`
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                `)
        } else if (Grader > 160 && Grader < 205) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else if (Grader > 205 && Grader < 250) {
            basic.showLeds(`
                . . . . #
                # . . # .
                # . # . .
                # # . . .
                # # # # .
                `)
        } else if (Grader > 250 && Grader < 295) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else if (Grader > 295 && Grader < 340) {
            basic.showLeds(`
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . . #
                `)
        }
    }
})
