

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
    //% weight=100 blockGap=8
    //% group="Integer suite"
    //% inlineInputMode=inline
    export function intToString(input: number): string {
        return '' + round2Zero(input);
    }

    /**
     * Convert string to int(removing fractions)
     * @param input the string to be converted to int
     */
    //% blockId=smarttools_stringToInt block="Convert string:%input to int(removing fractions)" blockExternalInputs=false
    //% weight=99 blockGap=8
    //% group="Integer suite"
    //% inlineInputMode=inline
    export function stringToInt(input: string): number {
        return round2Zero(parseInt(input));
    }

    /**
     * Convert decimal to string(keep fractions)
     * @param input the decimal to be converted to string
     */
    //% blockId=smarttools_decimalToString block="Convert decimal:%input to string(keep fractions)" blockExternalInputs=false
    //% weight=98 blockGap=8
    //% group="Integer suite"
    //% inlineInputMode=inline
    export function decimalToString(input: number): string {
        return '' + input;
    }

    /**
     * Convert string to int(keep fractions)
     * @param input the string to be converted to decimal
     */
    //% blockId=smarttools_stringToDecimal block="Convert string:%input to decimal(keep fractions)" blockExternalInputs=false
    //% weight=97 blockGap=8
    //% group="Integer suite"
    //% inlineInputMode=inline
    export function stringToDecimal(input: string): number {
        return parseFloat(input);
    }

    /**
     * Convert decimal to int with rule: removes decimal fractions smaller than 0.5 and counting all others, including 0.5, as 1
     * @param input the decimal to be converted to int
     */
    //% blockId=smarttools_round block="Convert decimal:%input to int with round" blockExternalInputs=false
    //% weight=90 blockGap=8
    //% group="Integer suite"
    //% inlineInputMode=inline
    export function round(input: number): number {
        return Math.round(input);
    }

    /**
     * Convert decimal to int with rule: rounds up towards positive infinity.
     * @param input the decimal to be converted to int
     */
    //% blockId=smarttools_ceil block="Convert decimal:%input to int with roundUp2PositiveInfinity" blockExternalInputs=false
    //% weight=89 blockGap=8
    //% group="Integer suite"
    //% inlineInputMode=inline
    export function roundUp2PositiveInfinity(input: number): number {
        return Math.ceil(input);
    }

    /**
     * Convert decimal to int with rule: rounds down towards negative infinity.
     * @param input the decimal to be converted to int
     */
    //% blockId=smarttools_floor block="Convert decimal:%input to int with roundDown2NegativeInfinity" blockExternalInputs=false
    //% weight=88 blockGap=8
    //% group="Integer suite"
    //% inlineInputMode=inline
    export function roundDown2NegativeInfinity(input: number): number {
        return Math.floor(input);
    }

    /**
     * Convert decimal to int with rule: rounds up or down towards zero.
     * @param input the decimal to be converted to int
     */
    //% blockId=smarttools_trunc block="Convert decimal:%input to int with round2Zero" blockExternalInputs=false
    //% weight=87 blockGap=8
    //% group="Integer suite"
    //% inlineInputMode=inline
    export function round2Zero(input: number): number {
        return Math.trunc(input);
    }

    /**
     * Author.
     */
    //% blockId=smarttools_whoisauthor block="Who is author" blockExternalInputs=false
    //% weight=80 blockGap=8
    //% group="Author"
    //% inlineInputMode=inline
    export function whoisauthor(): void {
        return basic.showString("github.com/51bit");
    }

    /**
     *  Convert hex to decimal.
     *  @param hex_num the hex to be converted to decimal
     */
    //% blockId=smarttools_hex2Dec block="Convert hex to decimal:%hex_num" blockExternalInputs=false
    //% weight=71 blockGap=8
    //% group="Hex Convertor"
    //% inlineInputMode=inline
    export function hex2Dec(hex_num: string): number {
        return parseInt(hex_num);
    }

    /**
     *  Convert decimal to hex.
     *  @param dec_num the decimal to be converted to hex
     */
    //% blockId=smarttools_dec2Hex block="Convert decimal to hex:%dec_num" blockExternalInputs=false
    //% weight=70 blockGap=8
    //% group="Hex Convertor"
    //% inlineInputMode=inline
    export function dec2Hex(dec_num: number): string {
        let dic: string = "0123456789ABCDEF";
        let output: string = "";
        let len: number = 0;

        if (dec_num == 0) return "0x0";

        let tmp: number = dec_num
        for (; tmp; tmp >>= 4) {
            len++;
        }
        if (len & 1) {
            output = output + "0";
        }
        for (len--; len >= 0; dec_num >>= 4, --len) {
            let id = dec_num & 0xf
            output = output + dic[id];
        }

        return "0x" + output;
    }

    /**
     *  Div for integer.
     *  @param a the divisor
     *  @param b the dividend
     */
    //% blockId=smarttools_intDiv block="IntDiv:%a÷%b" blockExternalInputs=false
    //% weight=61 blockGap=8
    //% group="Integer Math"
    //% inlineInputMode=inline
    export function intDiv(a: number, b: number): number {
        return Math.trunc(a / b);
    }

    /**
     *  Remainder for integer.
     *  @param a the divisor
     *  @param b the dividend
     */
    //% blockId=smarttools_intRemainder block="IntRemainder of%a÷%b" blockExternalInputs=false
    //% weight=60 blockGap=8
    //% group="Integer Math"
    //% inlineInputMode=inline
    export function intRemainder(a: number, b: number): number {
        return Math.trunc(a % b);
    }
    
    /**
     *  Div for integer with fraction.
     *  @param a the divisor
     *  @param b the dividend
     *  @param f the fraction number
     */
    //% blockId=smarttools_intDivWithFraction block="Div:%a÷%b with %f decimal places" blockExternalInputs=false
    //% weight=59 blockGap=8
    //% group="Integer Math"
    //% f.min=0 f.max=16
    //% f.fieldOptions.precision=1 
    //% inlineInputMode=inline
    export function divWithFraction(a: number, b: number, f: number): string {
        let stra = '' + a / b
        let strb = ''
        let n = f
        if (n >= 16) strb = stra
        else {
            if (stra.indexOf('.') != -1) {
                if (n == 0) {
                    strb = '' + round(a / b)
                }
                else {
                    let end = stra.indexOf('.') + 1 + n
                    if (parseInt(stra.charAt(end)) >= 5) {
                        let lastbit = parseInt(stra.charAt(end - 1)) + 1
                        strb = stra.substr(0, end - 1)
                        strb = strb + ('' + lastbit)
                    }
                    strb = stra.substr(0, end)
                }
            }
            else {
                strb = stra + '.'
                for (let i = 0; i < n; i++) {
                    strb = strb + '0'
                }
            }
        }
        return strb;
    }
}
