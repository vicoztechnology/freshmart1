import type { PageServerLoad } from './$types';
import vegetables from '$lib/list';

export const load: PageServerLoad = async () => {
	return {
		items: vegetables
	};
};