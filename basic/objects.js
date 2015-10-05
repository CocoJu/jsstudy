var obj = {
    provider:"microsoft",
    os:"windows7",
    field_for_delete:"this is will be delete"
};
var obj1 = {a:1};
var obj2 = obj1;
var obj3 = {a:1}

function function_is_object(arg1, arg2){
    return arguments.length;
}

arr_global = [1,2,3,4,5];

function objects(){

    /**
     * Object type
     */
    log("Object type:",[$h]);

    log("var obj = {provider:'microsoft', os:'windows7'}");
    log("'os' in obj", [$eval]);
    log("'non-existent_field' in obj", [$eval]);
    for(var field in obj){
        log(field + " : " + obj[field]);
    }
    var user = {};


    user.name = "Petua";
    user.age = 25;
    var user2 = {
        name: "Vasua",
        age: 30
    };

    log("delete obj.field_for_delete", [$eval]);

    log("obj1 == obj2", [$eval]);
    log("obj1 == obj3", [$eval]);

    obj.method_load = function(){
        return "load os... " + this.provider + " " + this.os;
    }

    log("obj.method_load()", [$eval]);

    log("function_is_object.length", [$eval]);
    log("function_is_object(1)", [$eval, "return arguments.length"]);

    function shutdown_os(){
        return "shutdown " + this.provider + " " + this.os;
    }

    //shutdown_os.apply(obj);
    log(shutdown_os.call(obj), ["call function from applying to object obj"]);

    /**
     * Array - object type
     */
    log("Object type: Array:",[$h]);

    log("typeof([])", [$eval]);

    var arr = [1,2,3]
    log(arr.length, ["length array after: var arr = [1,2,3]"]);
    arr[10] = "ten";
    log(arr.length, ["length array after: arr[10] = 'ten'"]);
    arr.length = 4;
    log(arr.length, ["length array after: arr.length = 4, .lenght property from array writable"]);
    log(arr[10], ["get 10-th element arr"]);

    /**
     * difference between cycle for and for-in: cycle for get undefined element,
     * for-in skip undefined
     */
    log("difference between cycle for and for-in:");
    var arr_cycle = [1,2,3, , ,6];
    log("create array " + arr_cycle);
    log("arr_cycle for:");
    for(var element = 0; element < arr_cycle.length; element++){
        log(arr_cycle[element]);
    }
    log("arr_cycle for in:");
    for(var element in arr_cycle){
        log(arr_cycle[element]);
    }

    log("arr_global.toString()", [$eval]);
    log("arr_global.join('--')", [$eval]);
    log("arr_global.slice(2)", [$eval]);
    log("arr_global.slice(-3,-1)", [$eval]);
    log("arr_global.reverse()", [$eval, "note, array.reverse() reverse array itself" +
        ", not return reverse copy"]);
    log("arr_global ", [$eval, "array after arr_global.reverce()"]);
    log("arr_global = [121,33,9,45]", [$eval]);

    // IMPORTANT!
    log("arr_global.sort()", [$eval, "sort() sorting elements of arrray " +
        "by comparing as string values"]);
    log("arr_global.sort(function(a,b){return a-b;})", [$eval, "but if we wanna that " +
        "sort() comparing numeric value, " +
            "need put as argument function-comparator"]);

    log("arr_global.pop()", [$eval]);
    log("arr_global", [$eval, "after pop"]);
    log("arr_global.push(121)", [$eval]);
    log("arr_global", [$eval, "after push"]);
    log("arr_global.shift()", [$eval]);
    log("arr_global", [$eval, "after shift"]);
    log("arr_global.unshift(9)", [$eval]);
    log("arr_global", [$eval, "after unshift"]);

    log("arr_global.splice(1,2)", [$eval]);
    log("arr_global", [$eval, "after splice"]);
    log("arr_global.splice(1,0,3,2,1,0)", [$eval]);
    log("arr_global", [$eval, "after splice"]);

    log("window.obj.provider", [$eval, "all function and variables declared in global" +
        " namespace always belong to the global object window"]);

}