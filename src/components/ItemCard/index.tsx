import React from "react";
import { Card, Spin } from "antd";
import { useSelector } from "react-redux";
import { Article, RootState } from "../../types";
import { convertDateFormat } from "../../helper";
import "./style.scss";

const ItemCard: React.FC = () => {
  const articles = useSelector((state: RootState) => state.articles);
  return (
    <Spin
      tip="Loading"
      size="large"
      className="news_spinning"
      spinning={articles?.loading}
    >
      <div className="news-list">
        {articles?.data?.map((article: Article) => (
          <Card
            key={article._id} // Assigning a unique key
            hoverable
            title={article.headline.main}
            extra={
              <a
                href={article.web_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            }
            style={{ width: "100%" }}
          >
            <div className="content">
              <div className="byline">{article.byline.original}</div>
              <div className="date">{convertDateFormat(article.pub_date)}</div>
              <p className="lead_paragraph">{article.lead_paragraph}</p>
            </div>
          </Card>
        ))}
      </div>
    </Spin>
  );
};

export default ItemCard;
