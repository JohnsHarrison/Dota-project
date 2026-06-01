import { useEffect, useState, useCallback } from "react";
import { getGosuGamerNews,testCall} from "../services/api";

function News() {
    const [articles, setArticles] = useState([]);
    const [game, setGame] = useState("entertainment")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);

    const fetchNews = useCallback(() => {
        setLoading(true);
        setError(null);

        
    
        getGosuGamerNews(game)
            .then(items => {
                setArticles(items);
                setLastUpdated(new Date());
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load news. The feed may be temporarily unavailable.');
                setLoading(false);
            });
    }, [game]);

    useEffect(() => {
        fetchNews();
        testCall()
        const interval = setInterval(fetchNews, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, [fetchNews]);

    return (
        <div className="newsContainer">
            <div className="newsHeader">
                <h2>GosuGamers {game} News</h2>
                <button onClick={(()=>{setGame("counterstrike")})}>Counterstrike</button>
                <button onClick={(()=>{setGame("dota2")})}>Dota 2</button>
                <div className="newsHeaderMeta">
                    {lastUpdated && <span className="newsLastUpdated">Updated: {lastUpdated.toLocaleTimeString()}</span>}
                    <button className="newsRefreshBtn" onClick={fetchNews} disabled={loading}>
                        {loading ? 'Loading...' : 'Refresh'}
                    </button>
                </div>
            </div>

            {error && (
                <div className="newsError">
                    <p>{error}</p>
                    <button onClick={fetchNews}>Retry</button>
                </div>
            )}

            {loading && !error && <p className="newsLoading">Loading news...</p>}

            {!loading && !error && (
                <div className="newsGrid">
                    {articles.map((article, i) => (
                        <a key={i} href={article.link} target="_blank" rel="noreferrer" className="newsCard">
                            {article.thumbnail && (
                                <img src={article.thumbnail} alt="" className="newsCardImage" />
                            )}
                            <div className="newsCardBody">
                                <p className="newsCardDate">
                                    {article.pubDate ? new Date(article.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : ''}
                                </p>
                                <h3 className="newsCardTitle">{article.title}</h3>
                                {article.description && (
                                    <p className="newsCardDesc">
                                        {article.description.replace(/<[^>]+>/g, '').slice(0, 160)}
                                        {article.description.replace(/<[^>]+>/g, '').length > 160 ? '...' : ''}
                                    </p>
                                )}
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default News;
