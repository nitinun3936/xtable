import React, { useState } from 'react';
import './App.css';

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
];

function App() {
  const [tableData, setTableData] = useState(data);

  const sortByDate = () => {
    const sortedData = [...tableData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      if (a.views > b.views) return -1;
      if (a.views < b.views) return 1;
      return 0;
    });
    setTableData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...tableData].sort((a, b) => {
      if (a.views > b.views) return -1;
      if (a.views < b.views) return 1;
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });
    setTableData(sortedData);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
