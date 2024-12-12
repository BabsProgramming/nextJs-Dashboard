'use client';

import { useRouter } from 'next/navigation'; // Correct pour Next.js avec app directory

const RenderingPage = () => {
    const router = useRouter();

    const navigateToCSRPage = () => {
        router.push('/rendering/csr'); // Remplace "/csr" par le chemin réel de ta page CSR
    };

    return (
        <>
            <div className="text-center font-bold text-white bg-blue-400 p-4">
                Rendering Page
            </div>
            <div className="text-center p-4">
                <h1 className="text-2xl font-semibold">Rendering Way</h1>
                <p>
                    Dans cette page, nous allons traiter les différentes manières de faire le rendu.
                </p>
            </div>
            <div className="flex flex-col justify-center bg-slate-400 p-6 mx-auto shadow-lg max-w-[1000px] rounded-lg">
                <h2 className="text-center text-2xl p-4 m-2">
                    Nous avons 3 manières de faire le rendu :
                </h2>
                <p className="text-center text-xl mb-4">
                    CSR : Client Side Rendering →
                    <button
                        onClick={navigateToCSRPage}
                        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-600"
                    >
                        CSR
                    </button>
                </p>
                <p className="text-center text-xl mb-4">
                    Server-Side Rendering - SSR →
                    <button
                        onClick={() => router.push('/rendering/ssr')} // Remplace "/ssr" par le chemin réel de ta page SSR
                        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-600"
                    >
                        SSR
                    </button>
                </p>
                <p className="text-center text-xl mb-4">
                    Génération statique (Static Site Generation - SSG) →
                    <button
                        onClick={() => router.push('/rendering/ssg')} // Remplace "/ssr" par le chemin réel de ta page SSR
                        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-600"
                    >
                        SSG
                    </button>
                </p>
                <p className="text-center text-xl mb-4">
                    Génération statique incrémentale (Incremental Static Regeneration - ISR) →
                    <button
                        onClick={() => router.push('/rendering/isr')} // Remplace "/ssr" par le chemin réel de ta page SSR
                        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-600"
                    >
                        SSG
                    </button>
                </p>
            </div>
        </>
    );
};

export default RenderingPage;
