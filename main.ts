/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyphong Pham
 * Created on: Sep 2025
 * This program shows the temperature when A button pressed
*/
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// When A button pressed temperature is shown
let temperature: number

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString('The Temperature Is:' + input.temperature() )
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    
})

