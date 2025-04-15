<script lang="ts">
	import Listitems from './listitems.svelte';

	import type { PageProps } from './$types';

	import { fade } from 'svelte/transition';
	let { data }: PageProps = $props();
</script>

<div class="home">
	<div class="carousel">
		<img
			class="gambar"
			src="https://rsud.bulelengkab.go.id/uploads/konten/32_manfaat-sayur-untuk-anak-menunjang-tumbuh-kembang-yang-optimal.jpg"
			alt="gambar"
			width="100%"
		/>
	</div>
	<div class="items-container">
		{#each data.items as item}
			<div class="items-list">
				<a href={`/detail/${item.kode_barang}`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src={item.image}
							alt="gambar ${item.nama_barang}"
							width="100%"
							style:--tag="gambar{item.kode_barang}"
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" style:--tag="satuan{item.kode_barang}">
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" style:--tag="nama{item.kode_barang}">
							{item.nama_barang}
						</div>
						<div class="subheadline object-cover" style:--tag="harga{item.kode_barang}">
							Rp. {item.variant[0].harga}
						</div>
						<div class="fav_terjual">
							<div class="favorite">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="16px"
									viewBox="0 -960 960 960"
									width="16px"
									fill="var(--md-sys-color-primary)"
									><path
										d="M480-170q-13 0-25.5-4.5T431-189l-59-54q-109-97-192.5-189.5T96-634q0-88 60-147t149-59q51 0 96.5 21.5T480-757q35-40 79.5-61.5T655-840q89 0 149 59t60 147q0 109-83.5 201.5T588-243l-59 54q-11 10-23.5 14.5T480-170Z"
									/></svg
								>

								<div class="litle_text">520</div>
							</div>
							<div class="terjual litle_text">
								10rb+ terjual
							</div>
						</div>

						<div class="urai-barang" style:--tag="uraian{item.kode_barang}">
							<div class="judul_deskripsi"></div>
							<div class="info_produk"></div>
							<div class="judul_deskripsi"></div>
							<div class="nutrisi"></div>
							<div class="judul_deskripsi"></div>
							<div class="penyimpanan"></div>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.favorite {
		display: flex;
		align-items: center;
		width: fit-content;
		border: solid 1px;
		border-radius: 4px;
		padding-left: 2px;
		padding-right: 2px;
		background-color: var(--md-sys-color-secondary-container);
		color: var(--md-sys-color-on-secondary-container);
		margin-top: 2px;
	}
	.fav_terjual {
		display: flex;
		align-items: center;
		gap: 5px;
	}
</style>
