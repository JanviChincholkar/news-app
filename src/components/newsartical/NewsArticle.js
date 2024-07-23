import "./NewsArticle.css";

function NewsArticle({ author, title, description, url, urlToImage, publishedAt }) {
    return (
        <div className="news-article-card">
            <img src={urlToImage} alt="" className="news-article-img" />
            <h2>{title}</h2>
            <div className="article-info">
                <p>{author}</p>
                <p>{publishedAt}</p>
            </div>
            <p className="article-description">{description}</p>
            <a href={url} target="_blank" rel="noreferrer" className="btn-read-more">Read More</a>
        </div>
    );
}

export default NewsArticle;