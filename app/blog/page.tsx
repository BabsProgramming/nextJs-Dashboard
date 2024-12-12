'use client';
import { useSearchParams } from "next/navigation";
const BlogPage = () => {
    const searchparam = useSearchParams();
    const category = searchparam.get('category');
    const sort = searchparam.get('sort');
    return (
        <div>
            <h1>Filtrer les articles</h1>
            <p>Catégorie : {category || 'Toutes'}</p>
            <p>Tri : {sort || 'Non spécifié'}</p>
        </div>
    )
}

export default BlogPage