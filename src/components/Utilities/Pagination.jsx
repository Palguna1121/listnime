import React from "react";

const Pagination = ({ page, last, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    if (page < last) {
      setPage((prevState) => prevState + 1);
      scrollTop();
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      scrollTop();
    }
  };

  return (
    <div className="flex justify-center items-center py-3 px-3">
      <div className="join">
        <button onClick={handlePrevPage} className="join-item btn" disabled={page === 1}>
          «
        </button>
        <button className="join-item btn">
          {page} of {last}
        </button>
        <button onClick={handleNextPage} className="join-item btn" disabled={page === last}>
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
