let mhs = 
[
    {
        nama: "Andi", 
        jur: "TI"
    }, 
    {
        nama: "Iyan", 
        jur: "SI"
    }, 
    {
        nama: "Rahmat", 
        jur: "TI"
    },
]

console.table(mhs)

mhs.push(
    {
        nama: "Erwin",
        jur: "SI"
    }
)

console.table(mhs)

mhs[2].nama = "Adi"

console.table(mhs)

mhs.splice(1,1)

console.table(mhs)
