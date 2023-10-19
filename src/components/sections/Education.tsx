import React from 'react';

import TimeLine from '@/components/TimeLine';

const Education = () => {
  const contentData = [
    {
      title: 'Bootcamp Fullstack NodeJS',
      at: 'CodeID',
      date: 'Februari - April 2021',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam dolores sed ullam ab sint voluptatem iste iure qui labore temporibus molestiae molestias quisquam atque obcaecati tempore, accusamus cupiditate quia.',
      link: 'https://www.code.id/',
    },
    {
      title: 'Bachelor of Informatics Engineering',
      at: 'Universitas Komputer Indonesia',
      date: 'October 2015 - October 2020',
      gpa: '3.22 / 4',
    },
  ];

  return (
    <div>
      <TimeLine data={contentData} />
    </div>
  );
};

export default Education;
