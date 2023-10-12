'use client';

import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import Setting from '@/components/Settings';

import { NavigationData } from '@/constant/NavigationData';

function NavList() {
  return (
    <ul className='my-2 hidden flex-row gap-2 md:flex lg:mb-0 lg:mt-0 lg:items-center lg:gap-6'>
      {NavigationData.map((nav) => {
        return (
          <li className='p-1 ' key={nav.id}>
            <a
              href={nav.link}
              className='text-neutral hover:text-primary dark:hover:text-primary flex items-center font-normal transition-colors dark:text-white'
            >
              {nav.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

const NavbarTop = () => {
  return (
    <nav className='navbar-fixed absolute left-0 right-0 top-0 z-10 flex w-full items-center'>
      <div className='container'>
        <div className='relative flex items-center justify-between py-4'>
          {/* LOGO */}
          <div className='px-4'>
            <Link
              href='/#home'
              className='text-primary block text-lg font-bold '
            >
              <FontAwesomeIcon icon={faCloudRain} size='2xl' />
              <span className='text-primary ml-2'>awandri</span>
            </Link>
          </div>
          {/* NAVIGATION */}
          <div className='flex items-center gap-4 px-4'>
            <NavList />
            <Setting />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
