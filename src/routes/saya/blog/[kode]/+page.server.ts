/*import vegetables from '$lib/list.js';*/
import blogs from '../../../../lib/blog';

import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({params}) => {
    return {
        listblogs: blogs.filter((d)=> d.kode_blog ===params.kode).map((res) => res),
        title:"Detail Blog"
    };
    
};