<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="page_detailblog">
	<img
		src="/kale.jpg"
		alt="kale"
		width="120px"
		height="120px"
		style:--tag="blog{data.listblogs[0].kode_blog}"
	/>
	<p  style:--tag="judulblog{data.listblogs[0].kode_blog}">
		{data.listblogs[0].judul_blog}
	</p>
	<p class="isiblog" style:--tag="isiblog{data.listblogs[0].kode_blog}">
		{@html data.listblogs[0].isi_blog}
	</p>
</div>

<style>
	.isiblog {
		text-align: justify;
	}

	.page_detailblog img {
		border-radius: 15px;
	}
	.page_detailblog {
		margin-top: 80px;
		margin-left: 20px;
		margin-right: 20px;
		padding-left: 5px;
	}
	img {
		float: left;
		margin-right: 10px;
	}
</style>
