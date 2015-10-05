function substrCount(str, findStr, offset, length){
    var count = 0;
    var pos = offset;
    var maxPos = offset + length;
    var lastPos = 0;
    while((lastPos = str.indexOf(findStr, pos)) != -1 && pos < maxPos){
        count ++;
        pos += lastPos + findStr.length +1;
    }
    return count;
}