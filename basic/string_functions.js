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