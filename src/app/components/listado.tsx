
import Link from 'next/link';

import { Post, ListadoProps } from '@/lib/types';


import { SearchBar } from '@/app/components/Search-bar';


export async function Listado({
    title, posts, currentPage = 1, totalPages = 1, searchTerm, categorias
}: ListadoProps) {

    if (posts?.length === 0) {
        return
        <div>No hay posts disponibles</div>
    }


    return (
        <div className='mb-8'>

            <div className='flex justify-between'>

                {title ? (
                    <h2 className='text-xl mb-4'>{title}</h2>
                ) : searchTerm ? (
                    <h2 className='text-xl mb-4'>Resultado de la busqueda</h2>

                ) : (
                    <h2 className='text-xl mb-4'> listado</h2>
                )
                }

                <SearchBar></SearchBar>

            </div>
            <div className='flex flex-col mb-4'>
                {posts?.map((post: Post) =>
                    <Link
                        key={post.id}
                        href={`/instituciones/${post.slug}`}
                        className='border-b py-4 flex justify-between gap-4 hover:bg-slate-50'
                    >
                        {/* esta opción es porque trabaja directamente en javascript cuando un campo esta rendereizado  */}
                        <div dangerouslySetInnerHTML={{ __html: post.title.rendered }}>

                        </div>
                        <p>{new Date(post.date).toLocaleDateString("de-DE")}</p>
                        {/* El método toLocaleDateString() devuelve una cadena con una representación sensible al idioma de la parte de la fecha especificada en la zona horaria del agente de usuario. */}
                    </Link>
                )}
            </div>

            {/* paginacion  */}

            {totalPages > 1 ? (
                <div className="flex justify-between">
                    <div>
                        {currentPage > 1 && (
                            <Link href={`/instituciones?page=${currentPage - 1}${searchTerm ? `&search=${searchTerm}` : ''}${categorias ? `&categories=${categorias}` : ''}`} className="underline">Anterior</Link>
                        )}
                    </div>

                    <div className="text-left">
                        Página -  {currentPage} de {totalPages}
                    </div>

                    <div>
                        {currentPage < totalPages && (
                            <Link href={`/instituciones?page=${currentPage + 1}${searchTerm ? `&search=${searchTerm}` : ''}${categorias ? `&categories=${categorias}` : ''}`} className="underline">Siguiente</Link>
                        )}
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <Link href={`/posts`} className="hover:underline text-gray-900 py-5 block rounded-md">View More Posts</Link>
                </div>
            )}


        </div>
    )

}