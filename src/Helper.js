/**
 * Created by ribomo on 2/23/17.
 */
export function returnValue(rawValue) {
    let value = rawValue;
    if (Number.isNaN(rawValue)) {
        value = 0.0;
    }
    return value;
}

/**
 * Returns the formated percentage value of number
 * @param {Number} number
 * @returns {String}
 */
export function NumberToPercentage(number) {
    return String((number*100.0).toFixed(2) + "%");
}