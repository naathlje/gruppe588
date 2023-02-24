export default function articleCard (title, list, content) {

    return(

    <article className="article-card">
        <h2>{title}</h2>
        <li a href="">{list}</li>
        <p>{content}</p>

        
    </article>

    )
}