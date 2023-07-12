function PaginationButton({ children, isCurrentPage, isDisabled, ...props }) {
  return (
    <li>
      <button
        type="button"
        disabled={Boolean(isDisabled)}
        aria-current={isCurrentPage || undefined}
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
}

export default PaginationButton;
