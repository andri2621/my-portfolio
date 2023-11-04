type ProjectsProps = {
  id: number;
  title: string;
  tags: string[];
  desc: string;
  link: string;
};

export const ProjectsData: ProjectsProps[] = [
  {
    id: 1,
    title: 'Shoes!',
    tags: ['react', 'nextjs', 'tailwind', 'redux', 'prisma'],
    link: 'shoes',
    desc: 'If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?',
  },
  {
    id: 2,
    title: 'testing',
    tags: ['angular', 'scss'],
    link: 'testing',
    desc: 'If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?',
  },
  {
    id: 3,
    title: 'waku waku',
    tags: ['nextjs', 'redux', 'scss'],
    link: 'waku-waku',
    desc: 'If a dog chews shoes whose shoes does he choose?',
  },
];
