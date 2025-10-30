import React, { useEffect, useState } from "react";
import "./News.css";
import { fetchNews } from "../../api/newsApi";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews();
      setNewsData(news);
    };

    getNews();
  }, []);

  return (
    <section className="news-section">
      <h2 className="news-header">
        {"Latest Stock News".split("").map((letter, index) => (
          <span key={index} className="animated-letter" style={{ animationDelay: `${index * 0.08}s` }}>
            {letter}
          </span>
        ))}
      </h2>

      <div className="news-cards">
        {newsData.map((news, index) => (
          <div key={index} className="news-card">
            <div className="news-title">
              {news.title}
              <span className="news-symbol">{news.symbol}</span>
            </div>
            <p className="news-description">{news.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
