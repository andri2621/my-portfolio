'use client';

import clsx from 'clsx';
import { useState } from 'react';

const DataTab = [
  {
    name: 'About',
    value: 'about',
    content: {
      title: 'Title 1',
      desc: 'lorem ipsum dolor sit amet',
    },
  },
  {
    name: 'Education',
    value: 'education',
    content: {
      title: 'Title 2',
      desc: 'lorem ipsum dolor sit amet',
    },
  },
  {
    name: 'Skills',
    value: 'skills',
    content: {
      title: 'Title 3',
      desc: 'lorem ipsum dolor sit amet',
    },
  },
  {
    name: 'Experience',
    value: 'experience',
    content: {
      title: 'Title 4',
      desc: 'lorem ipsum dolor sit amet',
    },
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');
  return (
    <section id='about' className='min-h-screen pt-24'>
      <div className='layout'>
        <div className='flex h-screen flex-wrap  justify-center'>
          {/* LEFT CONTENT */}
          <div className='hidden w-full self-center px-4 md:block md:w-1/3'>
            <div>LEFT</div>
          </div>

          {/* RIGHT CONTENT */}
          <div className=' w-full self-start px-4 md:w-2/3'>
            <div className='flex flex-col justify-center gap-8'>
              <div className='flex flex-row justify-center md:justify-start'>
                {DataTab.map((tab, i) => (
                  <div
                    key={i}
                    tabIndex={0}
                    onClick={() => setActiveTab(tab.value)}
                  >
                    <div
                      className={clsx(
                        tab.value === activeTab && 'tab-active',
                        'tab tab-lifted text-xs'
                      )}
                    >
                      {tab.name}
                    </div>
                  </div>
                ))}
              </div>
              {DataTab.map((tab, i) => {
                if (tab.value === activeTab) {
                  return (
                    <div className='' key={i}>
                      <div>{tab.content.title}</div>
                      <p>{tab.content.desc}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
