import { LucideConstruction } from 'lucide-react';

import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

import { footerLink, socialLink } from '@/constant/config';

export default function Footer() {
  return (
    <>
      <hr className='border-base-300 ' />
      <div className='layout'>
        <footer className='footer footer-center text-base-content py-6'>
          <nav className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
            {footerLink.map((item) => {
              if (item.underConstruction) {
                return (
                  <div
                    key={item.name}
                    className='flex cursor-not-allowed gap-2'
                  >
                    {item.label}
                    <LucideConstruction size={16} />
                  </div>
                );
              } else {
                return (
                  <CustomLink href={item.link} key={item.name}>
                    {item.label}
                  </CustomLink>
                );
              }
            })}
          </nav>
          <nav>
            <p className='font-bold'>Reach me out!</p>
            <div className='grid grid-flow-col gap-4'>
              {socialLink.map((social, idx) => {
                let variant = 'center';

                if (idx === 0) {
                  variant = 'right';
                } else if (idx === socialLink.length - 1) {
                  variant = 'left';
                }

                return (
                  <UnstyledLink href={social.link} key={social.name}>
                    <Tooltip text={social.tooltip} variant={variant}>
                      <div className='hover:text-primary flex items-center gap-2 font-semibold'>
                        <social.icon size={18} />
                        <span>{social.label}</span>
                      </div>
                    </Tooltip>
                  </UnstyledLink>
                );
              })}
            </div>
          </nav>

          <aside className='flex w-full flex-col items-center justify-between gap-4'>
            <div>© {new Date().getFullYear()} - Andi Setiawan</div>
          </aside>
        </footer>
      </div>
    </>
  );
}
