
var getFullName = function(salutation:any, lastname:any, firstname:any) {
    return Utility.Format('{0} {1:U} {2:L}', salutation, lastname, firstname)
}

export class Utility {
    public static Empty: string = "";

    public static isNullOrWhiteSpace(value: string): boolean {
        try {
            if (value == null || value == 'undefined')
                return false;

            return value.replace(/\s/g, '').length < 1;
        }
        catch (e) {
            return false;
        }
    }

    public static Format(value:string, ...args:any[]): string {
        debugger
        try {
            return value.replace(/{(\d+(:.)?)}/g, function (match, i) {
                debugger
                console.log(match)
                console.log(i)
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
    }

    private static formatPattern(match:string, arg:string): string {
        debugger
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
    }
}
