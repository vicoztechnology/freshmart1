import type { PageServerLoad } from './$types';



export const load: PageServerLoad = async () => {
    return {
    
        title:"Syarat dan Ketentuan",
        footer:"hidden"
    };
};
