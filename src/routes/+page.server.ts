import type { PageServerLoad } from './$types';
import vegetables from '$lib/list';
import kategoris from '$lib/kategori';



export const load: PageServerLoad = async () => {
	return {
		items:vegetables,
		listkategori:kategoris
	};
};






