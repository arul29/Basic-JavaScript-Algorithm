let books = 
[
    {
        title: "Database Java", 
        author: "Yuniar Supardi", 
        status: "Tersedia"
    }, 
    {
        title: "Pengenalan PHP", 
        author: "Jubilee Enterprise", 
        status: "Kosong"
    }, 
    {
        title: "Algoritma Dan Aplikasi", 
        author: "R.H. Sianipar", 
        status: "Tersedia"
    }
]
// books.push(new_book);

// console.log(books[0])
function tampilStatus(judul)
{
    for(let i = 0; i < books.length; i++)
    {
        if(books[i].title == judul)
        console.log('Buku dengan judul',judul,':',books[i].status)
    }
}
function bukuTersedia()
{
    let tempBuku = []
    for(let i = 0; i < books.length; i++)
    {   
        if(books[i].status == 'Tersedia')
        tempBuku.push(books[i].title)
    }
    console.log("Daftar Buku yang tersedia : ")
    console.log(tempBuku.join('\n'))
}
tampilStatus('Pengenalan PHP')
console.log('-----------------------')
bukuTersedia()