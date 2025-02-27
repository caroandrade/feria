import Link from 'next/link';
import  Image from 'next/image';

export function Header() {
    return (

        
                <nav>
        <div className='flex  justify-between p-4'>
             <div className='justify-items-start' >

                <Link href='/'>
                <Image
                    src={'/logoExpo.png'}
                    width={160}
                    height={71}
                    alt="Expo Educativa"
                />  
                </Link>             
             </div>
           <div className='font-blod text-xl'>

            <ul className='flex gap-4 text-blue-600 text-right' >
                <li><Link href={'/actividades'}>Actividades</Link></li>
                <li><Link href={'/area'}>Área</Link></li>
                <li><Link href={'/vocacionales'}>Vocacional</Link></li>
                <li><Link href={'/instituciones'}>Instituciones</Link></li>

            </ul>
           </div>
        </div>
           </nav>
    )
}