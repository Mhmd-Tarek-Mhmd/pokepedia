import clsx from "clsx";

export const SvgIcon = ({ children, className, size, ...props }) => (
  <svg
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(size, className)}
    {...props}
  >
    {children}
  </svg>
)

export const SunIcon = (props) => (
  <SvgIcon size="size-6" {...props}>
    <path
      d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
    />
  </SvgIcon>
);

export const MoonIcon = (props) => (
  <SvgIcon size="size-6" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
    />
  </SvgIcon>
);

export const XIcon = (props) => (
  <SvgIcon size="size-5" fill="none" stroke="currentColor" {...props}>
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </SvgIcon>
);

export const SearchIcon = (props) => (
  <SvgIcon fill="none" strokeWidth={1.5} stroke="currentColor" size="size-6" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </SvgIcon>
);

export const ChevronDownIcon = (props) => (
  <SvgIcon
    fill="none"
    size="size-6"
    strokeWidth={2}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </SvgIcon>
);

export const HeartIcon = (props) => (
  <SvgIcon
    fill="none"
    size="size-5"
    strokeWidth={2}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
    />
  </SvgIcon>
);

export const FilledHeartIcon = (props) => (
  <SvgIcon
    fill="none"
    size="size-5"
    strokeWidth={2}
    stroke="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      fill="red"
      d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
    />
  </SvgIcon>
);

export const ArrowLeftIcon = (props) => (
  <SvgIcon
    fill="none"
    size="size-6"
    strokeWidth={2}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </SvgIcon>
);
