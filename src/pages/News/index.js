import styles from "./News.module.css";
import Card from "./components/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Stack, Pagination } from "@mui/material";
import NewsSidebar from "./components/NewsSidebar";
import { getNews, formatDate } from "../../Apis2/HandleApiNews";

function News() {
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
  getNews(currentPage).then((res) => {
    setData(res.data);
  });

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
        <div className={styles.divider}></div>
        <NewsSidebar />
      </div>
    </div>
  );
}

export default News;
