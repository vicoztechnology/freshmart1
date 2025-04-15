<script lang="ts">
	import type { PageProps } from './$types';
	import { fade } from 'svelte/transition';
	import fadeScale from '$lib/animations';
	import { cubicInOut } from 'svelte/easing';
	import { BottomSheet } from 'svelte-bottom-sheet';
	let { data }: PageProps = $props();
	let selected = $state(data.items[0].variant[0].harga);
	let selectedsat = $state(data.items[0].variant[0].satuan);
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
				<div class="satuan_detail" style:--tag="satuan{data.items[0].kode_barang}">
					{#each data.items[0].variant as item}
						<button
							class="btn_satuan_detail"
							onclick={() => (selected = item.harga)}
							aria-label={item.satuan}
							aria-current={selected === item.harga}
							transition:fade={{ duration: 2000 }}>{item.satuan}</button
						>
					{/each}
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

			<BottomSheet.Sheet style="background-color:var(--md-sys-color-surface);max-width:500px">
				<BottomSheet.Handle style="background-color:var(--md-sys-color-on-surface-variant);"
				></BottomSheet.Handle>
				<BottomSheet.Content style="background-color:var(--md-sys-color-surface)">
					<h3>Content inside the bottom sheet</h3>
					<p>Here you can put any content you need.</p>
				</BottomSheet.Content>
			</BottomSheet.Sheet>
		</BottomSheet.Overlay>
	</BottomSheet>
</div>

<!--
	<div class="detail">
		<div class="detail-image">
			<img
				class="object-cover"
				src={data.items[0].image}
				alt="gambar ${data.items[0].nama_barang}"
				width="100%"
				style:--tag="gambar{data.items[0].kode_barang}"
			/>
		</div>
		<div class="deskripsi">
			<div class="satuan_detail" style:--tag="satuan{data.items[0].kode_barang}">
				{#each data.items[0].variant as item}
					<button
						class="btn_satuan_detail"
						onclick={() => (selected = item.harga)}
						aria-label={item.satuan}
						aria-current={selected === item.harga}
						transition:fade={{ duration: 2000 }}>{item.satuan}</button
					>
				{/each}
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
	</div>
	<div class="detail_footer">
	
			<button type="button" class="btn_detail keranjang"
				>
					Keranjang
				</button
			>
		
	</div>
-->

<style>
	
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
		z-index: 100;
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
		padding-left: 14px;
		padding-right: 14px;
		border-width: 1px;
		background-color: var(--md-sys-color-tertiary-container);
		color: var(--md-sys-color-on-tertiary-container);
	}
</style>
