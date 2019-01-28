input.onButtonPressed(Button.A, function () {
    basic.showNumber(smarttools.intDiv(5, 2))
    basic.showNumber(smarttools.intRemainder(5, 2))
    basic.showString(smarttools.divWithFraction(8, 7, 1))
})
input.onButtonPressed(Button.AB, function () {
    smarttools.whoisauthor()
})
input.onButtonPressed(Button.B, function () {
    basic.showString(smarttools.intToString(123.1))
    basic.showString(smarttools.decimalToString(12.3))
    basic.showNumber(smarttools.stringToInt("12.3"))
    basic.showNumber(smarttools.stringToDecimal(""))
    basic.showNumber(smarttools.round(12.5))
    basic.showNumber(smarttools.roundUp2PositiveInfinity(12.5))
    basic.showNumber(smarttools.roundDown2NegativeInfinity(12.5))
    basic.showNumber(smarttools.round2Zero(12.5))
})
basic.showString(smarttools.dec2Hex(12))
basic.showNumber(smarttools.hex2Dec("0xff"))
basic.forever(function () {
	
})
