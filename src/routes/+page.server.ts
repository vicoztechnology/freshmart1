import type { PageServerLoad } from './$types';
import vegetables from '$lib/list';
import kategoris from '$lib/kategori';
import banners from '$lib/banner';


export const load: PageServerLoad = async () => {
	return {
		items:vegetables,
		listkategori:kategoris,
		listbanners:banners,
		nama:"Detail Barang"
	};
};






