import styles from "./ReadNews.module.css";
import "./ReadNews.css"
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { useLayoutEffect } from "react";
import NewsSidebar from "../News/components/NewsSidebar";
// import { getNewsById } from "../../Apis2/HandleApiNews";
import axios from "axios";

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
const api = axios.create({
  baseURL: "http://localhost:8080/api/v1/"
});

  api.get(`news/${id}`) // this will fetch http://localhost:8080/api/v1/news/1 if the url is /news/1
    .then(response => {
	    setNews(response.data);
    })
    .catch(error => {
      // handle the error
	    console.log(error);
    });

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
