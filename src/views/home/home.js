import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import NewsArticle from "./../../components/newsartical/NewsArticle";

function Home() {
    const [news, setNews] = useState([])
    const [searchQuery, setSearchQuery] = useState("pune")

    const loadNews = async () => {
        try{
            const response = await axios.get(
                `https://newsapi.org/v2/everything?${searchQuery}&from=2024-07-22&to=2024-07-22&sortBy=popularity&apiKey=99714d6452bf47e6ac289d1c1650b237`
              );
            setNews(response.data.articles)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        loadNews()
    }, [])

    useEffect(()=>{
        loadNews()
    }, [searchQuery])
    
    return (
    <div>
        <h1>  News App </h1>
        <input type="text" className="search-input" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>

        <div className="news-container">
            {
                news.map((newsArticle, index)=>{
                    const {author, title, description, url, urlToImage, publishedAt} = newsArticle
                
                        return (<NewsArticle
                             author={author}
                              title={title}
                              description={description} 
                              url={url}
                               urlToImage={urlToImage} 
                               publishedAt={publishedAt} 
                               key={index}/>)  
                                               
                
                })
            }
        </div>
    </div>
  )
}

export default Home
