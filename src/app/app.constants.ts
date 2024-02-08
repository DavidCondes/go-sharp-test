export class AppConstants {

    public static romanMap: Map<string, number> =
        new Map([['I', 1],
                ['V', 5],
                ['X', 10],
                ['L', 50],
                ['C', 100],
                ['D', 500],
                ['M', 1000]]);
    
    public static romanSymbolRegex = new RegExp("^[IVXLCDM]+$");

    public static romanValidRegex = new RegExp("^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$")

}