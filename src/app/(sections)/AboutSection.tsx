'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { textVariant } from '@/lib/motion';

import TabButton from '@/components/buttons/TabButton';

import Education from '@/app/(sections)/Education';
import { SectionWrapper } from '@/hoc-motion';

const DataTab = [
  {
    name: 'Skills',
    value: 'skills',
    content: {
      title: 'Title 3',
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
    name: 'Experience',
    value: 'experience',
    content: {
      title: 'Title 4',
      desc: 'lorem ipsum dolor sit amet',
    },
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTab = (value: string) => {
    setActiveTab(value);
  };

  return (
    // <section id='about' className='min-h-screen py-24'>
    <div className='flex flex-wrap  justify-center'>
      {/* <div className=' w-full self-start md:w-2/3'> */}
      <div className='w-full self-start md:w-4/5 lg:w-2/3'>
        <div className='flex flex-col justify-center gap-20'>
          <div className='flex flex-row justify-center'>
            {DataTab.map((tab, i) => (
              <motion.div key={i} variants={textVariant(0)}>
                <TabButton
                  active={activeTab === tab.value}
                  selectTab={() => handleTab(tab.value)}
                >
                  {tab.name}
                </TabButton>
              </motion.div>
            ))}
          </div>
          {activeTab === 'education' && <Education />}
        </div>
      </div>
    </div>
    // </section>
  );
};

export default SectionWrapper(AboutSection, 'about', 'layout');
