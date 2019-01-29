# Smart Tools for micro:bit

Smart Tools pxt extension for micro:bit

![Alt text](https://github.com/51bit/SmartTools/raw/master/icon.png?raw=true "Smart Tools")

## Basic Usage

```blocks
input.onButtonPressed(Button.AB, function () {
    smarttools.whoisauthor()
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(smarttools.intDiv(5, 2))
    basic.showNumber(smarttools.intRemainder(5, 2))
    basic.showNumber(smarttools.divWithFraction(8, 7, 1))
})
input.onButtonPressed(Button.B, function () {
    basic.showString(smarttools.intToString(123.1))
    basic.showString(smarttools.decimalToString(12.3))
    basic.showNumber(smarttools.stringToInt("12.3"))
    basic.showNumber(smarttools.stringToDecimal("12.3"))
    basic.showNumber(smarttools.round(12.5))
    basic.showNumber(smarttools.roundUp2PositiveInfinity(12.5))
    basic.showNumber(smarttools.roundDown2NegativeInfinity(12.5))
    basic.showNumber(smarttools.round2Zero(12.5))
})

basic.showString(smarttools.dec2Hex(12))
basic.showNumber(smarttools.hex2Dec("0xff"))
basic.forever(function () {

})
```
Use ``||intDiv||`` to integer result of divide operation without converting inputs.

Use ``||intRemainder||`` to integer result of remainder of divide operation without converting inputs.

Use ``||divWithFraction||`` to decimal result of divide operation without converting inputs, and also keep the nth decimal places with normal round operation for the fractions.

Use ``||intToString||`` to convert int to string (removing fractions).

Use ``||stringToInt||`` to convert string to int (removing fractions).

Use ``||decimalToString||`` to convert int to string (keep fractions).

Use ``||stringToDecimal||`` to convert string to int (keep fractions).

Use ``||round||`` to convert decimal to int with round. 

Use ``||roundUp2PositiveInfinity||`` to convert decimal to int with round up to positive infinity. 

Use ``||roundDown2NegativeInfinity||`` to convert decimal to int with round down to negative infinity. 

Use ``||round2Zero||`` to convert decimal to int with round to zero. 

Use ``||hex2Dec||`` to convert hex to decimal with round to zero. 

Use ``||dec2Hex||`` to convert decimal to hex with round to zero. 

Use ``||whoisauthor||`` to show this project author link. 

## Demo

![Alt text](https://github.com/51bit/SmartTools/raw/master/smarttools.png?raw=true "Smart Tools makecode program screenshot")

## Supported targets

* for PXT/microbit

## License

MIT
