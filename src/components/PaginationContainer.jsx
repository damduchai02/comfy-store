import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function PaginationContainer() {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  function handlePageChange(pageNumber) {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  }

  if (pageCount < 2) return null;

  return (
    <div className="mt-12 flex justify-center">
      <div className="join">
        <button
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
          className="btn join-item btn-xs uppercase sm:btn-md"
        >
          Prev
        </button>
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`btn join-item btn-xs sm:btn-md ${
              pageNumber === page ? "border-base-300 bg-base-300" : ""
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
          className="btn join-item btn-xs uppercase sm:btn-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationContainer;
