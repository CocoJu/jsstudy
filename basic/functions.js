function test_namespace(){
    var log = clog;
    var x = 100;
    function foo(x){
        if(x){
            log(x);
            x = 10;
        }
        else
            var x = 20;
    }
    foo(true);
    log(x);


}

/**
 * circuit example
 * need global namespace
 */

function make_add(base){
    return function(num){
        return num + base;
    }
}
var add_two = make_add(2);
var add_five = make_add(5);

function function_declaration(){
    log("function_declaration", [$h]);
    /**
     * circuit example
     */
    log("add_two(5)",[$eval]);
    log("add_five(10)", [$eval]);

    // IMPORTANT!
    /**
     * function available because before perform sctipt, interpretress analyse this file
     * and registred functions
     */
    bar();

    /**
     * function not available - foo not assigned
     */
    //foo();

    var foo = function(){
        log("function foo performed");
    };

    function bar(){
        log("function bar performed");
    }



}



