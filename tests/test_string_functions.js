module("string_finctions.js testing");
QUnit.test( "substrCount() test", function( assert ) {
    var test_string = "_gogo_go_gogo_go_";
    assert.ok( substrCount(test_string, "go") == 6, "Offset, length arguments not set");
    assert.ok( substrCount(test_string, "go", 1) == 6, "Set offset, lenght not set");
    assert.ok( substrCount(test_string, "go", 13) == 1, "Set offset, lenght not set");
    assert.ok( substrCount(test_string, "go", 1, 4) == 2, "Set offcet and length");
    assert.ok( substrCount(test_string, "go", 1, 5) == 2, "Set offcet and length");
    assert.ok( substrCount(test_string, "go", 5, 4) == 1, "Set offcet and length");
    assert.ok( substrCount(test_string, "go", 14, 2) == 1, "Set offcet and length");
    assert.ok( substrCount(test_string, "go", 14, 1) == 0, "Set offcet and length");
    assert.ok( substrCount(test_string, "go", 7, 10) == 3, "Set offcet and length");
    assert.ok( substrCount(test_string, "go", 14, 10) == false, "offcet + lenght > input string length");
    assert.ok( substrCount(test_string, "go", 7, 11) == false, "offcet + lenght > input string length");
});