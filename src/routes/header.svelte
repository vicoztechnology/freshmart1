<script lang="ts">
	import { page, navigating } from '$app/state';
	import { getContext } from 'svelte';
	import { browser } from '$app/environment';
	const shareData = {
		title: 'MDN',
		text: 'Learn web development on MDN!',
		url: 'https://developer.mozilla.org'
	};
	//functions
	function nav_back() {
		if (browser) window.history.back();
	}
	
	async function share() {
		try {
			await navigator.share(shareData);
			
		} catch (err) {
			
		}
	}
</script>

<header>
	<div class="header_container">
		<div class="header">
			<div class="search-bar">
				<div class="icon-search">
					{#if page.url.pathname.startsWith('/detail')}
						<button onclick={nav_back} aria-label="backpage" class="button_header">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
								fill="var(--md-sys-color-on-surface)"
								><path
									d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z"
								/></svg
							>
						</button>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill="var(--md-sys-color-primary)"
							><path
								d="M201-120q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518v318q0 33-23.5 56.5T761-120H201Zm368-440q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13Z"
							/></svg
						>
					{/if}
				</div>

				<div class="text-search">
					{#if page.url.pathname.startsWith('/detail')}{:else}
						Cari kebutuhanmu di sini...
					{/if}
				</div>
				<div class="rail-icon">
					<div>
						{#if page.url.pathname.startsWith('/detail')}
							<button onclick={share} aria-label="button share" class="button_header">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 -960 960 960"
									width="24px"
									fill="var(--md-sys-color-on-surface)"
									><path
										d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z"
									/></svg
								>
							</button>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
								fill="var(--md-sys-color-on-surface)"
								><path
									d="M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
								/></svg
							>
						{/if}
					</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill="var(--md-sys-color-on-surface)"
							><path
								d="M221-120q-27 0-48-16.5T144-179L42-549q-5-19 6.5-35T80-600h190l176-262q5-8 14-13t19-5q10 0 19 5t14 13l176 262h192q20 0 31.5 16t6.5 35L816-179q-8 26-29 42.5T739-120H221Zm259-160q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM367-600h225L479-768 367-600Z"
							/></svg
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	.rail-icon {
		display: flex;
	}
	.search-bar {
		margin-left: 15px;
		margin-right: 15px;
		background-color: var(--md-sys-color-surface-container-high);
		width: 100%;
		padding: 10px;
		border-radius: 30px;
		color: var(--md-sys-color-on-surface-variant);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.icon-search {
		margin-left: 5px;
	}
	.rail-icon {
		margin-right: 5px;
		gap: 10px;
	}
	.button_header {
		background-color: var(--md-sys-color-surface-container-high);
		border: none;
	}
</style>
