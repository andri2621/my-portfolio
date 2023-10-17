import Card from '@/components/card';

const PortfolioSection = () => {
  return (
    <section
      id='portfolio'
      className='hero min-h-screen place-items-start  pt-24 md:min-h-full md:place-items-center lg:min-h-screen xl:pt-0'
    >
      <div className='layout'>
        <div className='flex flex-col items-center'>
          <h4 className='text-primary'>Projects</h4>
          <h1 className='h0 text-white'>My Latest Works</h1>
          <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            <Card
              title='Shoes!'
              tags={['React', 'NextJS', 'angular', 'scss', 'redux', 'tailwind']}
              desc='If a dog chews shoes whose shoes does he choose? If a dog chews shoes
          whose shoes does he choose? If a dog chews shoes whose shoes does he
          choose?'
            />
            <Card
              title='My name is Andi Setiawan and im frontend developer!'
              tags={['React', 'NextJS']}
              desc='If a dog chews shoes whose shoes does he choose? If a dog chews shoes
              whose shoes does he choose? If a dog chews shoes whose shoes does he
              choose?'
            />
            <Card
              title='Shoes!'
              tags={['React', 'NextJS']}
              desc='If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
