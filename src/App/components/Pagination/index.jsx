import { getPageRange } from "../../helpers";

import PaginationButton from "./PaginationButton";
import { ChevronLeftIcon, ChevronRightIcon } from '../ui/Icons'

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
          <ChevronLeftIcon />
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
          <ChevronRightIcon />
        </PaginationButton>
      </ul>
    </nav>
  );
}

export default Pagination;
