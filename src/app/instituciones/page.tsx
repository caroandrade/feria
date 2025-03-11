
import { Listado } from "@/app/components/listado";

import { getAllPost } from '@/lib/queries';

type Prams = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Page(props:
    {

        params: Prams
        searchParams: SearchParams
    }) {

    const searchParams = await props.searchParams;
    const currentPage = searchParams?.page ? parseInt(searchParams.page as string, 10) : 1;
    const postPage = 10;
    const searchTerm = typeof searchParams.search === "string" ? searchParams.search : '';
    const categorias = parseInt(searchParams.getCategorias as string) || 0;

    const { posts, totalPages } = await getAllPost(currentPage, postPage, searchTerm, categorias);

    const listadoProps = {
        posts,
        currentPage,
        totalPages,
        searchTerm,
        categorias

    }

    return (
        <div>
            <h1 className="text-xl mb-4">
                <Listado {...listadoProps}></Listado>
            </h1>
        </div>
    )

}