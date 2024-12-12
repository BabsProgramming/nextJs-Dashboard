'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

const Csr = () => {
    const [data, setData] = React.useState('')
    const router = useRouter()
    React.useEffect(() => {
        //fetch
        fetch('https://jsonplaceholder.typicode.com/posts/2')
            .then((response) => response.json()) // parse JSON
            .then((data) => setData(data)) // set data
    }, [])
    if (!data) return <div className='bg-blue-200 text-center text-white text-sm '>Loading...</div>

    return (
        <>
            <div className='bg-blue-400 p-6 text-center text-white font-bold  '>Csr : (Client Side Rendering)</div>
            <div className='py-4 px-2 mt-10 bg-neutral-400 rounded-lg shadow-lg w-[1000px] mx-auto shadow-neutral-400'>
                <h1 className='text-center text-2xl text-neutral-900 fint-bold'>{data.title}</h1>
                <p className='py-6 text-center text-xl'>{data.body}</p>
            </div>
            <div className='text-center py-4 mt-2'>

                <button
                    className=' bg-blue-400 py-2 px-4 rounded-md text-white hover:bg-blue-600 '
                    onClick={() => router.push('/rendering/')}
                >
                    Home
                </button>
            </div>
        </>
    )
}

export default Csr