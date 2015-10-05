function substrCount(str, findStr, offset, length){
    if(offset === undefined)
        var offset = 0;
    if (length === undefined) {
        str = str.slice(offset);
    } else{
        str = str.slice(offset, offset + length);
    }
    var count = 0;
    var pos = 0;
    var lastPos;
    while((lastPos = str.indexOf(findStr, pos)) != -1){
        count ++;
        pos = lastPos + findStr.length;
    }
    return count;
}