import React from 'react';

const Highlights = ({ articles }) => {
  return (
    <div className="highlights">
      <h2>Highlights</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url}>{article.title}</a>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Highlights;
