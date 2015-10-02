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

function function_declaration(){
    // IMPORTANT!
    /**
     * function available because before perform sctipt, interpretress analyse this file
     * and registred functions
     */
    bar();

    /**
     * function not available - foo not assigned
     */
    foo();

    var foo = function(){
        log("function foo performed");
    };

    function bar(){
        log("function bar performed");
    }

    /**
     * circuit example
     */

    function make_add(base){
        return function(){
            return num + base;
        }
    }
    var add_two = make_add(2);
    log("add_two(10)",[$eval]);
    var add_five = make_add(5);
    log("add_five(10)", [$eval]);

}



