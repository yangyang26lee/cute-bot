cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 10) {
        cuteBot.stopcar()
    } else if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) > 10) {
        cuteBot.motors(40, 40)
    }
})
