import React, { useState, useEffect } from "react";
import styles from "./NewsSidebar.module.css";
import SmallerCard from "../SmallerCard";
import { Link } from "react-router-dom";
import { getNews } from "../../../../Apis2/HandleApiNews";

export default function NewsSidebar() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getNews(8).then((res) => {
      setAllData(res.data);
    }).catch((err) => {
	console.log(err);	    
    });
  }, []);
  return (
    <aside className={styles.aside}>
      <h3>Tin nổi bật</h3>
      {allData?.slice(0, 5).map((news) => {
        return (
          <Link
            to={`/readnews/${news.id}`}
            key={news.id}
            className={styles.link}
          >
            <SmallerCard image={news.image} title={news.title} />
          </Link>
        );
      })}
    </aside>
  );
}
