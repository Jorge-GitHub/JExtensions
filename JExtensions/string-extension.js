/* JExtensions v1.0.0 | (c) 2015 Avalon. | Licensed under the MIT license. */
if (!String.prototype.padLeft) {
    String.prototype.padLeft = function (padString, length) {
        /// <summary>Add characters to the left of the string.</summary>
        /// <param name="padString" type="String">The character that will be use for the pad for instance '0','*', '#', etc.</param>
        /// <param name="length" type="Number">The number of characters to add at the left of the string.</param>
        /// <returns type="String">String with characters added at the left side.</returns>
        var result = this;
        while (result.length < length) {
            result = padString + result;
        }
        return result;
    }
}

if (!String.prototype.padRight) {
    String.prototype.padRight = function (padString, length) {
        /// <summary>Add characters to the right of the string.</summary>
        /// <param name="padString" type="String">The character that will be use for the pad for instance '0','*', '#', etc.</param>
        /// <param name="length" type="Number">The number of characters to add at the right of the string.</param>
        /// <returns type="String">String with characters added at the right side.</returns>
        var result = this;
        while (result.length < length) {
            result = result + padString;
        }
        return result;
    }
}

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        /// <summary>Remove the empty space in both sides of the string.</summary>
        /// <returns type="String">The string without empty space on both sides.</returns>
        return this.replace(/^\s+|\s+$/g, "");
    }
}

if (!String.prototype.trimLeft) {
    String.prototype.trimLeft = function () {
        /// <summary>Remove the empty space in the left side.</summary>
        /// <returns type="String">The string without empty space in the left side.</returns>
        return this.replace(/^\s+/, "");
    }
}

if (!String.prototype.trimRight) {
    String.prototype.trimRight = function () {
        /// <summary>Remove the empty space in the right side.</summary>
        /// <returns type="String">The string without empty space in the right side.</returns>
        return this.replace(/\s+$/, "");
    }
}

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (suffix, ignoreCase) {
        /// <summary>Determinates if the string end with the suffix.</summary>
        /// <param name="suffix" type="String">Suffix.</param>
        /// <param name="ignoreCase" type="Boolean">Optional: Flag that indicates whether to ignore the case of the string or not.</param>
        /// <returns type="Boolean">Flag that indicates whether the string ends with the suffix or not.</returns>
        if (ignoreCase) {
            return this.toLowerCase().indexOf(suffix.toLowerCase(), this.length - suffix.length) !== -1;
        }
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    }
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (prefix, ignoreCase) {
        /// <summary>Determinates if the string starts with the prefix.</summary>
        /// <param name="prefix" type="String">Prefix.</param>
        /// <param name="ignoreCase" type="Boolean">Optional: Flag that indicates whether to ignore the case of the string or not.</param>
        /// <returns type="Boolean">Flag that indicates whether the string starts with the prefix or not.</returns>
        if (ignoreCase) {
            return (this.toLowerCase().indexOf(prefix.toLowerCase()) == 0);
        }
        return (this.indexOf(prefix) == 0);
    }
}

if (!String.prototype.equals) {
    String.prototype.equals = function (string, ignoreCase) {
        /// <summary>Determinates whether this string and the string has the same value.</summary>
        /// <param name="string" type="String">string to compare.</param>
        /// <param name="ignoreCase" type="Boolean">Optional: Flag that indicates whether to ignore the case of the string or not.</param>
        /// <returns type="Boolean">Flag that indicates whether the string have the same value than the string.</returns>
        if (ignoreCase) {
            return (this.toLowerCase() == string.toLowerCase());
        }
        return (this == string);
    }
}

if (!String.prototype.isNumeric) {
    String.prototype.isNumeric = function () {
        /// <summary>Determinates if the string is a number.</summary>
        /// <returns type="Boolean">Flag that indicates whether the string is numeric or not.</returns>
        return !isNaN(parseFloat(this)) && isFinite(this);
    }
}

if (!String.prototype.isEmpty) {
    String.prototype.isEmpty = function () {
        /// <summary>Determinates whether this string is empty(null) or not.</summary>
        /// <returns type="Boolean">Flag that indicates whether the string is empty(null).</returns>
        return (!this || 0 === this.length);
    }
}

