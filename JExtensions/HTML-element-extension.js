/* JExtensions v1.0.0 | (c) 2015 Avalon. | Licensed under the MIT license. */
if (!HTMLElement.prototype.supportsHTML5Storage) {
    HTMLElement.prototype.supportsHTML5Storage = function () {
        /// <summary>Determine if the browser supports HTML 5 local storage.</summary>
        /// <returns type="Boolean">Flag that determine if the browser supports HTML 5 local storage.</returns>
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        }
        catch (e) {
            return false;
        }
    }
}