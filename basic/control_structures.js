function cycles(){
    var i = 0;
    var placeholder = "";

    while(i < 5)
        placeholder += String(i++);
    log(placeholder, ["cycle i++ result"]);

    placeholder = ""; i = 0;
    while(i < 5)
        placeholder += String(++i);
    log(placeholder, ["cycle ++i result"])

    /*
    ** instructions divider in condition cycle FOR is "," instead ";"
     */
    for(var cnt = 1, result = 1, num = 2, exp = 10;
            cnt <= exp;
                 log("result on step " + cnt + " is " + result), cnt++ ){
        result *= num;
    }
}
