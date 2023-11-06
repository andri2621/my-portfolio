import { getIcon } from '@/lib/utils';

import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

import { footerLink, socialLink } from '@/constant/config';
import { Icons } from '@/constant/IconsData';

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
                  <Tooltip
                    text='Under Construction'
                    variant='center'
                    key={item.name}
                  >
                    <div className='flex cursor-not-allowed items-center gap-1'>
                      <span>{item.label}</span>
                      <Icons.underConstruction size={16} />
                    </div>
                  </Tooltip>
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
            <div className='flex flex-wrap justify-center gap-x-4 gap-y-[2px]'>
              {socialLink.map((social, idx) => {
                let variant = 'center';

                if (idx === 0) {
                  variant = 'right';
                } else if (idx === socialLink.length - 1) {
                  variant = 'left';
                }

                const SocialIcon = getIcon(social.label.toLowerCase());

                return (
                  <UnstyledLink
                    href={social.link}
                    key={social.name}
                    arrow={false}
                  >
                    <Tooltip text={social.tooltip} variant={variant}>
                      <div className='hover:text-primary flex items-center gap-1 font-semibold'>
                        {SocialIcon && <SocialIcon className='h-6 w-6' />}
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
