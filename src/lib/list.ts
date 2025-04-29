const vegetables = [
	{
		kode_barang: 'vt001',
		nama_barang: 'Wortel',
		image:
			'https://ik.imagekit.io/dcjlghyytp1/cf86886e300e5e2ad793261782a9c4a4?tr=f-auto,w-120',
		variant: [
			{
				satuan: '500 g',
				harga: 8500,
				est_jumlah: '4-9 biji, perkiraan keadaan panen normal',
				stok:20
			},
			{
				satuan: '1 kg',
				harga: 16000,
				est_jumlah: '14-17 biji, perkiraan keadaan panen normal',
				stok:5
			},
			{
				satuan: '2 kg',
				harga: 30000,
				est_jumlah: '14-17 biji, perkiraan keadaan panen normal',
				stok:5
			}
		],
		ready: ['Hari ini', 'Besok'],
		info_produk:
			'Wortel segar yang dapat diolah sebagai isian sup, sayuran, atau Jus. Produk ini dapat digunakan sebagai MPASI. Terdapat potensi kelebihan / kekurangan gramasi +- 10% per pack',
		kategori: 'Sayur',
		umur_simpan: '5-7 Hari',
		nutrisi:
			'<p>Wortel kaya akan vitamin A dan Karotenoid yang bermanfaat untuk menjaga kesehatan mata.</p><p>Selain itu, wortel juga kaya akan beta karoten, vitamin C, serat, dan lain-lain. Nutrisi dalam wortel dapat membantu menurunkan kadar kolesterol, menurunkan resiko diabetes, dan menurunkkan resiko kanker',
		penyimpanan:
			'<ol><li>Jangan mencuci atau mengupas wortel yang akan disimpan</li><li>Buang bagian pucuk wortel</li><li>Simpan wortel dalam kantung plastik</li><li>Letakkan kantung plastik dalam wadah berisi air</li><li>Simpan dalam kulkas atau chiller</li><li>Jauhkan dari buah atau sayur lainnya</li><li>Ganti air setiap hari</li></ol><p>Dengan penyimpanan yang benar wortel bisa bertahan hingga 1 bulan</p>'
	},
	{
		kode_barang: 'vt002',
		nama_barang: 'Pakcoy',
		image:
			'https://ik.imagekit.io/dcjlghyytp1/33757aa39c11ee9ed6244c4d115f4a7f?tr=f-auto,w-120',
		variant: [
			{
				satuan: '500 g',
				harga: 9000,
				est_jumlah: '3-5 bonggol, perkiraan keadaan panen normal',
				stok:4
			},
			{
				satuan: '1 kg',
				harga: 16000,
				est_jumlah: '6-9 bonggol, perkiraan keadaan panen normal',
				stok:2
			}
		],
		ready: ['Hari ini', 'Besok'],
		info_produk:
			'Wortel segar yang dapat diolah sebagai isian sup, sayuran, atau Jus. Produk ini dapat digunakan sebagai MPASI. Terdapat potensi kelebihan / kekurangan gramasi +- 10% per pack',
		kategori: 'Sayur',
		umur_simpan: '5-7 Hari',
		nutrisi:
			'<p>Wortel kaya akan vitamin A dan Karotenoid yang bermanfaat untuk menjaga kesehatan mata.</p><p>Selain itu, wortel juga kaya akan beta karoten, vitamin C, serat, dan lain-lain. Nutrisi dalam wortel dapat membantu menurunkan kadar kolesterol, menurunkan resiko diabetes, dan menurunkkan resiko kanker',
		penyimpanan:
			'<ol><li>Jangan mencuci atau mengupas wortel yang akan disimpan</li><li>Buang bagian pucuk wortel</li><li>Simpan wortel dalam kantung plastik</li><li>Letakkan kantung plastik dalam wadah berisi air</li><li>Simpan dalam kulkas atau chiller</li><li>Jauhkan dari buah atau sayur lainnya</li><li>Ganti air setiap hari</li></ol><p>Dengan penyimpanan yang benar wortel bisa bertahan hingga 1 bulan</p>'
	},
	{
		kode_barang: 'vt003',
		nama_barang:'Brokoli',
		image: 'https://ik.imagekit.io/dcjlghyytp1/5ca752dc4c568c946eeb9893540fa626?tr=f-auto,w-120,dpr-2',
		variant: [
			{
				satuan: '500 g',
				harga: 8500,
				est_jumlah: '4-9 biji, perkiraan keadaan panen normal',
				stok:3
			},
			{
				satuan: '1 kg',
				harga: 16000,
				est_jumlah: '14-17 biji, perkiraan keadaan panen normal',
				stok:5
			}
		],
		ready: ['Hari ini', 'Besok'],
		info_produk:
			'Wortel segar yang dapat diolah sebagai isian sup, sayuran, atau Jus. Produk ini dapat digunakan sebagai MPASI. Terdapat potensi kelebihan / kekurangan gramasi +- 10% per pack',
		kategori: 'Sayur',
		umur_simpan: '5-7 Hari',
		nutrisi:
			'<p>Wortel kaya akan vitamin A dan Karotenoid yang bermanfaat untuk menjaga kesehatan mata.</p><p>Selain itu, wortel juga kaya akan beta karoten, vitamin C, serat, dan lain-lain. Nutrisi dalam wortel dapat membantu menurunkan kadar kolesterol, menurunkan resiko diabetes, dan menurunkkan resiko kanker',
		penyimpanan:
			'<ol><li>Jangan mencuci atau mengupas wortel yang akan disimpan</li><li>Buang bagian pucuk wortel</li><li>Simpan wortel dalam kantung plastik</li><li>Letakkan kantung plastik dalam wadah berisi air</li><li>Simpan dalam kulkas atau chiller</li><li>Jauhkan dari buah atau sayur lainnya</li><li>Ganti air setiap hari</li></ol><p>Dengan penyimpanan yang benar wortel bisa bertahan hingga 1 bulan</p>'
	},
	{
		kode_barang: 'vt004',
		nama_barang:'Bawang Putih',
		image: 'https://ik.imagekit.io/dcjlghyytp1/ebc47e95b9e751721fedf1bba7d8a47f?tr=f-auto,w-120,dpr-2',
		variant: [
			{
				satuan: '500 g',
				harga: 8500,
				est_jumlah: '4-9 biji, perkiraan keadaan panen normal',
				stok:20
			},
			{
				satuan: '1 kg',
				harga: 16000,
				est_jumlah: '14-17 biji, perkiraan keadaan panen normal',
				stok:3
			}
		],
		ready: ['Hari ini', 'Besok'],
		info_produk:
			'Wortel segar yang dapat diolah sebagai isian sup, sayuran, atau Jus. Produk ini dapat digunakan sebagai MPASI. Terdapat potensi kelebihan / kekurangan gramasi +- 10% per pack',
		kategori: 'Sayur',
		umur_simpan: '5-7 Hari',
		nutrisi:
			'<p>Wortel kaya akan vitamin A dan Karotenoid yang bermanfaat untuk menjaga kesehatan mata.</p><p>Selain itu, wortel juga kaya akan beta karoten, vitamin C, serat, dan lain-lain. Nutrisi dalam wortel dapat membantu menurunkan kadar kolesterol, menurunkan resiko diabetes, dan menurunkkan resiko kanker',
		penyimpanan:
			'<ol><li>Jangan mencuci atau mengupas wortel yang akan disimpan</li><li>Buang bagian pucuk wortel</li><li>Simpan wortel dalam kantung plastik</li><li>Letakkan kantung plastik dalam wadah berisi air</li><li>Simpan dalam kulkas atau chiller</li><li>Jauhkan dari buah atau sayur lainnya</li><li>Ganti air setiap hari</li></ol><p>Dengan penyimpanan yang benar wortel bisa bertahan hingga 1 bulan</p>'
	},
	{
		kode_barang: 'vt005',
		nama_barang:'Beras Premium-Sania',
		image: 'https://ik.imagekit.io/dcjlghyytp1/7f6441d76a4d62e2326bfa876d3172b3?tr=f-auto,w-120,dpr-2',
		variant: [
			{
				satuan: '500 g',
				harga: 8500,
				est_jumlah: '4-9 biji, perkiraan keadaan panen normal',
				stok:5
			},
			{
				satuan: '1 kg',
				harga: 16000,
				est_jumlah: '14-17 biji, perkiraan keadaan panen normal',
				stok:4
			}
		],
		ready: ['Hari ini', 'Besok'],
		info_produk:
			'Wortel segar yang dapat diolah sebagai isian sup, sayuran, atau Jus. Produk ini dapat digunakan sebagai MPASI. Terdapat potensi kelebihan / kekurangan gramasi +- 10% per pack',
		kategori: 'Sayur',
		umur_simpan: '5-7 Hari',
		nutrisi:
			'<p>Wortel kaya akan vitamin A dan Karotenoid yang bermanfaat untuk menjaga kesehatan mata.</p><p>Selain itu, wortel juga kaya akan beta karoten, vitamin C, serat, dan lain-lain. Nutrisi dalam wortel dapat membantu menurunkan kadar kolesterol, menurunkan resiko diabetes, dan menurunkkan resiko kanker',
		penyimpanan:
			'<ol><li>Jangan mencuci atau mengupas wortel yang akan disimpan</li><li>Buang bagian pucuk wortel</li><li>Simpan wortel dalam kantung plastik</li><li>Letakkan kantung plastik dalam wadah berisi air</li><li>Simpan dalam kulkas atau chiller</li><li>Jauhkan dari buah atau sayur lainnya</li><li>Ganti air setiap hari</li></ol><p>Dengan penyimpanan yang benar wortel bisa bertahan hingga 1 bulan</p>'
	},
	{
		kode_barang: 'vt006',
		nama_barang:'Apel Fuji',
		image: 'https://ik.imagekit.io/dcjlghyytp1/ccdc44261800ffc4011ba63771081576?tr=f-auto,w-120,dpr-2',
		variant: [
			{
				satuan: '500 g',
				harga: 8500,
				est_jumlah: '4-9 biji, perkiraan keadaan panen normal',
				stok:5
			},
			{
				satuan: '1 kg',
				harga: 16000,
				est_jumlah: '14-17 biji, perkiraan keadaan panen normal',
				stok:4
			}
		],
		ready: ['Hari ini', 'Besok'],
		info_produk:
			'Wortel segar yang dapat diolah sebagai isian sup, sayuran, atau Jus. Produk ini dapat digunakan sebagai MPASI. Terdapat potensi kelebihan / kekurangan gramasi +- 10% per pack',
		kategori: 'Sayur',
		umur_simpan: '5-7 Hari',
		nutrisi:
			'<p>Wortel kaya akan vitamin A dan Karotenoid yang bermanfaat untuk menjaga kesehatan mata.</p><p>Selain itu, wortel juga kaya akan beta karoten, vitamin C, serat, dan lain-lain. Nutrisi dalam wortel dapat membantu menurunkan kadar kolesterol, menurunkan resiko diabetes, dan menurunkkan resiko kanker',
		penyimpanan:
			'<ol><li>Jangan mencuci atau mengupas wortel yang akan disimpan</li><li>Buang bagian pucuk wortel</li><li>Simpan wortel dalam kantung plastik</li><li>Letakkan kantung plastik dalam wadah berisi air</li><li>Simpan dalam kulkas atau chiller</li><li>Jauhkan dari buah atau sayur lainnya</li><li>Ganti air setiap hari</li></ol><p>Dengan penyimpanan yang benar wortel bisa bertahan hingga 1 bulan</p>'
	},
	{
		kode_barang: 'vt007',
		nama_barang:'Strawberry',
		image: 'https://ik.imagekit.io/dcjlghyytp1/b5670694c0d5866207f8e98a10d192f3?tr=f-auto,w-120,dpr-2',
		variant: [
			{
				satuan: '500 g',
				harga: 8500,
				est_jumlah: '4-9 biji, perkiraan keadaan panen normal',
				stok:5
			},
			{
				satuan: '1 kg',
				harga: 16000,
				est_jumlah: '14-17 biji, perkiraan keadaan panen normal',
				stok:4
			}
		],
		ready: ['Hari ini', 'Besok'],
		info_produk:
			'Wortel segar yang dapat diolah sebagai isian sup, sayuran, atau Jus. Produk ini dapat digunakan sebagai MPASI. Terdapat potensi kelebihan / kekurangan gramasi +- 10% per pack',
		kategori: 'Sayur',
		umur_simpan: '5-7 Hari',
		nutrisi:
			'<p>Wortel kaya akan vitamin A dan Karotenoid yang bermanfaat untuk menjaga kesehatan mata.</p><p>Selain itu, wortel juga kaya akan beta karoten, vitamin C, serat, dan lain-lain. Nutrisi dalam wortel dapat membantu menurunkan kadar kolesterol, menurunkan resiko diabetes, dan menurunkkan resiko kanker',
		penyimpanan:
			'<ol><li>Jangan mencuci atau mengupas wortel yang akan disimpan</li><li>Buang bagian pucuk wortel</li><li>Simpan wortel dalam kantung plastik</li><li>Letakkan kantung plastik dalam wadah berisi air</li><li>Simpan dalam kulkas atau chiller</li><li>Jauhkan dari buah atau sayur lainnya</li><li>Ganti air setiap hari</li></ol><p>Dengan penyimpanan yang benar wortel bisa bertahan hingga 1 bulan</p>'
	},
	{
		kode_barang: 'vt008',
		nama_barang:'Kunyit',
		image: 'https://ik.imagekit.io/dcjlghyytp1/ea3d42424e798f5a3c49632006dc3d43?tr=f-auto,w-120,dpr-2',
		variant: [
			{
				satuan: '500 g',
				harga: 8500,
				est_jumlah: '4-9 biji, perkiraan keadaan panen normal',
				stok:5
			},
			{
				satuan: '1 kg',
				harga: 16000,
				est_jumlah: '14-17 biji, perkiraan keadaan panen normal',
				stok:4
			}
		],
		ready: ['Hari ini', 'Besok'],
		info_produk:
			'Wortel segar yang dapat diolah sebagai isian sup, sayuran, atau Jus. Produk ini dapat digunakan sebagai MPASI. Terdapat potensi kelebihan / kekurangan gramasi +- 10% per pack',
		kategori: 'Sayur',
		umur_simpan: '5-7 Hari',
		nutrisi:
			'<p>Wortel kaya akan vitamin A dan Karotenoid yang bermanfaat untuk menjaga kesehatan mata.</p><p>Selain itu, wortel juga kaya akan beta karoten, vitamin C, serat, dan lain-lain. Nutrisi dalam wortel dapat membantu menurunkan kadar kolesterol, menurunkan resiko diabetes, dan menurunkkan resiko kanker',
		penyimpanan:
			'<ol><li>Jangan mencuci atau mengupas wortel yang akan disimpan</li><li>Buang bagian pucuk wortel</li><li>Simpan wortel dalam kantung plastik</li><li>Letakkan kantung plastik dalam wadah berisi air</li><li>Simpan dalam kulkas atau chiller</li><li>Jauhkan dari buah atau sayur lainnya</li><li>Ganti air setiap hari</li></ol><p>Dengan penyimpanan yang benar wortel bisa bertahan hingga 1 bulan</p>'
	},
	{
		kode_barang: 'vt009',
		nama_barang:'Bawang Merah',
		image: 'https://ik.imagekit.io/dcjlghyytp1/ec4854e50ed33bcfbd0a77687de6bea9?tr=f-auto,w-120,dpr-2',
		variant: [
			{
				satuan: '500 g',
				harga: 8500,
				est_jumlah: '4-9 biji, perkiraan keadaan panen normal',
				stok:5
			},
			{
				satuan: '1 kg',
				harga: 16000,
				est_jumlah: '14-17 biji, perkiraan keadaan panen normal',
				stok:4
			}
		],
		ready: ['Hari ini', 'Besok'],
		info_produk:
			'Wortel segar yang dapat diolah sebagai isian sup, sayuran, atau Jus. Produk ini dapat digunakan sebagai MPASI. Terdapat potensi kelebihan / kekurangan gramasi +- 10% per pack',
		kategori: 'Sayur',
		umur_simpan: '5-7 Hari',
		nutrisi:
			'<p>Wortel kaya akan vitamin A dan Karotenoid yang bermanfaat untuk menjaga kesehatan mata.</p><p>Selain itu, wortel juga kaya akan beta karoten, vitamin C, serat, dan lain-lain. Nutrisi dalam wortel dapat membantu menurunkan kadar kolesterol, menurunkan resiko diabetes, dan menurunkkan resiko kanker',
		penyimpanan:
			'<ol><li>Jangan mencuci atau mengupas wortel yang akan disimpan</li><li>Buang bagian pucuk wortel</li><li>Simpan wortel dalam kantung plastik</li><li>Letakkan kantung plastik dalam wadah berisi air</li><li>Simpan dalam kulkas atau chiller</li><li>Jauhkan dari buah atau sayur lainnya</li><li>Ganti air setiap hari</li></ol><p>Dengan penyimpanan yang benar wortel bisa bertahan hingga 1 bulan</p>'
	},
	{
		kode_barang: 'vt010',
		nama_barang:'Sosis Ayam',
		image: 'https://ik.imagekit.io/dcjlghyytp1/15d756be8f4e8c628310fb5310e741dd?tr=f-auto,w-120,dpr-2',
		variant: [
			{
				satuan: '500 g',
				harga: 8500,
				est_jumlah: '4-9 biji, perkiraan keadaan panen normal',
				stok:5
			},
			{
				satuan: '1 kg',
				harga: 16000,
				est_jumlah: '14-17 biji, perkiraan keadaan panen normal',
				stok:4
			}
		],
		ready: ['Hari ini', 'Besok'],
		info_produk:
			'Wortel segar yang dapat diolah sebagai isian sup, sayuran, atau Jus. Produk ini dapat digunakan sebagai MPASI. Terdapat potensi kelebihan / kekurangan gramasi +- 10% per pack',
		kategori: 'Sayur',
		umur_simpan: '5-7 Hari',
		nutrisi:
			'<p>Wortel kaya akan vitamin A dan Karotenoid yang bermanfaat untuk menjaga kesehatan mata.</p><p>Selain itu, wortel juga kaya akan beta karoten, vitamin C, serat, dan lain-lain. Nutrisi dalam wortel dapat membantu menurunkan kadar kolesterol, menurunkan resiko diabetes, dan menurunkkan resiko kanker',
		penyimpanan:
			'<ol><li>Jangan mencuci atau mengupas wortel yang akan disimpan</li><li>Buang bagian pucuk wortel</li><li>Simpan wortel dalam kantung plastik</li><li>Letakkan kantung plastik dalam wadah berisi air</li><li>Simpan dalam kulkas atau chiller</li><li>Jauhkan dari buah atau sayur lainnya</li><li>Ganti air setiap hari</li></ol><p>Dengan penyimpanan yang benar wortel bisa bertahan hingga 1 bulan</p>'
	},
];
export default vegetables;



