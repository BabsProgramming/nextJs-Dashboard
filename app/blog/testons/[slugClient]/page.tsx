'use client';

import { useParams } from 'next/navigation';

export default function BlogPostClient() {
    const params = useParams();
    const slug = params?.slugClient; // Vérification de l'existence de `params`

    return (
        <div>
            <h1>Article : {slug}</h1>
        </div>
    );
}
