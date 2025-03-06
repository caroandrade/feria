import Link from 'next/link';

import { Category } from '@/lib/types';

export async function Categorias({ categorias }: { categorias: Category[] }) {

    return (
        <div className='mb-8'>
            <ul className='text-[0.7rem] uppercase flex gap-2 flex-wrap'>
                {categorias.map((categorias: Category) => (
                    <li key={categorias.id} className='flex flex-shrink-0'>

                        <Link href={`/blog?categories=${categorias.id}`}
                            className='hover:underline border p-1 rounded-md'
                        >
                            {categorias.name}
                        </Link>
                    </li>
                ))}

            </ul>

        </div>
    )

}