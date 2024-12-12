export default async function CommentDetails({ params }) {
    const { slugClient, commentID } = await params;
    console.log(params);

    return (
        <div>
            <h1>Articles : {slugClient}</h1>
            <p>Commentaire ID : {commentID}</p>
        </div>
    );
}

// Génération statique des chemins pour optimisation
// export async function generateStaticParams() {
//     const comments = await fetchComments(); // Récupère les commentaires associés
//     return comments.map((comment) => ({
//         slug: comment.articleSlug,
//         commentId: comment.id,
//     }));
// }
