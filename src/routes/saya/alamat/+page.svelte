<div class="page_alamat">
	<ul class="no-bullets">
		<li class="card card_alamat">
			<div class="">Tofik Hidayat</div>
			<div class="">Kabupaten Banyumas</div>
			<label><input name="plan" class="radio" type="radio" checked /></label>
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
		<li class="card card_alamat">
			<div class="">Nurul Hidayati</div>
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

<style>
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
		background-color: var(--md-sys-color-surface-container-low);
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
		font-size: 12px;
	}
	.radio {
		float: right;
		margin-right: 12px;
	}

	input[type='radio'] {
		--s: 1.5em; /* control the size */
		--c: #009688; /* the active color */

		height: var(--s);
		aspect-ratio: 1;
		border: calc(var(--s) / 8) solid #939393;
		padding: calc(var(--s) / 8);
		background: radial-gradient(farthest-side, var(--md-sys-color-primary) 94%, #0000) 50%/0 0
			no-repeat content-box;
		border-radius: 50%;
		outline-offset: calc(var(--s) / 10);
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		cursor: pointer;
		font-size: inherit;
		transition: 0.3s;
	}
	input[type='radio']:checked {
		border-color: var(--md-sys-color-primary);
		background-size: 100% 100%;
	}

	input[type='radio']:disabled {
		background: linear-gradient(#939393 0 0) 50%/100% 20% no-repeat content-box;
		opacity: 0.5;
		cursor: not-allowed;
	}

	@media print {
		input[type='radio'] {
			-webkit-appearance: auto;
			-moz-appearance: auto;
			appearance: auto;
			background: none;
		}
	}
</style>
