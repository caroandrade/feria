


import { getPostBySlug, getAuthorById, getCategoriasById } from '@/lib/queries';
import Link from 'next/link';

type Prams = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Page({ params }: {

    params: Promise<{ slug: string }>
}) {
    const post = await getPostBySlug((await params).slug);
    if (!post) {
        return <div>Post no encontrado</div>
    }

    const author = await getAuthorById(post.author);
    const categorias = await getCategoriasById(post.categories)
    const formattedDate = new Date(post.date);


    const date = formattedDate.toLocaleDateString("es-ES",
        {
            day: "2-digit", month: "long", year: "numeric"
        });

    return (
        <div>
            <h1 className="font-bold text-2xl mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>

            <div className="flex justify-between text-sm items-center mb-8">
                <div>Published on <b>{date}</b> by <b>{author?.name}</b></div>

                <div className='flex gap-2 text-[0.7rem]'>
                    {categorias.map((category) => (
                        <Link key={category.id} className='border p-1 rounded-md' href={`/instituciones?categories=${category.id}`}>
                            {category.name}
                        </Link>
                    ))}
                </div>

            </div>
            <div className="article" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    )
}
