import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function ComplexPaginationContainer() {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  function handlePageChange(pageNumber) {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  }
  function addPageButton({ pageNumber, activeClass }) {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn join-item btn-xs border-none sm:btn-md ${
          activeClass ? "border-base-300 bg-base-300" : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  }
  function renderPageButtons() {
    const pageButtons = [];
    // First Button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    // Dots
    if (page > 2) {
      pageButtons.push(
        <button className="btn join-item btn-xs sm:btn-md" key="dots-1">
          ...
        </button>,
      );
    }
    // Active/Current Page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }
    // Dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="btn join-item btn-xs sm:btn-md" key="dots-2">
          ...
        </button>,
      );
    }
    // Last Button
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount }),
    );

    return pageButtons;
  }

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-center">
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
        {renderPageButtons()}
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

export default ComplexPaginationContainer;
