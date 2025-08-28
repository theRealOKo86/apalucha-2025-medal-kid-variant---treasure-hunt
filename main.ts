radio.onReceivedNumber(function (receivedNumber) {
    delta = Math.map(Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength)), 55, 95, 25, 500)
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -90) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        music.stopMelody(MelodyStopOptions.All)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -90 && radio.receivedPacket(RadioPacketProperty.SignalStrength) < -80) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        music.stopMelody(MelodyStopOptions.All)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -80 && radio.receivedPacket(RadioPacketProperty.SignalStrength) < -75) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        music.stopMelody(MelodyStopOptions.All)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -75 && radio.receivedPacket(RadioPacketProperty.SignalStrength) < -60) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music.stopMelody(MelodyStopOptions.All)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -60) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
let delta = 0
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P0, 11, NeoPixelMode.RGB)
strip.setBrightness(50)
delta = 1000
basic.forever(function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    basic.pause(delta)
})
