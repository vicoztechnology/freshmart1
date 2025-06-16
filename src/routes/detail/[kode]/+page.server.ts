/*import vegetables from '$lib/list.js';*/
import vegetables from '../../../lib/list';

import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({params}) => {
	return {
		items: vegetables.filter((d)=> d.kode_barang ===params.kode).map((res) => res),
		title:"Detail Barang"
	};
	
};