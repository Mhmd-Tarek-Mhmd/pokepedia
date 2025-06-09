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
      className="fixed inset-0 z-50 w-screen h-screen bg-body backdrop:hidden"
      {...props}
    >
      <div className='w-full h-full overflow-y-auto'>
        <header className="py-4 sticky top-0 z-10 p-4 bg-surface shadow-sm">
          <button
            ref={ref}
            type="button"
            className="icon-btn"
            onClick={handleClose}
            aria-label="Close Modal"
          >
            <XIcon />
          </button>
        </header>

        {children}
      </div>
    </div>
  );
}
