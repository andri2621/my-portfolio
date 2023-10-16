const PortfolioSection = () => {
  return (
    <section
      id='portfolio'
      className='flex min-h-screen items-center justify-center'
    >
      <div className='flex flex-col items-center gap-4'>
        <div className='bg-primary h-5'>Button Primary</div>
        <div className='bg-secondary h-5'>Button secondary</div>
        <div className='bg-accent h-5'>Button accent</div>
        <div className='bg-neutral text-color-white h-5'>Button neutral</div>
        <div className='bg-info h-5'>Button info</div>
        <div className='bg-success h-5'>Button success</div>
        <div className='bg-warning h-5'>Button warning</div>
        <div className='bg-error h-5'>Button error</div>
      </div>
    </section>
  );
};

export default PortfolioSection;
