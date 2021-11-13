//Write a JavaScript program to find the most frequent item of an array.

var arr = [1, 5, 1, 6, 8, 1]
var f = 1;
var x = 0;
var item;
for (var a=0; a<arr.length; a++)
{
        for (var b=a; b<arr.length; b++)
        {
                if (arr[a] == arr[b])
                 x++;
                if (f<x)
                {
                  f=x; 
                  item = arr[a];
                }
        }
        x=0;
}
console.log(item+" ( " +f +" times ) ") ;
