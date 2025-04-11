import vegetable from '$lib/list';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    return {
        item:vegetable
    }
}