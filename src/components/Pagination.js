import React, { useState, useEffect } from "react";

function Pagination({ showPerPage, onPaginationChange, total }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const end = showPerPage * count;
    const start = end - showPerPage;
    onPaginationChange(start, end);
  }, [count]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (count === 1) {
        setCount(count - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === count) {
        setCount(count);
      } else {
        setCount(count + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <button
        className="btn btn-primary"
        onClick={() => {
          onButtonClick("prev");
        }}
      >
        Previous
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          onButtonClick("next");
        }}
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;
