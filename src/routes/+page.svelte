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

		<!--
			<div class="items-list">
				<a href={`/detail/vt001`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src='https://down-id.img.susercontent.com/file/681f75c3206945b48f5c56a015ebc259@resize_w900_nl.webp'
							alt="gambar vt001"
							width="100%"
							style:--tag="gambarvt001"
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" style:--tag="satuanvt001">
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" style:--tag="namavt001">
							Wortel
						</div>
						<div class="subheadline object-cover" style:--tag="hargavt001">
							Rp. 8.500
						</div>
						<div class="urai-barang" style:--tag="uraianvt001">
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

			<div class="items-list">
				<a href={`/detail/vt001`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src='https://down-id.img.susercontent.com/file/681f75c3206945b48f5c56a015ebc259@resize_w900_nl.webp'
							alt="gambar vt001"
							width="100%"
							
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" >
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" >
							Wortel
						</div>
						<div class="subheadline object-cover" >
							Rp. 8.500
						</div>
						<div class="urai-barang">
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
			<div class="items-list">
				<a href={`/detail/vt001`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src='https://down-id.img.susercontent.com/file/681f75c3206945b48f5c56a015ebc259@resize_w900_nl.webp'
							alt="gambar vt001"
							width="100%"
							
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" >
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" >
							Wortel
						</div>
						<div class="subheadline object-cover" >
							Rp. 8.500
						</div>
						<div class="urai-barang">
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
			<div class="items-list">
				<a href={`/detail/vt001`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src='https://down-id.img.susercontent.com/file/681f75c3206945b48f5c56a015ebc259@resize_w900_nl.webp'
							alt="gambar vt001"
							width="100%"
							
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" >
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" >
							Wortel
						</div>
						<div class="subheadline object-cover" >
							Rp. 8.500
						</div>
						<div class="urai-barang">
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
			<div class="items-list">
				<a href={`/detail/vt001`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src='https://down-id.img.susercontent.com/file/681f75c3206945b48f5c56a015ebc259@resize_w900_nl.webp'
							alt="gambar vt001"
							width="100%"
							
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" >
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" >
							Wortel
						</div>
						<div class="subheadline object-cover" >
							Rp. 8.500
						</div>
						<div class="urai-barang">
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
			<div class="items-list">
				<a href={`/detail/vt001`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src='https://down-id.img.susercontent.com/file/681f75c3206945b48f5c56a015ebc259@resize_w900_nl.webp'
							alt="gambar vt001"
							width="100%"
							
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" >
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" >
							Wortel
						</div>
						<div class="subheadline object-cover" >
							Rp. 8.500
						</div>
						<div class="urai-barang">
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
			<div class="items-list">
				<a href={`/detail/vt001`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src='https://down-id.img.susercontent.com/file/681f75c3206945b48f5c56a015ebc259@resize_w900_nl.webp'
							alt="gambar vt001"
							width="100%"
							
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" >
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" >
							Wortel
						</div>
						<div class="subheadline object-cover" >
							Rp. 8.500
						</div>
						<div class="urai-barang">
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
			<div class="items-list">
				<a href={`/detail/vt001`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src='https://down-id.img.susercontent.com/file/681f75c3206945b48f5c56a015ebc259@resize_w900_nl.webp'
							alt="gambar vt001"
							width="100%"
							
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" >
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" >
							Wortel
						</div>
						<div class="subheadline object-cover" >
							Rp. 8.500
						</div>
						<div class="urai-barang">
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
			<div class="items-list">
				<a href={`/detail/vt001`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src='https://down-id.img.susercontent.com/file/681f75c3206945b48f5c56a015ebc259@resize_w900_nl.webp'
							alt="gambar vt001"
							width="100%"
							
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" >
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" >
							Wortel
						</div>
						<div class="subheadline object-cover" >
							Rp. 8.500
						</div>
						<div class="urai-barang">
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
			<div class="items-list">
				<a href={`/detail/vt001`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src='https://down-id.img.susercontent.com/file/681f75c3206945b48f5c56a015ebc259@resize_w900_nl.webp'
							alt="gambar vt001"
							width="100%"
							
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" >
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" >
							Wortel
						</div>
						<div class="subheadline object-cover" >
							Rp. 8.500
						</div>
						<div class="urai-barang">
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
			<div class="items-list">
				<a href={`/detail/vt001`} aria-label="detail" aria-current="location">
					<div class="item-list-image">
						<img
							class="object-cover"
							src='https://down-id.img.susercontent.com/file/681f75c3206945b48f5c56a015ebc259@resize_w900_nl.webp'
							alt="gambar vt001"
							width="100%"
							
						/>
					</div>

					<div class="uraian-barang">
						<div class="satuan" >
							<div class="label_satuan">500 gr</div>
							<div class="label_satuan">1 kg</div>
							<div class="label_satuan">+2 lainnya</div>
						</div>
						<div class="headline object-cover" >
							Wortel
						</div>
						<div class="subheadline object-cover" >
							Rp. 8.500
						</div>
						<div class="urai-barang">
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
		-->
	</div>
</div>

<style>
</style>
