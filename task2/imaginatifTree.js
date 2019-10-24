function pohon(tahun_pohon,tinggi_pohon)
{
	for(let i = 0; i < tahun_pohon; i++)
	{
		tinggi_pohon = tinggi_pohon * 2 + 1 + tinggi_pohon
		// tinggi_pohon = tinggi_pohon * 2 + 1
	}
	console.log('tinggi akhir pohon',tinggi_pohon,'meter');
}
pohon(1,2)