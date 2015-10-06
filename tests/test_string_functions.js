/*module("Basic Unit Test");
test("Sample test", function() {
    expect(1);
    equals(divide(4,2),
        2,
        'Expected 2 as the result, result was: ' + divide(4,2));
});*/
//module("Basic Unit Test");
QUnit.test( "hello test", function( assert ) {

    assert.ok( 2 == "1", "Passed!" );
});