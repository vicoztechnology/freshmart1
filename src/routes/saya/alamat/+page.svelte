<div class="page_alamat" >
	<ul class="no-bullets">
		<li class="card_alamat" style:--tag="alamat1">
			<div class="nama_akun" style:--tag="nama_alamat1">Tofik Hidayat</div>
			<div class="" style:--tag="kabupaten_alamat1">Kabupaten Banyumas</div>
			<label style:--tag="radio_alamat1"><input name="plan" class="radio" type="radio" checked /></label>
			<div class="">Kecamatan Purwokerto Selatan</div>
			<div class="">Kelurahan Tanjung</div>
			<div class="">Jl Meranti 1 No 101 RT 05 RW 07</div>
			<hr />
			<div class="editalamat">
				<button class="btnedithapus btnalamatedit">Edit</button>&nbsp;&nbsp
				<button class="btnedithapus btnalamathapus">Hapus</button>
			</div>
		</li>
		<li class="card_alamat" style:--tag="alamat2">
			<div class="nama_akun" style:--tag="nama_alamat2">Nurul Hidayati</div>
			<div class="">Kabupaten Banyumas</div>
			<label><input name="plan" class="radio" type="radio" /></label>
			<div class="">Kecamatan Purwokerto Timur</div>
			<div class="">Kelurahan Sokanegara</div>
			<div class="">RT 01 RW 12</div>
			<hr />
			<div class="editalamat">
				<button class="btnedithapus btnalamatedit">Edit</button>&nbsp;&nbsp
				<button class="btnedithapus btnalamathapus">Hapus</button>
			</div>
		</li>
		<li class="card_alamat" style:--tag="alamat3">
			<div class="nama_akun" style:--tag="nama_alamat3">Nurul Hidayati</div>
			<div class="">Kabupaten Banyumas</div>
			<label><input name="plan" class="radio" type="radio" /></label>
			<div class="">Kecamatan Purwokerto Timur</div>
			<div class="">Kelurahan Sokanegara</div>
			<div class="">RT 01 RW 12</div>
			<hr />
			<div class="editalamat">
				<button class="btnedithapus btnalamatedit">Edit</button>&nbsp;&nbsp
				<button class="btnedithapus btnalamathapus">Hapus</button>
			</div>
		</li>
	</ul>
</div>
<div class="alamat_footer">
	<div class="btn_alamat btn_tambahalamat">
		<button type="button" class="tambahalamatbtn">Tambah Alamat </button>
	</div>
	<div class="btn_alamat btn_pilihalamat">
		<button type="button" class="pilihalamatbtn">Pilih Alamat </button>
	</div>
</div>

<style>
	.tambahalamatbtn {
		
		border-radius: 25px;
		background-color: var(--md-sys-color-background);
		border: solid var(--md-sys-color-primary);
		font-size: 14px;
		font-weight: bold;
		width: 85%;
		padding-top: 13px;
		padding-bottom: 13px;

		
	}
		.pilihalamatbtn {
		
		border-radius: 25px;
		background-color: var(--md-sys-color-primary);
		border: none;
		color: var(--md-sys-color-on-primary);
		font-size: 14px;
		font-weight: bold;
		width: 85%;
		padding-top: 14px;
		padding-bottom: 14px;
		
	}
	.btn_alamat {
		width: 50%;
		text-align: center;
		
	}
	.btn_pilihalamat {
	
	}
	.btn_tambahalamat {
		
	}
	.alamat_footer {
		bottom: 0;
		width: 100%;
		max-width: 500px;
		position: fixed;
		background-color: var(--md-sys-color-background);
		padding-top: 10px;
		padding-bottom: 5px;
		border: none;
		z-index: 40;
		display: flex;
		margin-bottom: 10px;
	}
	.nama_akun {
		font-size: 14px;
		font-weight: bolder;
	}
	input[type='radio']:checked {
		accent-color: #232323;
	}
	.btnalamathapus {
		color: var(--md-sys-color-error);
	}
	.btnalamatedit {
		color: var(--md-sys-color-primary);
	}
	.editalamat {
		display: flex;
		flex-direction: row-reverse;
		margin-right: 20px;
	}
	.btnedithapus {
		border: none;
		font-size: 14px;
		font-weight: bold;
		padding: 10px 10px 10px 10px;
		background-color: var(--md-sys-color-background);
	}
	.page_alamat {
		margin-top: 70px;
		margin-left: 20px;
		margin-right: 20px;
	}

	.card_alamat {
		padding-top: 20px;
		padding-left: 20px;
		padding-bottom: 5px;
		padding-right: 20px;
		margin-bottom: 20px;
		font-size: 12px;
		background-color: var(--md-sys-color-surface);
		border-radius: 25px;
		color: var(--md-sys-color-on-surface);
	
		border:solid var(--md-sys-color-outline-variant);

	
	}
	
</style>
