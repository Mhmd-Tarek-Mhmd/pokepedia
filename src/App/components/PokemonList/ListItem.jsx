const ListItem = ({ name, value, children, ...props }) => (
  <li {...props}>
    {name && (
      <strong className="text-gray-500 dark:text-gray-400">{name}</strong>
    )}

    {children
      ? children
      : value && (
          <span className="text-[#222] dark:text-white font-medium capitalize">
            {value}
          </span>
        )}
  </li>
);

export default ListItem;
