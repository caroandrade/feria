
import Link from 'next/link';

import { Post, ListadoProps } from '@/lib/types';




export async function Listado({
    title, posts, currentePage = 1, totalPages = 1, searchTerm, categorias
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
                <div >buscar </div>

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
                // El operador ternario es un operador condicional que evalúa una expresión en función de una condición. 
                <div>
                    <div className='flex justify-between'>
                        {currentePage > 1 && (
                            <Link href={`/instituciones?page=${currentePage - 1}${searchTerm ? `&search=${searchTerm}` : ''}${categorias ? `&categorias=${categorias}` : ''}`}
                                className='underline'>
                                Anterior
                            </Link>
                        )}
                    </div>
                    <div className='text-left'>

                        Página {currentePage} of {totalPages}
                    </div>


                    <div>
                        <Link href={`/instituciones?page=${currentePage + 1}${searchTerm ? `&search=${searchTerm}` : ''}${categorias ? `&categorias=${categorias}` : ''}`}
                            className='underline'>
                            Siguiente</Link>

                    </div>
                </div>
            ) : (
                <div className='text-center'>
                    <Link href={`/instituciones`} className='hover:underline text-gray-900 py-5 block rounded-md'>

                        más información
                    </Link>

                </div>
            )}

        </div>
    )

}