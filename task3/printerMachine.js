function cetak(per)
{
    let perintah = [true,false]
    let huruf = ['benar','salah']
    for(let i = 0; i < huruf.length; i++)
    {
        if(perintah[i] == per)
        console.log(huruf[i])
    }
}
cetak(false)
