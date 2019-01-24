

/**
 * Smart Tools
 */
//% weight=100 color=#0fbc11 icon="\uf06b" block="Smart Tools"
namespace smarttools {

    /**
     * Convert int to string(removing fractions)
     * @param input the int to be converted to string
     */
    //% blockId=smarttools_intToString block="Convert int:%input to string(removing fractions)" blockExternalInputs=false
    //% weight=100
    //% group="Integer suite"
    export function intToString(input: number): string {
        return '' + round2Zero(input);
    }

    /**
     * Convert string to int(removing fractions)
     * @param input the string to be converted to int
     */
    //% blockId=smarttools_stringToInt block="Convert string:%input to int(removing fractions)" blockExternalInputs=false
    //% weight=99
    //% group="Integer suite"
    export function stringToInt(input: string): number {
        return round2Zero(parseInt(input));
    }

    /**
     * Convert decimal to int with rule: removes decimal fractions smaller than 0.5 and counting all others, including 0.5, as 1
     * @param input the decimal to be converted to int
     */
    //% blockId=smarttools_round block="Convert decimal:%input to int with round" blockExternalInputs=false
    //% weight=90
    //% group="Integer suite"
    export function round(input: number): number {
        return Math.round(input);
    }

    /**
     * Convert decimal to int with rule: rounds up towards positive infinity.
     * @param input the decimal to be converted to int
     */
    //% blockId=smarttools_ceil block="Convert decimal:%input to int with roundUp2PositiveInfinity" blockExternalInputs=false
    //% weight=89
    //% group="Integer suite"
    export function roundUp2PositiveInfinity(input: number): number {
        return Math.ceil(input);
    }

    /**
     * Convert decimal to int with rule: rounds down towards negative infinity.
     * @param input the decimal to be converted to int
     */
    //% blockId=smarttools_floor block="Convert decimal:%input to int with roundDown2NegativeInfinity" blockExternalInputs=false
    //% weight=88
    //% group="Integer suite"
    export function roundDown2NegativeInfinity(input: number): number {
        return Math.floor(input);
    }

    /**
     * Convert decimal to int with rule: rounds up or down towards zero.
     * @param input the decimal to be converted to int
     */
    //% blockId=smarttools_trunc block="Convert decimal:%input to int with round2Zero" blockExternalInputs=false
    //% weight=87
    //% group="Integer suite"
    export function round2Zero(input: number): number {
        return Math.trunc(input);
    }
}