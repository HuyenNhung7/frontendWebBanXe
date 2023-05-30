import styles from "./News.module.css";
import Card from "./components/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Stack, Pagination } from "@mui/material";
import NewsSidebar from "./components/NewsSidebar";
import axios from "axios";

function News() {
  const [dataLength, setDataLength] = useState();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (e, p) => {
    setCurrentPage(p);
  };
  const trimContent = (content) => {
    if (content.length > 250) {
      return content.substring(0, 250) + "...";
    }
    return content;
  };
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/news?page=${currentPage}&size=6`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <h1>Tin tức</h1>
      <div className={styles.newsSection}>
        <section className={styles.section}>
          <div>
            {data.map((news) => {
              return (
                <Link
                  to={`/readnews/${news.id}`}
                  key={news.id}
                  className={styles.link}
                >
                  <Card
                    image={news.image}
                    title={news.title}
                    date={formatDate(news.date)}
                    description={trimContent(news.content)}
                  />
                </Link>
              );
            })}
          </div>
          <div className={styles.pagination}>
            <Stack spacing={2}>
              <Pagination
                size="large"
                color="primary"
                count={Math.ceil(100 / 5)}
                showFirstButton
                showLastButton
                sx={{ margin: "32px 0 56px" }}
                onChange={handlePageChange}
              />
            </Stack>
          </div>
        </section>
        <div class={styles.divider}></div>
        <NewsSidebar />
      </div>
    </div>
  );
}

export default News;
