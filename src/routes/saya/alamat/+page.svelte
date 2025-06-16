<div class="page_alamat">
	<ul class="no-bullets">
		<li class="card card_alamat">
			<div class="">Tofik Hidayat</div>
			<div class="">Kabupaten Banyumas</div>
			<input name="plan" class="radio" type="radio" checked />
			<div class="">Kecamatan Purwokerto Selatan</div>
			<div class="">Kelurahan Tanjung</div>
			<div class="">Jl Meranti 1 No 101 RT 05 RW 07</div>
			<hr />
			<div class="editalamat">
				<button class="btnedithapus btnalamatedit">Edit</button>&nbsp;&nbsp
				<button class="btnedithapus btnalamathapus">Hapus</button>
			</div>
		</li>
		<li class="card card_alamat">
			<div class="">Nurul Hidayati</div>
			<div class="">Kabupaten Banyumas</div>
			<input name="plan" class="radio" type="radio" />
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

<style>
	input[type='radio']:checked {
		color: red;
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
		margin-top: 15px;
		margin-bottom: 5px;
	}
	.btnedithapus {
		border: none;
		font-size: 14px;
		font-weight: bold;
	}
	.page_alamat {
		margin-top: 70px;
		margin-left: 20px;
		margin-right: 20px;
	}
	ul.no-bullets {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	.card_alamat {
		padding-top: 12px;
		padding-left: 12px;
		padding-bottom: 12px;
		margin-bottom: 20px;
	}
	.radio {
		float: right;
		margin-right: 12px;
	}
</style>
