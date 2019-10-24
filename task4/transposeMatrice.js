let mat =
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
function transMat(matrice)
{
     let newMatx = []
    for(let i = 0; i < mat[0].length; i++)
    {
        let newMat = []
        for(let j = 0; j < mat[0].length; j++)
        {
            newMat.push(mat[j][i])
        }
        newMatx.push(newMat)
    }
    // console.log(newMat)
    return newMatx
}
console.table(transMat(mat))