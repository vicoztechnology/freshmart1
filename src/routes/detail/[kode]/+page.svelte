<script lang="ts">
	import type { PageProps } from './$types';
	import { fade } from 'svelte/transition';
	import fadeScale from '$lib/animations';
	import { cubicInOut } from 'svelte/easing';
	import { BottomSheet } from 'svelte-bottom-sheet';
	let { data }: PageProps = $props();
	let selected = $state(data.items[0].variant[0].harga);
	let selectedsatuan = $state(data.items[0].variant[0].satuan);
	let selectedsat = $state(data.items[0].variant[0].satuan);
	let jumlah = $state(0);
	let bayar = $state(0);
	function tambah() {
		jumlah += 1;
		bayar = jumlah * selected;
	}
	function kurang() {
		jumlah -= 1;
		bayar = jumlah * selected;
	}
	function cmdsatClick(par1: string, par2: number) {
		selectedsat = par1;
		selected = par2;
		bayar = jumlah * selected;
	}
</script>

<div class="detail">
	<BottomSheet settings={{ maxHeight: 0.7 }}>
		<BottomSheet.Trigger>
			<div class="detail_footer">
				<button type="button" class="btn_detail keranjang"> Keranjang </button>
			</div>
		</BottomSheet.Trigger>
		<BottomSheet.Overlay
			style="background-color:var(--md-sys-color-background-scrim);max-width:500px;margin:auto"
		>
			<div class="detail_image">
				<img
					class="object-cover"
					src={data.items[0].image}
					alt="gambar ${data.items[0].nama_barang}"
					width="100%"
					style:--tag="gambar{data.items[0].kode_barang}"
				/>
			</div>
			<div class="deskripsi">
				<div class="sat_fav">
					<div class="satuan_detail" style:--tag="satuan{data.items[0].kode_barang}">
						{#each data.items[0].variant as item}
							<button
								class="btn_satuan_detail"
								onclick={() => (selected = item.harga)}
								aria-label={item.satuan}
								aria-current={selected === item.harga}
								transition:fade={{ duration: 2000 }}>{item.satuan}</button
							>
							<!--
							-->
						{/each}
					</div>
					<div class="favorite_detail">
						<div class="" style:--tag="terjual{data.items[0].kode_barang}">10.848 terjual</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill="var(--md-sys-color-primary)"
							style:--tag="fav{data.items[0].kode_barang}"
							><path
								d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Z"
							/></svg
						>
					</div>
				</div>
				<div class="headline_detail object-cover" style:--tag="nama{data.items[0].kode_barang}">
					{data.items[0].nama_barang}
				</div>
				<div class="subheadline_detail object-cover" style:--tag="harga{data.items[0].kode_barang}">
					Rp. {selected}
				</div>
				<div class="urai-barang" style:--tag="uraian{data.items[0].kode_barang}">
					<div class="judul_deskripsi">Informasi Produk</div>
					<div class="info_produk">{@html data.items[0].info_produk}</div>
					<div class="judul_deskripsi">Kandungan dan Nutrisi</div>
					<div class="nutrisi">{@html data.items[0].nutrisi}</div>
					<div class="judul_deskripsi">Penyimpanan</div>
					<div class="penyimpanan">{@html data.items[0].penyimpanan}</div>
				</div>
			</div>

			<BottomSheet.Sheet
				style="background-color:var(--md-sys-color-surface);max-width:500px;height:fit-content;"
			>
				<BottomSheet.Handle style="background-color:var(--md-sys-color-surface);">
					<BottomSheet.Grip style="background-color: var(--md-sys-color-on-surface-variant);" />
				</BottomSheet.Handle>
				<BottomSheet.Content style="background-color:var(--md-sys-color-surface);padding-left:0px">
					<div class="content_sheet">
						<div class="image_deskripsi_add_keranjang">
							<div class="image_add_keranjang">
								<img
									class="object-cover"
									src={data.items[0].image}
									alt="gambar ${data.items[0].nama_barang}"
									width="100px"
									style:--tag="gambar{data.items[0].kode_barang}"
								/>
							</div>
							<div class="deskripsi_add_keranjang">
								<div class="" style:--tag="nama{data.items[0].kode_barang}">
									{data.items[0].nama_barang}
								</div>
								<div class="" style:--tag="harga{data.items[0].kode_barang}">
									Rp. {selected}
								</div>
								<div class="">
									{selectedsat}
								</div>
							</div>
						</div>
						<div class="">Pilih variant</div>
						<div class="satuan_detail">
							{#each data.items[0].variant as item}
								<button
									class="btn_satuan_detail"
									onclick={() => cmdsatClick(item.satuan, item.harga)}
									aria-label={item.satuan}
									aria-current={selected === item.harga}
									transition:fade={{ duration: 2000 }}>{item.satuan}</button
								>
							{/each}
						</div>
						<div class="pilih_kirim">
							<div class="">Tersedia untuk :</div>
							<div class="kirim">Hari ini</div>
							<div class="kirim">Besok</div>
						</div>
						<div class="pilih_jumlah">
							<div class="">Pilih Jumlah Barang</div>
							<div class="tambah_kurang">
								<button class="btn_tambah_kurang" aria-label="kurang" onclick={kurang}
									><svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										fill="var(--md-sys-color-on-primary-container)"
										><path
											d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z"
										/></svg
									></button
								>
								<div>{jumlah}</div>
								<button class="btn_tambah_kurang" aria-label="tambah" onclick={tambah}
									><svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										fill="var(--md-sys-color-on-primary-container)"
										><path
											d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"
										/></svg
									></button
								>
							</div>
						</div>
						<div class="">Jumlah : Rp. {bayar}</div>
						<br />
						<br />
						<br />
						<br />
					</div>
					<div class="detail_footer">
						<BottomSheet.Trigger>
							<button type="button" class="btn_detail keranjang"> Tambah Ke Keranjang </button>
						</BottomSheet.Trigger>
					</div>
				</BottomSheet.Content>
			</BottomSheet.Sheet>
		</BottomSheet.Overlay>
	</BottomSheet>
</div>

<style>
	.content_sheet {
		margin-left: 10px;
		margin-right: 10px;
	}
	.btn_tambah_kurang {
		background-color: var(--md-sys-color-primary-container);
		border: none;
		border-radius: 5px;
	}
	.tambah_kurang {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.pilih_jumlah {
		margin-top: 6px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.pilih_kirim {
		display: flex;
		align-items: center;
		margin-top: 10px;
	}
	.kirim {
		background-color: var(--md-sys-color-tertiary);
		padding-top: 5px;
		padding-right: 10px;
		padding-bottom: 5px;
		padding-left: 10px;
		width: fit-content;
		margin-bottom: 4px;
		border-radius: 5px;
		margin-left: 5px;
		color: var(--md-sys-color-on-tertiary);
	}
	.image_add_keranjang img {
		border-radius: 15px;
	}
	.image_deskripsi_add_keranjang {
		display: flex;
	}
	.deskripsi_add_keranjang {
		flex-grow: 3;
	}
	.favorite_detail {
		align-items: center;
		display: flex;
		gap: 5px;
	}
	.image_add_keranjang {
		flex-grow: 1;
	}
	.sat_fav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.detail_image {
		margin-left: 10px;
		margin-right: 10px;
		border-radius: 30px;
	}
	.btn_satuan_detail[aria-current='true'] {
		border: solid;
		view-transition-name: active-button;
	}
	.keranjang {
		background-color: var(--md-sys-color-primary);
		color: var(--md-sys-color-on-primary);
		display: block;
		width: 100%;
	}

	.btn_detail {
		padding-top: 15px;
		padding-bottom: 15px;
		border-radius: 30px;
		border: none;
		width: 75%;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
	.detail_footer {
		bottom: 0;
		width: 100%;
		max-width: 500px;
		position: fixed;
		background-color: var(--md-sys-color-background);
		padding-top: 10px;
		padding-bottom: 5px;
		border: none;
		z-index: 40;
	}

	.satuan_detail {
		margin-top: 6px;
		display: flex;
		font-size: 10px;
		color: var(--md-sys-color-subheadline);
	}
	.penyimpanan {
		margin-left: 0;
	}

	.judul_deskripsi {
		margin-top: 10px;
		margin-bottom: 5px;
		font-weight: bold;
	}

	.btn_satuan_detail {
		border-radius: 8px;
		border: none;
		margin-right: 6px;
		padding-top: 3px;
		padding-bottom: 3px;
		padding-left: 7px;
		padding-right: 7px;
		border-width: 1px;
		background-color: var(--md-sys-color-surface-container-low);
		color: var(--md-sys-color-on-surface);
	}
</style>
