import React from 'react';

import TimeLine from '@/components/TimeLine';

const Experience = () => {
  const contentData = [
    {
      title: 'Frontend Developer',
      at: 'CodeID',
      date: 'April 2021 - Now',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam dolores sed ullam ab sint voluptatem iste iure qui labore temporibus molestiae molestias quisquam atque obcaecati tempore, accusamus cupiditate quia.',
      link: 'https://www.code.id/',
    },
  ];

  return <TimeLine data={contentData} />;
};

export default Experience;
