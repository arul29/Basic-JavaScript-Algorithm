// let string = 'banananana'
// let kata = 'nana'
function palindrome(str,kta)
{
    let jum = 0
    function hitung(word)
    {
        while (word.length >= str.length)
        {
            if ( word.substring(0,str.length) == str)
            {
                jum++
            }
            word = word.substring(1)
        }
    }
    hitung(kta)
    hitung(reverseString(kta))
    return jum
}
function reverseString(str) {
    return str;
}
console.log(palindrome('nana','banananana'))
