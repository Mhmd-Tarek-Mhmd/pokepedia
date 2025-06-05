import clsx from "clsx";

function PaginationButton({ children, isCurrentPage, isDisabled, ...props }) {
  return (
    <li>
      <button
        type="button"
        disabled={isDisabled}
        aria-current={isCurrentPage || undefined}
        className={clsx(
          { "opacity-60 cursor-no-drop": isDisabled },
          { "bg-gray-600 text-white": isCurrentPage },
          "w-7 h-7 sm:w-8 sm:h-8 grid place-items-center rounded-[50%] text-black dark:text-white",
          { "hover:bg-gray-600 focus-visible:bg-gray-600 hover:text-white focus-visible:text-white hover:cursor-pointer": !isDisabled },
        )}
        {...props}
      >
        {children}
      </button>
    </li>
  );
}

export default PaginationButton;
