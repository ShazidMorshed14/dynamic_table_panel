import "../../commons/common_styles.scss";

const Pagination = ({ page, total, limit, setPage }) => {
  const totalPages = Math.ceil(total / limit);

  const onClick = (newPage) => {
    setPage(newPage + 1);
  };

  return (
    <div className="pagination_wrapper">
      <div className="container">
        {totalPages > 0 &&
          [...Array(totalPages)].map((val, index) => (
            <button
              onClick={() => onClick(index)}
              className={page === index + 1 ? `page_btn active` : `page_btn`}
              key={index}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Pagination;
