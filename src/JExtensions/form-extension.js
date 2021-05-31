/* JExtensions v1.0.0 | (c) 2015 Avalon. | Licensed under the MIT license. */
if (!HTMLFormElement.prototype.disableEnterKey) {
    HTMLFormElement.prototype.disableEnterKey = function () {
        /// <summary>Disable the enter key.</summary>
        document.onkeypress = function (evt) {
            var evt = (evt) ? evt : ((event) ? event : null);
            var element = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
            if ((evt.keyCode == 13) && (element.type == "text")) {
                return false;
            }
        }
    }
}