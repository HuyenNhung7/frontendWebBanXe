import React, { useState, useEffect } from "react";
import styles from "./NewsSidebar.module.css";
import SmallerCard from "../SmallerCard";
import { Link } from "react-router-dom";
import axios from "axios";

export default function NewsSidebar() {
  const [allData, setAllData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/news?page=8&size=5`
      );
      const jsonData = await response.json();
      setAllData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
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
