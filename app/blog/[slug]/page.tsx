
import React from 'react'

const BlogPost = async ({ params }) => {
    const { slug } = await params

    return (
        <div>
            <h1>
                Blog Post
            </h1>
            <h2>Params : {slug}</h2>
        </div>
    )
}

export default BlogPost

// Optionnel : générer des chemins statiques si nécessaire
// export async function generateStaticParams() {
//     const articles = await fetchArticles(); // Suppose une fonction de récupération de données
//     return articles.map((article) => ({
//         slug: article.slug,
//     }));
// }