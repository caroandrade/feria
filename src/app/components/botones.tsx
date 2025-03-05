import Link from 'next/link';
export function Botones() {
    return (

        // columnas
        <div className="flex flex-wrap -mb-4  items-center mt-8">

            <div className="w-1/3 mb-4 h-12 flex justify-center ">

                <Link href={'/actividades'} >

                    <button className=" bg-blue-500 hover:bg-blue-300 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
                        Actividades
                    </button>
                </Link>
            </div>
            <div className="w-1/3 mb-4  h-12 flex justify-center">

                <Link href={'/que'}>
                    <button className=" w-full bg-blue-500 hover:bg-blue-300 text-white  py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
                        ¿Qué es la Expo?
                    </button>
                </Link>
            </div>

            <div className="w-1/3 mb-4 h-12 flex justify-center">

                <Link href={'/area'}>

                    <button className=" w-full bg-blue-500 hover:bg-blue-300 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
                        Áreas </button>

                </Link>
            </div>


            <div className="w-1/3 mb-4 h-12 flex justify-center">
                <Link href={'/instituciones'}>
                    <button className="w-full bg-blue-500 hover:bg-blue-300 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
                        Instituciones
                    </button>
                </Link>

            </div>
            <div className="w-1/3 mb-4 h-12 flex justify-center">

                <Link href={'/vocacionales'}>

                    <button className="w-full bg-blue-500 hover:bg-blue-300 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
                        Vocacional
                    </button>
                </Link>
            </div>
        </div>

    )
}