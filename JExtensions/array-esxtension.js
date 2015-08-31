/* JExtensions v1.0.0 | (c) 2015 Avalon. | Licensed under the MIT license. */
if (!Array.prototype.contains) {
    Array.prototype.contains = function (value) {
        /// <summary>Determinates if the value is within the array.</summary>
        /// <param name="value" type="Object">The value to check.</param>
        /// <returns type="Boolean">Flag that indicates whether the value is within the array or not.</returns>
        var arraySize = this.length;
        if (arraySize > 0) {
            for (var i = 0; i < arraySize; i++) {
                if (this[i] === value) {
                    return true;
                }
            }
        }
        return false;
    }
}

if (!Array.prototype.remove) {
    Array.prototype.remove = function (value, allOccurrences) {
        /// <summary>Remove the value from the array.</summary>
        /// <param name="value" type="Object">The value to check.</param>
        /// <param name="allOccurrences" type="Boolean">Optional: Flag that indicates whether to remove all occurrences or not.</param>
        var arraySize = this.length;
        if (arraySize > 0) {
            if (allOccurrences) {
                var i = arraySize;
                while (i--) {
                    if (this[i] == value) {
                        this.splice(i, 1);
                    }
                }
            }
            else {
                for (var i = 0; i < arraySize; i++) {
                    if (this[i] == value) {
                        this.splice(i, 1);
                        break;
                    }
                }
            }
        }
        return this;
    }
}

if (!Array.prototype.random) {
    Array.prototype.random = function () {
        /// <summary>Return a random value from the array.</summary>    
        /// <returns type="Object">Random value from the array.</returns>
        return this[Math.floor((Math.random() * this.length))];
    }
}

if (!Array.prototype.empty) {
    Array.prototype.empty = function () {
        /// <summary>Remove all the elements in the array.</summary>
        if (this != null) {
            this.length = 0;
        }
        return this;
    }
}

if (!Array.prototype.sortNumeric) {
    Array.prototype.sortNumeric = function (descending) {
        /// <summary>Sort the numbers in an array. The sort is in ascending order by default.</summary>
        /// <param name="descending" type="Boolean">Optional: Flag that indicates whether to sort the array in descending order.</param>
        /// <returns type="Array">The numeric array sorted.</returns>
        if (descending) {
            return this.sort(function (a, b) { return b - a; });
        }
        return this.sort(function (a, b) { return a - b; });
    }
}

if (!Array.prototype.compare) {
    Array.prototype.compare = function (array) {
        /// <summary>Determine if the arrays are equal.</summary>
        /// <param name="array" type="Array">Array to compare with.</param>
        /// <returns type="Boolean">Flag that indicates whether the value is within the array or not.</returns>
        if (this.length != array.length) {
            return false;
        }
        var numberOfItems = this.length;
        for (var i = 0; i < numberOfItems; i++) {
            if (this[i].compare) {
                if (!this[i].compare(array[i])) {
                    return false;
                }
            }
            if (this[i] != array[i]) {
                return false;
            }
        }
        return true;
    }
}