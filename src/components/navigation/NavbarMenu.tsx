import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { TypographyH6 } from '@/components/Text';

import { platformMenuItems } from './menuItems';

export const NavbarMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlatformMenuOpen, setPlatformMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => {
    if (!isMobile) {
      setIsOpen(!isOpen);
    } else {
      setPlatformMenuOpen(!isPlatformMenuOpen);
    }
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setPlatformMenuOpen(false);
    router.push(href);
  };

  return (
    <Menu as="div" className="relative">
      <MenuButton
        onClick={toggleDropdown}
        className="flex items-center gap-1 rounded-md px-2 py-1 focus:outline-none data-[active]:bg-gray-300 data-[hover]:bg-gray-200"
      >
        <TypographyH6 text="Platform" />
        <CaretDownIcon
          className={`${isOpen || isPlatformMenuOpen ? 'rotate-180' : ''}`}
        />
      </MenuButton>
      {!isMobile && (
        <MenuItems className="absolute z-10 mt-2 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg md:-left-7 md:w-[40rem] md:transform-none">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {platformMenuItems.map((item) => (
              <MenuItem as="div" key={item.href}>
                {({ active, focus }) => (
                  <div
                    onClick={() => handleLinkClick(item.href)}
                    className={`flex cursor-pointer flex-col p-3 ${
                      focus ? 'rounded-md bg-gray-100' : ''
                    } ${active ? 'bg-gray-200' : ''}`}
                  >
                    <TypographyH6
                      text={item.title}
                      className="mb-1 font-medium"
                    />
                    <p className="hidden text-wrap text-sm leading-tight text-gray-600 md:block">
                      {item.description}
                    </p>
                  </div>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      )}
      {isMobile && isPlatformMenuOpen && (
        <div className="mt-2 flex flex-col">
          {platformMenuItems.map((item) => (
            <MenuItem as="div" key={item.href}>
              {({ active, focus }) => (
                <div
                  onClick={() => handleLinkClick(item.href)}
                  className={`flex cursor-pointer flex-col p-3 ${
                    focus ? 'rounded-md bg-gray-100' : ''
                  } ${active ? 'bg-gray-200' : ''}`}
                >
                  <TypographyH6
                    text={item.title}
                    className="mb-1 font-medium"
                  />
                  <p className="text-wrap text-sm leading-tight text-gray-600">
                    {item.description}
                  </p>
                </div>
              )}
            </MenuItem>
          ))}
        </div>
      )}
    </Menu>
  );
};

export default NavbarMenu;
