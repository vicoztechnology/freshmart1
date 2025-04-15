<script>
	let { children } = $props();
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import ViewTransition from './navigation.svelte';
	import { page } from '$app/state';
	import { setContext, getContext } from 'svelte';
	import { fade } from 'svelte/transition';

	import '../app.css';
</script>

<ViewTransition />
<div
	class="page"
	in:fade={{ delay: 400, duration: 1200 }}
	out:fade={{ delay: 400, duration: 1200 }}
>
	<Header />
	
		{@render children()}


	{#if (page.url.pathname.startsWith('/detail')) }
		<p>home</p>
		
		{:else}
		<Footer />
	{/if}


	
</div>
