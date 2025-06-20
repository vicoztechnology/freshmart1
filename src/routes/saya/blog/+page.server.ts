import type { PageServerLoad } from './$types';
import blogs from '$lib/blog';

export const load: PageServerLoad = async () => {
	return {
		listblogs: blogs,
		title: 'Blog',
		footer: 'hidden'
	};
};

/*
import type { PageServerLoad } from './$types';
import vegetables from '$lib/list';
import kategoris from '$lib/kategori';
import banners from '$lib/banner';


export const load: PageServerLoad = async () => {
	return {
		items:vegetables,
		listkategori:kategoris,
		listbanners:banners,
		title:"Akun Saya",
		footer:"visible"
	};
};

*/
