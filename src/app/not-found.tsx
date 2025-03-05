import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center mb-8">

            <h1 className="text-6xl font-blod text-cyan-700"> 404</h1>
            <p className="mt-4 text-2xl text-cyan-500">Página no encontrada. </p>
            <p className="mt-2 text-cyan-800">La página que busca no existe. Intente con otra opción</p>
            <Link href={'/'} className='mt-6 px-4 py-2 bg-cyan-300 text-white rounded hover:bg-cyan-500 transition'>Volver a la Página de Inicio</Link>
        </div>
    )
}