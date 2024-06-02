import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const navigation = [
  { name: "HOME", href: "/", current: false },
  { name: "ABOUT US", href: "/about_us", current: false },
  { name: "VALUE CHAIN", href: "/value_chain", current: false },
  {
    name: "BLOCKCHAIN APPLICATION",
    href: "/blockchain_application",
    current: false
  },
  { name: "MEMBERSHIP", href: "/membership", current: false },
  { name: "NEWS & UPDATES", href: "/news_&_updates", current: false },
  { name: "FAQs", href: "/faqs", current: false },
  { name: "CONTACT US", href: "/contact_us", current: false }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [navItems, setNavItems] = useState(navigation);

  useEffect(() => {
    const path = window.location.pathname;
    const updatedNavItems = navItems.map(item => {
      return { ...item, current: item.href === path };
    });
    setNavItems(updatedNavItems);
  }, []);

  const handleNavButtonClick = (name: string) => {
    const updatedNavigation = navItems.map(item => {
      return { ...item, current: item.name === name };
    });
    setNavItems(updatedNavigation);
  };

  return (
    <Disclosure as="nav" className="bg-navbar">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 hover:bg-activeNav hover:text-white active:bg-activeNav focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex justify-center">
                    {navItems.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => handleNavButtonClick(item.name)}
                        className={classNames(
                          "h-16 flex items-center justify-center px-8",
                          item.current
                            ? "bg-activeNav text-white"
                            : "text-gray-300 hover:bg-activeNav hover:text-white",
                          "font-sans font-thin tracking-wide text-xs"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={() => handleNavButtonClick(item.name)}
                  className={classNames(
                    "h-16 flex items-center justify-center",
                    item.current
                      ? "bg-activeNav text-white"
                      : "text-gray-300 hover:bg-activeNav hover:text-white",
                    "rounded-md font-sans font-thin tracking-wide text-xs"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
