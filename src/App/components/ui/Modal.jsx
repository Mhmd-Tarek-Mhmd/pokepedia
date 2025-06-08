import { useEffect, useRef } from 'react';

import { XIcon } from "./Icons";

export default function Modal({ isOpen, onClose, children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      ref.current.focus();
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 w-screen h-screen bg-gray-50 dark:bg-gray-950 backdrop:hidden"
      {...props}
    >
      <div className='w-full h-full overflow-y-auto'>
        <header className="py-4 sticky top-0 z-10 p-4 bg-white dark:bg-gray-800 shadow-sm">
          <button
            ref={ref}
            type="button"
            onClick={handleClose}
            aria-label="Close Modal"
            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus-visible:bg-gray-50 focus-visible:text-gray-600 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300 dark:focus-visible:bg-gray-900 dark:focus-visible:text-gray-300"
          >
            <XIcon />
          </button>
        </header>

        {children}
      </div>
    </div>
  );
}
