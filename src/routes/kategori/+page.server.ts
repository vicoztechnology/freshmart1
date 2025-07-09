import type { PageServerLoad } from './$types';

import kategoris from '$lib/kategori';
import vegetables from '$lib/list';

export const load: PageServerLoad = async () => {
	return {
	    listvegetable:vegetables,
		listkategori:kategoris,
		title:"Kategori",
		footer:"hidden",
		home:"hidden"
	};
};