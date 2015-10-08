function substrCount(str, findStr, offset, length){
    if(isNaN(offset))
        var offset = 0;
    if (isNaN(length)) {
        str = str.slice(offset);
    } else{
        if(offset + length > str.length)
            return false;
        str = str.slice(offset, offset + length);
    }
    var count = 0;
    var pos = 0;
    while(( pos = str.indexOf(findStr, pos)) != -1){
        count ++;
        pos += findStr.length;
    }
    return count;
}

/**
 * 8.00 - 10.00
 * strPad(str, returnSrgingSize, placeholder, [fillIn])
 * return string with length returnStringSize,
 * if returnSrgingSize param > length input string, then fill placeholder
 * @param str - current string
 * @param returnSrgingSize - length returned string
 * @param placeholder - fill string if returnStringSize param > str.length
 * @param [fillIn] - can be "STRING_LEFT", "STRING_BOTH", if param not
 *                   not transferred, filling at right
 */
function strPad(str, returnSrgingSize, placeholder, fillIn){
    if(returnSrgingSize == str.length
        || (!placeholder && str.length < returnSrgingSize))
        return str;
    if(str.length > returnSrgingSize)
        return str.slice(0, returnSrgingSize);
    while(str.length < returnSrgingSize){
        if( fillIn == "STRING_LEFT")
            str = placeholder + str;
        else if(fillIn == "STRING_BOTH")
            str = placeholder + str + placeholder;
        else
            str += placeholder;
    }
    if(fillIn == "STRING_LEFT")
        return str.slice(str.length - returnSrgingSize)
    else if(fillIn == "STRING_BOTH"){
        var offset = (str.length - returnSrgingSize) / 2;
        return str.slice(offset, offset + returnSrgingSize);
    }
    else
        return str.slice(0, returnSrgingSize);
}