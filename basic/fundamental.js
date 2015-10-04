// JavaScript: ECMA + BOM + DOM
// log(""); - log to page

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

    log("data types: String:",[$h])

    "string"
    'string'
    '10'
    "10"

    log("disc C:\\ is full", ["disc C:\ is full"]);
    log("disc C:\\\\ is full", ["disc C:\\ is full"]);
    log("\\u2014", ["\u2014", "unicode"]);
    log("B\\x24F", ["B\x24F", "hex"]);
    log("'hello' + ' world!'", [$eval]);
    log("'xyz' < 'abc'", [$eval,"compare strings perhaps, but not acceptable"]);
    log("'a' > 'A'",[$eval,"compare numberic representation"]);
    log("'xyz' == 'abc'", [$eval]);
    log("'xyz' == 'xyz'", [$eval]);
    log("'Xyz' == 'xyz'", [$eval]);

    /**
     * Data types: Boolean:
     * */

    log("data types: Boolean:",[$h])
    log("Boolean('')", [$eval]);
    log("Boolean('false')", [$eval]);
    log("Boolean('anystring')", [$eval]);
    log("Boolean(0)", [$eval]);
    log("Boolean(-1)",[$eval]);

    /**
     * Data type: Object:
     */
    log("data types: Object:", [$h]);
    log("typeof({field1:'field1', field2:'field2'})", [$eval]);
    log("typeof({})", [$eval]);

}

function operators(){
    /**
     * basic operators:
     **/

    log("operators: + data types: Number:",[$h]);
    log("2 + 2", [$eval]);
    log("(2 + 2) * 2", [$eval]);
    log("2 - 4", [$eval]);
    log("2 * 2", [$eval]);
    log("3 / 2", [$eval]);
    log("3 % 2", [$eval]);
    log("typeof(2 + 2)", [$eval]);
    log("typeof(3 / 2)", [$eval]);

    log("operators: + data types: Boolean:",[$h]);
    log("1 > 2", [$eval]);
    log("2 == 2", [$eval]);
    log("2 == '2'", [$eval, "not compared types, cast type," +
        "!NOTE in javascript String type has more priority than Number type"]);
    log("2 === 2", [$eval]);
    log("2 === '2'" , [$eval, "compare types"]);
    log("2 != 1", [$eval]);
    log("1 != '1'", [$eval]);

    log("operators:",[$h]);
    log("2 && 3", [$eval, "cast to Boolean type: true && true, compare and return last value," +
        "were compiler was stopped"]);
    log("3 && 2", [$eval]);
    log("0 && 2", [$eval, "if checked value is false: false && true," +
        "compiler stoped before &&, and return value were it was stoped"]);
    log("2 || 4", [$eval]);
    log("'' || 0 || false || 4", [$eval,"false || false || false || true"]);
    log("!true", [$eval]);
    log("!'1'", [$eval]);
    log("!'false'",[$eval, "'false' - this is true"]);
    log("1 && 2 || false && true", [$eval, "&& operator higher priority than || "]);
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