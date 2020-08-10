import React from "react";
import "./Statistics.css";
import getRandomColor from "../../helper/getRandomColor";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statsSection">
      {title && <h2 className="title">{title}</h2>}

      <ul className="statList">
        {stats.map((stat) => (
          <li
            className="stat__item"
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="stat__label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: null,
};

export default Statistics;
