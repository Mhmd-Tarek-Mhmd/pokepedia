import React from "react";
import clsx from "clsx";
import { SearchIcon, XIcon, ChevronDownIcon } from "./Icons";

const AutocompleteInput = ({ options, onSelect, isDestroy, isSelect, className, ...props }) => {
  const menuId = React.useId();
  const inputRef = React.useRef(null);
  const [inputValue, setInputValue] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [focusedIndex, setFocusedIndex] = React.useState(-1);
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  // Constants
  const placeholder = props?.placeholder || (isSelect ? "Select an option" : "Start typing to search...");

  // Filter options based on input value
  const filteredOptions = options.filter(option =>
    isSelect && (selectedOption ? true : !inputValue) ? option : option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSelectedOption(null);
    setShowSuggestions(value.length > 0);
    setFocusedIndex(-1);
  };

  const handleOptionSelect = (option) => {
    inputRef.current?.blur();

    if (option.label === selectedOption?.label) return;
    onSelect(option.value);
    setSelectedOption(option);
    setInputValue(option.label);
  };

  const handleClear = () => {
    setInputValue("");
    inputRef.current?.blur();

    if (!selectedOption) return;
    setSelectedOption(null);
    onSelect?.(null);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex(prev =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex(prev =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          handleOptionSelect(filteredOptions[focusedIndex]);
        }
        break;
      case 'Tab':
      case "Escape":
        inputRef.current?.blur();
        break
    }
  };

  const handleFocus = () => {
    if (isSelect || inputValue.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
    setShowSuggestions(false);
  };

  React.useEffect(() => {
    document.addEventListener("scroll", handleBlur);
    return () => {
      document.removeEventListener("scroll", handleBlur)
    };
  }, []);

  return (
    <div
      role="combobox"
      aria-haspopup="menu"
      aria-controls={"menu-" + menuId}
      aria-expanded={Boolean(showSuggestions)}
      aria-label={placeholder}
      className={clsx(
        props?.className,
        "relative w-full h-full flex justify-between items-center gap-3 p-3 border-surface rounded-lg has-focus:border has-focus:border-slate-400"
      )}
    >
      {props?.icon || <SearchIcon />}

      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        placeholder={placeholder}
        aria-label={placeholder}
        disabled={props?.isDisabled || (isSelect ? false : Boolean(selectedOption))}
        className="absolute w-full h-full border-none outline-none ps-10 placeholder:text-gray-400 capitalize placeholder:normal-case"
      />

      {inputValue && (
        <button
          onClick={handleClear}
          className="flex items-center ms-auto hover:text-slate-500 dark:hover:text-white text-slate-400 transition-colors cursor-pointer z-40"
        >
          <XIcon />
        </button>
      )}

      {isSelect && (
        <ChevronDownIcon
          className={`transition-transform duration-200 ${
            showSuggestions ? 'rotate-180' : ''
          }`}
        />
      )}

      {/* Suggestions Menu */}
      {showSuggestions ? (
        <ul
          tabIndex="-1"
          role="listbox"
          id={"menu-" + menuId}
          className="absolute overflow-auto custom-scrollbar w-full max-h-[300px] left-0 top-14 z-50 bg-white dark:bg-slate-800 border border-inherit rounded-lg shadow-2xl">
          {filteredOptions.length > 0 ? filteredOptions.map((option, index) => (
            <li
              role="option"
              key={option.label}
              aria-selected={selectedOption === option.id}
              onMouseEnter={() => setFocusedIndex(index)}
              onMouseDown={() => handleOptionSelect(option)}
              className={clsx("flex items-center space-x-3 px-4 py-3 cursor-pointer transition-all duration-150 hover:bg-slate-100 dark:hover:bg-slate-600", {"bg-slate-600": focusedIndex === index})}
            >
              {option?.icon ? (
                <span aria-hidden="true" className="relative flex size-16 shrink-0 overflow-hidden rounded-full">
                  <img className="aspect-square size-full" alt="" src={option.icon}/>
                </span>
              ) : null}
              <span className="capitalize text-xl">{option.label}</span>
            </li>
          )) : null}

          {!filteredOptions.length && inputValue ? (
            <li className="px-4 py-6 text-center text-slate-400">
              <SearchIcon className="w-8 h-8 mx-auto mb-2 opacity-50"/>
              No options found matching
              <span className="block font-medium text-slate-300">"{inputValue}"</span>
            </li>
          ) : null}
        </ul>
      ): null}
    </div>
  );
};

export default AutocompleteInput;
