/* JExtensions v1.0.0 | (c) 2015 Avalon. | Licensed under the MIT license. */
if (!Number.prototype.isEven) {
    Number.prototype.isEven = function () {
        /// <summary>Check if a number is an even number.</summary>
        /// <returns type="Boolean">Flag that determinates whether a number is an even number.</returns>
        if (this) {
            return this % 2 == 0;
        }
        return false;
    }
}

if (!Number.prototype.isOdd) {
    Number.prototype.isOdd = function () {
        /// <summary>Check if a number is an odd number.</summary>
        /// <returns type="Boolean">Flag that determinates whether a number is an odd number.</returns>
        if (this) {
            return this % 2 == 1;
        }
        return false;
    }
}