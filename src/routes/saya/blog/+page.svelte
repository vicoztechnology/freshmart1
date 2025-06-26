<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	

</script>

<div class="page_blog">
	<ul class="no-bullets">
		{#each data.listblogs as isiblog}
			<li>
				<a href={`blog/${isiblog.kode_blog}`}>
					<div class="listblog">
						<div class="gambarisiblog" ><img src="/kale.jpg" alt="kale" style:--tag="blog{isiblog.kode_blog}"/></div>
						<div class="isiblog">
							<div class="judulparagraf" style:--tag="judulblog{isiblog.kode_blog}">{isiblog.judul_blog}</div>
							<div class="paragraf width ellipse two-lines" style:--tag="isiblog{isiblog.kode_blog}">
								{@html isiblog.isi_blog}
							</div>
						</div>
					</div>
					<hr />
				</a>
			</li>
		{/each}
		<!--
		<li>
			<div class="listblog">
				<div class="gambarisiblog"><img src="/kale.jpg" alt="kale" /></div>
				<div class="isiblog">
					<div class="judulparagraf">Kale</div>
					<div class="paragraf">
						Kale adalah Sayuran desdfdsf sdfsdf sdfdsf Kale adalah Sayuran desdfdsf sdfsdf sdfdsf
						Kale Sayuran desdfdsf sdfsdf sdfdsf Kale .....
					</div>
				</div>
			</div>
			<hr />
		</li>
		<li>
			<div class="listblog">
				<div class="gambarisiblog"><img src="/kale.jpg" alt="kale" /></div>
				<div class="isiblog">
					<div class="judulparagraf">Kale</div>
					<div class="paragraf">
						Kale adalah Sayuran desdfdsf sdfsdf sdfdsf Kale adalah Sayuran desdfdsf sdfsdf sdfdsf
						Kale Sayuran desdfdsf sdfsdf sdfdsf Kale .....
					</div>
				</div>
			</div>
			<hr />
		</li>
		<li>
			<div class="listblog">
				<div class="gambarisiblog"><img src="/kale.jpg" alt="kale" /></div>
				<div class="isiblog">
					<div class="judulparagraf">Kale</div>
					<div class="paragraf">
						Kale adalah Sayuran desdfdsf sdfsdf sdfdsf Kale adalah Sayuran desdfdsf sdfsdf sdfdsf
						Kale Sayuran desdfdsf sdfsdf sdfdsf Kale .....
					</div>
				</div>
			</div>
			<hr />
		</li>
		-->
	</ul>
</div>

<style>
	.judulparagraf {
		font-weight: bolder;
	}
	.paragraf {
		margin-top: 3px;
	}
	.isiblog {
		margin-top: 2px;
		margin-left: 10px;
	}
	.gambarisiblog img {
		border-radius: 15px;
	}

	.page_blog {
		margin: 70px 20px 0px 20px;
		font-size: 12px;
	}

	.listblog {
		display: flex;
	}

	.two-lines {
		width: 100%;
		height: 4em;
		line-height: 1.4em;
		display: flex;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