if (!String.prototype.isBlank) {
    String.prototype.isBlank = function () {
        /// <summary>Determinates whether this string has not content.</summary>
        /// <returns type="Boolean">Flag that indicates whether the string has not content.</returns>
        return (!this || /^\s*$/.test(this));
    }
}

if (!String.prototype.isNullOrEmpty) {
    String.prototype.isNullOrEmpty = function () {
        /// <summary>Determinates whether this string is null or has not content.</summary>
        /// <returns type="Boolean">Flag that indicates whether the string is null or has not content.</returns>
        return (this.isEmpty() || this.isBlank());
    }
}

if (!String.prototype.isNotNullOrEmpty) {
    String.prototype.isNotNullOrEmpty = function () {
        /// <summary>Determinates whether this string is not null and has content.</summary>
        /// <returns type="Boolean">Flag that indicates whether the string is not null and has content.</returns>
        return !this.isNullOrEmpty();
    }
}

if (!String.prototype.toHash) {
    String.prototype.toHash = function () {
        /// <summary>Convert the string into a hash number.</summary>
        /// <returns type="Number">The hash number of the string.</returns>
        if (this.isNotNullOrEmpty()) {
            var result = 0;
            for (i = 0; i < this.length; i++) {
                char = this.charCodeAt(i);
                result = ((result << 5) - result) + char;
                result = result & result;
            }
            return result;
        }
        return 0;
    }
}

if (!String.prototype.addSpaceLeft) {
    String.prototype.addSpaceLeft = function (length) {
        /// <summary>Add empty space to the left of the string.</summary>
        /// <param name="length" type="Number">The number of empty spaces to be added to the left of the string.</param>
        /// <returns type="String">The string with empty space in the left side.</returns>
        if (length > 0) {
            while (length--) {
                this = " " + this;
            }
        }
        return this;
    }
}

if (!String.prototype.addSpaceRight) {
    String.prototype.addSpaceRight = function (length) {
        /// <summary>Add empty space to the right of the string.</summary>
        /// <param name="length" type="Number">The number of empty spaces to be added to the right of the string.</param>
        /// <returns type="String">The string with empty space in the right side.</returns>
        if (length > 0) {
            while (length--) {
                this = this + " ";
            }
        }
        return this;
    }
}

if (!String.prototype.capitalize) {
    String.prototype.capitalize = function () {
        /// <summary>Capitalize the string.</summary>    
        /// <returns type="String">The string capitalized.</returns>
        return this.replace(/\S+/g, function (char) {
            return char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
        });
    }
}

if (!String.prototype.stripTags) {
    String.prototype.stripTags = function () {
        /// <summary>Remove the tags from the string.</summary>
        /// <returns type="String">The string without the quotes.</returns>
        return this.replace(/<([^>]+)>/g, '');
    }
}

if (!String.prototype.quote) {
    String.prototype.quote = function () {
        /// <summary>Add quotes to the string.</summary>
        /// <returns type="String">The string surrender by quotes.</returns>
        return ('"' + this + '"');
    }
}

if (!String.prototype.reverse) {
    String.prototype.reverse = function () {
        /// <summary>Reverse the string.</summary>
        /// <returns type="String">The reversed string.</returns>
        var string = "";
        var i = this.length;
        while (i > 0) {
            string += this.substring(i - 1, i);
            i--;
        }
        return string;
    }
}

if (!String.prototype.isDate) {
    String.prototype.isDate = function () {
        /// <summary>Determine if the string is a valid date.</summary>
        /// <returns type="Boolean">Flag that indicates whether the string is a valid date.</returns>
        if (this.isNotNullOrEmpty()) {
            try {
                var date = new Date(this);
                if (Object.prototype.toString.call(date) !== "[object Date]") {
                    return false;
                }
                var dateString = date.toString();
                if (date.isNotNullOrEmpty()) {
                    if (!date.equals('NaN', true)
                        || !date.equals('Invalid Date', true)
                        || !date.equals('01/01/0001', true)) {
                        return true;
                    }
                }
            }
            catch (e) { }
        }
        return false;
    }
}

if (!String.prototype.isAnEmail) {
    String.prototype.isAnEmail = function () {
        /// <summary>Determine if the string is a valid email.</summary>
        /// <returns type="Boolean">Flag that indicates whether the string is a valid email.</returns>
        var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.test(this);
    }
}