import SvgIcon from "./SvgIcon";

const getPageRange = (totalPageCount, currentPage, siblingCount = 1) => {
  const DOTS = "dots";
  const totalPageNumbers = siblingCount + 5;
  const noDotsSideCount = 3 + 2 * siblingCount;
  const getRange = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPageCount
  );
  const isShowLeftDots = leftSiblingIndex > 2;
  const isShowRightDots = rightSiblingIndex < totalPageCount - 2;

  // Case 1: If the number of pages is less than the page numbers we want to show
  if (totalPageNumbers >= totalPageCount) return getRange(1, totalPageCount);

  // Case 2: No left dots to show, but rights dots to be shown
  if (!isShowLeftDots && isShowRightDots) {
    let leftRange = getRange(1, noDotsSideCount);
    return [...leftRange, DOTS, totalPageCount];
  }

  // Case 3: No right dots to show, but left dots to be shown
  if (isShowLeftDots && !isShowRightDots) {
    let rightRange = getRange(
      totalPageCount - noDotsSideCount + 1,
      totalPageCount
    );
    return [1, DOTS, ...rightRange];
  }

  // Case 4: Both left and right dots to be shown
  if (isShowLeftDots && isShowRightDots) {
    let middleRange = getRange(leftSiblingIndex, rightSiblingIndex);
    return [1, DOTS, ...middleRange, DOTS, totalPageCount];
  }
};

function Pagination({ paginationData, page, setPage }) {
  const pageRange = getPageRange(paginationData.lastPage, page);

  return (
    <nav>
      <ul className="py-10 pb-6 flex justify-center gap-x-1">
        <Item
          aria-label="Go to previous page"
          isDisabled={paginationData.page === 1}
          onClick={() => page !== 1 && setPage(page - 1)}
        >
          <SvgIcon width="24" height="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </SvgIcon>
        </Item>

        {pageRange.map((n, i) =>
          n === "dots" ? (
            <li
              key={`dot${i}`}
              aria-hidden="true"
              className="text-black dark:text-white cursor-default"
            >
              &#8230;
            </li>
          ) : (
            <Item
              key={n}
              isCurrentPage={paginationData.page === n}
              onClick={(e) => setPage(+e.target.innerHTML)}
              aria-label={
                paginationData.page === n ? `page ${n}` : `Go to page ${n}`
              }
            >
              {n}
            </Item>
          )
        )}

        <Item
          aria-label="Go to next page"
          isDisabled={paginationData.page === paginationData.lastPage}
          onClick={() => !paginationData.lastPage && setPage(page + 1)}
        >
          <SvgIcon width="24" height="24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </SvgIcon>
        </Item>
      </ul>
    </nav>
  );
}

export default Pagination;

const Item = ({ children, isCurrentPage, isDisabled, ...props }) => (
  <li>
    <button
      type="button"
      disabled={Boolean(isDisabled)}
      aria-current={isCurrentPage && isCurrentPage}
      className={`w-7 h-7 sm:w-8 sm:h-8 grid place-items-center rounded-[50%] text-black dark:text-white ${
        isDisabled ? "opacity-60" : ""
      } ${
        !isDisabled
          ? "hover:bg-black hover:dark:bg-white hover:bg-opacity-20 hover:dark:bg-opacity-20 focus-visible:bg-black focus-visible:dark:bg-white focus-visible:bg-opacity-20 focus-visible:dark:bg-opacity-20"
          : ""
      } ${
        isCurrentPage && !isDisabled
          ? "bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20"
          : ""
      }`}
      {...props}
    >
      {children}
    </button>
  </li>
);
