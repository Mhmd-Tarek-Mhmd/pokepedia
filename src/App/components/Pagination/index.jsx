import { getPageRange } from "../../helpers";

import SvgIcon from "../SvgIcon";
import PaginationButton from "./PaginationButton";

function Pagination({ paginationData, page, setPage }) {
  const pageRange = getPageRange(paginationData.lastPage, page);

  return (
    <nav aria-label="pagination">
      <ul className="py-10 pb-6 flex justify-center gap-x-1">
        <PaginationButton
          aria-label="Go to previous page"
          isDisabled={paginationData.page === 1}
          onClick={() => page !== 1 && setPage(page - 1)}
        >
          <SvgIcon width="24" height="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </SvgIcon>
        </PaginationButton>

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
            <PaginationButton
              key={n}
              isCurrentPage={paginationData.page === n}
              onClick={(e) => setPage(+e.target.innerHTML)}
              aria-label={
                paginationData.page === n ? `page ${n}` : `Go to page ${n}`
              }
            >
              {n}
            </PaginationButton>
          )
        )}

        <PaginationButton
          aria-label="Go to next page"
          isDisabled={paginationData.page === paginationData.lastPage}
          onClick={() => !paginationData.lastPage && setPage(page + 1)}
        >
          <SvgIcon width="24" height="24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </SvgIcon>
        </PaginationButton>
      </ul>
    </nav>
  );
}

export default Pagination;
