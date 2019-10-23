let Array = [123,9,27]
function countArr(arr)
{
    let jum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        jum += arr[i]
    }
    let output = []
    let number = jum.toString()
    for (i = 0, len = number.length; i < len; i++)
    {
        output.push(parseInt(number[i]));
    }
    Array = output
    if(Array.length == 1) console.log(Array[0])   
}
while(Array.length > 1)
{
    countArr(Array)
}