'use client';

import clsx from 'clsx';
import { useState } from 'react';

const DataTab = [
  {
    name: 'About',
    value: 'about',
  },
  {
    name: 'Education',
    value: 'education',
  },
  {
    name: 'Skills',
    value: 'skills',
  },
  {
    name: 'Experience',
    value: 'experience',
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');
  return (
    <section
      id='about'
      className=' flex min-h-screen items-center justify-center'
    >
      <div className='layout'>
        <div className='flex flex-wrap items-center justify-center'>
          {/* LEFT CONTENT */}
          <div className='w-full self-center px-4 md:w-1/3'>
            <div>LEFT</div>
          </div>

          {/* RIGHT CONTENT */}
          <div className='flex h-screen w-full justify-center self-center  px-4 md:w-2/3'>
            <div className='flex flex-col justify-center'>
              <div className='flex flex-row'>
                {DataTab.map((tab, i) => (
                  <div
                    key={i}
                    tabIndex={0}
                    onClick={() => setActiveTab(tab.value)}
                  >
                    <div
                      className={clsx(
                        tab.value === activeTab && 'tab-active !bg-primary',
                        'tab tab-lifted'
                      )}
                    >
                      {tab.name}
                    </div>
                  </div>
                ))}
              </div>

              <div className=''>
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
