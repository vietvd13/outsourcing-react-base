import { useMemo, useState } from 'react';

/** 
 * @param { number } total - Total items ( default = 0 )
 * @param { number } pageSize - Item per page ( default = 10)
 * @param { number } initialPage - Starting page ( default = 1 )
 * @return {{
 * page: number, - Current page 
 * pageSize: number, - Item per page
 * pages: number, - Total pages
 * setPage: (p: number,) => void,  - go to a specified page
 * setPageSize: (s: number) => void, - update pageSize
 * next: () => void, - go to next page
 * prev: () => void, - go to previous Page
 * 
 * 
 * }}
 * 
 * 
 * 
 * @example 
 * const  { page, pages, next, prev } = usePagination({ total: 100 });
 * console.log(page);  // 1
 * next ();            // go to page 2 
 * prev ();            // go to page 1
 *  */
export default function usePagination({
    total = 0,
    pageSize = 10,
    initialPage = 1,
} = {}) {
    const [page, setPage] = useState (initialPage);
    const [size, setSize] = useState (pageSize);

    // Calculate total pages, always at least 1 
    const pages = useMemo (
        () => Math.max (1, Math.ceil (total / size)),
        [total, size ]
    );

    // go to a specific page (ensure within range)
    const go = (p) => setPage(Math.min(pages, Math.max(1, Number(p || 1))));
    return {
        page,
        pageSize,
        initialPage,
        pages,
        setPage: go,
        setPageSize: setSize,
        next: () => go (page + 1),
        prev: () => go (page - 1)
    };
}
