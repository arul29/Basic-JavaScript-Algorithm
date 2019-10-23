let array = [6,22,34,15,2,13,26,57,42,32];
function dataShort(arr)
{
   console.log(arr.join(' '));
   console.log('nilai terendah adalah',Math.min(...arr));
   console.log('nilai tertinggi adalah',Math.max(...arr));
   arr.sort(function(a,b){
      return a-b;
   });
   console.log(arr.join(' '));
   
   arr.sort(function(a,b){
      return b-a;
   });
   console.log(arr.join(' '));
}
dataShort(array)