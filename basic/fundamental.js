// JavaScript: ECMA + BOM + DOM
// plog("",); - log to page

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

    plog("disc C:\\ is full", "disc C:\ is full");
    plog("disc C:\\\\ is full", "disc C:\\ is full");
    plog("\\u2014 (unicode)", "\u2014");
    plog("B\\x24F (hex)", "B\x24F");
    plog("'hello' +' world' (concatenation)", "hello" + "wordl");
    plog("'xyz' < 'abc' (compare strings perhaps, but not acceptable)", 'xyz' < 'abc');
    plog("'a' > 'A' (compare numberic representation)", 'a' > 'A');
    plog("'xyz' == 'abc'", 'xyz' == 'abc');
    plog("'xyz' == 'xyz'", 'xyz' == 'xyz');
    plog("'Xyz' == 'xyz'", 'Xyz' == 'xyz');

    /**
     * Data types: Boolean:
     * */

    plog("data types: Boolean:")
    plog("Boolean('')", Boolean(""));
    plog("Boolean('false')", Boolean("false"));
    plog("Boolean('anystring')", Boolean("anystring"));
    plog("Boolean(0)", Boolean(0));
    plog("Boolean(-1)", Boolean(-1));


}

function operators(){
    /**
     * basic operators:
     **/

    plog("operators: + data types: Number:");
    plog("2 + 2", 2 + 2);
    plog("(2 + 2) * 2", (2 + 2) * 2);
    plog("2 - 4", 2 - 4);
    plog("2 * 2", 2 * 2);
    plog("3 / 2", 3 / 2);
    plog("3 % 2", 3 % 2);
    plog("typeof(2 + 2)", typeof(2 + 2));
    plog("typeof(3 / 2)", typeof(3 / 2));

    plog("operators: + data types: Boolean:");
    plog("1 > 2", 1 > 2);
    plog("2 == 2", 2 == 2);
    plog("2 == '2' (not compared types, cast type," +
        "!NOTE in javascript String type has more priority than Number type)", 2 == '2');
    plog("2 === 2", 2 === 2);
    plog("2 === '2' (compare types)" , 2 === '2');
    plog("2 != 1", 2 != 1);
    plog("1 != '1'", 1 != '1');

    plog("operators:");
    plog("2 && 3 (cast to Boolean type: true && true, compare and return last value," +
        "were compiler was stopped)", 2 && 3);
    plog("3 && 2", 3 && 2);
    plog("0 && 2 (if checked value is false: false && true," +
         "compiler stoped before &&, and return value were it was stoped)", 0 && 2);
    plog("2 || 4", 2 || 4);
    plog("'' || 0 || false || 4 (false || false || false || true)", "" || 0 || false || 4);
    plog("!true", !true);
    plog("!'1'", !"1");
    plog("!'false' ('false' this is true)", !"false");
    plog("1 && 2 || false && true ( && operator higher priority than || )" , 1 && 2 || false && true );
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
//data_types();
//operators();