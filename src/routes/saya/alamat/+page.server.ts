import type { PageServerLoad } from './$types';



export const load: PageServerLoad = async () => {
    return {
    
        title:"Alamat Saya",
        footer:"hidden"
    };
};
