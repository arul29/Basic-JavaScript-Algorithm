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
console.log(mhs)
mhs.push(
    {
        nama: "Erwin",
        jur: "SI"
    }
)
console.log(mhs)
mhs[2].nama = "Adi"
console.log(mhs)
mhs.splice(1,1)
console.log(mhs)
