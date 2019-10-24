function multiplyMatrices(m1, m2) 
{
    let result = [];
    for (let i = 0; i < m1.length; i++) 
    {
        result[i] = [];
        for (let j = 0; j < m2[0].length; j++) 
        {
            let sum = 0;
            for (let k = 0; k < m1[0].length; k++) 
            {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

var m1 = 
[
    [3,4],
    [1,2]
]
var m2 = 
[
    [7,5],
    [6,4]
]

console.table(multiplyMatrices(m1,m2)) 