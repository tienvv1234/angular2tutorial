"use strict";
var getFullName = function (salutation, lastname, firstname) {
    return Utility.Format('{0} {1:U} {2:L}', salutation, lastname, firstname);
};
var Utility = (function () {
    function Utility() {
    }
    Utility.isNullOrWhiteSpace = function (value) {
        try {
            if (value == null || value == 'undefined')
                return false;
            return value.replace(/\s/g, '').length < 1;
        }
        catch (e) {
            return false;
        }
    };
    Utility.Format = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        debugger;
        try {
            return value.replace(/{(\d+(:.)?)}/g, function (match, i) {
                debugger;
                console.log(match);
                console.log(i);
                var s = match.split(':');
                if (s.length > 1) {
                    i = i[0];
                    match = s[1].replace('}', '');
                }
                var arg = Utility.formatPattern(match, args[i]);
                return (typeof arg != 'undefined') && arg != null ? arg : Utility.Empty;
            });
        }
        catch (e) {
            return Utility.Empty;
        }
    };
    Utility.formatPattern = function (match, arg) {
        debugger;
        switch (match) {
            case 'L':
                arg = arg.toLowerCase();
                break;
            case 'U':
                arg = arg.toUpperCase();
                break;
            default:
                break;
        }
        return arg;
    };
    return Utility;
}());
Utility.Empty = "";
exports.Utility = Utility;
//# sourceMappingURL=utility.js.map