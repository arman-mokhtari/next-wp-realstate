const Pagination = ({ totalPages, onPageClick }) => {
  return (
    <div className="max-w-5xl mx-auto mb-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, i) => (
        <div
          onClick={() => {
            onPageClick(i + 1);
          }}
          className="btn"
          key={i}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
