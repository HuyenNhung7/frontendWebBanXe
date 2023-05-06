import styles from "./ReadNews.module.css";
import "./ReadNews.css"
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import NewsSidebar from "../News/components/NewsSidebar";
import { getNewsById } from "../../Apis2/HandleApiNews";

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

  useEffect(() => {
    // fetch the news from the API
    fetch("http://localhost:8080/api/v1/news/1")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error(error));
  }, []);

  // useEffect(() => {
  //   getNewsById(id).then(res => setNews(res))
  // }, [id]);

  return (
    <Wrapper>
      <div className={styles.container}>
        <div className={styles.newsSection}>
          <section className={styles.section}>
            {news &&
              <div>
                <h3 className={styles.title}>{news.title}</h3>
                <p className={styles.date}>{news.date}</p>
		    <img className={styles.image} src={news.image} alt={news.title} />
                <div className={styles.detail}>{news.content}</div>
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
