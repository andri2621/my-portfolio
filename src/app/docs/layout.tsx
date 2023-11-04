import Link from 'next/link';

import { DocsSidebarNav } from '@/app/docs/DocsSidebarNav';
import MainNav from '@/app/docs/MainNav';
import { siteConfig } from '@/constant/config';
import { docsConfig } from '@/constant/docs';
import { Icons } from '@/constant/IconsData';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col py-24'>
      <header className='bg-background sticky top-0 z-40 w-full border-b'>
        <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
          <MainNav>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </MainNav>
          <div className='flex flex-1 items-center space-x-4 sm:justify-end'>
            <nav className='flex space-x-4'>
              <Link
                href={siteConfig.socialLink.github.link}
                target='_blank'
                rel='noreferrer'
              >
                <Icons.github className='h-7 w-7' />
                <span className='sr-only'>GitHub</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className='container flex-1'>{children}</div>
    </div>
  );
}
