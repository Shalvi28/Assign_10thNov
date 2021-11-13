function rangebet(start, end)
{
    if(start > end)
    {
    var arr1 = new Array(start - end + 1);
    for (var x = 0; x < arr1.length; x++, start--)
    {
        resarrult[x] = start;
    }
    return arr1;
}
else 
{
    var arr2 = new Array(end-start+1);
    for(var y= 0; y < arr2.length; y++, start++)
    {
        arr2[y] = start;
    }
    return arr2;
}
}
console.log(rangebet(2, 4));
console.log(rangebet(-2, 4));
