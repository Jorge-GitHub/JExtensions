/* JExtensions v1.0.0 | (c) 2015 Avalon. | Licensed under the MIT license. */
if (!Date.prototype.equal) {
    Date.prototype.equal = function (date) {
        /// <summary>Compare if the dates are equal or not.</summary>
        /// <param name="date" type="Date">Date to compare.</param>
        /// <returns type="Boolean">Flag that indicates whether the dates are the same.</returns>
        if (typeof (date) === 'string') {
            return this.getTime() == (new Date(date).getTime());
        }
        return this.getTime() == date.getTime();
    }
}

if (!Date.prototype.isDateInTheFuture) {
    Date.prototype.isDateInTheFuture = function () {
        /// <summary>Determine if the date is in the future.</summary>
        /// <returns type="Boolean">Flag that indicates whether the date is in the future.</returns>
        var today = new Date();
        return this > today;
    }
}

if (!Date.prototype.isDateInThePast) {
    Date.prototype.isDateInThePast = function () {
        /// <summary>Determine if the date is in the past.</summary>
        /// <returns type="Boolean">Flag that indicates whether the date is in the past.</returns>
        var today = new Date();
        return this < today;
    }
}