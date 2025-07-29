<div class="page_pengembalian" style:--tag="pengembalian">
	<ol class="ketentuan">
		<li>Pengembalian dana akan dilakukan sesuai metode pembayaran pada transaksi anda</li>
		<li>
			Apabila terjadi kegagalan, mamimuna.com akan transfer ke metode pengembalian dana pengganti
			yang dipilih disini
		</li>
	</ol>

	<div class="metode">Metode Pengembalian Dana</div>
	<ul class="no-bullet">
		<li class="metode_list">
			<div class="pengembalian_kiri">
				<div class="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="var(--md-sys-color-tertiary)"
						><path
							d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm288 352 112-112q11-11 17.5-26t6.5-32q0-34-24-58t-58-24q-19 0-37.5 11T520-492q-30-28-47-38t-35-10q-34 0-58 24t-24 58q0 17 6.5 32t17.5 26l112 112q12 12 28 12t28-12Z"
						/></svg
					>
				</div>
				<div class="nama_pengembalian">&nbsp;&nbsp;Voucher Belanja</div>
			</div>
			<div class="pengembalian_kanan">
				<label><input name="plan" class="radio" type="radio" /></label>
			</div>
		</li>
		<li class="metode_list">
			<div class="pengembalian_kiri">
				<div class="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="var(--md-sys-color-primary-point)"
						><path
							d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"
						/></svg
					>
				</div>
				<div class="nama_pengembalian">&nbsp;&nbsp;Transfer Dana</div>
			</div>
			<div class="pengembalian_kanan">
				<label><input name="plan" class="radio" type="radio" /></label>
			</div>
		</li>
	</ul>
</div>
<div class="pengembalian_footer">

		<button type="button" class="simpanpengembalianbtn">Simpan Metode Pengembalian </button>
	
</div>

<style>
	.simpanpengembalianbtn {
		border-radius: 25px;
		background-color: var(--md-sys-color-primary);
		border: none;
		color: var(--md-sys-color-on-primary);
		font-size: 14px;
		font-weight: bold;
		width: 85%;
		padding-top: 14px;
		padding-bottom: 14px;
        margin: auto;
	}
	.pengembalian_footer {
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
	.pengembalian_kiri {
		display: flex;
		align-items: center;
	}
	.metode_list {
		border: solid var(--md-sys-color-outline-variant);
		border-radius: 12px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 20px;
		padding: 20px 20px 20px 20px;
		margin-top: 20px;
	}
	.page_pengembalian {
		margin-top: 90px;
		margin-right: 20px;
		font-size: 12px;
	}
	.ketentuan {
		text-align: justify;
	}
	.metode {
		font-size: 16px;
		font-weight: bold;
		margin-left: 20px;
        margin-top: 30px;
	}
	ul.no-bullet {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	.nama_pengembalian {
		font-size: 16px;
		font-weight: bold;
	}
</style>
