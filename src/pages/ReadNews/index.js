import styles from "./ReadNews.module.css";
import "./ReadNews.css"
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { useLayoutEffect } from "react";
import NewsSidebar from "../News/components/NewsSidebar";
import { getNewsById, formatDate } from "../../Apis2/HandleApiNews";

// scroll to top when navigate
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function ReadNews() {
  const [news, setNews] = useState(null);
  const { id } = useParams();

// create an axios instance with the base url
getNewsById(id).then(res => {
  setNews(res.data);	
}).catch(err => {
console.log(err);	
});
  return (
    <Wrapper>
      <div className={styles.container}>
        <div className={styles.newsSection}>
          <section className={styles.section}>
            {news &&
              <div>
                <h3 className={styles.title}>{news.title}</h3>
                <p className={styles.date}>{formatDate(news.date)}</p>
		    <img src={news.image} className={styles.detail} alt={news.title} />
                <p className={styles.news}>{news.content}</p>
                <p className={styles.news}>{news.content}</p>
                <p className={styles.news}>{news.content}</p>
                <p className={styles.news}>{news.content}</p>
		    <img src={news.image} className={styles.detail} alt={news.title} />
                <p className={styles.news}>{news.content}</p>
                <p className={styles.news}>{news.content}</p>
                <p className={styles.news}>{news.content}</p>
                <p className={styles.news}>{news.content}</p>
              </div>
            }
          </section>
          <div className={styles.divider}></div>
          <NewsSidebar />
        </div>
      </div>
    </Wrapper>
  );
}

export default ReadNews;
