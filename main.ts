function GitHub () {
    modem.comment("calliope-net/modem-41")
    modem.comment("1 Erweiterung: calliope-net/modem")
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x0000ff)
    text = "Modem"
    for (let zeichen of text) {
        basic.showString(zeichen)
        modem.sende_code(modem.charCodeAt(zeichen))
    }
    modem.sende_code(13)
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
    basic.clearScreen()
    text = modem.empfange_text_bis13()
    basic.showString(text)
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    modem.empfang_abbrechen()
    basic.showString(text)
})
let text = ""
basic.showString("M")
