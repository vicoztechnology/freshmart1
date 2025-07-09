import type { PageServerLoad } from './$types';



export const load: PageServerLoad = async () => {
	return {
	
		title:"Akun Saya",
		footer:"hidden",
		home:"hidden"
		
	}
};
