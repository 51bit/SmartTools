# Smart Tools for micro:bit

Smart Tools pxt extension for micro:bit

![Alt text](https://github.com/51bit/SmartTools/raw/master/icon.png?raw=true "Smart Tools")

## Basic Usage

```blocks
let x = 0
x = 123.52
basic.showString(smarttools.intToString(
123.1
))
basic.showNumber(smarttools.stringToInt(
"12.3"
))
basic.showNumber(smarttools.round(
12.5
))
basic.showNumber(smarttools.roundUp2PositiveInfinity(
12.5
))
basic.showNumber(smarttools.roundDown2NegativeInfinity(
12.5
))
basic.showNumber(smarttools.round2Zero(
12.5
))
basic.forever(function () {
	
})
```

Use ``||intToString||`` to convert int to string (removing fractions).

Use ``||stringToInt||`` to convert string to int (removing fractions).

Use ``||round||`` to convert decimal to int with round. 

Use ``||roundUp2PositiveInfinity||`` to convert decimal to int with round up to positive infinity. 

Use ``||roundDown2NegativeInfinity||`` to convert decimal to int with round down to negative infinity. 

Use ``||round2Zero||`` to convert decimal to int with round to zero. 

Use ``||hex2Dec||`` to convert hex to decimal with round to zero. 

Use ``||dec2Hex||`` to convert decimal to hex with round to zero. 

## Demo

![Alt text](https://github.com/51bit/SmartTools/raw/master/smarttools.png?raw=true "Smart Tools makecode program screenshot")

## Supported targets

* for PXT/microbit

## License

MIT
