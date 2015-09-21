// JavaScript: ECMA + BOM + DOM
// plog(""); - log to page

var $eval = "eval";

function data_types(){
    /**
     * Data types: Number:
     * */

    123
    -123
    1.23
    4.21e4

    /**
     * Data types: String:
     * */

    plog("data types: String:")

    "string"
    'string'
    '10'
    "10"

    plog("disc C:\\ is full", ["disc C:\ is full"]);
    plog("disc C:\\\\ is full", ["disc C:\\ is full"]);
    plog("\\u2014", ["\u2014", "unicode"]);
    plog("B\\x24F", ["B\x24F", "hex"]);
    plog("'hello' + ' world!'", [$eval]);
    plog("'xyz' < 'abc'", [$eval,"compare strings perhaps, but not acceptable"]);
    plog("'a' > 'A'",[$eval,"compare numberic representation"]);
    plog("'xyz' == 'abc'", [$eval]);
    plog("'xyz' == 'xyz'", [$eval]);
    plog("'Xyz' == 'xyz'", [$eval]);

    /**
     * Data types: Boolean:
     * */

    plog("data types: Boolean:")
    plog("Boolean('')", [$eval]);
    plog("Boolean('false')", [$eval]);
    plog("Boolean('anystring')", [$eval]);
    plog("Boolean(0)", [$eval]);
    plog("Boolean(-1)",[$eval]);


}

function operators(){
    /**
     * basic operators:
     **/

    plog("operators: + data types: Number:");
    plog("2 + 2", [$eval]);
    plog("(2 + 2) * 2", [$eval]);
    plog("2 - 4", [$eval]);
    plog("2 * 2", [$eval]);
    plog("3 / 2", [$eval]);
    plog("3 % 2", [$eval]);
    plog("typeof(2 + 2)", [$eval]);
    plog("typeof(3 / 2)", [$eval]);

    plog("operators: + data types: Boolean:");
    plog("1 > 2", [$eval]);
    plog("2 == 2", [$eval]);
    plog("2 == '2'", [$eval, "not compared types, cast type," +
        "!NOTE in javascript String type has more priority than Number type"]);
    plog("2 === 2", [$eval]);
    plog("2 === '2'" , [$eval, "compare types"]);
    plog("2 != 1", [$eval]);
    plog("1 != '1'", [$eval]);

    plog("operators:");
    plog("2 && 3", [$eval, "cast to Boolean type: true && true, compare and return last value," +
        "were compiler was stopped"]);
    plog("3 && 2", [$eval]);
    plog("0 && 2", [$eval, "if checked value is false: false && true," +
        "compiler stoped before &&, and return value were it was stoped"]);
    plog("2 || 4", [$eval]);
    plog("'' || 0 || false || 4", [$eval,"false || false || false || true"]);
    plog("!true", [$eval]);
    plog("!'1'", [$eval]);
    plog("!'false'",[$eval, "'false' - this is true"]);
    plog("1 && 2 || false && true", [$eval, "&& operator higher priority than || "]);
};

function variables(){
    /**
     * valid variables:
     */

    var _var;
    var $_Var;
    var var$513_var;

    /**
     * not valid variable:
     */

    //var 12var

    /**
     * the recommended variable names for the convention:
     */

    var first_name;
    var lastName;
    var firstLastUserName;

}

variables();
data_types();
operators();