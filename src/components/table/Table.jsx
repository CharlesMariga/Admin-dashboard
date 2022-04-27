import React, { useState } from "react";

import "./table.css";

const Table = ({ headData, renderHead, bodyData, renderBody, limit }) => {
  const initDatasShow = limit ? bodyData.slice(0, limit) : bodyData;
  const [dataShow, setDataShow] = useState(initDatasShow);
  const [currPage, setCurrPage] = useState(1);

  let pages = 0;

  if (limit !== undefined) {
    pages = Math.ceil(bodyData.length / limit);
  }

  const selectPage = (page) => {
    const start = limit * page;
    const end = start + limit;
    setCurrPage(page + 1);

    setDataShow(bodyData.slice(start, end));
  };

  return (
    <div>
      <div className="table-wrapper">
        <table>
          {headData && renderHead ? (
            <thead>
              <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
            </thead>
          ) : null}
          {bodyData && renderBody ? (
            <tbody>
              {dataShow.map((item, index) => renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
      {pages > 1 ? (
        <div className="table__pagination">
          {[...Array(pages).keys()].map((el, index) => (
            <div
              className={`table__pagination-item ${
                currPage === el + 1 ? "active" : ""
              }`}
              key={index}
              onClick={() => selectPage(el)}
            >
              {el + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Table;
