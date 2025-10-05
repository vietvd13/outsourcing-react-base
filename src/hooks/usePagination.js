import { useMemo, useState } from 'react';

export default function usePagination({
    total = 0,
    pageSize =10,
    initialPage = 1} ={}) {
    const [page, setPage] = useState(initialPage);
    const [size, setSize] = useState(pageSize);
    const pages = useMemo(() => Math.max(1, Math.ceil(total / size)), [total, size]);
    const go = (p) => setPage(Math.min(pages, Math.max(1, Number(p) || 1)));
    return { page, pageSize: size , pages, setPage: go , setPageSize: setSize, next: ()=> go(page + 1), prev : ()=> go(page - 1)};
}  

