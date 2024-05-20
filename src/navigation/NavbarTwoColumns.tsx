import Link from 'next/link';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Check if the menu button is visible
      if (
        menuButtonRef.current &&
        window.getComputedStyle(menuButtonRef.current).display !== 'none'
      ) {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      } else {
        document.body.style.overflow = '';
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <div className="z-80 flex w-full items-center justify-between py-4">
      <Link href="/" className="w-28">
        {props.logo}
      </Link>
      <div className="hidden items-center gap-5 whitespace-nowrap font-medium text-gray-800 md:flex">
        {props.children}
      </div>
      {/* mobile behavior */}
      <div ref={menuButtonRef} className="absolute right-8 top-8 md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="block size-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block size-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${isOpen ? 'z-4 fixed inset-0 top-24 bg-gray-800 bg-opacity-75' : 'hidden'} md:hidden`}
      />
      <div
        className={`${isOpen ? 'fixed inset-x-0 top-24 z-10 flex items-center justify-center' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="flex size-full flex-col items-start space-y-4 rounded-b-lg bg-white px-6 py-4">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export { NavbarTwoColumns };
