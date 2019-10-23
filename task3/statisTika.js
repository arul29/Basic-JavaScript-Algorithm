let nArray = [2,5,6,4]
function mean(arr)
{
    let temp = 0;
    for(let i = 0; i < arr.length; i++)
    {
        temp += arr[i]
    }
    let avg = temp / arr.length
    console.log(Math.floor(avg))
}
function median(arr) 
{
	let num, center;
	arr.sort(function(a,b)
	{
      return a-b;
  	});
	if(arr.length % 2 == 0)
	{
		num = arr.length / 2
		center =  (arr[num-1] + arr[num]) / 2
	}
	else
	{
		num = Math.floor(arr.length / 2) + 1
		center = arr[num]
	}
	console.log(center)
}
function modus(arr)
{
	
}
mean(nArray)
median(nArray)