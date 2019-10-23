let max = 100
let idx = 0
let prima = []
let isPrima = false
for(i = 2; i <= max; i++)
{
    isPrima = true
    for(j = 2; j < i; j++)
    {
        if(i % j == 0)
        {
            isPrima = false
            break;
        }
    }
    if(isPrima)
    {
        prima[idx] = i
        idx++
    }
}
let input = 5
if(input < 0 || input > 10)
{ 
    console.log("Nilai harus lebih besar dari nol dan lebih kecil atau sama dengan 10")
}
else
{
    let idx2 = 0
    for(let i = 0; i < input; i++)
    {
        let wadah = ""
        idx2 = 0;
        for (let a = 0; a <= i; a++)
        {
            wadah = wadah + prima[idx2] + " "
            idx2++
        }
        console.log(wadah)
    }
}
