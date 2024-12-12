

import Link from 'next/link';

const SSGPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/3')
    const data = await res.json()

    return (
        <>
            <div className='bg-blue-400 p-6 text-center text-white font-bold  '>
                Génération statique (Static Site Generation - SSG)
                <p>Avec le SSG, les pages sont prérendues à la construction.</p>
                <div>
                    Points clés :

                    <p>
                        Les données sont récupérées au moment de la construction avec un cache par défaut.
                    </p>

                    Convient pour les contenus peu fréquemment mis à jour.
                </div>
            </div>
            <div className='py-4 px-2 mt-10 bg-neutral-400 rounded-lg shadow-lg w-[1000px] mx-auto shadow-neutral-400'>
                <h1 className='text-center text-2xl text-neutral-900 fint-bold'>{data.title}</h1>
                <p className='py-6 text-center text-xl'>{data.body}</p>
            </div>
            <div className='text-center py-4 mt-2'>
                <Link href='/rendering/'>
                    <button
                        className=' bg-blue-400 py-2 px-4 rounded-md text-white hover:bg-blue-600 '
                    >
                        Home
                    </button>
                </Link>

            </div>
        </>
    )
}

export default SSGPage