<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
    let y: any;
</script>

<div class="kategori_page">
	<div class="head_kategori">
		<div class="list_kategori" style:--tag="listkategori">
			<ul class="ul_kategori">
				{#each data.listkategori as item_kategori}
					<li>
						<div class="icon_kategori">
							<img src={item_kategori.image} alt={item_kategori.nama_kategori} />
						</div>

						<div class="nama_kategori">{item_kategori.nama_kategori}</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="items-container list-container-kategori" style:--tag="listcontainer">
		{#each data.listvegetable as item}
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
									style:--tag="fav{item.kode_barang}"
									><path
										d="M480-170q-13 0-25.5-4.5T431-189l-59-54q-109-97-192.5-189.5T96-634q0-88 60-147t149-59q51 0 96.5 21.5T480-757q35-40 79.5-61.5T655-840q89 0 149 59t60 147q0 109-83.5 201.5T588-243l-59 54q-11 10-23.5 14.5T480-170Z"
									/></svg
								>

								<div class="litle_text">520</div>
							</div>
							<div class="terjual litle_text" style:--tag="terjual{item.kode_barang}">
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
<svelte:window bind:scrollY={y} />
<style>
	.kategori_page {
		margin-top: 60px;
	}
	.head_kategori {
		background-color: var(--md-sys-color-background);
		padding-left: 15px;
        padding-right: 15px;
		margin-left: 0px;
      
        z-index: 50;
	}
    .list_kategori{
        max-width: 500px;
    }
    .list-container-kategori {
        margin-left: 15px;
        margin-right: 15px;
    }
</style>
